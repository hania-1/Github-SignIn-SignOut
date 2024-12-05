"use client"; // Make sure this file is treated as a client component

import { SessionWrapper } from "@/components/SessionWrapper"; // Import SessionWrapper component
import SignInPage from "@/components/login/LoginComponent"; // SignIn component
import SignOutPage from "@/components/login/SignOutComponent"; // SignOut component
import { useSession } from "next-auth/react"; // useSession hook


export default function Page() {
  const { data: session } = useSession(); // Fetch session from NextAuth
  const isAuthenticated = !!session?.user; // Check if the user is authenticated

  return (
    <SessionWrapper> {/* Ensure that the session is provided for the entire component tree */}
      <div>
        {isAuthenticated ? <SignOutPage /> : <SignInPage />} {/* Show components based on authentication */}
      </div>
    </SessionWrapper>
  );
}
