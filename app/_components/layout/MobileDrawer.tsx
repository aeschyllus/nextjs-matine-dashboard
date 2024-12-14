import { AppShell, Burger, Flex, NavLink, Skeleton, Text } from "@mantine/core";
import { IconHome, IconShieldLock } from "@tabler/icons-react";

type DrawerProps = {
  opened: boolean;
  toggle: () => void;
};

export default function MobileDrawer({ opened, toggle }: DrawerProps) {
  return (
    <AppShell.Navbar p="md">
      <Flex align="center" justify="space-between" gap={10}>
        <Text fw={700} size="xl">
          Sinvion
        </Text>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          lineSize={3}
        />
      </Flex>
      <NavLink label="Home" leftSection={<IconHome />} />
      <NavLink
        label="Authentication"
        leftSection={<IconShieldLock />}
        childrenOffset={28}
      >
        <NavLink label="Sign In" />
        <NavLink label="Sign Up" />
      </NavLink>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} h={28} mt="sm" animate={false} />
        ))}
    </AppShell.Navbar>
  );
}
