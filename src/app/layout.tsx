import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marc | Portfolio",
  description:
    "Engineer shipping real products with an AI-forward toolchain — web apps, native mobile, scientific tools, LLM-native products.",
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
      <body className="relative flex min-h-full flex-col bg-bg text-ink">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
        >
          <div className="absolute -top-24 right-[-120px] h-[460px] w-[460px] rotate-12 bg-primary/15" />
          <div className="absolute top-[80px] right-[-40px] h-[360px] w-[360px] -rotate-6 bg-secondary/15" />
        </div>
        <Navbar />
        <main className="relative z-20 flex-1">{children}</main>
        <Footer />
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "7b1f840d934f47c187bf2b0bd90cb2f0"}'
        />
      </body>
    </html>
  );
}
