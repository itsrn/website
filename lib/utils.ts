import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calcAge() {
  const birthdate = new Date("2007-5-12");
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
  {
    name: "Hamerkaz",
    year: 2024,
    link: "",
    isInDevelopment: true,
    description: "A single website - for all the news",
  },
  {
    name: "My Website",
    year: 2024,
    link: "https://ron.is-a.dev",
    isInDevelopment: false,
    description: "The 3rd version of my website (that you are seeing right now).",
  },
];
