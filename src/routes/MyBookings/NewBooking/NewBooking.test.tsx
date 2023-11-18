import { screen } from '@testing-library/react';
import { renderRoute } from '@/tests/helpers/render';

describe('routes/MyBookings/NewBooking', () => {
  it('renders New Booking route', async () => {
    renderRoute({ path: '/bookings/new/2' });
    const modal = await screen.findByRole('dialog');
    expect(modal).toBeInTheDocument();
  });
});
