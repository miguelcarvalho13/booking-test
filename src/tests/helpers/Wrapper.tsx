import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { buildQueryClient } from '@/tests/helpers/query';

interface WrapperProps {
  queryClient?: QueryClient;
  children: React.ReactNode;
}

export const Wrapper = ({ queryClient, children }: WrapperProps) => {
  return (
    <QueryClientProvider client={queryClient ?? buildQueryClient()}>
      <MantineProvider>{children}</MantineProvider>
    </QueryClientProvider>
  );
};
