import { QueryClient } from '@tanstack/react-query';
import { MyBookings } from '@/routes/MyBookings';
import { Places, placesLoader } from '@/routes/Places';
import { Root, rootLoader } from '@/routes';

export const routerBuilder = (queryClient: QueryClient) => [
  {
    path: '/',
    element: <Root />,
    loader: rootLoader(queryClient),
    children: [
      {
        path: '/places',
        element: <Places />,
        loader: placesLoader(queryClient),
      },
      {
        path: '/bookings',
        element: <MyBookings />,
      },
    ],
  },
];
