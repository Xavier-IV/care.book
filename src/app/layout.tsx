import { AuthKitProvider } from "@workos-inc/authkit-nextjs/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tadika Portal",
  description: "Manage your kindergarten branches and students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 min-h-screen flex items-center justify-center`}
      >
        <AuthKitProvider>
          <main className="w-full max-w-md p-6">{children}</main>
        </AuthKitProvider>
      </body>
    </html>
  );
}
