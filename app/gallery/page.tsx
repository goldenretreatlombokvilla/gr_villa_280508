import Image from "next/image";

const gallery = [
  {
    image: "/villa/grlv_1.webp",
    title: "Front Enterence"
  },
  {
    image: "/villa/grlv_2.webp",
    title: "Living Room"
  },
  {
    image: "/villa/grlv_3.webp",
    title: "Private Pool View"
  },
  {
    image: "/villa/grlv_4.webp",
    title: "Yoga Deck"
  },
  {
    image: "/villa/grlv_5.webp",
    title: "Bedroom Front View"
  },
  {
    image: "/villa/grlv_6.webp",
    title: "Bedroom Side View"
  },
  {
    image: "/villa/grlv_7.webp",
    title: "Bathroom"
  }
];

export default function Gallery() {
  return (
    <div className="flex flex-col gap-8 items-center justify-start w-full p-10 max-w-6xl mx-auto">
      <div className="flex flex-col gap-4 items-start w-full">
        <h1 className="text-4xl font-bold font-cinzel">Gallery</h1>
        <p className="text-md font-sans text-gray-600">
          A glimpse into the idyllic lifestyle that awaits you at Golden Retreat
          Lombok Villa.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8">
        {gallery.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-4 items-center justify-center lg:first:col-span-3"
          >
            <Image
              src={item.image}
              alt="Golden Retreat Lombok Villa"
              width={500}
              height={200}
              className="w-full h-auto aspect-video object-cover rounded-lg hover:shadow-lg hover:scale-105 trasition-all duration-300"
            />
            <p className="text-sm font-sans opacity-70 italic">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
