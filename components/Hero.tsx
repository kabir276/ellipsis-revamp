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


const Hero = () => {
  return (
    <div className="pb-20 pt-28">
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

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
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

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <FloatingCard />
          <TextGenerateEffect
            words="AI Code Reviews & Bug Fixes"
            className="text-center text-[40px] md:text-7xl lg:text-[5rem]"
          />


          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Ellipsis is an AI developer tool that automatically reviews code and fixes bugs on pull requests.
          </p>
          <div className="flex flex-row gap-1">
            <button className="button1" id="">
              <div className="flex flex-row gap-2 text-sm sm:text-base cursor-pointer">
                <span>Get started for free</span>
                <span className="text-[24px] justify-center"><IconButton /></span>
              </div>
            </button>
            <a id="" className="button1">
              Schedule a demo
            </a>
          </div>
          <span className="">7 Days free trial - No credit card required</span>
          <span className="text-lg text-[#acacac] flex flex-row gap-2 mt-8">Backed By-  <span className="text-orange-500 flex mt-1 flex-row gap-1 text-xl">
            <SiYcombinator /> <span className="-mt-[4px]">Combinator</span><span><Image
              src="/asicp-removebg-preview.png"
              width={50}
              height={50}
              alt="asicp logo"
              className="-mt-4"
            /></span>
          </span></span>


        </div>
      </div>
    </div>
  );
};

export default Hero;
