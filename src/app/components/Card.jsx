import Image from "next/image";

export default function Card(props) {
  return (
    <article className="link-card text-xl text-center h-full border-2 border-slate-200/30 bg-white text-slate-600 font-montserrat mb-6 shadow-2xl py-16">
      <a target="_blank" href={props.url} className="h-full flex flex-col">
        <div className="group flex-1 flex flex-col gap-6 py-4 px-4 h-3/6 tracking-tight">
          <h2 className="text-3xl font-bold font-montserrat uppercase tracking-widest">
            {props.title}
          </h2>
          <p className="group-hover:hidden align-center text-center">
            {props.description}
          </p>
          <p className="hidden group-hover:block">{props.tech}</p>
        </div>
        <div className="flex-1 h-3/6 justify-center flex">
          <Image
            className="w-10/12 max-w-fit "
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
