// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { MyBookings } from '@/routes/MyBookings';
import { Places } from '@/routes/Places';
import { Root } from '@/routes/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/places',
        element: <Places />,
      },
      {
        path: '/bookings',
        element: <MyBookings />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};
