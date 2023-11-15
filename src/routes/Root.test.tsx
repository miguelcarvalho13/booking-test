import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from '@/App';

describe('routes/Root', () => {
  it('renders Root route', () => {
    render(<App />);
    expect(screen.getByText(/Bookings App/)).toBeInTheDocument();
  });

  it('should go to My Bookings route if clicking on its tab', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('tab', { name: /My Bookings/ }));
    expect(screen.getByText(/My Bookings content/)).toBeInTheDocument();
  });

  it('should go to Places route if clicking on its tab', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('tab', { name: /Places/ }));
    expect(screen.getByText(/Places content/)).toBeInTheDocument();
  });
});
