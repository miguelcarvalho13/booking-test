import { Button, Card, Image, Space, Text } from '@mantine/core';
import { Place } from '@/models/Place';
import { Link } from 'react-router-dom';

interface PlaceCardProps {
  place: Place;
}

export const PlaceCard = ({ place }: PlaceCardProps) => {
  return (
    <Card
      data-testid="place-card"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <Image src={place.imageUrl} height={160} alt={place.address} />
      </Card.Section>
      <Space h="sm" />
      <Text fw={500}>{place.address}</Text>
      <Text fw={300} lineClamp={2} title={place.description}>
        {place.description}
      </Text>
      <Button
        fullWidth
        radius="md"
        mt="md"
        component={Link}
        to={`/bookings/new/${place.id}`}
      >
        Book this place
      </Button>
    </Card>
  );
};
