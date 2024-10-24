import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col gap-8 items-center justify-start w-full h-screen px-10 max-w-6xl mx-auto">
      <Image
        src="/villa/grlv_1.webp"
        alt="Golden Retreat Lombok Villa"
        width={500}
        height={200}
        className="w-full h-auto aspect-video object-cover rounded-lg"
      />
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-4xl flex font-bold font-serif">About Us</h1>
        <p className="text-md text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nam
          omnis distinctio, explicabo eaque, sunt quia iure ipsa non magni fugit
          excepturi, recusandae molestiae deleniti hic. Excepturi sequi officiis
          eveniet.
        </p>
      </div>
    </div>
  );
}
