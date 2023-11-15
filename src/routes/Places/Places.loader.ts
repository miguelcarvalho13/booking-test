import { placesQuery } from '@/queries/places';
import { QueryClient } from '@tanstack/react-query';

export const placesLoader = (queryClient: QueryClient) => () => {
  return queryClient.ensureQueryData(placesQuery());
};
