import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { Button, Group, Image, Modal, Stack, Text, Title } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import { usePlaceById } from '@/queries/places';

const schema = z.object({
  dates: z.tuple([z.date(), z.date()]),
});

export const NewBooking = () => {
  const navigate = useNavigate();
  const { placeId } = useParams();
  const initialPlaceData = useLoaderData();
  const { data: place } = usePlaceById(placeId!, {
    initialData: initialPlaceData,
  });
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      dates: [null, null],
    },
  });

  return (
    <Modal.Root
      opened={true}
      onClose={() => {
        navigate('/bookings', { replace: true });
      }}
      size="lg"
    >
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
