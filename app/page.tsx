/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { calcAge, cn, projects } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});

function isBirthday(): boolean {
  const today = new Date();
  return today.getMonth() === 11 && today.getDate() === 5;
}

function triggerConfetti(origin: { x: number; y: number }) {
  confetti({
    particleCount: 200,
    spread: 70,
    origin,
    colors: ["#FFD700", "#FFA500", "#FF69B4", "#87CEEB"],
    gravity: 2,
    scalar: 0.8,
    ticks: 120,
  });
}

export default function Home() {
  const isMyBirthday = isBirthday();

  useEffect(() => {
    if (isMyBirthday) {
      triggerConfetti({ x: 0.5, y: 0.3 });
    }
  }, [isMyBirthday]);

  return (
    <>
      <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-20 py-6 lg:py-12">
        <header className="flex items-center justify-end mb-12 lg:mb-24">
          <a href="mailto:contact@ron.localplayer.dev">
            <Button
              variant="outline"
              className="relative z-10 rounded-full px-6 py-2 bg-white/10 backdrop-blur-sm 
                       border-white/20 text-white hover:bg-white hover:text-neutral-900 
                       transition-all duration-300"
            >
              Let&apos;s talk
              <span className="ml-1">→</span>
            </Button>
          </a>
        </header>

        <main className="relative select-none">
          <div className="fixed select-none inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.3),rgba(0,0,0,0.7))] pointer-events-none" />
          <div className="fixed select-none top-[20%] left-[50%] w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[120px] rounded-full" />
          <div className="fixed select-none top-[60%] left-[20%] w-[400px] h-[400px] bg-gradient-to-r from-red-500/10 to-orange-500/10 blur-[120px] rounded-full" />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 animate-in fade-in duration-500">
            <div className="space-y-6">
              <div className="w-48 h-48 rounded-[32px] overflow-hidden ring-1 ring-white/20 transition-transform hover:scale-[1.02] duration-300">
                <img
                  src="https://avatars.githubusercontent.com/u/132187043?v=10"
                  alt="Profile"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full brightness-100 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative">
                <h1
                  className={cn(
                    "text-[72px] leading-tight tracking-tight",
                    "bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent",
                    playfairDisplay.className
                  )}
                >
                  I&apos;m Ron
                  <span className="block">Nuss</span>
                  <span className="block text-lg font-normal text-neutral-400 mt-4 tracking-normal hover:text-white transition-colors duration-300">
                    {calcAge()} y/o back-end developer from Israel.
                  </span>
                </h1>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com/itsrn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 
                               rounded-full transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/itsrn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 
                               rounded-full transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/1itsrn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 
                               rounded-full transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-8 relative z-10">
              <h2
                className={cn(
                  "text-3xl font-medium bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent",
                  playfairDisplay.className
                )}
              >
                Projects
              </h2>
              <p className="text-white/90 relative z-10 text-lg">
                Here are some projects I&lsquo;ve worked on or am currently
                developing. Some are open-source
              </p>

              <div className="grid gap-8">
                {projects.map((project, index) => (
                  <a key={index} href={project.link} className="group relative">
                    <div
                      className="p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 
                                  transition-all duration-500 hover:bg-neutral-800/70 hover:border-neutral-600
                                  hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-neutral-900/20"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-medium mb-1 text-white">
                            {project.name}
                          </h3>
                          <p className="text-sm text-neutral-400">
                            {project.year}
                          </p>
                          {project.updates && project.updates.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.updates.map((update, idx) => (
                                 <span key={idx} className='inline-flex cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-gray-950 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-3xl'>
                                 <span className='bg-gradient-to-t from-[#fff] to-[#8678f9] bg-clip-text text-transparent'>
                                  {update.text}
                                 </span>
                               </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {project.isInDevelopment && (
                            <span
                              className="px-3 py-1 text-xs font-medium rounded-full 
                                         bg-amber-900/20 text-amber-300 border border-amber-700/50"
                            >
                              In Development
                            </span>
                          )}
                          {project.isOpenSource && (
                            <span
                              className="px-3 py-1 text-xs font-medium rounded-full 
                                         bg-emerald-900/20 text-emerald-300 border border-emerald-700/50"
                            >
                              Open Source
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-neutral-300 leading-relaxed">
                        {project.description}
                      </p>
                      <div
                        className="absolute right-8 bottom-8 opacity-0 transform translate-x-4 text-white
                                    transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                      >
                        →
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
