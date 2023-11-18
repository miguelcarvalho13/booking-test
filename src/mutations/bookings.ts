import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Booking } from '@/models/Booking';
import { post } from '@/utils/request';

type NewBooking = Omit<Booking, 'id'>;

export const useCreateBookingMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (booking: NewBooking) => {
      return post('bookings', { ...booking, place: { id: booking.place.id } });
    },

    onMutate: (booking: NewBooking) => {
      const newBooking: Booking = { id: 'temp-id', ...booking };
      const previous = queryClient.getQueryData(['bookings']);
      queryClient.setQueryData(['bookings'], (old: Booking[]) => {
        return [...(old ?? []), newBooking];
      });

      return { previous };
    },

    onError: (_error, _booking, context) => {
      queryClient.setQueryData(['bookings'], context?.previous);
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey: ['bookings'] }),
  });
};
