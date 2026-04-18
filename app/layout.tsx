import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CursorGlow } from "@/components/cursor-glow";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alright",
  description:
    "hello, this is a portfolio shwcasing my projects, the teh that i use, my experince through the years to incurese my chancese getting a fucking job.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{
        color: "white",
        // cursor: "url('cursor-icon.png'), auto",
        fontWeight:"600"
      }}
    >
      <body className="bg-[#080c11]">
        <Header />
        <CursorGlow />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
