import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderRoute } from '@/tests/helpers/render';
import { addBookingOnServer } from '@/mocks/handlers';
import { generateBooking, generatePlace } from '@/tests/helpers/factories';

describe('routes/MyBookings/NewBooking', () => {
  beforeEach(() => {
    addBookingOnServer(
      generateBooking({
        id: '1',
        start: new Date(2023, 5, 8),
        end: new Date(2023, 5, 15),
        place: generatePlace({ address: 'Recife, Brazil' }),
      }),
    );
  });

  it('renders Edit Booking route', async () => {
    renderRoute({ path: '/bookings/edit/1' });
    const modal = await screen.findByRole('dialog');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent(/Choose the dates you will stay at:/);
  });

  it('renders modal with the correct place info', async () => {
    renderRoute({ path: '/bookings/edit/1' });
    const modal = await screen.findByRole('dialog');
    const placeInfo = within(modal).getByTestId('place-info');
    expect(placeInfo).toHaveTextContent(/Recife, Brazil/);
    expect(placeInfo).toHaveTextContent(/Lorem ipsum/);
  });

  it('should correctly edit a booking', async () => {
    const user = userEvent.setup();
    renderRoute({ path: '/bookings/edit/1' });
    const modal = await screen.findByRole('dialog');
    const dateInput = within(modal).getByRole('button', {
      name: /June 8, 2023 – June 15, 2023/,
    });
    await user.click(dateInput);
    await user.click(
      screen.getByRole('button', { name: '1 June 2023', hidden: true }),
    );
    await user.click(
      screen.getByRole('button', { name: '10 June 2023', hidden: true }),
    );
    await user.click(
      screen.getByRole('button', { name: 'Book this place', hidden: true }),
    );
    const card = within(await screen.findByTestId('booking-card'));
    expect(card.getByText(/Recife, Brazil/)).toBeInTheDocument();
    expect(card.getByText(/June 1, 2023/)).toBeInTheDocument();
    expect(card.getByText(/June 10, 2023/)).toBeInTheDocument();
  });
});
