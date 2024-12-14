"use client";

import { BarChart } from "@mantine/charts";
import {
  Badge,
  Divider,
  Flex,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconArrowDown,
  IconArrowUp,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBuildingStore,
} from "@tabler/icons-react";

const data = [
  { month: "January", Metronic: 1200, Bundle: 900, MetronicNest: 200 },
];

const data2 = [
  {
    icon: <IconBuildingStore />,
    name: "Online Store",
    value: "$172k",
    percentage: "3.9%",
    percentageIcon: <IconArrowUp className="stroke-green-500" />,
  },
  {
    icon: <IconBrandFacebook />,
    name: "Facebook",
    value: "$85k",
    percentage: "0.7%",
    percentageIcon: <IconArrowDown className="stroke-red-500" />,
  },
  {
    icon: <IconBrandInstagram />,
    name: "Instagram",
    value: "$36k",
    percentage: "8.2%",
    percentageIcon: <IconArrowUp className="stroke-green-500" />,
  },
];

export default function HighlightAndEarnings() {
  return (
    <Grid align="stretch">
      <Grid.Col span={{ base: 12, md: 4 }}>
        <Paper shadow="sm" p="xl" radius="lg" h="100%" withBorder>
          <Text size="lg" fw={700} mb={24}>
            Highlights
          </Text>
          <Text size="sm" c="dimmed" mb={8}>
            All time sales
          </Text>
          <Text fw={700} className="!text-3xl" mb={8}>
            $295.7k
          </Text>
          <BarChart
            h={10}
            data={data}
            dataKey="month"
            type="stacked"
            orientation="vertical"
            series={[
              { name: "Metronic", color: "green" },
              { name: "Bundle", color: "orange" },
              { name: "MetronicNest", color: "violet" },
            ]}
            gridAxis="none"
            withXAxis={false}
            withYAxis={false}
            mb={12}
          />
          <Group>
            <Flex align="center" gap="4">
              <Badge color="green" size="xs" circle />
              <Text>Metronic</Text>
            </Flex>
            <Flex align="center" gap="4">
              <Badge color="orange" size="xs" circle />
              <Text>Bundle</Text>
            </Flex>
            <Flex align="center" gap="4">
              <Badge color="violet" size="xs" circle />
              <Text>MetronicNest</Text>
            </Flex>
          </Group>

          <Divider my={24} />

          <Stack>
            {data2.map((data) => (
              <Group
                key={data.percentage}
                align="center"
                justify="space-between"
              >
                <Group>
                  {data.icon}
                  <Text>{data.name}</Text>
                </Group>
                <Group>
                  <Text>{data.value}</Text>
                  <Group gap={1} align="center">
                    {data.percentageIcon}
                    <Text>{data.percentage}</Text>
                  </Group>
                </Group>
              </Group>
            ))}
          </Stack>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 8 }}>
        <Paper shadow="sm" p="xl" radius="lg" h="100%" withBorder>
          <Text fw={700}>Earnings</Text>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
