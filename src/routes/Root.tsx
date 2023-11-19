import { AppShell, Tabs, Title } from '@mantine/core';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [, activeTab] = location.pathname.split('/');

  return (
    <AppShell header={{ height: 80 }}>
      <AppShell.Header p="md">
        <Title>Bookings App</Title>
      </AppShell.Header>
      <AppShell.Main>
        <Tabs
          value={activeTab}
          onChange={(tab) => {
            if (activeTab.includes(tab ?? '')) return;
            navigate(`/${tab}`);
          }}
        >
          <Tabs.List
            bg="white"
            pos="sticky"
            pl="md"
            style={{ zIndex: 1 }}
            top={80}
          >
            <Tabs.Tab value="places">Places</Tabs.Tab>
            <Tabs.Tab value="bookings">My Bookings</Tabs.Tab>
          </Tabs.List>
          {/* <Tabs.Panel value={activeTab}> */}
          <Outlet />
          {/* </Tabs.Panel> */}
        </Tabs>
      </AppShell.Main>
    </AppShell>
  );
};
