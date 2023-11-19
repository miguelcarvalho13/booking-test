import { http, HttpResponse } from 'msw';
import { Booking } from '@/models/Booking';
import { Place } from '@/models/Place';
import { Optional } from '@/utils/type';

const allBookings = new Map<string, Booking>();

const allPlaces = new Map<string, Place>([
  [
    '1',
    {
      id: '1',
      address: 'Recife, Brazil',
      description: `Welcome to your charming rental in Recife, Brazil! Nestled in the heart of this vibrant coastal city, your accommodation offers a perfect blend of modern comfort and traditional Brazilian warmth.`,
      imageUrl: 'https://placehold.co/600x400',
    },
  ],
  [
    '2',
    {
      id: '2',
      address: 'Washington, United States',
      description: `Welcome to your stylish rental in the heart of Washington, D.C.! This contemporary apartment is located in a vibrant neighborhood, offering a perfect blend of urban convenience and historical charm`,
      imageUrl: 'https://placehold.co/600x400',
    },
  ],
  [
    '3',
    {
      id: '3',
      address: 'Tokyo, Japan',
      description: `This contemporary apartment seamlessly blends modern design with traditional Japanese aesthetics, offering a serene and comfortable retreat in this bustling metropolis. Step into a thoughtfully furnished living space adorned with shoji screens, providing a touch of authenticity to your Tokyo experience`,
      imageUrl: 'https://placehold.co/600x400',
    },
  ],
]);

const BASE_URL = 'http://localhost:5173/api';

export const addBookingOnServer = (booking: Optional<Booking, 'id'>) => {
  const id = booking.id ?? `${Array.from(allBookings.values()).length + 1}`;
  allBookings.set(id, { ...booking, id });
  return allBookings.get(id) as Booking;
};

export const getServerItem = (itemType: 'booking' | 'place', id: string) => {
  switch (itemType) {
    case 'booking':
      return allBookings.get(id);
    case 'place':
      return allPlaces.get(id);
  }
};

export const clearServer = () => {
  allBookings.clear();
};

export const handlers = [
  // Bookings
  http.get(`${BASE_URL}/bookings`, () => {
    return HttpResponse.json(Array.from(allBookings.values()));
  }),

  http.get(`${BASE_URL}/bookings/:id`, ({ params }) => {
    const booking = allBookings.get(params.id as string);
    if (!booking) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(booking);
  }),

  http.delete(`${BASE_URL}/bookings/:id`, ({ params }) => {
    const booking = allBookings.get(params.id as string);
    if (!booking) return new HttpResponse(null, { status: 404 });
    allBookings.delete(booking.id);
    return HttpResponse.json(booking);
  }),

  http.patch(`${BASE_URL}/bookings/:id`, async ({ request, params }) => {
    const id = params.id as string;
    const body = (await request.json()) as Booking;
    const booking = { ...body, place: allPlaces.get(body.place.id)! };
    allBookings.set(id, booking);
    return HttpResponse.json(allBookings.get(id));
  }),

  http.post(`${BASE_URL}/bookings`, async ({ request }) => {
    const body = (await request.json()) as Omit<Booking, 'id'>;
    const booking = { ...body, place: allPlaces.get(body.place.id)! };
    return HttpResponse.json(addBookingOnServer(booking), { status: 201 });
  }),

  // Places
  http.get(`${BASE_URL}/places`, () => {
    return HttpResponse.json(Array.from(allPlaces.values()));
  }),

  http.get(`${BASE_URL}/places/:id`, ({ params }) => {
    const place = allPlaces.get(params.id as string);
    if (!place) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(place);
  }),
];
