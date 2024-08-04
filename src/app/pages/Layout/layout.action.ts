import { redirect } from 'react-router-dom';

import { createContact } from '../../utils/contact.utils';

export async function layoutAction() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}
