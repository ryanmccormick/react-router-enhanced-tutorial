import { Form, useLoaderData } from 'react-router-dom';

import { ContactItem } from '../../../types/contact-item.interface';
import { ContactFavorite } from '../components/ContactFavorite';

export function ContactPage() {
  const { contact } = useLoaderData() as { contact: ContactItem };

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || `https://robohash.org/${contact.id}.png?size=200x200`} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <ContactFavorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              // eslint-disable-next-line no-restricted-globals
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
