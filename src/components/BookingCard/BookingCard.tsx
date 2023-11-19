import { ActionIcon, Card, Group, Image, Stack, Text } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { Booking } from '@/models/Booking';

interface BookingCardProps {
  booking: Booking;
}

export const BookingCard = ({ booking }: BookingCardProps) => {
  const { place } = booking;

  return (
    <Card
      data-testid="booking-card"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <Group pos="absolute" right={0} mr="sm" mt="sm" gap="xs">
          <ActionIcon aria-label="Edit" radius="lg" variant="white">
            <IconPencil size={20} />
          </ActionIcon>
          <ActionIcon aria-label="Delete" radius="lg" variant="white">
            <IconTrash size={20} />
          </ActionIcon>
        </Group>
        <Image src={place.imageUrl} height={160} alt={place.address} />
      </Card.Section>
      <Text fw={500}>{place.address}</Text>
      <Group justify="space-between">
        <Stack gap={4}>
          <Text size="sm">Check-in</Text>
          <Text>{dayjs(booking.start).format('MMMM D, YYYY')}</Text>
        </Stack>
        <Stack gap={4}>
          <Text>Checkout</Text>
          <Text>{dayjs(booking.end).format('MMMM D, YYYY')}</Text>
        </Stack>
      </Group>
    </Card>
  );
};
