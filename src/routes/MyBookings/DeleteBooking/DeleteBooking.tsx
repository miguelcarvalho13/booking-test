import { useLoaderData, useNavigate } from 'react-router-dom';
import { Button, Group, Modal, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Booking } from '@/models/Booking';
import { useDeleteBookingMutation } from '@/mutations/bookings';

export const DeleteBooking = () => {
  const navigate = useNavigate();
  const booking = useLoaderData() as Booking;
  const form = useForm();
  const deleteBooking = useDeleteBookingMutation();

  const handleSubmit = () => {
    deleteBooking.mutate(booking);
    navigate('/bookings', { replace: true });
  };

  return (
    <Modal
      opened={true}
      onClose={() => navigate('/bookings', { replace: true })}
      size="md"
      title={<Text fw={500}>Delete Booking</Text>}
    >
      <Text>
        Are you sure you want to delete your reservation at{' '}
        <strong>{booking.place.address}</strong>
      </Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Group justify="flex-end" mt="md">
          <Button color="red" type="submit">
            Delete Booking
          </Button>
        </Group>
      </form>
    </Modal>
  );
};
