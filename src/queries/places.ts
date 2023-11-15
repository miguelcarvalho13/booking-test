import { Place } from '@/models/Place';
import { useQuery } from '@tanstack/react-query';

const fetchPlaces = async () => {
  const baseUrl =
    import.meta.env.MODE === 'test' ? 'http://localhost:5173' : '';
  const response = await fetch(`${baseUrl}/api/places`);
  return response.json() as Promise<Place[]>;
};

export const placesQuery = ({ ...params } = {}) => ({
  queryKey: ['places'],
  queryFn: fetchPlaces,
  staleTime: 30 * 1000,
  ...params,
});

export const usePlacesQuery = ({ ...params } = {}) => {
  return useQuery(placesQuery(params));
};
