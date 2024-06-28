"use client"
import {
    SearchIcon,
    Codeicon,

} from "../components/icons";
import { ReactNode } from "react";
import { Card } from "./Card";
import ChatBubbleIcon from "./icons/Chat";
import SlidersIcon from "./icons/slider";
import ThumbsUpIcon from "./icons/thumbsup";
import EnvelopeIcon from "./icons/envolpe";

type Feature = {
    title: string;
    desc: string;
    icon: ReactNode;
    Link: string;
};

export const Features = () => {
    const features: Feature[] = [

        {
            title: "Smart Code Reviews",
            desc: "Catch logical mistakes, best practice deviations, and non-idionmatic code",
            icon: <SearchIcon />,
            Link: "https://docs.ellipsis.dev/review",
        },
        {
            title: "Async Code Generation",
            desc: "Assign work to Ellipsis via GitHub comments, get working, tested code a few minutes later",
            icon: <Codeicon />,
            Link: "https://docs.ellipsis.dev/code"
        },
        {
            title: "Question & Answers",
            desc: "Tag @ellipsis - dev with a question, right from a GitHub comment",
            icon: <ChatBubbleIcon />,
            Link: "https://docs.ellipsis.dev/ask"
        },
        {
            title: "Style Guide-as-code",
            desc: "Write your style guide in natural language, Ellipsis will flag violations.",
            icon: <SlidersIcon />,
            Link: "https://docs.ellipsis.dev/config#for-reviewing-prs"
        },
        {
            title: "Customize with Feedback",
            desc: "Ellipsis learns which types of comments your team values, customizing reviews over time",
            icon: <ThumbsUpIcon />,
            Link: "https://docs.ellipsis.dev/review#give-ellipsis-feedback"
        },
        {
            title: "Generate Change Logs",
            desc: "Create weekly summaries of what's changed in your codebase and why it matters",
            icon: <EnvelopeIcon />,
            Link: "https://docs.ellipsis.dev/reports"
        },
    ];

    return (
        <section className="custom-screen sm:mt-40">
            <div className="max-w-xl mx-auto space-y-4 text-center">
                <h2 className="text-5xl heading">More than <br /> LGTM-as-a-service</h2>
                <p className="text-zinc-400">
                    Ellipsis is an AI teammate capable of answering questions, creating release notes, feature development, and fixing build issues.
                </p>

            </div>

            <br />
            <br />
            <ul className="space-y-8 gap-8 mt-8 md:mt-16 max-w-7xl mx-auto grid-cols-2 sm:grid lg:grid-cols-3 sm:space-y-0 ">
                {features.map((item: Feature, key: number) => (
                    <Card key={key} icon={item.icon} title={item.title} desc={item.desc} Link={item.Link} />
                ))}
            </ul>
        </section>
    );
};