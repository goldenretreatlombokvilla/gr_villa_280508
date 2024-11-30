import Cta from "@/components/cta";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const gallery = [
  {
    image: "https://utfs.io/f/dJLJpH9Hrkw3DhFmCTQIsYNhnRFiP9UlSuprcb35Jy4X12x7",
    title: "Front Enterence"
  },
  {
    image: "https://utfs.io/f/dJLJpH9Hrkw3Y1KKJxnLOdMUqSH08tvDTRnX1xNaPBF3YW5c",
    title: "Living Room"
  },
  {
    image: "https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu",
    title: "Private Pool View"
  },
  {
    image: "https://utfs.io/f/dJLJpH9Hrkw3wcK398eUX3BuqFPzTD5Kh1H9QyUilcWfbY6d",
    title: "Yoga Deck"
  },
  {
    image: "https://utfs.io/f/dJLJpH9Hrkw3STzbTcM0TP839gFjLVe25vnd4qspYbylGHrX",
    title: "Bedroom Front View"
  },
  {
    image: "https://utfs.io/f/dJLJpH9Hrkw3ZbJhQuj5zPGMQWt0kmvD298SjxYqTRlnKLFE",
    title: "Bedroom Side View"
  },
  {
    image: "https://utfs.io/f/dJLJpH9Hrkw3fmFEKjqhLDqapUrcI5X2oh8B9JvKe1ET4tzC",
    title: "Bathroom"
  }
];

export const metadata: Metadata = {
  title: "Gallery",
  description: `Golden Retreat Lombok Villas is a property development offering luxurious Villas set in the heart of Lombok’s best attractions.`,
  keywords: `golden retreat lombok villa, luxury villa, lombok villas, private pool, villas, island villas, island villa, private pools, poolside villa, pool villa, poolside villas, gold retreat lombok, gold retreat lombok villas, gold retreat lombok villa`
};

export default function Gallery() {
  return (
    <div className="flex flex-col gap-8 items-center justify-start w-full bg-gradient-to-b from-yellow-900/10 to-5% to-background ">
      <div className=" py-6 px-8 flex flex-row gap-6 items-center md:justify-start justify-between w-full   z-40">
        <Link
          href="/"
          className="flex flex-row gap-8 items-center justify-center"
        >
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3HQH8eio47KGLVT5JMX0nbiCWRIZyzPwUDrcp"
            alt="Golden Retreat Lombok Villa"
            width={500}
            height={500}
            className="max-w-32 -my-8 h-full object-cover"
          />
        </Link>
        <h1 className="sr-only text-xl font-sans text-yellow-800 pt-1 font-light">
          Gallery
        </h1>
      </div>

      <div className="flex flex-col gap-4 items-start justify-center w-full px-8 py-6 lg:pt-20 lg:py-20 max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 items-start justify-center lg:w-2/3">
          <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col text-yellow-800/50 uppercase ">
            The Gallery
          </p>
          <p className="text-6xl lg:text-7xl font-cinzel font-extrabold text-yellow-900">
            Tropical Island Paradise
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-md font-sans">
              Indulge in a tropical island paradise that offers a unique blend
              of natural beauty with luxury living. Our Villas are designed to
              make every stay a memorable one.
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
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex flex-col gap-2 items-center cursor-pointer">
                  <Image
                    src={item.image}
                    alt="Golden Retreat Lombok Villa"
                    width={500}
                    height={200}
                    className="w-full h-auto aspect-video object-cover rounded-lg hover:shadow-lg hover:scale-105 trasition-all duration-300"
                  />
                  <p className="text-sm font-sans opacity-70 italic">
                    {item.title}
                  </p>
                </div>
              </DialogTrigger>
              <DialogPortal>
                <DialogContent className=" border-none shadow-none w-full h-full items-center justify-center bg-transparent">
                  <DialogHeader>
                    <DialogTitle className="sr-only">{item.title}</DialogTitle>
                    <div className="flex flex-col gap-2 w-full items-center justify-center">
                      <Image
                        src={item.image}
                        alt="Golden Retreat Lombok Villa"
                        width={1000}
                        height={500}
                        className="min-w-full min-h-full aspect-video object-cover rounded-lg"
                      />
                    </div>
                  </DialogHeader>
                </DialogContent>
              </DialogPortal>
            </Dialog>
            {/* <Image
              src={item.image}
              alt="Golden Retreat Lombok Villa"
              width={500}
              height={200}
              className="w-full h-auto aspect-video object-cover rounded-lg hover:shadow-lg hover:scale-105 trasition-all duration-300"
            />
            <p className="text-sm font-sans opacity-70 italic">{item.title}</p> */}
          </div>
        ))}
      </div>
      <Cta />
    </div>
  );
}
