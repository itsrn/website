"use client";
import { ContactIcon } from "../components/ui/Icons";
// import { FaArrowRight } from "react-icons/fa6";
// in a future update of the website, i'll add and use this icon
import { Footer } from "../components/ui/Footer";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { calcAge, cn, projects } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const interFont = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col md:p-20 mt-8 container md:pt-10">
        <h1 className="md:text-6xl break-before-all md:max-w-xl text-5xl text-left italic">
          I&lsquo;m Ron, a Back-End Developer.
        </h1>
        <h3
          className={cn(
            interFont.className,
            "text-[#0D0D0D] md:text-lg text-base mt-3 max-w-2xl bg-[#F2F0CE] p-3 rounded-xl md:px-5"
          )}
        >
          My name is Ron Nuss, a {calcAge()} years old back-end developer from
          Israel, who turns <span className="text-[#03A688]">imaginations</span>{" "}
          into <span className="text-[#F25C78]">projects</span>.
        </h3>
        <div className="container w-full flex flex-col gap-3 md:mt-10 mt-5">
          <h3 className="text-[#0D0D0D] md:text-4xl text-3xl">Projects</h3>
          {/* looking for the projects array? it's in the "utils.ts" file, under the "lib" folder. */}
          {projects.map((project, index) =>
            project.isInDevelopment ? (
              <>
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger className="cursor-default">
                      <div
                        key={index}
                        className={
                          "text-[#0D0D0D] flex flex-col gap-0 p-5 rounded-xl bg-[#F2F0CE] opacity-60"
                        }
                      >
                        <h2 className="text-2xl text-left">
                          {project.name}{" "}
                          <span
                            className={cn(
                              interFont.className,
                              "text-xs opacity-70"
                            )}
                          >
                            ({project.year})
                          </span>
                        </h2>
                        <h4
                          className={cn(
                            "text-base text-left",
                            interFont.className
                          )}
                        >
                          {project.description}
                        </h4>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent
                      className={cn(
                        interFont.className,
                        "max-w-md text-center"
                      )}
                    >
                      This project is still under development!
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </>
            ) : (
              <>
                <a key={index} href={project.link}>
                  <div
                    className={
                      "text-[#0D0D0D] flex flex-col gap-0 p-5 rounded-xl bg-[#F2F0CE]"
                    }
                  >
                    <h2 className="text-2xl">
                      {project.name}{" "}
                      <span
                        className={cn(
                          interFont.className,
                          "text-xs opacity-70"
                        )}
                      >
                        ({project.year})
                      </span>
                    </h2>
                    <h4 className={cn("text-base", interFont.className)}>
                      {project.description}
                    </h4>
                  </div>
                </a>
              </>
            )
          )}
        </div>
        <Footer />
      </main>
    </>
  );
}
