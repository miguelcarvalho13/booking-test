import { useLoaderData, useNavigate } from 'react-router-dom';
import { Button, Group, Modal } from '@mantine/core';
import { Booking } from '@/models/Booking';
import { useForm } from '@mantine/form';
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
    <Modal.Root
      opened={true}
      onClose={() => navigate('/bookings', { replace: true })}
      size="md"
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title fw={500}>Delete Booking</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete your reservation at{' '}
          <strong>{booking.place.address}</strong>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Group justify="flex-end" mt="md">
              <Button color="red" type="submit">
                Delete Booking
              </Button>
            </Group>
          </form>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
