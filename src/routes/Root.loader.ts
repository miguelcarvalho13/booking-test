import { QueryClient } from '@tanstack/react-query';
import { placesQuery } from '@/queries/places';

export const rootLoader = (queryClient: QueryClient) => async () => {
  return queryClient.ensureQueryData(placesQuery());
};
