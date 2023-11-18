import { Button, Card, Image, Text } from '@mantine/core';
import { Place } from '@/models/Place';

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
      <Text fw={500}>{place.address}</Text>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book this place
      </Button>
    </Card>
  );
};
