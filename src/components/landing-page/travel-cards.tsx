"use client";
import { motion } from "motion/react";
import offerings from "@/helpers/offerings.json";

export const TravelCardsSection = () => {
  return (
    <section className="py-24 bg-roam-go-bone relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-source-serif text-roam-go-forest mb-6"
            >
              We Provide The{" "}
              <span className="font-dancing-script text-roam-go-subtext">
                Best Services
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-roam-go-subtext leading-relaxed"
            >
              Experience unparalleled service on your next adventure. From
              curated itineraries to exclusive access, we handle every detail so
              you can focus on making memories.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <h3 className="text-2xl font-source-serif text-roam-go-forest mb-4 group-hover:text-roam-go-button transition-colors">
                {pkg.title}
              </h3>
              <p className="text-roam-go-subtext font-light font-figtree text-sm leading-relaxed">
                {pkg.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
