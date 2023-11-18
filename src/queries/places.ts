import { Place } from '@/models/Place';
import { useQuery } from '@tanstack/react-query';

const baseUrl = import.meta.env.MODE === 'test' ? 'http://localhost:5173' : '';

const fetchPlaces = async () => {
  const response = await fetch(`${baseUrl}/api/places`);
  return response.json() as Promise<Place[]>;
};

const fetchPlaceById = async (id: string) => {
  const response = await fetch(`${baseUrl}/api/places/${id}`);
  return response.json() as Promise<Place>;
};

export const placesQuery = ({ ...params } = {}) => ({
  queryKey: ['places'],
  queryFn: fetchPlaces,
  staleTime: 30 * 1000,
  ...params,
});

export const placeByIdQuery = (id: string, { ...params } = {}) => ({
  queryKey: ['places', id],
  queryFn: () => fetchPlaceById(id),
  staleTime: 30 * 1000,
  ...params,
});

export const usePlacesQuery = ({ ...params } = {}) => {
  return useQuery(placesQuery(params));
};

export const usePlaceById = (id: string, { ...params } = {}) => {
  return useQuery(placeByIdQuery(id, params));
};
