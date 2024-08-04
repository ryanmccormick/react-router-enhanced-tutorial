import { redirect } from 'react-router-dom';

import { deleteContact } from '../../utils/contact.utils';

export async function destroyAction({ params }) {
  await deleteContact(params.contactId);
  return redirect('/');
}
