import { Button, Group, Image, Modal, Stack, Text, Title } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import { Booking } from '@/models/Booking';
import { DateRange } from '@/models/DateRange';
import { isOverlapping } from '@/utils/date';

const schema = (otherRanges: DateRange[]) =>
  z.object({
    dates: z.tuple([z.date(), z.date()]).refine(
      ([start, end]) => {
        const current = { start, end };
        return otherRanges.some((other) => isOverlapping(current, other));
      },
      { message: 'There is an overlapping with another Booking' },
    ),
  });

interface BookingFormProps {
  booking: Partial<Booking>;
  onClose?: () => void;
}

export const BookingForm = ({ booking, onClose }: BookingFormProps) => {
  const { place } = booking;
  const form = useForm({
    validate: zodResolver(schema([])),
    initialValues: {
      dates: [booking.start, booking.end],
    },
  });

  return (
    <Modal.Root opened={true} onClose={() => onClose?.()} size="lg">
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title fw={500}>Choose the dates you will stay at:</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          <Group data-testid="place-info" wrap="nowrap">
            <Image src={place?.imageUrl} height={100} />
            <Stack>
              <Title order={2}>{place?.address}</Title>
              <Text>Lorem ipsum</Text>
            </Stack>
          </Group>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <DatePickerInput
              label="Check-in - Checkout"
              type="range"
              placeholder="Check-in - Checkout"
              {...form.getInputProps('dates')}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit">Book this place</Button>
            </Group>
          </form>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
