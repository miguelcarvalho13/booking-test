import { AppShell, Tabs } from '@mantine/core';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = location.pathname;

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>Bookings App</AppShell.Header>
      <AppShell.Main>
        <Tabs
          value={activeTab}
          onChange={(tab) => {
            if (activeTab.includes(tab ?? '')) return;
            navigate(`/${tab}`);
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="places">Places</Tabs.Tab>
            <Tabs.Tab value="bookings">My Bookings</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value={activeTab}>
            <Outlet />
          </Tabs.Panel>
        </Tabs>
      </AppShell.Main>
    </AppShell>
  );
};
