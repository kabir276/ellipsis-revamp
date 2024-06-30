"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { HoverBorderGradient } from "./hover-border";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ThreeRectangles from "./hamburger";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {

    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AnimatePresence mode="sync">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-4 sm:px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgb(22,85,120,0.085)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className="flex items-center ">
          <Image
            src={"/eliipselogo.png"}
            height={isMobile ? "100" : "110"}
            width={isMobile ? "110" : "130"}
            className="cursor-pointer mr-24"
            onClick={() => router.push("#")}
            alt="logo"
          />
        </div>

        {isMobile ? (
          <div className="flex items-center pl-24">
            <button onClick={toggleMenu} className="text-2xl text-white">
              <ThreeRectangles />
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-row gap-8 px-24">
              {navItems.map((navItem: any) => (
                <Link
                  key={navItem.link} // Use a unique identifier
                  href={navItem.link}
                  className={cn(
                    "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="text-sm !cursor-pointer">{navItem.name}</span>
                </Link>
              ))}
            </div>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
            >
              <div className="flex flex-row gap-2">
                <span>Start free trial</span>
                <span className="text-[24px] justify-center"><SiGithub /></span>
              </div>
            </HoverBorderGradient>
          </>
        )}
      </motion.div>
      {isMobile && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ type: "tween" }}
          className="fixed top-0 right-0 h-full w-64 bg-black z-[5001] p-5"
        >
          <button onClick={toggleMenu} className="text-white text-2xl mb-5">
            &times;
          </button>
          <div className="flex flex-col space-y-4">
            {navItems.map((navItem: any) => (
              <Link
                key={navItem.link} // Use a unique identifier
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="text-sm !cursor-pointer">{navItem.name}</span>
              </Link>
            ))}
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer "
            >
              <div className="flex flex-row gap-2 ">
                <span>Start free trial</span>
                <span className="text-[24px] justify-center"><SiGithub /></span>
              </div>
            </HoverBorderGradient>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};