import type { Metadata } from "next";
import {
  Dancing_Script,
  Figtree,
  Geist_Mono,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Roam Go",
  description: "Roam Go (Travel Service website)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${sourceSerif.variable} ${geistMono.variable} ${dancingScript.variable} antialiased`}
      >
        <div className="min-h-screen relative font-figtree">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
