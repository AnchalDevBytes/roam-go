"use client";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  Mail02Icon,
  Location01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { FormEvent, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PHONE = "918987601036";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'm interested in booking a trip with RoamGo. Can you help me?",
);

const contactInfo = [
  {
    icon: Location01Icon,
    text: "Ranchi, Jharkhand, India",
    href: "https://maps.google.com/?q=Ranchi,Jharkhand,India",
  },
  {
    icon: Call02Icon,
    text: "+91 8987601036",
    href: "tel:+918987601036",
  },
  {
    icon: Mail02Icon,
    text: "contact@zarasana.com",
    href: "mailto:contact@zarasana.com",
  },
  {
    icon: WhatsappIcon,
    text: "+91 8987601036 (WhatsApp)",
    href: `https://wa.me/${PHONE}?text=${WHATSAPP_MESSAGE}`,
    isWhatsapp: true,
  },
];

export const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact-us"
      className="py-24 bg-roam-go-forest text-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-roam-go-mist/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-source-serif mb-6"
            >
              Let's Plan Your{" "}
              <span className="font-dancing-script text-roam-go-mist">
                Next Journey
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-gray-300 text-lg mb-12 max-w-md"
            >
              Reach out to us to start crafting your unforgettable adventure.
              Whether you have a question or are ready to book, we are here to
              help.
            </motion.p>

            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -2, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-4 text-gray-200 transition-all duration-200 group",
                      item.isWhatsapp
                        ? "hover:text-[#25D366]"
                        : "hover:text-white",
                    )}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        item.isWhatsapp
                          ? "bg-[#25D366]/20 group-hover:bg-[#25D366]/40"
                          : "bg-white/10 group-hover:bg-white/20"
                      }`}
                    >
                      <HugeiconsIcon
                        icon={item.icon}
                        className={`w-6 h-6 ${
                          item.isWhatsapp
                            ? "text-[#25D366]"
                            : "text-roam-go-mist"
                        }`}
                      />
                    </div>
                    <span className="text-lg font-medium">{item.text}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="bg-white text-roam-go-forest p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative"
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-roam-go-mist rounded-full blur-[30px] opacity-60"></div>

            <h3 className="text-2xl font-source-serif mb-8">
              Send Us A Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-green-50 text-green-800 rounded-xl border border-green-200 text-sm font-medium"
                >
                  Form submitted! We will get back to you soon.
                </motion.div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-roam-go-subtext">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-3 rounded-full bg-roam-go-bone border-none focus:ring-2 focus:ring-roam-go-forest transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-roam-go-subtext">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-full bg-roam-go-bone border-none focus:ring-2 focus:ring-roam-go-forest transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-roam-go-subtext">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-3 rounded-full bg-roam-go-bone border-none focus:ring-2 focus:ring-roam-go-forest transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-roam-go-subtext">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full px-5 py-3 rounded-full bg-roam-go-bone border-none focus:ring-2 focus:ring-roam-go-forest transition-all"
                    placeholder="+91..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-roam-go-subtext">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-5 py-3 rounded-3xl bg-roam-go-bone border-none focus:ring-2 focus:ring-roam-go-forest transition-all resize-none"
                  placeholder="Tell us about your dream trip..."
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="schedule-call"
                  className="w-5 h-5 rounded border-gray-300 text-roam-go-forest focus:ring-roam-go-forest"
                />
                <label
                  htmlFor="schedule-call"
                  className="text-sm font-medium text-roam-go-subtext cursor-pointer"
                >
                  I would like to schedule a call
                </label>
              </div>

              <button className="w-full py-4 rounded-full bg-roam-go-button text-white font-bold text-lg hover:bg-roam-go-forest transition-all duration-300 shadow-lg shadow-roam-go-forest/20 hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
