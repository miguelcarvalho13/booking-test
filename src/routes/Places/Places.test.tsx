import { render, screen } from '@testing-library/react';
import { Places } from '@/routes/Places';
import { Wrapper } from '@/tests/helpers/Wrapper';

describe('routes/Places', () => {
  it('renders Places route', async () => {
    render(<Places />, { wrapper: Wrapper });
    expect(await screen.findByText(/Places content/)).toBeInTheDocument();
  });
});
