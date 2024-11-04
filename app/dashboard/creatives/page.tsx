import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const creatives = [
  {
    title: "draft 1",
    link: "/creatives/post1.jpg"
  },
  {
    title: "draft 2",
    link: "/creatives/post2.jpg"
  }
];

export default function Creatives() {
  return (
    <div className="flex flex-col gap-4 items-center justify-start w-full p-10 lg:px-52 bg-stone-200">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between  w-full">
        <div className="flex-col gap-2 py-8 items-center w-full">
          <p className="text-3xl font-cinzel font-bold">Creative Material</p>
          <p className="italic text-md font-sans opacity-50">
            Creative materials from social media channels.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl opacity-70 font-bold">
          Week 1 - Creative Content
        </p>
        <p className="font-sans text-md opacity-70">4 Nov - 8 Nov 2024</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10">
          {creatives.map((item: any) => (
            <Image
              src={item.link}
              alt={item.title}
              key={item.title}
              width={500}
              height={200}
              className="w-full h-auto aspect-square object-contain shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
