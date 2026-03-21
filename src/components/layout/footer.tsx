"use client";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InstagramIcon,
  TwitterIcon,
  Facebook02Icon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";
import { FormEvent } from "react";

export const Footer = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-roam-go-bone pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-1 group w-max">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-roam-go-forest tracking-tighter font-source-serif">
                  Roam
                </span>
                <span className="text-4xl font-light text-roam-go-forest/80 tracking-tight font-figtree ml-1">
                  Go
                </span>
                <div className="w-2 h-2 rounded-full bg-roam-go-forest/40 ml-1.5 mb-1 group-hover:bg-roam-go-button transition-colors"></div>
              </div>
            </Link>
            <p className="text-roam-go-subtext font-light leading-relaxed">
              We create unforgettable travel experiences, tailored to your
              dreams. Explore the world with confidence and ease.
            </p>
            <div className="flex items-center gap-4">
              {[InstagramIcon, TwitterIcon, Facebook02Icon, YoutubeIcon].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-roam-go-forest hover:bg-roam-go-forest hover:text-white transition-colors shadow-sm"
                  >
                    <HugeiconsIcon icon={Icon} className="w-5 h-5" />
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-source-serif text-roam-go-forest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/#services" },
                { name: "Destinations", href: "/destinations" },
                { name: "Contact Us", href: "/#contact-us" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-roam-go-subtext hover:text-roam-go-forest transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-source-serif text-roam-go-forest mb-6">
              Top Destinations
            </h4>
            <ul className="space-y-4">
              {[
                "Swiss Alps, Switzerland",
                "Kyoto, Japan",
                "Machu Picchu, Peru",
                "Santorini, Greece",
                "Banff, Canada",
              ].map((link, i) => (
                <li key={i}>
                  <span className="text-roam-go-subtext font-light cursor-default">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-source-serif text-roam-go-forest mb-6">
              Newsletter
            </h4>
            <p className="text-roam-go-subtext font-light mb-4">
              Subscribe to our newsletter for the latest travel updates and
              exclusive offers.
            </p>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-5 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-roam-go-mist transition-all"
              />
              <button className="w-full px-5 py-3 rounded-full bg-roam-go-forest text-white font-bold hover:bg-roam-go-button transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-roam-go-subtext font-medium">
          <p>
            © {""}
            <Link
              target="_blank"
              href="https://www.zarasana.com"
              className="hover:text-roam-go-forest transition-colors"
            >
              zarasana.com
            </Link>{" "}
            all rights reserved, build with ❤️ by {""}
            <Link
              target="_blank"
              href="https://github.com/AnchalDevBytes"
              className="hover:text-roam-go-forest transition-colors"
            >
              AnchalDevBytes
            </Link>
          </p>
          <div className="flex items-center gap-1">
            Developer :
            <Link
              target="_blank"
              href="https://github.com/AnchalDevBytes"
              className="hover:text-roam-go-forest transition-colors"
            >
              AnchalDevBytes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
