import { getAll } from '@/utils/request';
import { useQuery } from '@tanstack/react-query';

export const bookingsQuery = ({ ...params } = {}) => ({
  queryKey: ['bookings'],
  queryFn: () => getAll('bookings'),
  staleTime: 30 * 1000,
  ...params,
});

export const useBookingsQuery = ({ ...params } = {}) => {
  return useQuery(bookingsQuery(params));
};
