"use client";
import testimonials from "@/helpers/testimonial.json";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { QuoteUpIcon, StarIcon } from "@hugeicons/core-free-icons";
import { Marquee } from "@/components/marquee";
import Image from "next/image";

export const TestimonialsSection = () => {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-roam-go-bone relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white mb-6 border border-gray-100 shadow-sm"
          >
            <span className="text-sm font-medium text-roam-go-forest">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-source-serif text-roam-go-forest mb-6"
          >
            What Our{" "}
            <span className="font-dancing-script text-roam-go-subtext">
              Travelers Say
            </span>
          </motion.h2>
        </div>

        <Marquee className="sm:py-8 -my-4" innerClassName="gap-3 sm:gap-6">
          {marqueeItems.map((test, i) => (
            <motion.div
              key={i}
              className="relative bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-[300px] md:w-[320px] shrink-0 border border-gray-100/50 flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] duration-300 group"
            >
              <HugeiconsIcon
                icon={QuoteUpIcon}
                className="absolute top-6 right-6 w-10 h-10 text-roam-go-mist/40"
              />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <HugeiconsIcon
                    key={j}
                    icon={StarIcon}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              <p className="text-roam-go-subtext mb-8 relative z-10 text-base leading-relaxed">
                "{test.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <Image
                  src={test.image}
                  alt={test.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-roam-go-mist"
                />
                <div>
                  <h4 className="font-source-serif text-roam-go-forest">
                    {test.name}
                  </h4>
                  <p className="text-xs font-light text-roam-go-subtext">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
