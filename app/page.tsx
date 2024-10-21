"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import { calcAge, cn, projects, hebrewTranslatedProjects } from "@/lib/utils";
import { isHebrewSystem } from "@/lib/utils";
import { HDate, gematriya } from "@hebcal/core";
import { FaTools, FaGithub } from "react-icons/fa";
import ToolTip from "@/components/ui/tooltip";

const SimplerPro = localFont({
  src: [
    {
      path: "../public/SimplerPro_V3-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/SimplerPro_V3-Bold.otf",
      weight: "700",
    },
  ],
});

export default function Home() {
  const [isInHebrewSystem, SetIsInHebrewSystem] = useState<boolean>();
  const hebrewDate = new HDate(new Date());

  useEffect(() => {
    if (navigator) {
      SetIsInHebrewSystem(isHebrewSystem());
    }
  }, []);

  return (
    <>
      <main
        className="flex min-h-screen flex-col md:p-20 mt-8 container md:pt-10"
        dir={isInHebrewSystem ? "rtl" : "ltr"}
      >
        <h1
          className={`${
            isInHebrewSystem ? SimplerPro.className : ""
          } md:text-6xl w-full font-bold break-before-all md:w-full text-5xl text-center italic `}
        >
          {isInHebrewSystem
            ? "אני רון, מתכנת בק-אנד."
            : "I'm Ron, a Back-End Developer."}
        </h1>
        <h3
          className={cn(
            SimplerPro.className,
            "md:text-lg text-base mt-3 w-full text-center p-3 rounded-xl md:px-5"
          )}
        >
          {isInHebrewSystem
            ? `קוראים לי רון נוס, ואני מתכנת בק-אנד בן ${calcAge()}, שמפתח אתרים ותכנות`
            : `My name is Ron Nuss, a ${calcAge()} years old back-end developer from
          Israel, that develops websites and programs.`}
        </h3>
        <div className="container w-full flex flex-col md:mt-10 mt-5">
          <h3
            className={` ${
              isInHebrewSystem ? SimplerPro.className : ""
            } md:text-4xl font-bold text-3xl`}
          >
            {isInHebrewSystem ? "הפרויקטים שלי" : "Projects"}
          </h3>
          <h5
            className={`${SimplerPro.className} md:text-lg text-base italic mb-4`}
          >
            {isInHebrewSystem
              ? `הנה מספר פרויקטים שעבדתי עליהם או שעדיין בעבודה. חלקם גם זמינים בקוד-פתוח.`
              : `Here are some of my projects that I worked on or still in development. Some of them are open-source.`}
          </h5>
          <div className="flex flex-col gap-2 max-w-[37.5rem]">
            {projects.map((project, index) => (
              <>
                <a key={index} href={project.link}>
                  <div
                    className={
                      "flex flex-col gap-0 p-5 rounded-xl border-2 border-[#403F3E]"
                    }
                  >
                    <div className="flex flex-row items-center gap-2">
                      {project.isInDevelopment && (
                        <div>
                          <ToolTip
                            className={
                              SimplerPro.className + " md:block hidden"
                            }
                            tooltip={
                              isInHebrewSystem
                                ? "פרויקט זה עדיין בבנייה"
                                : "This project is still under development"
                            }
                          >
                            <FaTools className="fill-[#403F3E]" />
                          </ToolTip>
                        </div>
                      )}
                      {project.isOpenSource && (
                        <div>
                          <ToolTip
                            className={
                              SimplerPro.className + " md:block hidden"
                            }
                            tooltip={
                              isInHebrewSystem
                                ? "פרויקט זה זמין בקוד פתוח"
                                : "This project is open source"
                            }
                          >
                            <a href={project.githubLink}>
                              <FaGithub className="fill-[#403F3E]" />
                            </a>
                          </ToolTip>
                        </div>
                      )}
                      <h2
                        className={`${
                          isInHebrewSystem ? SimplerPro.className : ""
                        } text-2xl flex flex-row`}
                        dir="rtl"
                      >
                        {isInHebrewSystem
                          ? hebrewTranslatedProjects[index].name
                          : project.name}
                      </h2>
                      <span
                        className={cn(
                          SimplerPro.className,
                          "text-xs opacity-70"
                        )}
                      >
                        ({project.year})
                      </span>
                    </div>
                    <h4 className={cn("text-base", SimplerPro.className)}>
                      {isInHebrewSystem
                        ? hebrewTranslatedProjects[index].description
                        : project.description}
                    </h4>
                    {project.isInDevelopment && (
                      <h4
                        className={cn(
                          "text-base bg-[#403F3E] md:hidden block rounded-sm text-[#F2F2F2] md:w-1/3 w-full text-center p-1.5",
                          SimplerPro.className
                        )}
                      >
                        {isInHebrewSystem
                          ? "פרויקט זה עדיין בבנייה"
                          : "This project is still under development"}
                      </h4>
                    )}
                    {project.isOpenSource && (
                      <a href={project.githubLink}>
                        <h4
                          className={cn(
                            "text-base bg-[#403F3E] md:hidden block rounded-sm text-[#F2F2F2] md:w-1/3 w-full text-center p-1.5",
                            SimplerPro.className
                          )}
                        >
                          {isInHebrewSystem
                            ? "פרויקט זה זמין בקוד פתוח"
                            : "This project is open source"}
                        </h4>
                      </a>
                    )}
                  </div>
                </a>
              </>
            ))}
          </div>
        </div>
        <footer
          className={cn(
            "flex text-sm flex-row px-10 tracking-wide mt-0 md:text-left text-center text-[#8a8a93] max-h-full py-4 rounded-tl-3xl rounded-tr-3xl bottom-0 left-0 right-0",
            SimplerPro.className
          )}
        >
          <span>
            &copy;{" "}
            {isInHebrewSystem ? "נוצר על ידי רון נוס," : "Created by Ron Nuss,"}{" "}
            {"  "}
            <span className="mx-[0.1px]">
              <a
                href={
                  isInHebrewSystem
                    ? "#"
                    : "https://en.wikipedia.org/wiki/Hebrew_calendar"
                }
                className={isInHebrewSystem ? "cursor-text" : "cursor-help"}
              >
                {isInHebrewSystem
                  ? gematriya(hebrewDate.getFullYear())
                  : hebrewDate.getFullYear()}
              </a>
            </span>
            {"  "}({new Date().getFullYear()}).
          </span>
        </footer>
      </main>
    </>
  );
}
