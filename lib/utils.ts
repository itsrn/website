import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isHebrewSystem(): boolean {
  //This function will check if the system's language is Hebrew. if so, it will return a boolean true.
  //This function helps me render a Hebrew-version for people that their likely to be from Israel and probably want to see the Hebrew version of the site.

  if (navigator.language.startsWith("he")) {
    return true;
  } else {
    return false;
  }
}

export function calcAge(): number {
  //this function calculates my correct age to show in the website
  const birthdate = new Date("2007-12-05T00:00:00");
  const today = new Date();
  const age =
    today.getFullYear() -
    birthdate.getFullYear() -
    Number(
      today.getMonth() < birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() &&
          today.getDate() < birthdate.getDate())
    );
  return age;
}

export const projects = [
  //this is the projects array. each project is in a different object.
  //there's also another project array underneath this one, but with Hebrew translations for visitors with Hebrew as their system language.
  {
    name: "Hamerkaz",
    year: 2024,
    link: "#",
    isInDevelopment: true,
    description: "A single website - for all the news.",
    isOpenSource: false,
  },
  {
    name: "TziburTV",
    year: 2024,
    link: "https://tziburtv.vercel.app",
    description: "A website that provides watching live public TV channels from Israel.",
    isOpenSource: true,
    githubLink: "https://github.com/itsrn/tziburtv",
  },
  {
    name: "My Website",
    year: 2023,
    link: "https://ron.is-a.dev",
    isInDevelopment: false,
    description:
      "The 4th version of my website (that you are viewing right now).",
    isOpenSource: true,
    githubLink: "https://github.com/itsrn/website",
  },
];

export const hebrewTranslatedProjects = [
  {
    name: "המרכז",
    description: "אתר אחד - לכל החדשות.",
  },
  {
    name: "ציבורTV",
    description:
      "אתר המנגיש צפייה בערוצי טלוויזיה ישראליים ציבוריים שזמינים בחינם באינטרנט.",
  },
  {
    name: "האתר שלי",
    description: "הגרסה הרביעית של האתר שלי (שאתם רואים ברגע זה).",
  },
];
