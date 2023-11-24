"use client";

import Image from "next/image";
import Nav from "./components/Nav";
import { ProjectData } from "./Helpers/ProjectData";
import RoughAnnotation from "./components/RoughAnnotation";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import AboutSection from "./components/AboutSection";
import { useEffect } from "react";
import anime from "animejs";

export default function Home() {
  useEffect(() => {
    const resizeCanvasToMatchDiv = () => {
      const targetDiv = document.getElementById("targetDiv"); // Replace with your target div's ID
      const canvas = document.getElementById("animeCanvas");
      if (targetDiv && canvas) {
        canvas.style.height = `${targetDiv.offsetHeight}px`;
      }
    };

    window.addEventListener("resize", resizeCanvasToMatchDiv);
    resizeCanvasToMatchDiv(); // Initial resize on component mount

    return () => {
      window.removeEventListener("resize", resizeCanvasToMatchDiv);
    };
  }, []);

  const paleColors = [
    "rgba(219, 237, 255, OPACITY)", // Tailwind blue-100
    "rgba(255, 240, 231, OPACITY)", // Tailwind orange-100
    "rgba(255, 245, 232, OPACITY)", // Tailwind yellow-100
    "rgba(237, 250, 244, OPACITY)", // Tailwind green-100
    "rgba(245, 243, 255, OPACITY)", // Tailwind indigo-100
    "rgba(237, 233, 254, OPACITY)", // Tailwind purple-100
    "rgba(253, 242, 248, OPACITY)", // Tailwind pink-100
  ];

  const cursor = {
    x: 0,
    y: 0,
  };
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    });
    const canvas = document.getElementById("animeCanvas");
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const bubbles = [];

    const isMobile = window.innerWidth < 768; // Adjust based on your mobile breakpoint
    const scaleFactor = isMobile ? 0.5 : 1; // Reduce the scale factor for mobile view

    for (let i = 0; i < 100; i++) {
      const randomColor = paleColors[
        Math.floor(Math.random() * paleColors.length)
      ].replace("OPACITY", (Math.random() * 0.9 + 0.1).toString());

      bubbles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 100,
        swing: Math.random() * 1 + 0.1,
        radius: Math.random() * 60,
        speed: Math.random() + 3.7,
        opacity: Math.random() * 0.5 + 0.1,
        color: randomColor,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        const distance = Math.sqrt(
          (b.x - cursor.x) ** 2 + (b.y - cursor.y) ** 2
        );
        const maxCursorEffectRadius = 300; // change this value as needed
        if (distance < maxCursorEffectRadius) {
          const dx = b.x - cursor.x;
          const dy = b.y - cursor.y;
          const adjustFactor = 0.01; // this determines how quickly the bubble moves away
          b.x += dx * adjustFactor;
          b.y += dy * adjustFactor;
        }
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, 2 * Math.PI);

        const gradient = ctx.createRadialGradient(
          b.x,
          b.y,
          0,
          b.x,
          b.y,
          b.radius
        );
        gradient.addColorStop(0, b.color.replace("OPACITY", "1"));
        gradient.addColorStop(0.5, b.color.replace("OPACITY", "0.5"));
        gradient.addColorStop(1, b.color.replace("OPACITY", "0"));
        ctx.fillStyle = gradient;

        ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;

        ctx.fill();

        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        if (b.y < -100) {
          b.y = canvas.height + 100;
          b.x += Math.sin(b.y * 0.01) * b.swing; // Adjusted the multiplier
        }
      }

      anime({
        targets: bubbles,
        y: function (b) {
          return b.y - b.speed;
        },
        x: function (b) {
          return b.x + Math.sin(b.y * 0.01) * b.swing; // Adjusted the multiplier
        },
        duration: 10,
        easing: "linear",
        complete: animate,
      });
    }

    animate();

    return () => {
      anime.remove(bubbles);
      document.removeEventListener("mousemove", (e) => {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
      });
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  return (
    <>
      <canvas
        id="animeCanvas"
        className="absolute top-0 left-0 right-0 bottom-0 !z-[-1] !w-screen"
      ></canvas>
      <div id="targetDiv" className="h-max relative">
        <main className="">
          <Nav />
          <section
            id="home"
            className="flex justify-center pt-28 lg:py-24 xl:pt-52 xl:pb-8  bg-slate-200/20 text-slate-600"
          >
            <div className="flex justify-center flex-col lg:flex-row w-full max-w-screen-2xl text-center lg:text-left gap-10 lg:mx-10 xl:mx-20 sm:mx-16">
              <div className="lg:w-7/12 3xl:w-8/12 flex flex-col gap-10 mx-8 lg:mx-0">
                <RoughAnnotation />
                <div className="text-xl flex font-worksans justify-center xl:justify-start flex-col xs:flex-row">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/d%C3%A1ith%C3%AD-%C3%B3-caoilte-53256948/"
                  >
                    <button className="bg-slate-200/5 mr-1 flex-1 border-slate-600 border-2 lg:max-h-20 text-slate-600 rounded-md py-2 xs:px-8 hover:border-slate-200/10 hover:bg-slate-600 hover:text-white max-w-screen-1btn">
                      View LinkedIn
                    </button>
                  </a>
                  <a target="_blank" href="https://github.com/DavidKielty1">
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
                {ProjectData.map((project, idx) => (
                  <article
                    key={idx}
                    className="px-10 text-xl group text-center bg-white font-montserrat py-16 rounded-lg shadow-xl xl:w-[550px] transform transition-transform hover:shadow-2xl hover:scale-105 duration-800"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      className="flex flex-col h-[500px] "
                    >
                      <div className=" flex flex-col gap-6 flex-1 py-4 px-4 tracking-tight mb-4 h-[180px] ">
                        <h2 className="text-3xl font-bold uppercase tracking-widest hover:group-hover:scale-300">
                          {project.title}
                        </h2>
                        <div className="relative w-100% ">
                          <p className="absolute group-hover:hidden align-center text-center text-2xl ">
                            {project.description}
                          </p>
                          <p className="absolute hidden group-hover:block text-2xl ">
                            {project.tech}
                          </p>
                        </div>
                      </div>
                      <Image
                        className="flex-1 self-center w-72 aspect-square transform transition-transform hover:group-hover:scale-140"
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
          <section id="about">
            <AboutSection />
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}
