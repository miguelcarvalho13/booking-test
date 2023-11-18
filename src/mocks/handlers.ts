import { http, HttpResponse } from 'msw';
import { Booking } from '@/models/Booking';
import { Place } from '@/models/Place';

const allBookings = new Map<string, Booking>();

const allPlaces = new Map<string, Place>([
  [
    '1',
    {
      id: '1',
      address: 'Recife, Brazil',
      imageUrl: 'https://placehold.co/600x400',
    },
  ],
  [
    '2',
    {
      id: '2',
      address: 'Washington, United States',
      imageUrl: 'https://placehold.co/600x400',
    },
  ],
  [
    '3',
    {
      id: '3',
      address: 'Tokyo, Japan',
      imageUrl: 'https://placehold.co/600x400',
    },
  ],
]);

const BASE_URL = 'http://localhost:5173/api';

export const handlers = [
  // Bookings
  http.get(`${BASE_URL}/bookings`, () => {
    return HttpResponse.json(Array.from(allBookings.values()));
  }),

  http.post(`${BASE_URL}/bookings`, async ({ request }) => {
    const id = `${Array.from(allBookings.values()).length}`;
    const body = (await request.json()) as Omit<Booking, 'id'>;
    const booking = { id, ...body, place: allPlaces.get(body.place.id)! };
    allBookings.set(id, booking);
    return HttpResponse.json(allBookings.get(id));
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
