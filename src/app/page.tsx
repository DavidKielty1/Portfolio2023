"use client";

import Image from "next/image";
import Nav, { DUMMY_DATA } from "./components/Nav";
import RoughAnnotation from "./components/RoughAnnotation";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main>
      <Nav />
      <section
        id="home"
        className="flex justify-center pt-28 lg:py-24 xl:pt-52 xl:pb-8  bg-slate-200/20 text-slate-600"
      >
        <div className="flex justify-center flex-col lg:flex-row w-full max-w-screen-2xl text-center lg:text-left gap-10 lg:mx-10 xl:mx-20 sm:mx-16">
          <div className="lg:w-7/12 3xl:w-8/12 flex flex-col gap-10 mx-8 lg:mx-0">
            <RoughAnnotation />
            <div className="text-xl flex font-worksans justify-center xl:justify-start flex-col xs:flex-row">
              <a href="https://www.linkedin.com/in/d%C3%A1ith%C3%AD-%C3%B3-caoilte-53256948/">
                <button className="bg-slate-200/5 mr-1 flex-1 border-slate-600 border-2 lg:max-h-20 text-slate-600 rounded-md py-2 xs:px-8 hover:border-slate-200/10 hover:bg-slate-600 hover:text-white max-w-screen-1btn">
                  View LinkedIn
                </button>
              </a>
              <a href="https://github.com/DavidKielty1">
                <button className="bg-slate-600 ml-1 text-white flex-1 rounded-md border-2 lg:max-h-20 border-slate-200/10 py-2 xs:px-8 hover:border-slate-200/10 hover:border-2 hover:border-slate-600 hover:bg-slate-200/20 hover:text-slate-600 max-w-screen-1btn">
                  View Github
                </button>
              </a>
              <button></button>
            </div>
          </div>

          <div className="lg:w-5/12 3xl:w-4/12 xs:mx-10 sm:mx-30 md:mx-40 lg:mx-0 2xl:mt-0 mx-10 xl:mx-0 flex justify-center lg:justify-end items-center">
            <Image
              className="w-100% z-50 rounded-full   "
              src="/Profile.jpg"
              width={384}
              height={512}
              alt="Profile picture"
              quality={100}
              priority={true}
            />
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="flex justify-center bg-slate-200/20 text-slate-600 px-4 py-4"
      >
        <div className="flex flex-col items-center h-full max-w-screen-2xl">
          <h2 className="text-center font-raleway text-5xl font-bold pt-10 md:py-20 ">
            Projects
          </h2>
          <div className="max-w-xs my-16 max-h-full block sm:hidden">
            <Carousel id="carousel" config="config"></Carousel>
          </div>
          <ul className="sm:flex flex-col gap-10 mx-4 hidden xl:flex-row flex-wrap justify-center max-w-screen-3xl">
            {DUMMY_DATA.map((project, idx) => (
              <article
                key={idx}
                className="px-10 text-xl group text-center bg-white font-montserrat py-16 rounded-lg shadow-2xl xl:w-[550px]"
              >
                <a href={project.url} className=" flex flex-col h-[500px]">
                  <div className=" flex flex-col gap-6 flex-1 py-4 px-4 tracking-tight mb-4 h-[180px]">
                    <h2 className="text-3xl font-bold uppercase tracking-widest">
                      {project.title}
                    </h2>
                    <div className="relative w-100%">
                      <p className="absolute group-hover:hidden align-center text-center text-2xl">
                        {project.description}
                      </p>
                      <p className="absolute hidden group-hover:block text-2xl">
                        {project.tech}
                      </p>
                    </div>
                  </div>
                  <Image
                    className="flex-1 self-center w-72 aspect-square"
                    src={project.imagesrc}
                    loading="lazy"
                    width={300}
                    height={300}
                    alt="Project icon"
                  />
                </a>
              </article>
            ))}
          </ul>
        </div>
      </section>
      <section
        id="about"
        className="flex justify-center  bg-slate-200/20 text-slate-600 px-4 pt-4 pb-28"
      >
        <div className="max-w-screen-2xl flex flex-col items-center h-full w-9/12 self-center">
          <h2 className="text-center font-raleway text-5xl font-bold py-10 md:py-16 xl:pt-48 ">
            About Me
          </h2>
          <p className="font-montserrat text-2xl text-center md:text-justify">
            I&apos;m a dedicated software developer seeking opportunities at
            reputable companies. My passion lies in working with the latest tech
            on diverse projects and constantly expanding my skills through
            hands-on work and staying updated with modern methodologies.
          </p>
          <br />
          <p className="hidden md:block font-montserrat text-2xl text-center md:text-justify">
            I ensure robust development with TypeScript, utilizing Zod, tRPC,
            and type-safe ORMs such as Prisma while maintaining strict linting
            practices. My experience includes deploying to various platforms and
            working with databases such as PostgreSQL, Firebase, and MongoDB. I
            have also dabbled with setting up testing CI/CD pipelines using
            GitHub Actions, yaml and Docker.
          </p>
          <br />
          <p className="hidden md:block font-montserrat text-2xl text-center md:text-justify">
            My CSS skills encompass CSS modules, SCSS, SASS, styled components,
            and popular frameworks like Tailwind, DaisyUI, and BootstrapUI. In
            the world of React, I&apos;m well-versed in hooks, context API,
            fetch API, react-query, and global state management (with Redux).
          </p>
          <br />
          <p className="font-montserrat text-2xl text-center md:text-justify">
            I am looking forward to collaborating with your established team in
            an agile environment and learning from your knowledgable expertise.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
