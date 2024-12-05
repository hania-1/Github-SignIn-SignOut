"use client";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function SignOutPage() {
  const [message, setMessage] = useState("");

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage("Successfully signed out!");
    } catch (err) {
      console.error("Sign out error:", err);
      setMessage("Error signing out. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 animate-fadeIn">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Out</h1>
        <button
          onClick={handleSignOut}
          className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition ease-in-out duration-300 transform hover:scale-105"
        >
          Sign Out
        </button>
        {message && <div className="mt-4 text-center text-green-600">{message}</div>}
      </div>
    </div>
  );
}