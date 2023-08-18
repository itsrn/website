export default function FourZeroFour() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-20 md:bg-cover md:bg-center"
      style={{ backgroundImage: 'url("./bg.jpeg")', backgroundSize: "cover" }}
    >
      <h1 className="lg:max-w-3xl mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        This page{" "}
        <mark className="px-2 text-white bg-violet-500 bg-noise rounded-lg">
          doesn&rsquo;t exist
        </mark>
        .
        <div className="text-3xl mt-4">
          <h2>
            I&rsquo;m sorry, but the page you are looking for doesn&rsquo;t
            exist. There might be a mistake or typo in the link, or the page you
            are trying to visit has been removed. You may want to {"  "}
            <a
              href="javascript:history.back()"
              className="underline decoration-wavy decoration-violet-400"
            >
              back home
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
