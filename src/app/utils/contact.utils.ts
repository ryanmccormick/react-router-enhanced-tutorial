import localforage from 'localforage';
import { matchSorter } from 'match-sorter';
import sortBy from 'sort-by';

import { ContactItem } from '../types/contact-item.interface';

export async function getContacts(query?: any) {
  await fakeNetwork(`getContacts:${query}`);
  let contacts = await localforage.getItem<Array<ContactItem>>('contacts');
  if (!contacts) contacts = [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ['first', 'last'] });
  }
  return contacts.sort(sortBy('last', 'createdAt'));
}

export async function createContact() {
  await fakeNetwork(undefined);
  const id = Math.random().toString(36).substring(2, 9);
  const contact: Partial<ContactItem> = { id, createdAt: Date.now() };
  const contacts: Array<ContactItem> = await getContacts();
  // @ts-ignore
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id: string) {
  await fakeNetwork(`contact:${id}`);
  const contacts = await localforage.getItem<Array<ContactItem>>('contacts');
  const contact = (contacts ?? []).find((contact) => contact.id === id);
  return contact ?? null;
}

export async function updateContact(id: string, updates: Partial<ContactItem>) {
  await fakeNetwork();
  const contacts = await localforage.getItem<Array<ContactItem>>('contacts');
  const contact = (contacts ?? []).find((contact) => contact.id === id);
  if (!contact) throw new Error(`No contact found for ${id}`);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id: string) {
  const contacts = await localforage.getItem<Array<ContactItem>>('contacts');
  const index = (contacts ?? []).findIndex((contact) => contact.id === id);
  if (index > -1) {
    const update = (contacts ?? []).filter((contact, idx) => {
      return idx !== index;
    });
    await set(update);
    return true;
  }
  return false;
}

function set(contacts) {
  return localforage.setItem('contacts', contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key?: string) {
  if (!key) {
    fakeCache = {};
  }

  if (key && fakeCache[key]) {
    return;
  }

  if (key) {
    fakeCache[key] = true;
  }

  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
