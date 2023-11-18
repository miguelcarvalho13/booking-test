import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderRoute } from '@/tests/helpers/render';

describe('routes/Root', () => {
  it('renders Root route', async () => {
    renderRoute({ path: '/' });
    expect(await screen.findByText(/Bookings App/)).toBeInTheDocument();
  });

  it('should go to My Bookings route if clicking on its tab', async () => {
    const user = userEvent.setup();
    renderRoute({ path: '/' });
    await user.click(await screen.findByRole('tab', { name: /My Bookings/ }));
    expect(await screen.findByTestId('bookings-content')).toBeInTheDocument();
  });

  it('should go to Places route if clicking on its tab', async () => {
    const user = userEvent.setup();
    renderRoute({ path: '/' });
    await user.click(await screen.findByRole('tab', { name: /Places/ }));
    expect(await screen.findByTestId('places-content')).toBeInTheDocument();
  });
});
