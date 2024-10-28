import Image from "next/image";

export default function Gallery() {
  return (
    <div className="flex flex-col gap-8 items-center justify-start w-full h-screen p-10 max-w-6xl mx-auto">
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-4xl font-bold font-serif">Gallery</h1>
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
