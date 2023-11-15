import { screen } from '@testing-library/react';
import { renderRoute } from '@/tests/helpers/render';

describe('routes/MyBookings', () => {
  it('renders My Bookings route', async () => {
    renderRoute({ path: '/bookings' });
    expect(await screen.findByText(/My Bookings content/)).toBeInTheDocument();
  });
});
