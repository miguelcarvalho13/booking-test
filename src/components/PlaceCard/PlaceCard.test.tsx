import { render, screen } from '@testing-library/react';
import { PlaceCard } from '@/components/PlaceCard';
import { Wrapper } from '@/tests/helpers/Wrapper';
import { generatePlace } from '@/tests/helpers/factories';

describe('components/PlaceCard', () => {
  it('renders card as expected', () => {
    render(<PlaceCard place={generatePlace()} />, { wrapper: Wrapper });
    expect(screen.getByTestId('place-card')).toBeInTheDocument();
  });

  it('renders card with correct image', () => {
    const place = generatePlace({ imageUrl: 'www.example.com' });
    render(<PlaceCard place={place} />, { wrapper: Wrapper });
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', place.imageUrl);
  });

  it('renders card with correct address', () => {
    const place = generatePlace({ address: 'Tokyo, Japan' });
    render(<PlaceCard place={place} />, { wrapper: Wrapper });
    expect(screen.getByText(place.address)).toBeInTheDocument();
  });

  it('renders card without book place button', () => {
    render(<PlaceCard place={generatePlace()} />, { wrapper: Wrapper });
    const button = screen.queryByRole('button', { name: /Book this place/ });
    expect(button).not.toBeInTheDocument();
  });

  it('renders card with book place button', () => {
    render(
      <PlaceCard place={generatePlace()} onBookThisPlaceClick={() => {}} />,
      {
        wrapper: Wrapper,
      },
    );
    const button = screen.getByRole('button', { name: /Book this place/ });
    expect(button).toBeInTheDocument();
  });
});
