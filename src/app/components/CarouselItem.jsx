import Card from "./Card";
import { ProjectData } from "../Helpers/ProjectData";

export default function CarouselItem() {
  return (
    <li className="splide__slide min-h-[700px]">
      {ProjectData &&
        ProjectData.map((project, idx) => (
          <Card
            key={idx}
            url={project.url}
            title={project.title}
            description={project.description}
            tech={project.tech}
            imagesrc={project.imagesrc}
          />
        ))}
    </li>
  );
}
