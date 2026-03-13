"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import trips from "@/helpers/destination.json";
import TravelCard from "@/components/travel-card";

const filters = ["Adventures", "Hike", "Group", "Solo", "Romantic"];

export const FilteredTravelsSection = () => {
  const [activeFilter, setActiveFilter] = useState("Adventures");

  const filteredTrips = activeFilter
    ? trips.filter((trip) => trip.category === activeFilter).slice(0, 3)
    : trips.slice(0, 3);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center sm:mb-5 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-source-serif text-roam-go-forest mb-6"
          >
            Find Your{" "}
            <span className="font-dancing-script text-roam-go-subtext">
              Perfect Trip
            </span>
          </motion.h2>
        </div>

        <TravelCard
          categories={filters}
          filtered={filteredTrips}
          activeCategory={activeFilter}
          setActiveCategory={setActiveFilter}
        />

        <div className="mt-16 flex justify-center">
          <Link
            href="/destinations"
            className="group flex items-center justify-center gap-2 bg-roam-go-forest text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-roam-go-button transition-all duration-300 shadow-lg shadow-roam-go-forest/20 hover:shadow-xl hover:-translate-y-1"
          >
            Explore Destination
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
