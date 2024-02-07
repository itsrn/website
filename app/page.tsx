/* eslint-disable @next/next/no-img-element */

"use client";
import { AnimatedBadge } from "./components/AnimatedBadge";
import { ContactIcon } from "./components/Icons";
import { ButtonGradient } from "./components/ButtonGradient";
import SocialLinks, { Socials } from "./components/Socials";
import { FaArrowRight } from "react-icons/fa6";
import { Footer } from "./components/Footer";
import React, { useEffect, useState } from "react";
import { Heebo } from "next/font/google";
const hebrewFont = Heebo({
  subsets: ["hebrew"],
});
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Home() {
  const [isRedirectedFromShortLink, setIsRedirectedFromShortLink] =
    useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const referrer: string = document.referrer;
      setIsRedirectedFromShortLink(referrer === "https://did.li/BITpayco-il");
    }
  }, []);

  return (
    <>
      <AlertDialog open={isRedirectedFromShortLink} onOpenChange={setIsRedirectedFromShortLink}>
        <AlertDialogContent className={hebrewFont.className + "  "} dir="rtl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-right" dir="rtl">
              שלום!
            </AlertDialogTitle>
            <AlertDialogDescription className=" text-right" dir="rtl">
              אתם הגעתם לכאן דרך קישור מקוצר שהוביל לאתר פישינג. למזלכם, הספקתי
              לדווח על הקישור המקוצר ולקחת אותו ככה שיוביל לאתר שלי (אל דאגה, כאן אתם
              בטוחים). מוזמנים לצאת מהאתר ולהמשיך בשגרת היום שלכם. תשמרו על
              עצמכם.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>בסדר</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <main className="relative flex min-h-screen flex-col items-center md:p-20 p-0 mt-8 md:pt-10">
        {/* the "shadow" at the top of the screen */}
        <div className="pointer-events-none fixed left-0 top-0 z-50 h-12 w-full to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] bg-neutral-900"></div>

        {/* the badge. will be used in the future (probably) */}
        {/*
          <AnimatedBadge>
          <div className="md:text-xl flex flex-row items-center justify-center">
            Introducing: My new website{" "}
            <div
              data-orientation="vertical"
              role="none"
              className="shrink-0 bg-white opacity-70 w-[1px] mx-2 h-4"
            ></div>{" "}
            Read more <FaArrowRight className="ml-1" />
          </div>
        </AnimatedBadge>
        */}

        {/* the bento */}
        <div className="md:grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] grid-rows-[auto] my-2 md:mt-10 mt-3 w-2/3">
          <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 bg-[#131315] text-white px-12 py-10 rounded-3xl max-md:p-8">
            <img
              src="https://avatars.githubusercontent.com/u/132187043?v=4"
              alt="ron"
              className="overflow-hidden w-1/2 md:w-1/5 flex-[0_0_auto] rounded-full"
            />
            <h1 className="md:text-3xl text-xl">
              <span className="flex flex-row items-center">
                Ron Nuss{" "}
                <img
                  alt="🇮🇱"
                  className="ml-3 hidden md:block"
                  width={40}
                  height={40}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAClUExURUdwTKampX5+gXl5eby7urCwsI2MjH6Bj8bFw8/NygwnZ3t7e8XFxXd3d8TExMbGxsbGxjpLd6GipP///yZUsd3d3NnZ2O/u7PLy8uLi4QUvjOfn5xxLrNXV1QY0lfj5+RI+mQ9CqRhFo/j39Pz8/AIjhJKkzgY2oKOjoz9ktsXR6d7l8+vo3nmSyFFyvqi53WSCxY6OkGN3rjxWn7Szrra8zAQga7v0iQYAAAATdFJOUwCi+lD+I64K/v6o2NiPpnFIqPgOhhgBAAAEh0lEQVRYw+2X2VLjQAxFBxKIPSEByvsWtxdst/ds8/+fNpLaW4JDMTzNQ24KqKLg5EpW91V+/brrrrv+S62eRq1WP0I8vb29vm63Ly8Sarlcvmy3r29Pq39jvAJAlj0dBN88z5NlmYAv29en0e7qq0rewAUwNMsxjAhkOI6l6bqmaSX88KTltv/31cPDnENkgBEZ3l6zDDOKo6LIm6Sq+fEYsvB4PB6Ss1da0sMIOp1OVC/2D7vZN0OG93WMyI/9oklarrpBmqY7kG1/CLFjlU1BkkztW76QoHTsh/BhFjkygiBwSWEYMkYs+wO+dvbH+wB6f1zqUC82EOVRP7AdUEpVgw9gqEIdiBEIOYzZvwfQ7z8fVK9mlQbINBwNm9FyKAUg6qjOUTrhXIFEvUd+OBzqA1fDFDUaGUFhmo4tmnEk3gCr3tm7XRqG2A71ggMVYqNUXh9Q8NQYoHYzIOggYyljIYlIvQ8E1FXS5EVhRjRMRllaupRUnH1cgXYCBBw2YFxECEZu+goojiOTJlKDYdS10jC9/ftlj9ARQ0dkB79hJSoHRkEMxPg+cASIDgqMiCWPc/ScZQdmdzBQusNG87pqiOEXggJ2ZkDecgqSS00+J9BCznldt+ACEH4sfCQ1UjpLkWlegvQLkOTpYoYMPJgxyQcSSIl5mnelKX4Psgik69YnENKhYMcRNNM0IwIpSqO2vIjhsPnC0aQ0/VNpkkf3goUkZ+BQj01oVVpzNa0+lzbnCB+mNuGQoQIPLM530LZugQ+/d9SXpjk3HCHIGQwlqcuDGqYQqquUOUfaLUcXpcWmW+cudrpJeaHMObKsLxyJ0ny01LhqS4+L1/68I+d2j5yhRzBIVUpOcjdIfugo6kEJGaqSoPieI2/28edq4uZ+Xrm1mtZTR19M9rUj6lHLc5fDRamqddLE/zhHY4+UHG5amKEkaMRZu+6Rd3uyhSNDPDUlaeH8wyFuFWU8tJelOV/OUf/U6PznwXBoL64R79ZAzvWIro+2HgzRjdTdtCUF9xeg6RzR8S8KZZAPUdckpPPZw6vndmnGOEgC1FVVUNSpIevjyGaQhno5vWpPcn8fTY8/ZH7cu4DVQcRRGIRhynZT2MMksiUoWZvWBtckMfJueeiz8iL7RT5exJFNG4rYfyIsKjILwRCheBXZA+hz0gqTcOuT2lqsMMF1ZJOjEWPbbDay+7zdYRyFlJDqVWjjSiCWERH+c9kvCH1Cul3WjqENB45jUjVnUpJUhyPDt36fzf4usofsJwQEbps0sLzBHOoyrmQn+IJtTD5XxwtHf0TIMkEiDMY2NpoC13JKzZOXpyzbgx477ffZSZay53GO9ofjkNgpJTZuR6GKDMcoLTCBiMfH9fp5s1mQNpvNek2wyUDuT9ISS4ZtFf1AL7AVcAIgyYUNJCwWYteHhXX1i/75abF4Xu9HRxsAZyeqWZbFoYaFUuoq6RD0l3PL/GIx/Hq12Kyx5CzLTqSMCFDJyPjW5xR8LbBkLPoRO7FeUytWP//kAwbwtbpRx7et3XXXXf+7/gKYdxrs6fgv8wAAAABJRU5ErkJggg=="
                ></img>
              </span>
              16 years old, full-stack developer{" "}
              <span className="text-[#8a8a93]">
                {" "}
                who build things to make the web better and easier.
              </span>
            </h1>
            {/* the social icons section, which is a seperated component */}
            <Socials />
          </div>

          <div className="flex flex-col justify-between gap-x-8 bg-[#131315] md:mt-0 mt-5 text-white text-center p-12 rounded-3xl max-md:p-8">
            <div className="flex flex-col justify-center items-center mb-8 md:gap-3 max-md:mb-4">
              <ContactIcon className="w-[112px] h-[112px]" />
              <h2 className="md:text-3xl text-xl  max-md:tracking-[-0.01em]">
                Have a project in mind?
              </h2>
              <h2 className="md:text-xl text-lg max-md:tracking-[-0.01em] mt-2 md:mt-0">
                Feel free to mail me about any business inquires
              </h2>
            </div>
            <ButtonGradient
              href="mailto:ronnuss@proton.me"
              className="lg:text-2xl md:text-xl text-lg md:p-0"
            >
              ronnuss@proton.me
            </ButtonGradient>
          </div>
        </div>

        <div className="flex w-2/3 text-white flex-col text-3xl items-start gap-x-8 gap-y-8 bg-[#131315] px-12 py-12 mt-4 md:mt-0 rounded-3xl md:p-8 md:mb-10 mb-32">
          <h3 className="md:text-[32px] md:leading-10 max-md:tracking-[-0.03em]">
            I am a passionate self-taught full-stack developer who creates web
            solutions. I&#39;m currently working on{" "}
            <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
              Bubblez
            </span>{" "}
            - a simple and easy website builder.{" "}
            <span className="text-[#8a8a93]">
              {" "}
              <span className="text-[#57578f]">Bubblez</span> is still under
              development, and future updates about it will be in my{" "}
              <a className="text-[#4d4f53]" href={SocialLinks[1].link}>
                X (Twitter)
              </a>{" "}
              and{" "}
              <a className="text-[#57628f]" href={SocialLinks[2].link}>
                LinkedIn
              </a>
              .
            </span>
          </h3>
        </div>

        <Footer />
      </main>
    </>
  );
}
