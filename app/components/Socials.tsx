import React from "react";
import { FaSquareXTwitter, FaLinkedin, FaSquareGithub } from "react-icons/fa6";

const icons = [
  {
    icon: FaSquareGithub,
    size: 50,
    link: "https://github.com/itsrn",
  },
  {
    icon: FaSquareXTwitter,
    size: 50,
    link: "https://x.com/1itsrn",
  },
  {
    icon: FaLinkedin,
    size: 50,
    link: "https://linkedin.com/in/itsrn",
  },
];

export function Socials() {
  return (
    <div className="flex flex-row -space-x-3 md:space-x-2">
      {icons.map((icon, key) => (
        <div
          key={key}
          className="text-[#8a8a93] transition-all duration-300 ease-[ease-out] hover:text-white"
        >
          <a href={icon.link}>
            <icon.icon size={icon.size} className="h-2/3 md:h-full" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default icons;