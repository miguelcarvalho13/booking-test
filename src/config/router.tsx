import { QueryClient } from '@tanstack/react-query';
import { MyBookings } from '@/routes/MyBookings';
import { NewBooking, newBookingLoader } from '@/routes/MyBookings/NewBooking';
import { Places, placesLoader } from '@/routes/Places';
import { Root, rootLoader } from '@/routes';

export const routerBuilder = (queryClient: QueryClient) => [
  {
    path: '/',
    element: <Root />,
    loader: rootLoader(queryClient),
    children: [
      {
        path: 'places',
        element: <Places />,
        loader: placesLoader(queryClient),
      },
      {
        path: 'bookings',
        element: <MyBookings />,
        children: [
          {
            path: 'new/:placeId',
            element: <NewBooking />,
            loader: newBookingLoader(queryClient),
          },
        ],
      },
    ],
  },
];
