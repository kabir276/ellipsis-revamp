"use client";

import { navItems, testimonials } from "@/data";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Security from "@/components/Security";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { CardStack } from "@/components/ui/infinitetwittercard";
import { Features } from "@/components/features";
import LoomVideoFrame from "@/components/videocomp";
import PricingSection from "@/components/Pricing";
import ClientCarousel from "@/components/ui/logoslider";
import Testimonials from "@/components/ui/InfiniteCards";
import HowItWorks from "@/components/Howitworks";
const Home = () => {
  return (
    <main className="relative bg-[#000] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <LoomVideoFrame />
        <CardStack />
        <ClientCarousel />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Security />
        <PricingSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

