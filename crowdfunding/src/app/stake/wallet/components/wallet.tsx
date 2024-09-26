"use client";
import { useState } from "react";
import {
  IconWallet,
  IconArrowUpRight,
  IconArrowDownLeft,
  IconEyeDollar,
  IconCreditCard,
  IconCashBanknote,
  IconPlus,
  IconMinus,
  IconTrendingUp,
  IconSettings,
} from "@tabler/icons-react";
import Link from "next/link";

export default function UserWallet() {
  const [balance, setBalance] = useState(10000); // Initial balance in cents
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    const depositAmount = parseInt(amount);
    if (depositAmount > 0) {
      setBalance((prevBalance) => prevBalance + depositAmount);
      setAmount("");
      setShowDeposit(false);
    }
  };

  const handleWithdraw = () => {
    const withdrawAmount = parseInt(amount);
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
      setBalance((prevBalance) => prevBalance - withdrawAmount);
      setAmount("");
      setShowWithdraw(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white p-4 shadow flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">My Wallet</h1>
        <Link href="/" className="text-gray-600 hover:text-primary">
          <IconArrowUpRight size={24} />
        </Link>
      </header>

      <main className="flex-grow p-4">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <IconWallet size={32} className="text-primary" />
            <span className="text-2xl font-bold">
              ${(balance / 100).toFixed(2)}
            </span>
          </div>
          <p className="text-gray-600 text-sm">Available Balance</p>
        </div>

        <div className="flex justify-between mb-6">
          <button
            onClick={() => setShowDeposit(true)}
            className="bg-black  text-white p-3 rounded-full flex flex-col items-center justify-center w-16 h-16"
          >
            <IconPlus size={24} className="mb-1" />
            <span className="text-xs">Deposit</span>
          </button>
          <button
            onClick={() => setShowWithdraw(true)}
            className="bg-white text-black p-3 rounded-full flex flex-col items-center justify-center w-16 h-16"
          >
            <IconMinus size={24} className="mb-1" />
            <span className="text-xs">Withdraw</span>
          </button>
          <button
            onClick={() => {
              /* Implement invest functionality */
            }}
            className="bg-green-500 text-white p-3 rounded-full flex flex-col items-center justify-center w-16 h-16"
          >
            <IconTrendingUp size={24} className="mb-1" />
            <span className="text-xs">Invest</span>
          </button>
          <button
            onClick={() => {
              /* Implement settings functionality */
            }}
            className="bg-gray-500 text-white p-3 rounded-full flex flex-col items-center justify-center w-16 h-16"
          >
            <IconSettings size={24} className="mb-1" />
            <span className="text-xs">Settings</span>
          </button>
        </div>

        {(showDeposit || showWithdraw) && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              {showDeposit ? "Deposit Funds" : "Withdraw Funds"}
            </h2>
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Amount (USD)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600">
                  <IconEyeDollar size={18} />
                </span>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="0.00"
                />
              </div>
            </div>
            {showDeposit && (
              <div className="space-y-2 mb-4">
                <button className="w-full bg-gray-100 p-2 rounded-md flex items-center justify-between">
                  <span>Credit Card</span>
                  <IconCreditCard size={18} />
                </button>
                <button className="w-full bg-gray-100 p-2 rounded-md flex items-center justify-between">
                  <span>Bank Transfer</span>
                  <IconCashBanknote size={18} />
                </button>
              </div>
            )}
            <button
              onClick={showDeposit ? handleDeposit : handleWithdraw}
              className="w-full bg-primary text-white p-3 rounded-md font-semibold"
            >
              {showDeposit ? "Deposit" : "Withdraw"}
            </button>
          </div>
        )}

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
          <div className="bg-white rounded-lg shadow divide-y">
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="font-semibold">Deposit</p>
                <p className="text-sm text-gray-600">Jun 15, 2024</p>
              </div>
              <span className="text-green-600 font-semibold">+$500.00</span>
            </div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="font-semibold">Withdrawal</p>
                <p className="text-sm text-gray-600">Jun 10, 2024</p>
              </div>
              <span className="text-red-600 font-semibold">-$200.00</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
