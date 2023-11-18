import { render, screen } from '@testing-library/react';
import { Wrapper } from '@/tests/helpers/Wrapper';
import { generateBooking, generatePlace } from '@/tests/helpers/factories';
import { BookingForm } from '@/components/BookingForm';

describe('components/BookingForm', () => {
  it('renders form as expected', async () => {
    render(<BookingForm booking={generateBooking()} />, { wrapper: Wrapper });
    const modal = await screen.findByRole('dialog');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent(/Choose the dates you will stay at:/);
  });

  it('renders with the correct place info', async () => {
    const place = generatePlace({ address: 'Tokyo, Japan' });
    const booking = generateBooking({ place });
    render(<BookingForm booking={booking} />, { wrapper: Wrapper });
    const placeInfo = await screen.findByTestId('place-info');
    expect(placeInfo).toHaveTextContent(/Tokyo, Japan/);
    expect(placeInfo).toHaveTextContent(/Lorem ipsum/);
  });
});
