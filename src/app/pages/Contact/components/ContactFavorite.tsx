import { useFetcher } from 'react-router-dom';

export function ContactFavorite({ contact }: any) {
  const fetcher = useFetcher();
  // const favorite = contact.favorite;

  const favorite = fetcher.formData ? fetcher.formData.get('favorite') === 'true' : contact.favorite;

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </fetcher.Form>
  );
}
