"use client";

import { navItems, testimonials } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Security from "@/components/Security";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import { CardStack } from "@/components/ui/infinitetwittercard";
import VideoSection from "@/components/video";
import { Features } from "@/components/features";
import LoomVideoFrame from "@/components/videocomp";
import PricingSection from "@/components/Pricing";
const Home = () => {
  return (
    <main className="relative bg-[#000] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <CardStack />
        <Features />
        <LoomVideoFrame />
        {/* <Grid />
        <RecentProjects /> 
        <Clients />
         <Approach />*/}
        <Security />
        <PricingSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

