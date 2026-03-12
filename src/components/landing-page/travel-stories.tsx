"use client";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Time01Icon } from "@hugeicons/core-free-icons";
import stories from "@/helpers/stories.json";

export const TravelStoriesSection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-source-serif text-roam-go-forest mb-6"
            >
              Latest{" "}
              <span className="font-dancing-script text-roam-go-subtext">
                Travel Stories
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-roam-go-subtext"
            >
              Get inspired by our latest travel guides, tips, and stories from
              around the globe.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 font-semibold text-roam-go-button hover:text-roam-go-forest transition-colors group"
          >
            View All Articles
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-roam-go-bone/30 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between text-sm text-roam-go-subtext mb-4">
                  <span>{story.date}</span>
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon icon={Time01Icon} className="w-4 h-4" />
                    {story.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-roam-go-forest mb-3 group-hover:text-roam-go-button transition-colors line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-roam-go-subtext line-clamp-3 mb-6">
                  {story.excerpt}
                </p>
                <div className="flex items-center gap-2 font-semibold text-roam-go-forest group-hover:text-roam-go-button transition-colors">
                  Read More
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
