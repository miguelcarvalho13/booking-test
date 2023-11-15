import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { routerBuilder } from '@/config/router';
import { Wrapper } from '@/tests/helpers/Wrapper';
import { buildQueryClient } from '@/tests/helpers/query';

export const renderRoute = ({ path } = { path: '/' }) => {
  const queryClient = buildQueryClient();
  const router = createMemoryRouter(routerBuilder(queryClient), {
    initialEntries: [path],
  });

  return render(
    <Wrapper queryClient={queryClient}>
      <RouterProvider router={router} />
    </Wrapper>,
  );
};
