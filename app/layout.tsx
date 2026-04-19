import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CursorGlow } from "@/components/ui/cursor-glow";
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
    >
      <body className="bg-[#05080b] font-semibold text-white" style={{overflowX:"hidden"}}>
        <Header />
        <CursorGlow />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
