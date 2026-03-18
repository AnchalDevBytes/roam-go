"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Call02Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";

const travelers = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
];

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-roam-go-bone rounded-b-[3rem] lg:rounded-b-[5rem]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] bg-roam-go-mist/50 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -2, 2, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[60%] bg-green-100/40 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center pb-20 pt-32 lg:pt-36">
        <div className="flex flex-col items-start gap-8 z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-3 sm:gap-6"
          >
            <div className="flex -space-x-3 sm:-space-x-4">
              {travelers.map((src, i) => (
                <div
                  key={i}
                  className="sm:w-10 sm:h-10 w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200 shadow-sm"
                >
                  <Image
                    src={src}
                    alt="Traveler"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-roam-go-forest font-bold sm:text-base text-sm">
                200+
              </span>
              <span className="text-xs sm:text-sm text-roam-go-subtext font-medium">
                Happy Travelers
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl lg:text-7xl text-roam-go-forest leading-[1.1] tracking-tight font-source-serif"
          >
            Embrace the{" "}
            <span className="text-roam-go-subtext font-dancing-script">
              Extraordinary
            </span>
            <br /> Every Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-roam-go-subtext max-w-lg leading-relaxed"
          >
            Uncover hidden gems, experience vibrant cultures, and create
            memories that will last a lifetime. Your perfect adventure begins
            here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
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
            <Link
              href="#contact-us"
              className="group flex items-center justify-center gap-2 bg-white text-roam-go-forest border-2 border-roam-go-forest/10 px-8 py-4 rounded-full font-semibold text-lg hover:border-roam-go-forest hover:bg-roam-go-bone transition-all duration-300 hover:-translate-y-1"
            >
              Contact Us
              <HugeiconsIcon icon={Call02Icon} className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] lg:h-[500px] w-full mt-12 lg:mt-0 z-10"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop"
              alt="Beautiful travel destination"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-roam-go-forest/60 via-transparent to-transparent"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/20"
          >
            <div className="w-12 h-12 rounded-full bg-roam-go-mist flex items-center justify-center text-roam-go-forest font-bold text-xl">
              📍
            </div>
            <div>
              <p className="text-sm font-light text-roam-go-subtext font-source-serif">
                Popular Destination
              </p>
              <p className="text-2xl text-roam-go-forest font-dancing-script">
                Swiss Alps, Trip
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
