"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CamperIcon,
  Cancel01Icon,
  Menu09Icon,
} from "@hugeicons/core-free-icons";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  return (
    <motion.nav className="sticky top-4 z-40 mx-auto max-w-7xl bg-white border border-gray-100 rounded-xl px-6 lg:px-8 py-3 lg:py-4 w-[95%] lg:w-full overflow-hidden">
      <div className="flex justify-between items-center w-full">
        <Link
          href="/"
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <div className="p-2 bg-roam-go-bone rounded-full">
            <HugeiconsIcon
              icon={CamperIcon}
              className="text-roam-go-forest h-6 w-6 lg:h-7 lg:w-7"
            />
          </div>
          <span className="text-xl lg:text-2xl font-semibold text-roam-go-forest tracking-tight">
            Roam Go
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-10 font-semibold text-roam-go-subtext hover:text-roam-go-forest text-[15px]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-roam-go-button transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <button className="rounded-full border border-roam-go-forest px-6 py-2.5 font-semibold text-roam-go-forest text-[15px] hover:bg-roam-go-forest/80 hover:text-white transition-all duration-300">
            Contact Us
          </button>
        </div>

        <button
          className="lg:hidden p-2 text-roam-go-forest relative flex items-center justify-center w-10 h-10"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <HugeiconsIcon icon={Cancel01Icon} className="h-7 w-7" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <HugeiconsIcon icon={Menu09Icon} className="h-7 w-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={"mobile-menu"}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }, // Smoother easing
                opacity: { duration: 0.25, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.2 },
              },
            }}
            className="lg:hidden flex flex-col pt-6 pb-2 overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-2">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-roam-go-forest font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="w-full h-px bg-gray-100 my-1"></div>

              <button className="w-full rounded-full border border-roam-go-forest px-6 py-4 font-bold text-roam-go-forest text-lg hover:bg-roam-go-forest hover:text-white transition-all duration-300 mt-2">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
