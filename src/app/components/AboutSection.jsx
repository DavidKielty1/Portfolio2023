export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex justify-center bg-slate-200/20 text-slate-600 px-4 pt-4 pb-28"
    >
      <div className="max-w-screen-lg flex flex-col items-center h-full w-9/12 self-center bg-opacity-70 z-10 position-relative">
        <h2 className="text-center font-raleway text-5xl font-bold py-10 md:py-16 xl:pt-48 ">
          About Me
        </h2>
        <p className="font-montserrat text-2xl text-center md:text-justify">
          Full-stack developer skilled in Javascript(React-Node),
          C#(.NET-WebAPI) and integrating them seamlessly. Proficient in SQL
          varieties, cloud deployment, and ensuring front-end safety using tools
          like TypeScript, Zod, tRPC,ESLint and Prisma ORM. Experienced with
          testing CI/CD pipelines using GitHub Actions and Docker, and CSS,
          Tailwind virtuoso.
        </p>
        <br />
        <p className="hidden md:block font-montserrat text-2xl text-center md:text-justify">
          Get in touch. I am excited to collaborate on impactful solutions!
        </p>
      </div>
    </section>
  );
}
