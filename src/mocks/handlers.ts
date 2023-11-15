import { http, HttpResponse } from 'msw';
import { Booking } from '@/models/Booking';
import { Place } from '@/models/Place';

const allBookings = new Map<string, Booking>();

const allPlaces: Place[] = [
  {
    id: '1',
    address: 'Recife, Brazil',
    imageUrl: 'https://placehold.co/600x400',
  },
  {
    id: '2',
    address: 'Washington, United States',
    imageUrl: 'https://placehold.co/600x400',
  },
  {
    id: '3',
    address: 'Tokyo, Japan',
    imageUrl: 'https://placehold.co/600x400',
  },
];

const BASE_URL = 'http://localhost:5173/api';

export const handlers = [
  // Bookings
  http.get(`${BASE_URL}/bookings`, () => {
    return HttpResponse.json(Array.from(allBookings.values()));
  }),

  // Places
  http.get(`${BASE_URL}/places`, () => {
    return HttpResponse.json(allPlaces);
  }),
];
