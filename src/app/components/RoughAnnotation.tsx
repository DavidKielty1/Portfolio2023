"use client";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useState } from "react";

const RoughAnnotation = () => {
  const [show, setShow] = useState(true);
  return (
    <RoughNotationGroup show={show}>
      <h1 className="font-raleway text-5xl font-bold">
        Hello! I&apos;m David, a{" "}
        <RoughNotation
          type="highlight"
          color="rgb(153,246,228, 0.8)"
          animationDuration={1500}
          animationDelay={1000}
        >
          developer
        </RoughNotation>{" "}
        based in the United Kingdom
      </h1>

      <p className="font-montserrat text-2xl text-justify">
        <span>
          As a{" "}
          <RoughNotation
            type="highlight"
            color="rgb(254,215,170, 0.8)"
            animationDuration={500}
            animationDelay={2000}
            iterations={1}
          >
            devoted
          </RoughNotation>{" "}
          enthusiast of{" "}
          <RoughNotation
            type="highlight"
            color="rgb(253,230,138, 0.8)"
            animationDuration={500}
            animationDelay={3000}
            iterations={1}
          >
            learning
          </RoughNotation>{" "}
          and an aspiring{" "}
          <RoughNotation
            type="highlight"
            color="rgb(153,246,228, 0.8)"
            animationDuration={800}
            animationDelay={4000}
            iterations={2}
          >
            fullstack
          </RoughNotation>{" "}
          technician, I am eager to contribute to the exciting world of software
          development. My commitment to constant growth and inventive thinking
          drives me to seek
          <RoughNotation
            type="highlight"
            color="rgb(187,247,208, 0.8)"
            animationDuration={500}
            animationDelay={5000}
          >
            collaborative
          </RoughNotation>{" "}
          projects that push beyond the ordinary, yielding exceptional and
          ingenious{" "}
          <RoughNotation
            type="highlight"
            color="rgb(165,243,252,0.8)"
            animationDuration={500}
            animationDelay={6000}
            iterations={1}
          >
            solutions
          </RoughNotation>
          .
        </span>
        <span className="hidden xl:block ">
          <RoughNotation
            type="highlight"
            color="rgb(191,219,254, 0.8)"
            animationDuration={500}
            animationDelay={7000}
            iterations={1}
          >
            Together
          </RoughNotation>
          , we can
          <RoughNotation
            type="highlight"
            color="rgb(233,213,255, 0.8)"
            animationDuration={500}
            animationDelay={8000}
            iterations={1}
          >
            {" "}
            embark{" "}
          </RoughNotation>
          on a journey to create outstanding software that not only meets but
          exceeds expectations, leaving a lasting mark on the ever{" "}
          <RoughNotation
            type="highlight"
            color="rgb(251,207,232, 0.8)"
            animationDuration={800}
            animationDelay={9000}
            iterations={2}
          >
            evolving
          </RoughNotation>{" "}
          tech landscape. Let&apos;s debug your team --{" "}
          <RoughNotation
            type="bracket"
            color="rgb(248,113,113, 0.8)"
            brackets={["left", "right"]}
            padding={6}
            strokeWidth={6}
            animationDuration={1500}
            animationDelay={10000}
          >
            <RoughNotation
              type="highlight"
              color="rgb(253,230,138, 0.8)"
              padding={6}
              strokeWidth={6}
              animationDuration={1500}
              animationDelay={10000}
              iterations={5}
            >
              Hire me
            </RoughNotation>
          </RoughNotation>{" "}
          !
        </span>
      </p>
    </RoughNotationGroup>
  );
};

export default RoughAnnotation;
// const annotation1 = annotate(developer, {
//   type: "highlight",
//   color: "#99f6e4",
//   animationDuration: 1500,
// });
// const annotation2 = annotate(devoted, {
//   type: "highlight",
//   color: "#fed7aa",
//   animationDuration: 500,
//   iterations: 1,
// });
// const annotation3 = annotate(learning, {
//   type: "highlight",
//   color: "#fde68a",
//   animationDuration: 500,
//   iterations: 1,
// });
// const annotation4 = annotate(fullStack, {
//   type: "highlight",
//   color: "#bbf7d0",
//   animationDuration: 500,
//   rtl: true,
// });
// const annotation5 = annotate(collaborativeProjects, {
//   type: "highlight",
//   color: "#fecaca",
//   animationDuration: 500,
//   iterations: 3,
//   rtl: true,
// });
// const annotation6 = annotate(solutions, {
//   type: "highlight",
//   color: "#a5f3fc",
//   animationDuration: 500,
//   iterations: 1,
// });
// const annotation7 = annotate(together, {
//   type: "highlight",
//   color: "#bfdbfe",
//   animationDuration: 500,
//   iterations: 1,
// });
// const annotation8 = annotate(embark, {
//   type: "highlight",
//   color: "#e9d5ff",
//   animationDuration: 500,
//   iterations: 1,
//   rtl: true,
// });
// const annotation9 = annotate(everEvolving, {
//   type: "highlight",
//   color: "#fbcfe8",
//   animationDuration: 500,
//   iterations: 1,
// });
// const annotation10 = annotate(hireme, {
// type: "bracket",
// color: "#be123c",
// brackets: ["left", "right"],
// padding: 10,
// strokeWidth: 6,
//   animationDuration: 1500,
// });
// const annotation11 = annotate(hireme, {
//   type: "highlight",
//   color: "#fcd34d",
//   animationDuration: 1500,
// });
// const ag = annotationGroup([
//   annotation1,
//   annotation2,
//   annotation3,
//   annotation4,
//   annotation5,
//   annotation6,
//   annotation7,
//   annotation8,
//   annotation9,
//   annotation10,
//   annotation11,
// ]);
// ag();
