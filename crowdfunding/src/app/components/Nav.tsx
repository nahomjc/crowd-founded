"use client";
import { Carousel } from "@mantine/carousel";
import {
  IconHome,
  IconSearch,
  IconMenu,
  IconCheck,
  IconFlag,
  IconHome2,
  IconWallet,
  IconUserBolt,
  IconStars,
  IconUserPentagon,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className=" bg-white border-t fixed bottom-0 left-0 right-0">
      <ul className="flex justify-around p-2">
        <li>
          <Link href="/" className="flex flex-col items-center text-primary">
            <IconHome2 size={24} />
            <span className="text-xs">Properties</span>
          </Link>
        </li>
        <li>
          <Link
            href="/stake/wallet"
            className="flex flex-col items-center text-primary"
          >
            <IconWallet size={24} />
            <span className="text-xs">Wallet</span>
          </Link>
        </li>
        <li>
          <Link
            href="/stake/portfolio"
            className="flex flex-col items-center text-primary"
          >
            <IconUserBolt size={24} />
            <span className="text-xs">My Proftfolio</span>
          </Link>
        </li>
        <li>
          <Link
            href="/stake/rewards"
            className="flex flex-col items-center text-primary"
          >
            <IconStars size={24} />
            <span className="text-xs">Rewards</span>
          </Link>
        </li>
        <li>
          <Link
            href="/stake/profile"
            className="flex flex-col items-center text-gray-500"
          >
            <IconUserPentagon size={24} />
            <span className="text-xs">Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
