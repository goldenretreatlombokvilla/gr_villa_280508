import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Presentation() {
  return (
    <div className="flex flex-col gap-4 items-center justify-start w-full p-10 lg:px-52 bg-stone-900">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between  w-full">
        <div className="flex-col gap-2 py-8 items-center w-full text-white">
          <p className="text-3xl font-cinzel font-bold">Presentation Deck</p>
          <p className="italic text-md font-sans text-stone-100/60">
            Presentation Sales Pitch Deck. For agents use only.
          </p>
        </div>
      </div>
      <div className="relative w-full h-auto aspect-video border-2 border-yellow-700/60 rounded-xl p-0 py-10 overflow-hidden shadow-lg">
        <iframe
          loading="lazy"
          className="absolute w-full h-auto aspect-video top-0 left-0 border-none p-0 m-0"
          src="https://www.canva.com/design/DAGH285Q47E/_gfshECuJ2xec5RaYgvOiQ/view?embed"
          allow="fullscreen"
        ></iframe>
      </div>
    </div>
  );
}
