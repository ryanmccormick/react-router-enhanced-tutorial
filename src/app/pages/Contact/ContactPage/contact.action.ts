import { updateContact } from '../../../utils/contact.utils';

export async function contactAction({ request, params }: any) {
  const formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get('favorite') === 'true',
  });
}
