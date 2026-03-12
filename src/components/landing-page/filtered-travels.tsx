"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Location04Icon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import trips from "@/helpers/destination.json";

const filters = ["Adventures", "Hike", "Group", "Solo", "Romantic"];

export const FilteredTravelsSection = () => {
  const [activeFilter, setActiveFilter] = useState("Adventures");

  const filteredTrips = activeFilter
    ? trips.filter((trip) => trip.category === activeFilter).slice(0, 3)
    : trips.slice(0, 3);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-16 text-center">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:w-[70%] w-full gap-6 sm:gap-0 overflow-x-scroll sm:overflow-x-clip px-[3px] border-b-2 border-b-roam-go-mist mt-8 flex justify-between"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-6 py-2 rounded-t-xl font-semibold text-sm transition-all duration-300",
                  activeFilter === filter
                    ? "bg-roam-go-forest/80 text-white shadow-lg shadow-roam-go-forest/20 scale-105"
                    : "bg-roam-go-bone text-roam-go-subtext hover:bg-gray-200",
                )}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTrips.map((trip) => (
              <motion.div
                key={trip.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-roam-go-forest">
                    {trip.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-roam-go-forest flex items-center gap-1 shadow-sm">
                    <HugeiconsIcon
                      icon={StarIcon}
                      className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                    {trip.rating}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-roam-go-subtext text-sm font-medium mb-3">
                    <HugeiconsIcon icon={Location04Icon} className="w-4 h-4" />
                    {trip.location}
                  </div>
                  <h3 className="text-xl font-bold text-roam-go-forest mb-4 group-hover:text-roam-go-button transition-colors">
                    {trip.title}
                  </h3>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                    <div className="text-roam-go-subtext text-sm">
                      Starting from
                    </div>
                    <div className="text-xl font-bold text-roam-go-forest">
                      {trip.price}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
