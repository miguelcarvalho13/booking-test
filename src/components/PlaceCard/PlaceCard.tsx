import { Button, Card, Image, Text } from '@mantine/core';
import { Place } from '@/models/Place';

interface PlaceCardProps {
  place: Place;
  onBookThisPlace?: (place: Place) => void;
}

export const PlaceCard = ({ place, onBookThisPlace }: PlaceCardProps) => {
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
      {onBookThisPlace && (
        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={() => onBookThisPlace(place)}
        >
          Book this place
        </Button>
      )}
    </Card>
  );
};
