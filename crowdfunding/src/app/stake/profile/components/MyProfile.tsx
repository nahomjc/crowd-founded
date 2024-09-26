"use client";
import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Bell,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function ProfileManagement() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    notificationsEnabled: true,
    twoFactorEnabled: false,
  });

  const handleToggle = (
    setting: "notificationsEnabled" | "twoFactorEnabled"
  ) => {
    setUser((prevUser) => ({
      ...prevUser,
      [setting]: !prevUser[setting],
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white p-4 shadow flex items-center">
        <Link href="/wallet" className="text-gray-600 hover:text-primary mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold text-primary">Profile Settings</h1>
      </header>

      <main className="flex-grow p-4">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full mr-4">
              <img
                src={
                  "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                className="w-20 h-20 rounded-full object-cover"
                alt="Property"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          <button className="w-full bg-primary text-white p-2 rounded-md font-semibold">
            Edit Profile Picture
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <Link
            href="/profile/personal-info"
            className="flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <div className="flex items-center">
              <User size={20} className="text-gray-500 mr-3" />
              <span>Personal Information</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </Link>
          <Link
            href="/profile/email"
            className="flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <div className="flex items-center">
              <Mail size={20} className="text-gray-500 mr-3" />
              <span>Email Address</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </Link>
          <Link
            href="/profile/password"
            className="flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <div className="flex items-center">
              <Lock size={20} className="text-gray-500 mr-3" />
              <span>Change Password</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Bell size={20} className="text-gray-500 mr-3" />
              <span>Push Notifications</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={user.notificationsEnabled}
                onChange={() => handleToggle("notificationsEnabled")}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Lock size={20} className="text-gray-500 mr-3" />
              <span>Two-Factor Authentication</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={user.twoFactorEnabled}
                onChange={() => handleToggle("twoFactorEnabled")}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <Link
            href="/profile/payment-methods"
            className="flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <div className="flex items-center">
              <CreditCard size={20} className="text-gray-500 mr-3" />
              <span>Payment Methods</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </Link>
          <Link
            href="/help"
            className="flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <div className="flex items-center">
              <HelpCircle size={20} className="text-gray-500 mr-3" />
              <span>Help & Support</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </Link>
        </div>

        <button className="w-full bg-red-500 text-white p-3 rounded-md font-semibold flex items-center justify-center">
          <LogOut size={20} className="mr-2" />
          Log Out
        </button>
      </main>
    </div>
  );
}
