import React, { useEffect } from "react";
import Script from "next/script";
import CarouselItem from "./CarouselItem";

export default function Carousel({ id, config }) {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      const splide = new Splide(`#${id}`, config);
      splide.mount();
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("DOMContentLoaded", function () {
        // You might need to adjust this part if necessary
        // Cleanup any resources related to Splide here
      });
    };
  }, [id, config]);

  return (
    <div className="splide min-h-[700px] bottom-36px" id={id}>
      <div class="splide__track min-h-[700px]">
        <ul class="splide__list min-h-[700px]">
          <CarouselItem />
        </ul>
      </div>
    </div>
  );
}

<link
  href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"
  rel="stylesheet"
/>;

<Script
  src="
https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js
"
></Script>;
