import { Button, Card, Image, Space, Text } from '@mantine/core';
import { Place } from '@/models/Place';

interface PlaceCardProps {
  place: Place;
  onBookThisPlaceClick?: (place: Place) => void;
}

export const PlaceCard = ({ place, onBookThisPlaceClick }: PlaceCardProps) => {
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
      {onBookThisPlaceClick && (
        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={() => onBookThisPlaceClick(place)}
        >
          Book this place
        </Button>
      )}
    </Card>
  );
};
