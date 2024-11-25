import { Button } from "@/components/ui/button";
import Video from "next-video";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import {
  Bike,
  CircleDashed,
  Fish,
  ImageIcon,
  Mountain,
  TreePalm,
  Waves
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const villaImages = [
  {
    src: "/lombok/beach-sand.jpg",
    alt: "Living Room"
  },
  {
    src: "/lombok/beach.jpg",
    alt: "Secluded Private Beach"
  },
  {
    src: "/lombok/surf.jpg",
    alt: "Surfing"
  },
  {
    src: "/lombok/volcano.jpg",
    alt: "Volcano Lake"
  },
  {
    src: "/lombok/boats.jpg",
    alt: "Living Room"
  },
  {
    src: "/lombok/peak.jpg",
    alt: "Secluded Private Beach"
  },
  {
    src: "/lombok/waterfall.jpg",
    alt: "Surfing"
  },
  {
    src: "/lombok/bluesky.jpg",
    alt: "Volcano Lake"
  }
];

export default function Lombok() {
  return (
    <main>
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
          <h1 className="sr-only text-xl font-sans text-yellow-800 pt-1 font-light">
            Destination Lombok
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-10 items-center justify-center w-full px-8 pb-16 lg:pb-20 max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 items-center text-yellow-900 relative">
            <Image
              src="/lombok/ariel-island.jpg"
              alt="Lombok Island Ariel View"
              width={1000}
              height={700}
              className="w-full max-h-96 lg:max-h-[70vh] object-cover lg:aspect-[10/14] rounded-lg"
            />
            <Image
              src="/lombok/tc_award.png"
              alt="Tripadvisor Award"
              width={200}
              height={200}
              className="w-28 h-28 absolute bottom-5 right-5 object-contain"
            />
          </div>
          <div className="flex flex-col gap-6 text-balance items-start justify-center">
            <p className="font-cinzel text-yellow-800 text-5xl font-extrabold lg:text-7xl tracking-wide">
              Lombok
            </p>
            <p className="font-cinzel text-yellow-800 text-4xl font-semibold lg:text-5xl tracking-wide">
              5th Best World Nature Destination
            </p>
            <div className="flex flex-row gap-4">
              <p className="font-sans font-semibold text-yellow-800 text-xl uppercase">
                Tripadvisors Travelers' Choice Award
              </p>
            </div>
            <p className="font-sans font-semibold text-stone-900 text-md leading-7">
              Discover the unspoiled beauty of Lombok, a tropical paradise
              nestled in the heart of Indonesia. This enchanting island offers a
              captivating blend of stunning natural landscapes, vibrant culture,
              and warm hospitality.
            </p>
            <p className="font-sans text-md text-stone-900/50 leading-7">
              From pristine beaches and crystal-clear waters to majestic
              mountains and lush rainforests, Lombok has something to offer
              every traveler. Immerse yourself in the tranquility of the Gili
              Islands, explore the ancient Hindu temples, or embark on a
              thrilling adventure up Mount Rinjani.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={"default"}
                  className="w-fit font-extrabold uppercase tracking-wider hover:drop-shadow-md"
                >
                  Surrounding Islands
                </Button>
              </DialogTrigger>
              <DialogPortal>
                <DialogContent className=" border-none shadow-none w-full h-full items-center justify-center bg-transparent">
                  <DialogHeader>
                    <DialogTitle className="sr-only">
                      Map location of Lombok and surrounding islands.
                    </DialogTitle>
                    {/*  <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                        </DialogDescription> */}
                    <Image
                      src="https://utfs.io/f/dJLJpH9Hrkw3hoWVZA2LaOUmx7jw6JrqKBblDskWdPvTZoSg"
                      alt="Map location of Lombok and surrounding areas"
                      width={1000}
                      height={600}
                      className="min-w-[50vw] max-h-[80vh] object-contain rounded-lg shadow-lg"
                    />
                  </DialogHeader>
                </DialogContent>
              </DialogPortal>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center justify-start w-full  px-8 py-6 lg:pt-20 lg:py-20 max-w-6xl mx-auto">
        <p className="font-cinzel text-center text-5xl font-bold text-yellow-900">
          Reasons Tourist Are Visitng Lombok
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-10 justify-center items-center py-4">
          <div className="flex flex-row lg:flex-col gap-4 items-center">
            <Waves className="w-16 h-16 text-yellow-600 stroke-1" />
            <p className="font-cinzel text-xl text-stone-900 hover:text-yellow-900 font-bold">
              Stunning Beaches
            </p>
          </div>
          <div className="flex flex-row lg:flex-col gap-4 items-center">
            <Mountain className="w-16 h-16 text-yellow-600 stroke-1" />
            <p className="font-cinzel text-xl text-stone-900 hover:text-yellow-900 font-bold">
              Hiking Trails
            </p>
          </div>
          <div className="flex flex-row lg:flex-col gap-4 items-center">
            <TreePalm className="w-16 h-16 text-yellow-600 stroke-1" />
            <p className="font-cinzel text-xl text-stone-900 hover:text-yellow-900 font-bold">
              Island Hoping
            </p>
          </div>
          <div className="flex flex-row lg:flex-col gap-4 items-center">
            <Bike className="w-16 h-16 text-yellow-600 stroke-1" />
            <p className="font-cinzel text-xl text-stone-900 hover:text-yellow-900 font-bold">
              MotoGP Racing
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10 justify-center items-center py-4">
          <div className="flex flex-row lg:flex-col gap-4 items-center">
            <Fish className="w-16 h-16 text-yellow-600 stroke-1" />
            <p className="font-cinzel text-xl text-stone-900 hover:text-yellow-900 font-bold">
              Snorkeling Spots
            </p>
          </div>
          <div className="flex flex-row lg:flex-col gap-4 items-center">
            <ImageIcon className="w-16 h-16 text-yellow-600 stroke-1" />
            <p className="font-cinzel text-xl text-stone-900 hover:text-yellow-900 font-bold">
              Art Galleries
            </p>
          </div>
          <div className="flex flex-row lg:flex-col gap-4 items-center">
            <CircleDashed className="w-16 h-16 text-yellow-600 stroke-1" />
            <p className="font-cinzel text-xl text-stone-900 hover:text-yellow-900 font-bold">
              Local Culture
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center px-8 py-6 lg:pt-20 lg:py-20 max-w-6xl mx-auto ">
        <p className="font-cinzel text-center text-5xl font-bold text-yellow-900">
          Expedia: Lombok Vacation Travel Guide
        </p>
        <iframe
          width="560"
          height="315"
          className="w-full h-full aspect-video rounded-lg"
          src="https://www.youtube.com/embed/bl1k2-cLdV8?si=TIneix6MCQHYVpHU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p className="text-sm font-sans opacity-70 italic">
          Source: Expedia (Youtube){" "}
        </p>
      </div>

      <div className="flex flex-col w-full px-20 py-6 lg:pt-20 lg:py-20 max-w-6xl mx-auto">
        <Carousel
          /* plugins={[
            Autoplay({
              delay: 3800,
              stopOnMouseEnter: true
            })
          ]}
          */
          opts={{ align: "center", loop: true }}
          className="w-full flex"
        >
          <CarouselContent className="my-8">
            {villaImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col gap-4 items-center justify-center lg:basis-1/2 lg:pl-14 group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={580}
                  height={200}
                  loading="eager"
                  className="object-cover w-full h-full rounded-lg aspect-square lg:group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg brightness-100 lg:brightness-90 group-hover:brightness-100"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
