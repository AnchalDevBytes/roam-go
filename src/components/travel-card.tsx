"use client";
import { motion, AnimatePresence } from "motion/react";
import destinations from "@/helpers/destination.json";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location04Icon, StarIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

type Destination = (typeof destinations)[0];

interface TravelCardProps {
  categories: string[];
  filtered: Destination[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const TravelCard = ({
  categories,
  filtered,
  activeCategory,
  setActiveCategory,
}: TravelCardProps) => {
  return (
    <div className="flex flex-col items-center gap-20">
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
                <h3 className="text-[24px] font-source-serif text-roam-go-forest mb-4 group-hover:text-roam-go-button transition-colors">
                  {dest.title}
                </h3>
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                  <div>
                    <div className="text-roam-go-subtext text-sm mb-1 leading-relaxed">
                      Starting from
                    </div>
                    <div className="text-xl font-medium text-roam-go-forest">
                      {dest.price}
                    </div>
                  </div>
                  <Link
                    href={`/destinations/${dest.id}`}
                    className="group flex items-center justify-center gap-2 bg-white text-roam-go-forest border-2 border-roam-go-forest/10 px-4 py-2 rounded-full font-semibold text-sm hover:border-roam-go-forest hover:bg-roam-go-bone transition-all duration-300"
                  >
                    View Details
                    <span className="text-roam-go-mist group-hover:text-roam-go-forest transition-colors">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TravelCard;
