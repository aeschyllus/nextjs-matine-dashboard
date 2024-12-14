import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";

import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import * as Layout from "./_components/layout/RootLayout";

export const metadata: Metadata = {
  title: "Mantine",
  description: "Next.js template using Mantine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto">
          <Layout.default>{children}</Layout.default>
        </MantineProvider>
      </body>
    </html>
  );
}
