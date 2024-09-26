"use client";
import { useState } from "react";
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  PieChart,
  BarChart,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PortfolioDashboard() {
  const [portfolioValue, setPortfolioValue] = useState(250000); // in cents
  const [portfolioGrowth, setPortfolioGrowth] = useState(1250); // in cents
  const [portfolioGrowthPercentage, setPortfolioGrowthPercentage] =
    useState(0.05);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount / 100);
  };

  const investments = [
    { name: "Residential Complex A", value: 100000, growth: 0.08 },
    { name: "Commercial Building B", value: 75000, growth: 0.06 },
    { name: "Industrial Park C", value: 50000, growth: 0.04 },
    { name: "Retail Space D", value: 25000, growth: 0.07 },
  ];

  const performanceData = [
    { month: "Jan", value: 240000 },
    { month: "Feb", value: 242000 },
    { month: "Mar", value: 244000 },
    { month: "Apr", value: 246000 },
    { month: "May", value: 248000 },
    { month: "Jun", value: 250000 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white p-4 shadow flex items-center">
        <Link href="/wallet" className="text-gray-600 hover:text-primary mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold text-primary">Portfolio Dashboard</h1>
      </header>

      <main className="flex-grow p-4">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Portfolio Overview</h2>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-600">Total Value</p>
              <p className="text-2xl font-bold">
                {formatCurrency(portfolioValue)}
              </p>
            </div>
            <div
              className={`flex items-center ${
                portfolioGrowth >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {portfolioGrowth >= 0 ? (
                <TrendingUp size={24} />
              ) : (
                <TrendingDown size={24} />
              )}
              <span className="ml-1 font-semibold">
                {portfolioGrowth >= 0 ? "+" : "-"}
                {formatCurrency(Math.abs(portfolioGrowth))} (
                {(portfolioGrowthPercentage * 100).toFixed(2)}%)
              </span>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary"
              style={{ width: `${(portfolioGrowthPercentage + 1) * 50}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Portfolio Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value) => formatCurrency(Number(value))}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <PieChart size={20} className="mr-2" />
              Asset Allocation
            </h3>
            <div className="space-y-4">
              {investments.map((investment, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm">{investment.name}</span>
                  <span className="text-sm font-semibold">
                    {((investment.value / portfolioValue) * 100).toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BarChart size={20} className="mr-2" />
              Performance
            </h3>
            <div className="space-y-4">
              {investments.map((investment, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm">{investment.name}</span>
                  <span
                    className={`text-sm font-semibold ${
                      investment.growth >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {investment.growth >= 0 ? "+" : "-"}
                    {(Math.abs(investment.growth) * 100).toFixed(2)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <h3 className="text-lg font-semibold p-6 pb-4">Recent Investments</h3>
          <div className="divide-y">
            {investments.map((investment, index) => (
              <div
                key={index}
                className="p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <div>
                  <p className="font-semibold">{investment.name}</p>
                  <p className="text-sm text-gray-600">
                    {formatCurrency(investment.value)}
                  </p>
                </div>
                <ArrowUpRight size={20} className="text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <button className="w-full bg-primary text-white p-3 rounded-md font-semibold mt-6 flex items-center justify-center">
          <PieChart size={20} className="mr-2" />
          View Detailed Analytics
        </button>
      </main>
    </div>
  );
}
