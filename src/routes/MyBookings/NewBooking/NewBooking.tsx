import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { usePlaceById } from '@/queries/places';
import { BookingForm } from '@/components/BookingForm';
import { Place } from '@/models/Place';

export const NewBooking = () => {
  const navigate = useNavigate();
  const { placeId } = useParams();
  const initialPlaceData = useLoaderData();
  const { data: place } = usePlaceById(placeId!, {
    initialData: initialPlaceData,
  });

  const booking = { place: place as Place };

  return (
    <BookingForm
      booking={booking}
      onClose={() => navigate('/bookings', { replace: true })}
    />
  );
};
