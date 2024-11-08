import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col gap-8 items-center justify-start w-full h-screen p-10 max-w-6xl mx-auto">
      <Image
        src="/villa/grlv_2.webp"
        alt="Golden Retreat Lombok Villa"
        width={500}
        height={200}
        className="w-full h-auto aspect-video object-cover rounded-lg"
      />
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-4xl font-bold font-serif">Contact Info</h1>
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
