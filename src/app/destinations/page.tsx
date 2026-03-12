"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Location04Icon,
  StarIcon,
  BookOpen01Icon,
} from "@hugeicons/core-free-icons";
import destinations from "@/helpers/destination.json";
import { cn } from "@/lib/utils";

const categories = ["All", "Adventures", "Hike", "Group", "Solo", "Romantic"];

type Destination = (typeof destinations)[0];

export default function DestinationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sm:w-[70%] w-full gap-6 sm:gap-0 overflow-x-scroll sm:overflow-x-clip px-[3px] border-b-2 border-b-roam-go-mist mt-12 flex justify-between"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-t-xl font-semibold text-sm transition-all duration-300",
                  activeCategory === cat
                    ? "bg-roam-go-forest text-white shadow-lg shadow-roam-go-forest/20 scale-105"
                    : "bg-roam-go-bone text-roam-go-subtext hover:bg-gray-100",
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((dest) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-roam-go-forest">
                    {dest.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-roam-go-forest flex items-center gap-1 shadow-sm">
                    <HugeiconsIcon
                      icon={StarIcon}
                      className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                    {dest.rating}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-roam-go-subtext text-sm font-medium mb-3">
                    <HugeiconsIcon icon={Location04Icon} className="w-4 h-4" />
                    {dest.location}
                  </div>
                  <h3 className="text-xl font-bold text-roam-go-forest mb-4 group-hover:text-roam-go-button transition-colors">
                    {dest.title}
                  </h3>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                    <div>
                      <div className="text-roam-go-subtext text-sm mb-1">
                        Starting from
                      </div>
                      <div className="text-xl font-bold text-roam-go-forest">
                        {dest.price}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedDestination(dest)}
                      className="bg-roam-go-bone text-roam-go-forest px-4 py-2 rounded-full font-bold text-sm hover:bg-roam-go-forest hover:text-white transition-colors duration-300 shadow-sm border border-gray-200"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedDestination && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDestination(null)}
              className="fixed inset-0 bg-roam-go-pine/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl z-50"
            >
              <div className="relative h-80 sm:h-96">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                >
                  ✕
                </button>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2 font-medium">
                    <HugeiconsIcon
                      icon={Location04Icon}
                      className="w-5 h-5 text-roam-go-sand"
                    />
                    {selectedDestination.location}
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-bold font-source-serif mb-2">
                    {selectedDestination.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <span className="bg-roam-go-forest/90 px-3 py-1 rounded-full">
                      {selectedDestination.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <HugeiconsIcon
                        icon={StarIcon}
                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                      />
                      {selectedDestination.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-roam-go-forest mb-4">
                        Overview
                      </h3>
                      <p className="text-lg text-roam-go-subtext leading-relaxed">
                        {selectedDestination.description}
                      </p>
                    </div>

                    <div className="bg-roam-go-bone rounded-2xl p-8 relative">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <HugeiconsIcon
                          icon={BookOpen01Icon}
                          className="w-24 h-24"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-roam-go-forest mb-4 relative z-10">
                        Traveler's Experience
                      </h3>
                      <p className="text-lg italic text-roam-go-subtext leading-relaxed relative z-10">
                        "{selectedDestination.story}"
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl p-6 sticky top-6">
                      <div className="text-roam-go-subtext font-medium mb-1">
                        Starting price
                      </div>
                      <div className="text-4xl font-black text-roam-go-forest mb-6">
                        {selectedDestination.price}
                      </div>

                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                          <span className="text-roam-go-subtext">Duration</span>
                          <span className="font-bold text-roam-go-forest">
                            7 Days
                          </span>
                        </div>
                        <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                          <span className="text-roam-go-subtext">
                            Group Size
                          </span>
                          <span className="font-bold text-roam-go-forest">
                            Up to 12
                          </span>
                        </div>
                        <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                          <span className="text-roam-go-subtext">Guide</span>
                          <span className="font-bold text-roam-go-forest">
                            Included
                          </span>
                        </div>
                      </div>

                      <button className="w-full bg-roam-go-forest text-white py-4 rounded-xl font-bold text-lg hover:bg-roam-go-button transition-colors shadow-lg shadow-roam-go-forest/20">
                        Book this Trip
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
