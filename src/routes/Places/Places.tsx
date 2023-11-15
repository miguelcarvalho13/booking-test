import { usePlacesQuery } from '@/queries/places';
import { useLoaderData } from 'react-router-dom';

export const Places = () => {
  const initialData = useLoaderData();
  const { data: places } = usePlacesQuery({ initialData });

  return (
    <ul data-testid="places-content">
      {places?.map((place) => <li key={place.id}>{place.address}</li>)}
    </ul>
  );
};
