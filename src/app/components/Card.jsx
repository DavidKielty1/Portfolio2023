import Image from "next/image";
import React from "react";

export default function Card(props) {
  return (
    <article class="link-card text-xl text-center h-full border-2 border-slate-200/30 bg-white text-slate-600 font-montserrat mb-6 shadow-2xl py-16">
      <a href={props.url} class="h-full flex flex-col">
        <div class="group flex-1 flex flex-col gap-6 py-4 px-4 h-3/6 tracking-tight">
          <h2 class="text-3xl font-bold font-montserrat uppercase tracking-widest">
            {props.title}
          </h2>
          <p class="group-hover:hidden align-center text-center">
            {props.description}
          </p>
          <p class="hidden group-hover:block">{props.tech}</p>
        </div>
        <div class="flex-1 h-3/6 justify-center flex">
          <Image
            class="w-10/12 max-w-fit "
            type="image"
            src={props.imagesrc}
            alt=""
            width={129}
            height={129}
          />
        </div>
      </a>
    </article>
  );
}
