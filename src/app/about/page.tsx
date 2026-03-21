"use client";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  EarthIcon,
  Shield01Icon,
  UserGroupIcon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import { ContactSection } from "@/components/landing-page/contact-section";
import { Marquee } from "@/components/marquee";
import Image from "next/image";

const stats = [
  { value: "10K+", label: "Happy Travelers" },
  { value: "50+", label: "Countries Covered" },
  { value: "15+", label: "Years Experience" },
  { value: "99%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: EarthIcon,
    title: "Sustainable Travel",
    description:
      "We believe in preserving the beauty of our planet for future generations. All our tours are designed to minimize environmental impact.",
  },
  {
    icon: Shield01Icon,
    title: "Safety First",
    description:
      "Your security is our top priority. We partner only with verified local experts and provide 24/7 on-ground support.",
  },
  {
    icon: UserGroupIcon,
    title: "Local Expertise",
    description:
      "Experience destinations like a local. Our guides are passionate residents who share authentic stories and hidden gems.",
  },
  {
    icon: StarIcon,
    title: "Premium Quality",
    description:
      "From luxury accommodations to exclusive access, we deliver uncompromising quality in every aspect of your journey.",
  },
];

export default function AboutPage() {
  const marqueeStats = [...stats, ...stats, ...stats];

  return (
    <main className="min-h-screen bg-roam-go-bone pt-28">
      <section className="relative py-20 lg:py-32 overflow-hidden mx-4 sm:mx-8 md:mx-20 rounded-4xl md:rounded-[3rem] bg-roam-go-forest mt-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
            alt="Travelers exploring"
            fill
            className="object-cover opacity-30"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-linear-to-t from-roam-go-forest to-transparent" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-medium tracking-wide">
              Who We Are
            </span>
            <h1 className="text-5xl md:text-7xl font-source-serif text-white mb-6 leading-tight">
              Crafting{" "}
              <span className="font-dancing-script text-roam-go-mist">
                Unforgettable
              </span>{" "}
              <br /> Journeys.
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              We started with a simple vision: to make the world accessible,
              beautiful, and profoundly moving for every traveler seeking
              authentic experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-roam-go-bone overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <Marquee
            duration={30}
            className="sm:py-4"
            innerClassName="gap-10 sm:gap-40"
          >
            {marqueeStats.map((stat, i) => (
              <div key={i} className="text-center shrink-0">
                <div className="text-2xl md:text-3xl font-source-serif text-roam-go-forest mb-2">
                  {stat.value}
                </div>
                <div className="text-roam-go-subtext font-light text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section className="py-24 bg-white rounded-t-[3rem] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse">
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-4/5 rounded-4xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  alt="Our Team"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 p-6 bg-roam-go-forest rounded-4xl text-white shadow-2xl hidden md:block">
                <h4 className="font-source-serif text-2xl mb-2">Since 2009</h4>
                <p className="font-light text-gray-300 text-sm">
                  Pioneering modern travel experiences with passion and care.
                </p>
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-4xl md:text-5xl font-source-serif text-roam-go-forest mb-6">
                  Our{" "}
                  <span className="font-dancing-script text-roam-go-subtext">
                    Core Values
                  </span>
                </h2>
                <p className="text-roam-go-subtext text-lg leading-relaxed mb-12">
                  Roam Go isn't just a travel agency. It's a collective of
                  explorers, planners, and dreamers dedicated to bringing you
                  closer to the world's wonders. Here's what drives us every
                  single day.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-8">
                {values.map((value, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-roam-go-bone flex items-center justify-center text-roam-go-forest mb-4">
                      <HugeiconsIcon icon={value.icon} className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-source-serif text-roam-go-forest mb-2">
                      {value.title}
                    </h3>
                    <p className="text-roam-go-subtext font-light text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
