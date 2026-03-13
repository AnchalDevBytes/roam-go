"use client";
import { useState } from "react";
import { motion } from "motion/react";
import destinations from "@/helpers/destination.json";
import TravelCard from "@/components/travel-card";

const categories = ["All", "Adventures", "Hike", "Group", "Solo", "Romantic"];

export default function DestinationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = destinations.filter(
    (d) => activeCategory === "All" || d.category === activeCategory,
  );

  return (
    <div className="w-full relative">
      <div className="pt-32 pb-16 lg:pt-40 px-6 container mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white mb-6 border border-gray-100 shadow-sm"
          >
            <span className="text-sm font-medium text-roam-go-forest">
              Explore The World
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-source-serif text-roam-go-forest mb-6"
          >
            Discover Your Next{" "}
            <span className="font-dancing-script text-roam-go-subtext">
              Destination
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-roam-go-subtext max-w-2xl"
          >
            Filter by your travel style, read inspiring stories from past
            travelers, and find the perfect journey tailored directly to your
            desires.
          </motion.p>
        </div>

        <TravelCard
          categories={categories}
          filtered={filtered}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
    </div>
  );
}
