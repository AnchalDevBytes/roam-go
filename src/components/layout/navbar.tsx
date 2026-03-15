"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu09Icon } from "@hugeicons/core-free-icons";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "Destinations", href: "/destinations" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5 lg:py-6",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-1 cursor-pointer group"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-baseline">
            <span className="text-2xl md:text-3xl font-bold text-roam-go-forest tracking-tighter font-source-serif">
              Roam
            </span>
            <span className="text-2xl md:text-3xl font-light text-roam-go-forest/80 tracking-tight font-figtree ml-1">
              Go
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-roam-go-forest/40 ml-1 mb-0.5 group-hover:bg-roam-go-button transition-colors"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center bg-white/60 backdrop-blur-md border border-gray-100/50 rounded-full px-8 py-3 gap-10 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-bold text-roam-go-forest/70 hover:text-roam-go-forest transition-colors duration-200 tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-roam-go-forest transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/#contact-us"
            className="rounded-full bg-roam-go-forest px-8 py-3.5 font-bold text-white text-[15px] hover:bg-roam-go-button transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-roam-go-forest relative flex items-center justify-center w-12 h-12 bg-white/80 rounded-full backdrop-blur-md border border-gray-100 shadow-sm"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <HugeiconsIcon icon={Cancel01Icon} className="h-7 w-7" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
                transition={{ duration: 0.2 }}
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
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.3, delay: 0.1 },
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
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="text-2xl font-bold text-roam-go-forest flex items-center justify-between group"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                      <span className="text-roam-go-mist group-hover:text-roam-go-forest transition-colors">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="w-full h-px bg-gray-100 my-4"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Link
                  href="/#contact-us"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center rounded-full bg-roam-go-forest px-6 py-5 font-bold text-white text-xl hover:bg-roam-go-button transition-all duration-300 shadow-xl shadow-roam-go-forest/20"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
