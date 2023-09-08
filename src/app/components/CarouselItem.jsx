import React from "react";
import Card from "./Card";
import { DUMMY_DATA } from "./Nav";

export default function CarouselItem() {
  return (
    <li class="splide__slide min-h-[700px]">
      {DUMMY_DATA &&
        DUMMY_DATA.map((dummy, idx) => (
          <Card
            key={idx}
            url={dummy.url}
            title={dummy.title}
            description={dummy.description}
            tech={dummy.tech}
            imagesrc={dummy.imagesrc}
          />
        ))}
    </li>
  );
}
