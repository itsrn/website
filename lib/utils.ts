import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calcAge(): number {
  const birthdate = new Date("2007-12-05T00:00:00");
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  
  return age;
}

interface Project {
  name: string;
  year: number;
  link: string;
  isInDevelopment?: boolean;
  description: string;
  isOpenSource?: boolean;
  githubLink?: string;
  updates?: {
    text: string;
    type: 'new' | 'update' | 'beta' | 'release';
  }[];
}

export const projects: Project[] = [
  {
    name: "Hamerkaz",
    year: 2024,
    link: "#",
    isInDevelopment: true,
    description: "A single website - for all the news.",
    isOpenSource: false,
  },
  {
    name: "Mila Be'Mila",
    year: 2024,
    link: "#",
    isInDevelopment: true,
    description: "Guess the word by using other words (similar to Wordle)",
    isOpenSource: false,
    updates: [
      {
        text: "Stable release coming soon",
        type: "new",
      }
    ]
  },
  {
    name: "WrappedGPT",
    year: 2024,
    link: "https://wrapped-gpt.vercel.app",
    description: "Dive into your year of conversations, discoveries, and AI-powered insights",
  },
  {
    name: "TziburTV",
    year: 2024,
    link: "https://tziburtv.vercel.app",
    description:
      "A website that provides watching live public TV channels from Israel.",
    isOpenSource: true,
    githubLink: "https://github.com/itsrn/tziburtv",
  },
  {
    name: "My Website",
    year: 2023,
    link: "https://ron.is-a.dev",
    isInDevelopment: false,
    description:
      "The 5th version of my website (that you are viewing right now).",
    isOpenSource: true,
    githubLink: "https://github.com/itsrn/website",
    updates: [
      {
        text: "Brand new UI",
        type: "update",
      }
    ]
  },
  {
    name: "Un Did.li",
    year: 2023,
    link: "https://un-did-li.vercel.app",
    isInDevelopment: false,
    description: "Unshorten did.li shortened links",
    isOpenSource: true,
    githubLink: "https://github.com/itsrn/un-did-li",
    updates: [
      {
        text: "Improved UI and preformance",
        type: "update",
      }
    ]
  },
];
