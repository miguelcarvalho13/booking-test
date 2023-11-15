import { render, screen } from '@testing-library/react';
import { MyBookings } from '@/routes/MyBookings';
import { Wrapper } from '@/tests/helpers/Wrapper';

describe('routes/MyBookings', () => {
  it('renders My Bookings route', async () => {
    render(<MyBookings />, { wrapper: Wrapper });
    expect(await screen.findByText(/My Bookings content/)).toBeInTheDocument();
  });
});
