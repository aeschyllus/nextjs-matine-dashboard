"use client";

import { Grid, Paper, Text } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";

export default function Summary() {
  return (
    <Grid my={24} align="stretch">
      <Grid.Col span={{ base: 12, md: 4 }}>
        <Grid>
          <Grid.Col span={6}>
            <Paper shadow="sm" p="xl" radius="lg" withBorder>
              <IconBrandLinkedin size={48} className="mb-4 ms-[-4px]" />
              <Text size="xl" fw={700}>
                9.3k
              </Text>
              <Text size="sm" c="dimmed">
                Amazing mates
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper shadow="sm" p="xl" radius="lg" withBorder h="100%">
              <IconBrandYoutube size={48} className="mb-4 ms-[-4px]" />
              <Text size="xl" fw={700}>
                24k
              </Text>
              <Text size="sm" c="dimmed">
                Lesson Views
              </Text>
            </Paper>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={6}>
            <Paper shadow="sm" p="xl" radius="lg" withBorder>
              <IconBrandInstagram size={48} className="mb-4 ms-[-4px]" />
              <Text size="xl" fw={700}>
                608
              </Text>
              <Text size="sm" c="dimmed">
                New subscribers
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper shadow="sm" p="xl" radius="lg" withBorder>
              <IconBrandTiktok size={48} className="mb-4 ms-[-4px]" />
              <Text size="xl" fw={700}>
                2.5k
              </Text>
              <Text size="sm" c="dimmed">
                Stream audience
              </Text>
            </Paper>
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 8 }}>
        <Paper shadow="sm" p="xl" radius="lg" className="h-full" withBorder>
          <Text size="xl" fw={700}>
            Connect Today & Join
            <br />
            the{" "}
            <Text c="blue" fw={700} span>
              KeenThemes Network
            </Text>
          </Text>
          <Text className="!mt-4" c="dimmed">
            Enhance your projects with premium themes and
            <br />
            templates. Join the KeenThemes community today
            <br />
            for top-quality designs and resources.
          </Text>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
