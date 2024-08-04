import { NavLink } from 'react-router-dom';

import { ContactItem } from '../../../types/contact-item.interface';

export function ContactNavItem({ contact }: { contact: ContactItem }) {
  return (
    <li>
      <NavLink
        to={`contacts/${contact.id}`}
        className={({ isActive, isPending }) => (isActive ? 'active' : isPending ? 'pending' : '')}
      >
        {contact.first || contact.last ? (
          <>
            {contact.first} {contact.last}
          </>
        ) : (
          <i>No Name</i>
        )}{' '}
        {contact.favorite && <span>*</span>}
      </NavLink>
    </li>
  );
}
