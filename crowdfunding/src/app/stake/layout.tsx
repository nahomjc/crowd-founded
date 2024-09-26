import { Box } from "@mantine/core";
import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Nav";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Header />
      <main>{children}</main>
      <Navigation />
    </Box>
  );
}
