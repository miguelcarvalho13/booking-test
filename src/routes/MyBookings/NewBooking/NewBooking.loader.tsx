import { LoaderFunctionArgs } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import { placeByIdQuery } from '@/queries/places';

export const newBookingLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    return queryClient.ensureQueryData(placeByIdQuery(params.placeId!));
  };
