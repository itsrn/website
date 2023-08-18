import { RxLinkedinLogo } from "react-icons/rx";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-20 md:bg-cover md:bg-center"
      style={{ backgroundImage: 'url("./bg.jpeg")', backgroundSize: "cover" }}
    >
      <h1 className="lg:max-w-3xl mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Hey, I&rsquo;m{" "}
        <mark className="px-2 text-white bg-violet-500 bg-noise rounded-lg">
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
            <mark className="px-2 text-white bg-violet-500 bg-noise rounded-lg">
              Ron Nuss
            </mark>
            , a 15 years old back-end developer
            from Israel. I am a{" "}
            <a
              href="https://www.iaf.org.il/9279-52183-he/IAF.aspx"
              className="underline decoration-wavy decoration-violet-400"
            >
              Shocher in the Israel Air Force
            </a>
            . I study Computer Engineering and Electronics as a Shocher. My
            hobby is to create open-source projects that helps people and
            developers in their daily life. You can view my open-source projects
            on{" "}
            <a
              href="https://github.com/itsrn"
              className="underline decoration-wavy decoration-violet-400"
            >
              my Github
            </a>
            .
          </h2>
        </div>
      </h1>

      <p className="text-lg font-normal text-gray-300 lg:text-xl">
        Created by Ron Nuss,{" "}
        <a
          href="https://en.wikipedia.org/wiki/Hebrew_calendar"
          className="underline decoration-wavy decoration-gray-300"
        >
          5783
        </a>
        .
      </p>
    </main>
  );
}
