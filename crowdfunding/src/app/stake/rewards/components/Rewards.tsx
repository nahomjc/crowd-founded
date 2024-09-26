"use client";
import { useState } from "react";
import {
  ArrowLeft,
  Gift,
  Star,
  TrendingUp,
  Award,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function RewardsDashboard() {
  const [points, setPoints] = useState(5000);
  const [tier, setTier] = useState("Gold");

  const rewards = [
    {
      name: "Free Property Valuation",
      points: 1000,
      icon: <Star size={24} className="text-yellow-400" />,
    },
    {
      name: "1% Cashback on Next Investment",
      points: 2500,
      icon: <TrendingUp size={24} className="text-green-500" />,
    },
    {
      name: "VIP Property Tour",
      points: 5000,
      icon: <Award size={24} className="text-purple-500" />,
    },
  ];

  const recentActivities = [
    { action: "Investment Bonus", points: 500, date: "2024-06-15" },
    { action: "Referral Reward", points: 1000, date: "2024-06-10" },
    { action: "Monthly Loyalty Bonus", points: 250, date: "2024-06-01" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white p-4 shadow flex items-center">
        <Link href="/wallet" className="text-gray-600 hover:text-primary mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold text-primary">Rewards Dashboard</h1>
      </header>

      <main className="flex-grow p-4">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">Your Rewards</h2>
              <p className="text-sm text-gray-600">Current Tier: {tier}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">
                {points.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Points Balance</p>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary"
              style={{ width: `${(points / 10000) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {10000 - points} points until next tier
          </p>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <h3 className="text-lg font-semibold p-6 pb-4">Available Rewards</h3>
          <div className="divide-y">
            {rewards.map((reward, index) => (
              <div
                key={index}
                className="p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <div className="flex items-center">
                  {reward.icon}
                  <div className="ml-4">
                    <p className="font-semibold">{reward.name}</p>
                    <p className="text-sm text-gray-600">
                      {reward.points} points
                    </p>
                  </div>
                </div>
                <button
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    points >= reward.points
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={points < reward.points}
                >
                  Redeem
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <h3 className="text-lg font-semibold p-6 pb-4">Recent Activity</h3>
          <div className="divide-y">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.date}</p>
                </div>
                <p className="text-sm font-semibold text-green-600">
                  +{activity.points} points
                </p>
              </div>
            ))}
          </div>
        </div>

        <Link href="/rewards/history" className="block">
          <button className="w-full bg-primary text-white p-3 rounded-md font-semibold flex items-center justify-center">
            <Gift size={20} className="mr-2" />
            View Full Rewards History
            <ChevronRight size={20} className="ml-2" />
          </button>
        </Link>
      </main>
    </div>
  );
}
