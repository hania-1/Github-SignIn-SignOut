// app/layout.tsx
'use client';
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Add any custom head elements, like metadata or fonts */}
      </head>
      <body>
        <SessionProvider>
          {children} {/* All components will have access to the session */}
        </SessionProvider>
      </body>
    </html>
  );
}
