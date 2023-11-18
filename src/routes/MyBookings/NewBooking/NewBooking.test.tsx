import { screen, within } from '@testing-library/react';
import { renderRoute } from '@/tests/helpers/render';

describe('routes/MyBookings/NewBooking', () => {
  it('renders New Booking route', async () => {
    renderRoute({ path: '/bookings/new/3' });
    const modal = await screen.findByRole('dialog');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent(/Choose the dates you will stay at:/);
  });

  it('renders modal with the correct place info', async () => {
    renderRoute({ path: '/bookings/new/3' });
    const modal = await screen.findByRole('dialog');
    const placeInfo = within(modal).getByTestId('place-info');
    expect(placeInfo).toHaveTextContent(/Tokyo, Japan/);
    expect(placeInfo).toHaveTextContent(/Lorem ipsum/);
  });
});
