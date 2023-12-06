import { RxLinkedinLogo } from "react-icons/rx";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { Azeret_Mono } from "next/font/google";
import localFonts from "next/font/local";

const clashdisplay = localFonts({
  src: "./ClashDisplay-Bold.otf",
});

const azeret_mono = Azeret_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-20 md:bg-cover md:bg-center"
      style={{ backgroundSize: "cover", backgroundImage: "url('./bg.jpeg')" }}
    >
      <h1 className="lg:max-w-3xl mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-200 md:text-5xl lg:text-6xl">
        Hey, I&rsquo;m{" "}
        <mark
          className={
            "px-2 text-white bg-violet-500 bg-noise rounded-lg h-[115%] " +
            clashdisplay.className
          }
        >
          Ron
        </mark>
        .
        <div className="lg:mt-2 mt-3 flex text-4xl flex-row space-x-2">
          <a href="https://www.linkedin.com/in/itsrn/">
            <RxLinkedinLogo className="text-white hover:text-violet-300 transition ease-in-out" />
          </a>
          <a href="https://twitter.com/1itsrn">
            <FaTwitterSquare className="text-white hover:text-violet-300 transition ease-in-out" />
          </a>
          <a href="https://github.com/itsrn">
            <FaGithubSquare className="text-white hover:text-violet-300 transition ease-in-out" />
          </a>
        </div>
        <div className="text-3xl mt-10">
          <h2>
            My name is{" "}
            <mark
              className={
                "px-2 text-white bg-violet-500 bg-noise rounded-lg tracking-normal " +
                clashdisplay.className
              }
            >
              Ron Nuss
            </mark>
            , a 16 years old back-end developer from Israel. I am a{" "}
            <a
              href="https://www.iaf.org.il/9279-52183-he/IAF.aspx"
              className={"underline decoration-wavy decoration-violet-400 " + azeret_mono.className}
            >
              Shocher in the Israeli Air Force
            </a>
            . I study Computer Engineering and Electronics as a Shocher. My
            hobby is to create open-source projects that helps people and
            developers in their daily life. You can view my open-source projects
            on{" "}
            <a
              href="https://github.com/itsrn"
              className={"underline decoration-wavy decoration-violet-400 " + azeret_mono.className}
            >
              my Github
            </a>
            .
          </h2>
        </div>
      </h1>

      <p
        className={
          "text-lg font-normal text-gray-300 lg:text-xl tracking-tight " +
          azeret_mono.className
        }
      >
        Created by{" "}
        <span className={clashdisplay.className + " tracking-wider"}>
          Ron Nuss
        </span>
        ,{" "}
        <a
          href="https://en.wikipedia.org/wiki/Hebrew_calendar"
          className="underline decoration-wavy decoration-gray-300"
        >
          5784
        </a>
        .
      </p>
    </main>
  );
}
