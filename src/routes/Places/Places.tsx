import { useLoaderData, useNavigate } from 'react-router-dom';
import { Grid } from '@mantine/core';
import { PlaceCard } from '@/components/PlaceCard';
import { usePlacesQuery } from '@/queries/places';

export const Places = () => {
  const initialData = useLoaderData();
  const navigate = useNavigate();
  const { data: places } = usePlacesQuery({ initialData });

  return (
    <Grid data-testid="places-content" p="md">
      {places?.map((place) => (
        <Grid.Col key={place.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
          <PlaceCard
            place={place}
            onBookThisPlace={({ id }) => navigate(`/bookings/new/${id}`)}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};
