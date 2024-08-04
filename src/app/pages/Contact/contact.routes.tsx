import { RouteObject } from 'react-router-dom';

import { ContactPage } from './ContactPage/ContactPage';
import { contactAction } from './ContactPage/contact.action';
import { contactLoader } from './ContactPage/contact.loader';
import { EditContactPage } from './EditContactPage/EditContactPage';
import { editAction } from './EditContactPage/edit.action';
import { destroyAction } from './destroy.action';

export const contactRoutes: Array<RouteObject> = [
  {
    path: 'contacts/:contactId',
    element: <ContactPage />,
    loader: contactLoader,
    action: contactAction,
  },
  {
    path: 'contacts/:contactId/edit',
    element: <EditContactPage />,
    loader: contactLoader,
    action: editAction,
  },
  {
    path: 'contacts/:contactId/destroy',
    action: destroyAction,
    errorElement: <div>Oops! There was an error.</div>,
  },
];
