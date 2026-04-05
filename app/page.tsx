/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { calcAge } from "@/lib/utils";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#0a0a0a] text-white px-6 py-12 ${spaceMono.className}`}>
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-start mb-24 border-b border-white/10 pb-6">
          <div className="text-sm">
            <div>ron</div>
            <div className="text-white/40">{calcAge()} / back-end dev / il</div>
          </div>
          <a 
            href="mailto:contact@ron.localplayer.dev"
            className="text-sm border border-white px-4 py-2"
          >
            contact
          </a>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-4">
            <svg 
              viewBox="0 0 200 200" 
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="boxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <rect 
                x="0" 
                y="0" 
                width="200" 
                height="200" 
                fill="url(#boxGradient)"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          </div>

          <div className="md:col-span-8 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                ron
              </h1>
              <p className="text-lg text-white/60 leading-relaxed">
                {calcAge()}-year-old back-end developer from Israel.
                <br />
                building systems and writing code.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex gap-4">
                <a
                  href="https://github.com/itsrn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white px-4 py-2 text-sm flex items-center gap-2"
                >
                  <FaGithub className="w-4 h-4" />
                  github
                </a>
                <a
                  href="https://x.com/1itsrn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white px-4 py-2 text-sm flex items-center gap-2"
                >
                  <FaXTwitter className="w-4 h-4" />
                  x-twitter
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t border-white/10 pt-6">
          <div className="flex justify-between items-center text-sm text-white/40">
            <div>© {new Date().getFullYear()}</div>
            <div>il</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
