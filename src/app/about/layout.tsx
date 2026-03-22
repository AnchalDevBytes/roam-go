import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | RoamGo, Premium Travel Agency",
  description:
    "Learn more about RoamGo, our mission to provide sustainable and authentic travel experiences, and the team behind your unforgettable journeys.",

  keywords: [
    "About RoamGo",
    "RoamGo Travel Agency",
    "RoamGo Tour Packages",
    "RoamGo Vacation Planning",
    "RoamGo Travel Services",
    "RoamGo Best Travel Deals",
    "RoamGo Premium Travel Experiences",
    "RoamGo Jharkhand Travel Agency",
  ],

  openGraph: {
    title: "About Us | RoamGo, Premium Travel Agency",
    description:
      "Learn more about RoamGo, our mission to provide sustainable and authentic travel experiences, and the team behind your unforgettable journeys.",
    url: "https://roam-go.anchal.tech/about",
    siteName: "RoamGo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/about.png",
        width: 1200,
        height: 630,
        alt: "About RoamGo Travel Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | RoamGo, Premium Travel Agency",
    description:
      "Learn more about RoamGo, our mission to provide sustainable and authentic travel experiences, and the team behind your unforgettable journeys.",
    images: ["/about.png"],
  },

  alternates: {
    canonical: "https://roam-go.anchal.tech/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
