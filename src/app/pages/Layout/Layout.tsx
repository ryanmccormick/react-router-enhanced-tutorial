import { useEffect } from 'react';
import { Form, NavLink, Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';

import { ContactItem } from '../../types/contact-item.interface';
import { ContactNavItem } from '../Contact/components/ContactNavItem';

export function Layout() {
  const { contacts, q } = useLoaderData() as any;
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching = navigation.location && new URLSearchParams(navigation.location.search).has('q');

  useEffect(() => {
    const queryElement = document.getElementById('q') as HTMLInputElement | null;
    if (queryElement) {
      queryElement.value = q;
    }
  }, [q]);

  const renderContacts = () => {
    return contacts.map((contact: ContactItem) => {
      return <ContactNavItem key={contact.id} contact={contact} />;
    });
  };

  const renderNavigation = () => {
    return contacts.length > 0 ? (
      <ul>{renderContacts()}</ul>
    ) : (
      <p>
        <i>No Contacts</i>
      </p>
    );
  };

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search" name="q">
            <input
              id="q"
              className={searching ? 'loading' : ''}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, { replace: !isFirstSearch });
              }}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>{renderNavigation()}</nav>
      </div>
      <div id="detail" className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </div>
    </>
  );
}
