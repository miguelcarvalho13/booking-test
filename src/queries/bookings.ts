import { getAll } from '@/utils/request';
import { useQuery } from '@tanstack/react-query';

export const bookingsQuery = ({ ...params } = {}) => ({
  queryKey: ['bookings'],
  queryFn: async () => {
    const bookings = await getAll('bookings');
    return bookings.map((booking) => ({
      ...booking,
      start: new Date(booking.start),
      end: new Date(booking.end),
    }));
  },
  staleTime: 30 * 1000,
  ...params,
});

export const useBookingsQuery = ({ ...params } = {}) => {
  return useQuery(bookingsQuery(params));
};
