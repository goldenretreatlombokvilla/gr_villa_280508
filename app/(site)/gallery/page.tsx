import Cta from "@/components/cta";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex flex-col gap-8 items-center justify-start w-full bg-gradient-to-b from-yellow-900/10 to-5% to-background ">
      <div className=" py-6 px-8 flex flex-row gap-6 items-center md:justify-start justify-between w-full sticky top-0 z-40">
        <Link
          href="/"
          className="flex flex-row gap-8 items-center justify-center"
        >
          <Image
            src="/brand/logo_icon.png"
            alt="Golden Retreat Lombok Villa"
            width={200}
            height={200}
            className="w-10 h-10 object-contain aspect-square drop-shadow-sm"
          />
        </Link>
        <h1 className="text-xl font-sans text-yellow-800 pt-1 font-light">
          Gallery
        </h1>
      </div>

      <div className="flex flex-col gap-4 items-start justify-center w-full px-8 py-6 lg:pt-20 lg:py-20 max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 items-start justify-center lg:w-2/3">
          <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col text-yellow-800/50 uppercase ">
            The Gallery
          </p>
          <p className="text-6xl lg:text-7xl font-cinzel font-extrabold text-yellow-900">
            Luxury Paradise Getaway
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-md font-sans">
              Indulge in the luxury paradise of Lombok, a tropical paradise that
              offers a unique blend of natural beauty and exotic adventures. Our
              luxury villas are designed to provide a comfortable and relaxing
              stay, with all the amenities you could ever ask for.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 max-w-6xl px-10 lg:py-20 mx-auto">
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
      <Cta />
    </div>
  );
}
