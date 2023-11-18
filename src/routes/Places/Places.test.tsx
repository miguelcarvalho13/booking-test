import { screen } from '@testing-library/react';
import { renderRoute } from '@/tests/helpers/render';

describe('routes/Places', () => {
  it('renders Places route', async () => {
    renderRoute({ path: '/places' });
    expect(await screen.findByTestId('places-content')).toBeInTheDocument();
  });

  it('renders places cards', async () => {
    renderRoute({ path: '/places' });
    await screen.findByTestId('places-content');
    const cards = screen.getAllByTestId('place-card');
    expect(cards).toHaveLength(3);
  });
});
