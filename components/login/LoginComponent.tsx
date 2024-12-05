"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    try {
      setMessage("Signing in with GitHub...");
      await signIn("github");
    } catch (err) {
      console.error("Sign in error:", err);
      setMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 animate-fadeIn">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h1>
        <button
          onClick={handleSignIn}
          className="w-full bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition ease-in-out duration-300 transform hover:scale-105"
        >
          Sign in with GitHub
        </button>
        {message && <div className="mt-4 text-center text-blue-600">{message}</div>}
      </div>
    </div>
  );
}