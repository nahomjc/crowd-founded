import Image from "next/image";
import Header from "./components/Header";

import { Flex } from "@mantine/core";
import Nav from "./components/PropertyCard";
import PropertyCard from "./components/PropertyCard";
import Navigation from "./components/Nav";
export default function Home() {
  return (
    <div>
      <Header />
      <PropertyCard />
      <Navigation />
    </div>
  );
}
