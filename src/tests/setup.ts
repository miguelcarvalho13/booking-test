import '@testing-library/jest-dom';
import '@/config/dayjs';
import { server } from '@/mocks/node';
import { clearServer } from '@/mocks/handlers';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

beforeAll(() => server.listen());
afterEach(() => {
  clearServer();
  server.resetHandlers();
});
afterAll(() => server.close());
