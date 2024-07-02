"use client"
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { HoverBorderGradient } from "./ui/hover-border";
import { SiYcombinator } from "react-icons/si";
import { FaArrowsAlt } from "react-icons/fa";
import IconButton from "./ui/arrowside";
import FloatingCard from "./floating";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation"


const Hero = () => {
  const router = useRouter()
  return (
    <div id="Hero" className="pb-20 pt-28">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-40 md:-top-24  h-screen"
          fill="rgb(51,113,149)"
        />
        <Spotlight className=" md:-left-[0.7rem] top-28 h-screen " fill="rgb(51,113,149)" />
      </div>
      <div
        className="h-screen w-full dark:bg-[#000] bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#000]
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            TRUSTED BY 8,100+ GITHUB USERS
          </p>

          <TextGenerateEffect
            words="AI Code Reviews & Bug Fixes"
            className="text-center text-[40px] md:text-7xl lg:text-[5rem]"
          />


          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Ellipsis is an AI developer tool that automatically reviews code and fixes bugs on pull requests.
          </p>
          <div className="flex flex-row gap-2 ">
            <button onClick={() => { router.push("https://app.ellipsis.dev/login") }} className={cn(" z-50 custom-button inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-[#cbcbcb] transition-colors hover:shadow hover:shadow-[#4aaabd90] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-[#3c93a4] cursor-pointer text-xs md:text-base "
            )}>Get started for free &nbsp; <IconButton />
            </button>
            <button onClick={() => { router.push("https://cal.com/hunter-brooks/schedule-a-demo?layout=month_view&date=2024-07-01") }} className={cn(" z-50 custom-button inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-[#cbcbcb] transition-colors hover:shadow hover:shadow-[#4aaabd90] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-[#3c93a4] cursor-pointer text-xs md:text-base "
            )}>
              Talk to a founder
            </button>
            {/* <a id="" className="button1">
             
            </a> */}
          </div>
          <span className="mt-1">7 Days free trial - No credit card required</span>
          <span className="text-lg text-[#acacac] flex flex-row gap-2 mt-8">Backed By-  <span className="text-orange-500 flex mt-1 flex-row gap-1 text-xl">
            <SiYcombinator /> <span className="-mt-[4px]">Combinator</span><span><Image
              src="/asicp-removebg-preview.png"
              width={50}
              height={50}
              alt="asicp logo"
              className="-mt-4"
            /></span>
          </span></span>
          <FloatingCard />

        </div>
      </div>
    </div>
  );
};

export default Hero;
