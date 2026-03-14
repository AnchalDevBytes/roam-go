"use client";
import { HeroSection } from "@/components/landing-page/hero-section";
import { GallerySection } from "@/components/landing-page/gallery-section";
import { TravelCardsSection } from "@/components/landing-page/travel-cards";
import { FilteredTravelsSection } from "@/components/landing-page/filtered-travels";
import { TestimonialsSection } from "@/components/landing-page/testimonials";
import { ContactSection } from "@/components/landing-page/contact-section";

const HomePage = () => {
  return (
    <main className="w-full m-0 p-0 overflow-x-hidden">
      <HeroSection />
      <GallerySection />
      <TravelCardsSection />
      <FilteredTravelsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
