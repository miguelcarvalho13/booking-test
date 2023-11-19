import {
  Button,
  Group,
  Image,
  Modal,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
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
        const hasOverlaps = otherRanges.some((other) =>
          isOverlapping(current, other),
        );
        return !hasOverlaps;
      },
      { message: 'There is an overlap with another Booking' },
    ),
  });

interface BookingFormProps {
  booking: Partial<Booking>;
  otherBookings: Booking[];
  submitLabel?: string;
  onClose?: () => void;
  onSubmit: (dates: [Date, Date]) => void;
}

export const BookingForm = ({
  booking,
  otherBookings,
  submitLabel,
  onClose,
  onSubmit,
}: BookingFormProps) => {
  const { place } = booking;
  const form = useForm({
    validate: zodResolver(schema(otherBookings)),
    initialValues: {
      dates: [booking.start, booking.end],
    },
  });
  const handleSubmit = ({ dates }: { dates: (Date | undefined)[] }) => {
    const [firstDate, secondDate] = dates;
    if (!firstDate || !secondDate) throw new Error('Unreachable code');

    onSubmit([firstDate, secondDate]);
  };

  return (
    <Modal.Root opened={true} onClose={() => onClose?.()} size="lg">
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title fw={500}>Choose the dates you will stay at:</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          <Group data-testid="place-info" align="flex-start" wrap="nowrap">
            <Image src={place?.imageUrl} height={100} />
            <Stack>
              <Title order={2}>{place?.address}</Title>
              <Text>{place?.description}</Text>
            </Stack>
          </Group>
          <Space h="sm" />
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <DatePickerInput
              firstDayOfWeek={0}
              label="Check-in - Checkout"
              type="range"
              placeholder="Check-in - Checkout"
              required
              {...form.getInputProps('dates')}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit">{submitLabel ?? 'Book this place'}</Button>
            </Group>
          </form>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
