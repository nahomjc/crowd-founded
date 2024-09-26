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

export default function PropertyCard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 mb-12">
      <main className="flex-grow overflow-y-auto p-4">
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div className="max-w-[300px] w-full mx-2 bg-white rounded-lg overflow-hidden shadow-lg mt-10 ml-3">
                {/* Image */}
                <img
                  className="w-full h-48 object-cover"
                  src="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
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
                <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
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
