import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderRoute } from '@/tests/helpers/render';

describe('routes/Places', () => {
  it('renders Places route', async () => {
    renderRoute({ path: '/places' });
    expect(await screen.findByTestId('places-content')).toBeInTheDocument();
  });

  it('renders cards of places', async () => {
    renderRoute({ path: '/places' });
    await screen.findByTestId('places-content');
    const cards = screen.getAllByTestId('place-card');
    expect(cards).toHaveLength(3);
  });

  it('redirects to New Booking page', async () => {
    const user = userEvent.setup();
    renderRoute({ path: '/places' });
    await screen.findByTestId('places-content');
    const firstCard = screen.getAllByTestId('place-card')[0];
    await user.click(within(firstCard).getByRole('button'));
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });
});
