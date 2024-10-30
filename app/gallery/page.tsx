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
      <div className="bg-stone-900 rounded-lg py-8 px-8 flex flex-row gap-6 items-center justify-start w-full divide-x-2 divide-white/50">
        <div className="flex items-center justify-center px-2">
          <Image
            src="/brand/logo_icon.png"
            alt="Golden Retreat Lombok Villa"
            width={200}
            height={200}
            className="w-14 h-14 object-contain aspect-square drop-shadow-xl"
          />
        </div>
        <div className="flex flex-col gap-0 items-start w-full pl-10">
          <h1 className="text-5xl font-bold font-cinzel text-white ">
            Gallery
          </h1>
          <p className="text-white ">The Villa</p>
        </div>
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
