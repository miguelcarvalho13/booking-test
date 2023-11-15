import { screen } from '@testing-library/react';
import { renderRoute } from '@/tests/helpers/render';

describe('routes/Places', () => {
  it('renders Places route', async () => {
    renderRoute({ path: '/places' });
    expect(await screen.findByTestId('places-content')).toBeInTheDocument();
  });
});
