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
import VerificationCard from "./VerificationCard";

export default function PropertyCard() {
  const randomImages = [
    "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1520608421741-68228b76b6df?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 mb-12 p-3">
      <VerificationCard />
      <main className="flex-grow overflow-y-auto p-4">
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div className="max-w-[330px] w-full mx-2 bg-white rounded-lg overflow-hidden shadow-lg mt-10 ">
                {/* Image */}
                <img
                  className="w-full h-48 object-cover"
                  src={
                    randomImages[
                      Math.floor(Math.random() * randomImages.length)
                    ]
                  }
                  alt="Property"
                />

                {/* Flex data */}
                <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
                  <span className="text-sm font-semibold">Studio</span>
                  <span className="text-sm font-semibold">#C3334</span>
                  <span className="flex items-center text-sm font-semibold text-green-600">
                    <IconCheck size={18} className="mr-1" />
                    Ready
                  </span>
                  <IconFlag size={18} className="text-blue-600" />
                </div>

                {/* Title and price */}
                <div className="px-4 py-2">
                  <h2 className="text-xl font-bold mb-2">
                    Modern Studio Apartment
                  </h2>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      $250,000
                    </span>
                    <span className="text-sm text-gray-600">23 investors</span>
                  </div>
                </div>

                {/* Additional info */}
                <div className="px-4 py-4 bg-gray-50 m-2">
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Yearly investment return
                      </span>
                      <span className="text-sm font-semibold">9.9%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-sm text-gray-600">Funded date</span>
                      <span className="text-sm font-semibold">
                        Sep 24, 2024
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">
            Investment Opportunities
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-4 flex items-center"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full mr-4">
                  <img
                    src={
                      randomImages[
                        Math.floor(Math.random() * randomImages.length)
                      ]
                    }
                    className="w-16 h-16 rounded-full object-cover"
                    alt="Property"
                  />
                </div>
                <div>
                  <p className="font-semibold">Commercial Building {i}</p>
                  <p className="text-sm text-gray-600">
                    High yield opportunity
                  </p>
                  <p className="text-sm text-primary">12% Expected ROI</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
