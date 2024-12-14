"use client";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "./Header";
import MobileDrawer from "./MobileDrawer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="xl"
    >
      <Header opened={opened} toggle={toggle} />
      <MobileDrawer opened={opened} toggle={toggle} />

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
