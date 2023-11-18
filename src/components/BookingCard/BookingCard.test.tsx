import { render, screen } from '@testing-library/react';
import { BookingCard } from '@/components/BookingCard';
import { Wrapper } from '@/tests/helpers/Wrapper';
import { generateBooking, generatePlace } from '@/tests/helpers/factories';

describe('components/BookingCard', () => {
  it('renders card as expected', () => {
    render(<BookingCard booking={generateBooking()} />, { wrapper: Wrapper });
    expect(screen.getByTestId('booking-card')).toBeInTheDocument();
  });

  it('renders card with correct image', () => {
    const place = generatePlace({ imageUrl: 'www.example.com' });
    const booking = generateBooking({ place });
    render(<BookingCard booking={booking} />, { wrapper: Wrapper });
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', place.imageUrl);
  });

  it('renders card with correct address', () => {
    const place = generatePlace({ address: 'Tokyo, Japan' });
    const booking = generateBooking({ place });
    render(<BookingCard booking={booking} />, { wrapper: Wrapper });
    expect(screen.getByText(place.address)).toBeInTheDocument();
  });
});
