import { HDate } from "@hebcal/core";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
const interFont = Inter({
  subsets: ["latin"],
});

export const Footer = () => {
  var hebrewDate = new HDate(new Date());

  return (
    <footer
      className={cn(
        "flex text-sm flex-row px-10 md:mb-5 tracking-wide mt-0 md:text-left text-center text-[#8a8a93] max-h-full py-4 rounded-tl-3xl rounded-tr-3xl absolute bottom-0 left-0 right-0 pb-10",
        interFont.className
      )}
    >
      <span>
        &copy; Created by Ron Nuss, {"  "}
        <span className="mx-[0.1px]">
          <a
            href="https://en.wikipedia.org/wiki/Hebrew_calendar"
            className="cursor-help"
          >
            {hebrewDate.getFullYear()}
          </a>
        </span>
        {"  "}({new Date().getFullYear()}). You can view this website source on{" "}
        <span className="ml-[0.1px]">
          <a href="https://github.com/itsrn/website">Github</a>
        </span>
        .
      </span>
    </footer>
  );
};
