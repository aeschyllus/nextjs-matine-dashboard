import {
  AppShell,
  Avatar,
  Burger,
  Flex,
  Group,
  Menu,
  Modal,
  rem,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconMessages,
  IconNotification,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";

type HeaderProps = {
  opened: boolean;
  toggle: () => void;
};

export default function Header({ opened, toggle }: HeaderProps) {
  const [searchOpen, { open, close }] = useDisclosure();

  return (
    <AppShell.Header>
      <Flex align="center" justify="space-between" className="h-full px-8">
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            lineSize={3}
          />
        </Group>
        <Group gap="xl">
          {/* Search */}
          <Modal
            opened={searchOpen}
            onClose={close}
            withCloseButton={false}
            size="lg"
          >
            <TextInput
              variant="unstyled"
              placeholder="Tap to start search"
              leftSection={<IconSearch />}
            />
          </Modal>
          <UnstyledButton
            className="hover:text-blue-500"
            aria-label="Messages"
            onClick={open}
          >
            <IconSearch />
          </UnstyledButton>

          {/* Messages */}
          <Menu>
            <Menu.Target>
              <UnstyledButton
                className="hover:text-blue-500"
                aria-label="Messages"
              >
                <IconMessages />
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Messages</Menu.Label>
              <Menu.Item leftSection={<Avatar color="blue">JL</Avatar>} p="sm">
                <Flex direction="column">
                  <Text size="sm">
                    <Text span fw={700}>
                      Joe Lincoln
                    </Text>{" "}
                    sent you a message
                  </Text>
                  <Text size="xs" c="dimmed">
                    18 mins ago
                  </Text>
                </Flex>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item leftSection={<Avatar color="pink">LA</Avatar>} p="sm">
                <Flex direction="column">
                  <Text size="sm">
                    <Text span fw={700}>
                      Leslie Alexander
                    </Text>{" "}
                    sent you a message
                  </Text>
                  <Text size="xs" c="dimmed">
                    53 mins ago
                  </Text>
                </Flex>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                leftSection={<Avatar color="violet">GH</Avatar>}
                p="sm"
              >
                <Flex direction="column">
                  <Text size="sm">
                    <Text span fw={700}>
                      Guy Hawkins
                    </Text>{" "}
                    sent you a message
                  </Text>
                  <Text size="xs" c="dimmed">
                    14 hours ago
                  </Text>
                </Flex>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          {/* Notifications */}
          <Menu>
            <Menu.Target>
              <UnstyledButton
                className="hover:text-blue-500"
                aria-label="Notifications"
              >
                <IconNotification />
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown className="max-w-xs md:max-w-md">
              <Menu.Label>Notifications</Menu.Label>
              <Menu.Item leftSection={<Avatar color="blue">RA</Avatar>} p="sm">
                <Flex direction="column">
                  <Text size="sm">
                    <Text span fw={700}>
                      Ryan Avanzado
                    </Text>{" "}
                    mentioned you in{" "}
                    <Text span c="blue">
                      Latest Trends
                    </Text>{" "}
                    topic
                  </Text>
                  <Text size="xs" c="dimmed">
                    18 mins ago
                  </Text>
                </Flex>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item leftSection={<Avatar color="pink">JL</Avatar>} p="sm">
                <Flex direction="column">
                  <Text size="sm">
                    <Text span fw={700}>
                      JP Laparan
                    </Text>{" "}
                    added new tags to{" "}
                    <Text span c="blue">
                      Web Redesign 2024
                    </Text>
                  </Text>
                  <Text size="xs" c="dimmed">
                    53 mins ago
                  </Text>
                </Flex>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item leftSection={<Avatar color="violet">J</Avatar>} p="sm">
                <Flex direction="column">
                  <Text size="sm">
                    <Text span fw={700}>
                      Juswa
                    </Text>{" "}
                    requested access to{" "}
                    <Text span c="blue">
                      AirSpace
                    </Text>{" "}
                    project
                  </Text>
                  <Text size="xs" c="dimmed">
                    14 hours ago
                  </Text>
                </Flex>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          {/* Avatar */}
          <Menu>
            <Menu.Target>
              <UnstyledButton>
                <Avatar radius="xl" color="dark">
                  M
                </Avatar>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Group p="xs">
                <Avatar radius="xl" color="dark">
                  M
                </Avatar>
                <Flex direction="column">
                  <Text>Malupiton</Text>
                  <Text size="xs" c="dimmed">
                    kupalkababoss@mail.com
                  </Text>
                </Flex>
              </Group>
              <Menu.Divider />
              <Menu.Label>Application</Menu.Label>
              <Menu.Item
                leftSection={
                  <IconSettings style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Settings
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconMessageCircle
                    style={{ width: rem(14), height: rem(14) }}
                  />
                }
              >
                Messages
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconPhoto style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Gallery
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconSearch style={{ width: rem(14), height: rem(14) }} />
                }
                rightSection={
                  <Text size="xs" c="dimmed">
                    ⌘K
                  </Text>
                }
              >
                Search
              </Menu.Item>
              <Menu.Divider />
              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item
                leftSection={
                  <IconArrowsLeftRight
                    style={{ width: rem(14), height: rem(14) }}
                  />
                }
              >
                Transfer my data
              </Menu.Item>
              <Menu.Item
                color="red"
                leftSection={
                  <IconTrash style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Delete my account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Flex>
    </AppShell.Header>
  );
}
