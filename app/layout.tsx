import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Personal portfolio and biodata",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen`}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}