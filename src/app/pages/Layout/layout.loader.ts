import { getContacts } from '../../utils/contact.utils';

export async function layoutLoader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const contacts = await getContacts(q);
  return { contacts, q };
}
