"use client";
import { motion } from "motion/react";
import galleryImages from "@/helpers/galleryImage.json";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const GallerySection = () => {
  return (
    <section className="py-28 sm:py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-roam-go-bone mb-6"
          >
            <span className="text-sm font-medium text-roam-go-forest">
              Visual Journey
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl text-roam-go-forest mb-6 font-source-serif"
          >
            Glimpse into the{" "}
            <span className="text-roam-go-subtext font-dancing-script">
              Beautiful World
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 2, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-roam-go-subtext max-w-xl leading-relaxed"
          >
            Explore breathtaking landscapes, vibrant cities, and hidden gems
            captured by our travelers across the globe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 lg:gap-6">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "relative overflow-hidden rounded-3xl group cursor-pointer",
                image.className,
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-roam-go-forest/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-source-serif text-xl">
                  {image.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
