import { Card, Image, Text } from '@mantine/core';
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
        <Image src={place.imageUrl} height={160} alt={place.address} />
      </Card.Section>
      <Text fw={500}>{place.address}</Text>
    </Card>
  );
};
