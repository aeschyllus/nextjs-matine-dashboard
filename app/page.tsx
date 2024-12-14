import { Text } from "@mantine/core";
import Summary from "./_components/Summary";
import HighlightAndEarnings from "./_components/HighlightsAndEarnings";

export default function Home() {
  return (
    <>
      <Text size="xl">Dashboard</Text>
      <Text size="sm" c="dimmed">
        Central hub for personal customization
      </Text>

      <Summary />
      <HighlightAndEarnings />
    </>
  );
}
