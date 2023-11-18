import { PlaceCard } from '@/components/PlaceCard';
import { usePlacesQuery } from '@/queries/places';
import { Grid } from '@mantine/core';
import { useLoaderData } from 'react-router-dom';

export const Places = () => {
  const initialData = useLoaderData();
  const { data: places } = usePlacesQuery({ initialData });

  return (
    <Grid data-testid="places-content" p="md">
      {places?.map((place) => (
        <Grid.Col key={place.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
          <PlaceCard place={place} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
