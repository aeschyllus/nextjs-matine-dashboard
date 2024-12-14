"use client";

import { BarChart } from "@mantine/charts";
import { Badge, Divider, Flex, Grid, Group, Paper, Text } from "@mantine/core";

const data = [
  { month: "January", Metronic: 1200, Bundle: 900, MetronicNest: 200 },
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

          <Group></Group>
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
