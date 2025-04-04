import { Site, SocialObjects } from "./type";
import {
  FaBootstrap,
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaGithub,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaPepperHot,
  FaPython,
  FaReact,
  FaSass,
  FaCubes,
  FaGithubAlt,
  FaChartLine,
  FaGamepad,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiReactquery,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeScss } from "react-icons/bs";

export const SITE: Site = {
  website: "https://trine.dev/",
  author: "zerone0x",
  desc: "A self-motivated Frontend Web Developer, lifelong learner",
  title: "trine.dev",
  // todo replace photo
  // ogImage: "zerone0x-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const expData = [
  {
    title: "Software Engineer",
    companyName: "Autodesk",
    // icon: promisLogo,
    date: "May 2022",
    city: "Shanghai",
    points: [
      "Worked on Autodesk's inventor team with a focus on maintaining Inventor Builds and Infrastructure.",
      "Built a dashboard to improve the efficiency of the deployment process. Using React.",
      "Designed and developed a Github pipeline for commits' check for inventor repository.",
      "Crafted workers to check pipeline health and send alerts to slack.",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "MCT",
    // icon: promisLogo,
    date: "April 2020",
    city: "Shanghai",
    points: [
      "Frontend Developer on careconnect team, built and shipped features for payment process.",
      "Rebuilt careconnect's transaction page to the new design system, which increased user using feelings",
      "Optimized the build infrastructure (webpack, Babel) and improved build speed",
      "Improved code base quality by improving the typing of TypeScript files through automation",
    ],
  },
  // {
  //   title: "Frontend Web Developer",
  //   companyName: "Upwork",
  //   // icon: promisLogo,
  //   date: "October 2020",
  //   city: "Shanghai",
  //   points: ["promis.points", "promis.points"],
  // },
];
export type ExperienceProp = (typeof expData)[number];
export const skillsData = [
  { src: "/tech/html5.svg", alt: "HTML5" },
  { src: "/tech/css3.svg", alt: "CSS3" },
  { src: "/tech/javascript.svg", alt: "JavaScript" },
  { src: "/tech/typescript.svg", alt: "TypeScript" },
  { src: "/tech/reactjs.svg", alt: "React" },
  { src: "/tech/nextjs.svg", alt: "Next.js" },
  { src: "/tech/tailwindcss.svg", alt: "Tailwind CSS" },
  { src: "/tech/sass.svg", alt: "Sass" },
  { src: "/tech/redux.svg", alt: "Redux Toolkit" },
  { src: "/tech/reactquery.svg", alt: "React Query" },
  { src: "/tech/nodedotjs.svg", alt: "Node.js" },
  { src: "/tech/express.svg", alt: "Express" },
  { src: "/tech/postgresql.svg", alt: "Postgresql" },
];
export type SkillsProp = (typeof skillsData)[number];

export const projectData = [
  {
    title: "GamePlayTips",
    desc: "Full-stack game directory website with advanced search, detailed game information, blog system, newsletter subscriptions, i18n support and SEO optimization for better discoverability.",
    tags: ["Next.Js", "Postgresql", "CMS", "Typescript", "TailwindCSS", "SEO"],
    imageURL: "/proj/game.png",
    isGithub: false,
    GithubLink: "https://gameplaytips.com/",
    LiveLink: "https://gameplaytips.com/",
    isTextWhite: true,
  },
  {
    title: "Echo Social APP",
    desc: "Full-stack Mastodon-like social web app for friends! Share posts with text and images, engage in comments, customize your profile, and search for content easily. Follow others, bookmark favorites, receive notifications.",
    tags: [
      "Next.Js",
      "Node.Js",
      "Express.Js",
      "MongoDB",
      "Typescript",
      "TailwindCSS",
    ],
    isGithub: true,
    imageURL: "/proj/echo.png",
    GithubLink: "https://github.com/zerone0x/Echo-Frontend",
    LiveLink: "https://echoloop.vercel.app/",
    isTextWhite: false,
  },
  {
    title: "Movie APP",
    desc: "Frontend Movie Tracking application for movie lovers, providing a seamless experience for movie searching, rating, watchlist creating. Provides latest Movie/TV trending lists of top trending and rating using TMDB API.",
    tags: ["React", "Typescript", "Redux", "Reactquery", "Scss"],
    imageURL: "/proj/movie4fun.png",
    isGithub: true,
    GithubLink: "https://github.com/zerone0x/movie4fun",
    LiveLink: "https://movie4fun.vercel.app//",
    isTextWhite: true,
  },
  {
    title: "Mad Shooter Game",
    desc: "A simple shooter game inspired by 'Everyday Shooter', featuring multiple levels with unique enemies and power-ups. Players can shoot enemies, dodge bullets, and compete for high scores in this arcade-style game.",
    tags: ["React", "Typescript", "TailwindCSS", "PhaserJS"],
    imageURL: "/proj/shooter.png",
    isGithub: false,
    GithubLink: "https://madshooter.vercel.app/",
    LiveLink: "https://madshooter.vercel.app/",
  },
  {
    title: "Reddit Telegram Bot",
    desc: "An alternative FOSS to Zapier or IFTTT is a Telegram bot that delivers the latest posts from Reddit.",
    tags: ["Python", "Github Actions"],
    imageURL: "/proj/reddit-tg.png",
    isGithub: true,
    GithubLink: "https://github.com/zerone0x/reddit-telegram-bot",
    LiveLink: "https://github.com/zerone0x/reddit-telegram-bot/actions",
  },
  {
    title: "Random YTB Player",
    desc: "Play random youtube videos from various channels.",
    tags: ["React", "Typescript", "Redux", "Scss"],
    imageURL: "/proj/random-ytb.png",
    isGithub: true,
    GithubLink: "https://github.com/zerone0x/RandomYtb",
    LiveLink: "https://playtb.tech/",
  },
];
export type projectProp = (typeof projectData)[number];

export const getTag = (tag: string) => {
  let values = [];
  switch (tag) {
    case "React":
      values[0] = "bg-sky-400";
      values[1] = FaReact;
      break;
    case "Python":
      values[0] = "bg-yellow-300";
      values[1] = FaPython;
      break;
    case "Javascript":
      values[0] = "bg-yellow-400";
      values[1] = FaJs;
      break;
    case "Sass":
      values[0] = "bg-pink-500";
      values[1] = FaSass;
      break;
    case "SQL":
      values[0] = "bg-blue-400";
      values[1] = FaDatabase;
      break;
    case "Typescript":
      values[0] = "bg-blue-400";
      values[1] = SiTypescript;
      break;
    case "Redux":
      values[0] = "bg-purple-400";
      values[1] = SiRedux;
      break;
    case "Reactquery":
      values[0] = "bg-red-500";
      values[1] = SiReactquery;
      break;
    case "TailwindCSS":
      values[0] = "bg-teal-400";
      values[1] = RiTailwindCssFill;
      break;
    case "Node.Js":
      values[0] = "bg-green-500";
      values[1] = FaNodeJs;
      break;
    case "Next.Js":
      values[0] = "bg-gray-300";
      values[1] = SiNextdotjs;
      break;
    case "Express.Js":
      values[0] = "bg-blue-300";
      values[1] = SiExpress;
      break;
    case "MongoDB":
      values[0] = "bg-green-300";
      values[1] = SiMongodb;
      break;
    case "Scss":
      values[0] = "bg-pink-400";
      values[1] = BsFiletypeScss;
      break;
    case "Postgresql":
      values[0] = "bg-blue-300";
      values[1] = FaDatabase;
      break;
    case "Supabase":
      values[0] = "bg-purple-400";
      values[1] = FaDatabase;
      break;
    case "CMS":
      values[0] = "bg-emerald-400";
      values[1] = FaCubes;
      break;
    case "Github Actions":
      values[0] = "bg-slate-400";
      values[1] = FaGithubAlt;
      break;
    case "SEO":
      values[0] = "bg-orange-400";
      values[1] = FaChartLine;
      break;
    case "PhaserJS":
      values[0] = "bg-yellow-400";
      values[1] = FaGamepad;
      break;
    default:
      values[0] = "bg-gray-400";
      values[1] = FaCode;
      break;
  }
  return values;
};
export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    src: "/social/github.svg",
    href: "https://github.com/zerone0x",
    linkTitle: `Github`,
    active: true,
  },
  // {
  //   name: "Facebook",
  //   href: "https://github.com/zerone0x",
  //   linkTitle: `  Facebook`,
  //   active: false,
  // },
  // {
  //   name: "Instagram",
  //   href: "https://github.com/zerone0x",
  //   linkTitle: `  Instagram`,
  //   active: false,
  // },
  {
    name: "LinkedIn",
    src: "/social/linkedin.svg",
    href: "https://www.linkedin.com/in/manlunzhang/",
    linkTitle: `LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    src: "/social/x.svg",
    href: "https://github.com/zerone0x",
    linkTitle: `Twitter`,
    active: false,
  },
  {
    name: "Mail",
    src: "/social/mail.svg",
    href: "mailto:zerone0x@trine.dev",
    linkTitle: `Email`,
    active: true,
  },
  // {
  //   name: "YouTube",
  //   href: "https://github.com/zerone0x",
  //   linkTitle: `  YouTube`,
  //   active: false,
  // },
  // {
  //   name: "Telegram",
  //   href: "https://github.com/zerone0x",
  //   linkTitle: `  Telegram`,
  //   active: false,
  // },
  // {
  //   name: "Mastodon",
  //   href: "https://github.com/zerone0x",
  //   linkTitle: `  Mastodon`,
  //   active: false,
  // },
];
