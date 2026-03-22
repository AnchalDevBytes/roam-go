import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Destinations | RoamGo — Curated Travel Packages",
  description:
    "Discover your next adventure with RoamGo. Explore our curated list of destinations, authentic traveler stories, and find the perfect journey tailored to your desires.",

  keywords: [
    "RoamGo Destinations",
    "RoamGo Travel Packages",
    "RoamGo Vacation Planning",
    "RoamGo Travel Services",
    "RoamGo Best Travel Deals",
    "RoamGo Premium Travel Experiences",
    "RoamGo Jharkhand Travel Agency",
  ],

  openGraph: {
    title: "Explore Destinations | RoamGo — Curated Travel Packages",
    description:
      "Discover your next adventure with RoamGo. Explore our curated list of destinations, authentic traveler stories, and find the perfect journey tailored to your desires.",
    url: "https://roam-go.anchal.tech/destinations",
    siteName: "RoamGo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/destinations.png",
        width: 1200,
        height: 630,
        alt: "RoamGo Destinations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Explore Destinations | RoamGo — Curated Travel Packages",
    description:
      "Discover your next adventure with RoamGo. Explore our curated list of destinations, authentic traveler stories, and find the perfect journey tailored to your desires.",
    images: ["/destinations.png"],
  },

  alternates: {
    canonical: "https://roam-go.anchal.tech/destinations",
  },
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
