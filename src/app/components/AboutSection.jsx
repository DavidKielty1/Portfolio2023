import { useEffect } from "react";
import anime from "animejs";

const paleColors = [
  "rgba(219, 237, 255, OPACITY)", // Tailwind blue-100
  "rgba(255, 240, 231, OPACITY)", // Tailwind orange-100
  "rgba(255, 245, 232, OPACITY)", // Tailwind yellow-100
  "rgba(237, 250, 244, OPACITY)", // Tailwind green-100
  "rgba(245, 243, 255, OPACITY)", // Tailwind indigo-100
  "rgba(237, 233, 254, OPACITY)", // Tailwind purple-100
  "rgba(253, 242, 248, OPACITY)", // Tailwind pink-100
];

export default function AboutSection() {
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const bubbles = [];

    for (let i = 0; i < 50; i++) {
      const randomColor = paleColors[
        Math.floor(Math.random() * paleColors.length)
      ].replace("OPACITY", (Math.random() * 0.9 + 0.1).toString());

      bubbles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 100,
        swing: Math.random() * 1 + 0.1,
        radius: Math.random() * 300 + 10,
        speed: Math.random() + 0.5,
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
          // console.log("Distance:", distance, "DX:", dx, "DY:", dy);
          const adjustFactor = 0.01; // this determines how quickly the bubble moves away
          b.x += dx * adjustFactor;
          b.y += dy * adjustFactor;
        }
        ctx.beginPath();
        ctx.arc(
          b.x - b.radius / 3,
          b.y - b.radius / 3,
          b.radius / 4,
          0,
          2 * Math.PI
        );
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
    <section className="relative flex justify-center bg-slate-200/20 text-slate-600 px-4 pt-4 pb-28">
      <canvas
        id="animeCanvas"
        className="absolute top-0 left-0 w-full h-full z-[-1]"
      ></canvas>
      <div className="max-w-screen-lg flex flex-col items-center h-full w-9/12 self-center bg-opacity-70 z-10 position-relative">
        <h2 className="text-center font-raleway text-5xl font-bold py-10 md:py-16 xl:pt-48 ">
          About Me
        </h2>
        <p className="font-montserrat text-2xl text-center md:text-justify">
          Full-stack developer skilled in Javascript(React-Node),
          C#(.NET-WebAPI) and integrating them seamlessly. Proficient in SQL
          varieties, cloud deployment, and ensuring front-end safety using tools
          like TypeScript, Zod, tRPC,ESLint and Prisma ORM. Experienced with
          testing CI/CD pipelines using GitHub Actions and Docker, and familiar
          with CSS frameworks like Tailwind, MaterialUI and CSS modules.
        </p>
        <br />
        <p className="hidden md:block font-montserrat text-2xl text-center md:text-justify">
          Get in touch. I am excited to collaborate on impactful solutions!
        </p>
      </div>
    </section>
  );
}
