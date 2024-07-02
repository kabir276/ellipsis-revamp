"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaTwitter } from "react-icons/fa";
import { Card } from "../Card";
import Image from "next/image";
import { AnimatedTooltip } from "./hovericonsanimat";
import { people } from "@/data";

let interval: any;

type Card = {
    id: number;
    name: string;
    designation: string;
    content: React.ReactNode;
    Link: string,
    image: string
};

export const CardStack = ({
    offset,
    scaleFactor,
}: {

    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(CARDS);
    const x = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" className="h-8 w-8"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);
    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards];
                newArray.unshift(newArray.pop()!);
                return newArray;
            });
        }, 10000);
    };
    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-4 md:mt-24">
                <h1 className="text-center text-xl m-auto md:text-3xl">Join The Community</h1>
                <p className="text-center text-xs m-auto text-[#939393]">Backed by a coalition of initial supporters, contributors, and enthusiasts.</p>
                <div className="flex felx-row  gap-4">
                    <button onClick={() => { window.open("https://discord.com/") }} className="h-auto w-auto p-2 px-4 border border-[#06495790] hover:shadow hover:shadow-[#4aaabd90] rounded-3xl m-auto">Discord</button>
                    <button onClick={() => { window.open("https://github.com/") }} className="h-auto w-auto p-2 px-4 border border-[#06495790]  hover:shadow hover:shadow-[#4aaabd90] rounded-3xl m-auto">Github community</button>
                </div>

                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={people} />
                </div>

            </div>
            <div className="relative  h-[25rem]  sm:w-[30rem] m-auto top-50 mb-24 sm:mt-16">
                {
                    cards.map((card, index) => {
                        return (
                            <motion.div
                                key={card.id}
                                onClick={() => { window.open(card.Link) }}
                                className="absolute dark:bg-black bg-white h-[25rem] sm:w-[30rem] rounded-3xl p-4 shadow-xl border border-neutral-200 m-auto dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-[rgb(23,86,119,0.5)] flex flex-col justify-between cursor-pointer"
                                style={{
                                    transformOrigin: "top center",
                                }}
                                animate={{
                                    top: index * -CARD_OFFSET,
                                    scale: 1 - index * SCALE_FACTOR,
                                    zIndex: cards.length - index,
                                }}
                            >
                                <div> {x}</div>
                                <div className="font-normal text-neutral-700 dark:text-neutral-200 h-[80%] overflow-auto mt-2">

                                    {card.content}
                                </div>

                                <div>
                                    <div className="flex flex-row gap-4 mt-2">
                                        <Image
                                            src={`${card.image}`}
                                            height={55}
                                            width={55}
                                            className="rounded-full w-[12%]"
                                            alt="logo"
                                        />

                                        <div className="flex flex-col">
                                            <div className="flex flex-row">
                                                <p className="text-neutral-500 font-medium dark:text-white">
                                                    {card.name}
                                                </p>
                                                <Image
                                                    src={`/32px-Twitter_Verified_Badge.svg.png`}
                                                    height={4}
                                                    width={19}
                                                    className=" ml-1"
                                                    alt="logo"
                                                />
                                            </div>
                                            <p className="text-neutral-400 text-sm font-normal dark:text-neutral-200">
                                                {card.designation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        );
                    })
                }

            </div >
        </div>
    );
};
export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "bg-[#00b9bc] px-1 font-bold text-[rgb(183,183,183)] dark:bg-[rgb(23,86,119)] dark:text-[#f1faff] mx-1 my-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};

export const CARDS = [

    {
        id: 1,
        image: "/YCTeam.jpg",
        name: "Dalton Caldwell",
        designation: "Group Partner & Managing Director @ycombinator",
        content: (
            <p>This code review startup from <Highlight>YC W24</Highlight> is getting great buzz from other founders because of how well it actually works<Highlight> @ellipsis_dev</Highlight><br />


                The video embedded on their website explains it pretty well  <Highlight>https://ellipsis.dev</Highlight>
            </p>
        ),
        Link: "https://x.com/daltonc/status/1778245156812284332?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1778245156812284332%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=about%3Asrcdoc",
    },

    {
        id: 2,
        image: "/stuart.png",
        name: "Stuart Chaney",
        designation: "Founder/CEO @rivocommerce",
        content: (
            <p>We replaced an engineering position I would have <Highlight> paid $60-$90K p/y </Highlight> for with AI. <br />

                <Highlight> @ellipsis_dev/</Highlight><br />
                now automatically: <br />
                - Performs code review <br />
                - Summarizes PRs <br />
                - Suggests updates <br />
                - Commits the suggested updates for us <br />
                <br />
                Still early - but this is <Highlight> one of the first AI engineering tools </Highlight> I would be extremely disappointed if we didn&apos;t have in our workflow.
            </p>
        ),
        Link: "https://x.com/stu_chaney/status/1782479736738021502?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1782479736738021502%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=about%3Asrcdoc",
    },

    {
        id: 3,
        image: "/Ivan.jpg",
        name: "Ivan Leo(In SF from 20 June - 1 July )",
        designation: "Professional GPT wrapper writer",
        content: (
            <p>My day is made when
                <Highlight> @ellipsis_dev </Highlight><br />
                sends me a lgtm but when it doesn&apos;t it&apos;s been surfacing some seriously good suggetions
            </p>
        ),
        Link: "https://x.com/ivanleomk/status/1769034568164618243?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1769034568164618243%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=about%3Asrcdoc",
    },

    {
        id: 4,
        image: "/uxE5ataS_400x400.jpg",
        name: "The AI Pulse",
        designation: "Building a newsletter that reports the latest AI trends",
        content: (
            <p>Today&apos; s<Highlight> Top AI Tools </Highlight>: <br />
                1. 🦄
                @magichourai
                is an all-in-one video creation platform that streamlines content production from ideation to production.
                <br />
                2. 🦸‍♀️
                @elicitorg
                analyzes research papers at superhuman speed.
                <br />
                3. ⚙️
                <Highlight> @ellipsis_dev </Highlight>
                reviews pull requests and <Highlight>converts GitHub comments into working </Highlight>, tested code.<br />
            </p>
        ),
        Link: "https://x.com/The_AIPulse/status/1776067803424166104?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1776067803424166104%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=about%3Asrcdoc",
    },

    {
        id: 5,
        image: "/DRdonut.jpg",
        name: "Dr.Donut",
        designation: "Superciliously super silly🐊 Leading AI @_hex_tech",
        content: (
            <p>One thing I like about using the
                <Highlight> @ellipsis_dev </Highlight> <br />
                bot is that I can use GitHub mobile to manage some small feature dev and tasks while I&apos;m on the bus 🤪
            </p>
        ),
        Link: "https://x.com/BEBischof/status/1790407417009987802?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1790407417009987802%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=about%3Asrcdoc",
    },
]