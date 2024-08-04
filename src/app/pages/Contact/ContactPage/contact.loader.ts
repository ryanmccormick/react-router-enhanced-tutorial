import { getContact } from '../../../utils/contact.utils';

export async function contactLoader({ params }: any) {
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }

  return { contact };
}
