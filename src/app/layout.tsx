import type { Metadata } from "next";
import {
  Dancing_Script,
  Figtree,
  Geist_Mono,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

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
  metadataBase: new URL("https://roam-go.anchal.tech"),

  title: {
    default: "RoamGo — Best Travel Agency & Premium Tour Packages",
    template: "%s | RoamGo",
  },

  description:
    "Experience seamless travel planning with RoamGo. From exotic vacations to personalized itineraries, we offer the best travel services. RoamGo is also a modern, SEO-optimized template designed for travel agencies to build their digital presence.",

  keywords: [
    "travel agency",
    "tour packages",
    "vacation planning",
    "travel template",
    "next.js travel site",
    "RoamGo",
    "Zarasana",
    "travel services",
    "best travel deals",
    "premium travel experiences",
    "Jharkhand travel agency",
  ],

  authors: [{ name: "Anchal Raj", url: "https://github.com/AnchalDevBytes/" }],

  creator: "AnchalDevBytes",
  publisher: "Zarasana",

  openGraph: {
    title: "RoamGo — Travel the World with Ease",
    description:
      "Planning your next journey? RoamGo offers curated travel packages and premium services for adventurers and families alike. Check out our latest deals!",
    url: "https://roam-go.anchal.tech",
    siteName: "RoamGo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/roam-go.png",
        width: 1200,
        height: 630,
        alt: "RoamGo Travel Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RoamGo | Best Travel Agency & Tour Packages",
    description:
      "Explore the world with RoamGo's premium travel services and vacation planning tools.",
    images: ["/roam-go.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://zarasana.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          figtree.variable,
          sourceSerif.variable,
          geistMono.variable,
          dancingScript.variable,
          "antialiased",
        )}
      >
        <div className="min-h-screen relative font-figtree">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
