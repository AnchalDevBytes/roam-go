"use client";
import { motion } from "motion/react";
import offerings from "@/helpers/offerings.json";
import { Marquee } from "@/components/marquee";

export const TravelServiceSection = () => {
  const marqueeItems = [...offerings, ...offerings];

  return (
    <section
      id="services"
      className="py-32 bg-roam-go-bone relative overflow-hidden"
    >
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

        <Marquee className="py-8 -my-4" innerClassName="gap-4 sm:gap-8">
          {marqueeItems.map((pkg, i) => (
            <div
              key={i}
              className="bg-[#FDFDFC] p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-[300px] md:w-[320px] shrink-0 border border-gray-100/50 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] duration-300 group"
            >
              <div className="relative mb-8 pb-5">
                <div className="w-[210px] h-[120px] rounded-[100px] border-2 border-roam-go-forest overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-roam-go-forest text-white flex items-center justify-center font-bold font-figtree border-[3px] border-white shadow-md z-10 text-base">
                  {String((i % offerings.length) + 1).padStart(2, "0")}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-source-serif text-roam-go-forest mb-3 transition-colors">
                {pkg.title}
              </h3>
              <p className="text-roam-go-subtext font-light font-figtree text-sm leading-relaxed px-2">
                {pkg.subtitle}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
