import { QueryClient } from '@tanstack/react-query';
import { MyBookings, myBookingsLoader } from '@/routes/MyBookings';
import { NewBooking, newBookingLoader } from '@/routes/MyBookings/NewBooking';
import {
  EditBooking,
  editBookingLoader,
} from '@/routes/MyBookings/EditBooking';
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
        loader: myBookingsLoader(queryClient),
        children: [
          {
            path: 'new/:placeId',
            element: <NewBooking />,
            loader: newBookingLoader(queryClient),
          },
          {
            path: 'edit/:bookingId',
            element: <EditBooking />,
            loader: editBookingLoader(queryClient),
          },
        ],
      },
    ],
  },
];
