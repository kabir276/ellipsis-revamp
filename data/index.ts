import { link } from "fs";
import Link from "next/link";

export const navItems = [
  { name: "Security", link: "#Security" },
  { name: "Pricing", link: "#Pricing" },
  { name: "Documentation", link: "https://docs.ellipsis.dev/intro" },
  { name: "Blogs", link: "/blog" },
];

export const gridItems = [

  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 h-[15rem]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 h-[15rem]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 h-[15rem]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2 h-[25rem]",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 rounded-2xl",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },

];

export const Testimonials = [
  {
    text: "This code review startup from YC W24 is getting great buzz from other founders because of how well it actually works",
    author: "Dalton Caldwell",
    title: "Group Partner @Y Combinator"
  },
  {
    text: "when people think of AI code review, you think of them editing the code. But honestly, this is just as impactful.",
    author: "Jason Liu",
    title: "Maintainer, github.com/jxnl/instructor"
  },
  {
    text: "Ellipsis just paid for itself by saving me a couple of hours of time debugging",
    author: "Pradeep Elankumaran ",
    title: "Founder @jo"
  },
  {
    text: "Last month, I replaced an $80,000 full-time engineering role at Rivo with a $40 automated AI tool.",
    author: "Stuart Chaney",
    title: "CEO @rivo.io"
  }
]

export const testimonials = [
  {
    id: 1,
    quote: "Last month, I replaced an $80,000 full-time engineering role at Rivo with a $40 automated AI tool.",
    name: "Stuart Chaney",
    title: "CEO @ rivo.io",
    image: "/stuart.png"

  },

  {
    id: 2,
    quote: "when people think of AI code review, you think of them editing the code. But honestly, this is just as impactful.",
    name: "Jason Liu",
    title: "Maintainer, github.com / jxnl / instructor",
    image: "/N3tQZNYf_400x400.jpg"

  },
  {
    id: 3,
    quote: "This code review startup from YC W24 is getting great buzz from other founders because of how well it actually works",
    name: "Dalton Caldwell",
    title: "Group Partner @Y Combinator",
    image: "/YCTeam.jpg"
  },
  {
    id: 4,
    quote: "ellipsis just paid for itself by saving me a couple of hours of time debugging",
    name: "Pradeep Elankumaran",
    title: "Founder @jo",
    image: "/PkOJcsuW_400x400.jpg"

  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "SOC II Certified",
    desc: "Ellipsis is SOC II Type I certified. To request a copy of our report, please email team@ellipsis.dev or schedule a call with a founder.",
    className: "md:col-span-2",
    Link: "https://docs.ellipsis.dev/security",
  },
  {
    id: 2,
    title: "No data retention",
    desc: "Ellipsis doesn't persist your source code anywhere. Period. It only lives on our servers in a private AWS VPC while we're processing a job.",
    className: "md:col-span-2",
    Link: "https://docs.ellipsis.dev/security"
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
export const people = [
  {
    id: 1,
    name: "Dalton Caldwell",
    designation: "Managing Director @ycombinator",
    image: "/YCTeam.jpg",
  },
  {
    id: 2,
    name: "Ivan Leo ",
    designation: "Professional GPT wrapper writer",
    image: "/Ivan.jpg",
  },
  {
    id: 3,
    name: "Bryan Bischof",
    designation: "Leading AI @_hex_tech",
    image: "/DRdonut.jpg",
  },
  {
    id: 4,
    name: "Stuart Chaney",
    designation: "Founder/CEO @rivocommerce",
    image: "/stuart.png",
  },
  {
    id: 5,
    name: "Jason Liu",
    designation: "Maintainer, github.com / jxnl / instructor",
    image: "/N3tQZNYf_400x400.jpg",
  },
];