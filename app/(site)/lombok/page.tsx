import { Button } from "@/components/ui/button";
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
import {
  ArrowRight,
  Bike,
  CircleDashed,
  Fish,
  ImageIcon,
  LandPlot,
  Luggage,
  MapIcon,
  MapPin,
  Mountain,
  PinIcon,
  Plane,
  TreePalm,
  Globe,
  Waves
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Cta from "@/components/cta";
import Flag from "react-world-flags";
import BookJourney from "@/components/book-journey";

const villaImages = [
  {
    src: "https://utfs.io/f/dJLJpH9Hrkw3pBurfA8fDXoAL2Jay9kEY7gbmpj3CvcG0Pue",
    alt: "Living Room"
  },
  {
    src: "https://utfs.io/f/dJLJpH9Hrkw3lyFrap6aQ6vkUNZnYhO7eAcj2iwCBSMy1b3p",
    alt: "Secluded Private Beach"
  },
  {
    src: "https://utfs.io/f/dJLJpH9Hrkw3WYnkqIyJ3Fxs4EgfPMq8SWJAXkNKRLa6jYo5",
    alt: "Surfing"
  },
  {
    src: "https://utfs.io/f/dJLJpH9Hrkw3Bsk6UJlcXTk7SfiUKBuzqNOW3Hw01dEptmVg",
    alt: "Volcano Lake"
  },
  {
    src: "https://utfs.io/f/dJLJpH9Hrkw33szOgdpTdrJVe6Xx1zuEqfmI3Dn2OagRU8op",
    alt: "Boats and Beach"
  },
  {
    src: "https://utfs.io/f/dJLJpH9Hrkw3s7ADYDdtfQDR1ujgW04bv39US6XzVqYOLryH",
    alt: "Mountain Peak"
  },
  {
    src: "https://utfs.io/f/dJLJpH9Hrkw34bzSm8iILXvxRHuJgz8cqy2TD5QokmWfjNes",
    alt: "Surfing"
  },
  {
    src: "https://utfs.io/f/dJLJpH9Hrkw3Fv3nFgY3NDtBULj4yZxze2nb6wR7gl1iPYX0",
    alt: "Volcano Lake"
  }
];

const lombokft = [
  {
    icon: Waves,
    name: "Stunning Beaches"
  },
  {
    icon: Mountain,
    name: "Hiking Trails"
  },
  {
    icon: TreePalm,
    name: "Island Hoping"
  },
  {
    icon: Bike,
    name: "MotoGP Racing"
  },
  {
    icon: Fish,
    name: "Snorkeling Spots"
  },
  {
    icon: ImageIcon,
    name: "Art Galleries"
  },
  {
    icon: CircleDashed,
    name: "Local Culture"
  },
  {
    icon: LandPlot,
    name: "Golf Courses"
  }
];

const blogPosts = [
  {
    id: 1,
    title:
      "Discover Lombok: A Haven of Accessibility for International Travelers",
    excerpt:
      "Lombok, the idyllic island in Indonesia’s West Nusa Tenggara province, has long been a hidden gem for travelers seeking pristine beaches, majestic mountains, and rich cultural experiences.",
    date: "December 19, 2024",
    readTime: "5 min read",
    category: "Accessibility",
    icon: <Plane className="text-blue-600" />,
    slug: "discover-lombok"
  }
];

const blogPosts2 = [
  {
    id: 1,
    title:
      "Beyond Bali: Discovering the Next Luxury Real Estate Frontier in Southeast Asia",
    excerpt:
      "Explore the emerging landscape of luxury property investments beyond traditional markets.",
    date: "December 10, 2024",
    readTime: "7 min read",
    category: "Investment Insights",
    icon: <Globe className="text-amber-600" />,
    slug: "beyond-bali"
  }
];

export const metadata: Metadata = {
  title: "Destination Lombok",
  description: `Golden Retreat Lombok Villas is a property development offering luxurious Villas set in the heart of Lombok’s best attractions.`,
  keywords: `golden retreat lombok villa, luxury villa, lombok villas, private pool, villas, island villas, island villa, private pools, poolside villa, pool villa, poolside villas, gold retreat lombok, gold retreat lombok villas, gold retreat lombok villa`
};

export default function Lombok() {
  return (
    <main>
      <div className="flex flex-col gap-8 items-center justify-start w-full bg-gradient-to-b from-yellow-900/10 to-5% to-background ">
        <div className=" py-6 px-8 flex flex-row gap-6 items-center md:justify-start justify-between w-full ">
          <Link
            href="/"
            className="flex flex-row gap-8 items-center justify-center"
          >
            <Image
              src="https://utfs.io/f/dJLJpH9Hrkw3HQH8eio47KGLVT5JMX0nbiCWRIZyzPwUDrcp"
              alt="Golden Retreat Lombok Villa"
              width={500}
              height={500}
              className="max-w-32 z-40 -my-8 h-full object-cover"
            />
          </Link>
          <h1 className="sr-only text-xl font-sans text-yellow-900 pt-1 font-light">
            Destination Lombok
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-10 items-center justify-center w-full  pb-16 lg:pb-20 max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 items-center text-yellow-900 relative">
            <Image
              src="https://utfs.io/f/dJLJpH9Hrkw3yc3Ly5ChO0bGNmuXl6cVZrTJE2qfHkvI1R8Q"
              alt="Lombok Island Ariel View"
              width={1000}
              height={700}
              className="w-full max-h-96 lg:max-h-[70vh] object-cover lg:aspect-[10/14]"
            />
            {/* <p className="font-cinzel text-right text-white z-40 text-4xl font-extrabold lg:text-5xl tracking-wide absolute bottom-20 right-5 w-2/3">
              The World's 5th Best Nature Destination
            </p> */}
            <Image
              src="/lombok/tc_award.png"
              alt="Tripadvisor Award"
              width={200}
              height={200}
              className="w-28 h-28 absolute bottom-5 left-5 object-contain"
            />
          </div>
          <div className="flex flex-col gap-6 text-balance items-start justify-center px-8">
            <p className="font-cinzel text-yellow-900 text-5xl font-extrabold lg:text-7xl tracking-wide">
              Lombok Island
            </p>

            {/*  <p className="font-cinzel text-yellow-900 text-4xl font-semibold lg:text-5xl tracking-wide">
              The World's 5th Best Nature Destination
            </p>
            <div className="flex flex-row gap-4">
              <p className="font-sans font-semibold text-yellow-900 text-xl uppercase">
                Tripadvisors Travelers' Choice Award
              </p>
            </div> */}
            <div className="flex flex-col gap-4 w-full items-start justify-center">
              <div className="flex flex-row gap-4 items-center justify-center text-yellow-900">
                <MapPin className="min-w-4 min-h-4 stroke-1 text-yellow-900" />{" "}
                <p className="font-sans text-lg font-bold">
                  West Nusa Tenggara
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center justify-center text-yellow-900">
                <Plane className="min-w-4 min-h-4 stroke-1 text-yellow-900" />{" "}
                <p className="font-sans text-lg font-bold">
                  45 min flight from Bali
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center justify-center text-yellow-900">
                <Luggage className="min-w-4 min-h-4 stroke-1 text-yellow-900" />{" "}
                <p className="font-sans text-lg font-bold">
                  2M tourist in 2023
                </p>
              </div>
            </div>
            <p className="font-sans font-semibold text-stone-900 text-md leading-7">
              Discover the unspoilt beauty of Lombok, a tropical paradise
              nestled in the heart of Indonesia. This enchanting island offers a
              captivating blend of stunning natural landscapes, vibrant culture,
              and warm hospitality.
            </p>
            <p className="font-sans text-md text-stone-900/50 leading-7">
              From pristine beaches and crystal-clear waters to majestic
              mountains and lush rainforests, Lombok has something to offer
              every traveller. Immerse yourself in the tranquillity of the Gili
              Islands, explore the ancient Hindu temples, or embark on a
              thrilling adventure up Mount Rinjani, Lombok offers something for
              everyone.
            </p>
            {/* <Dialog>
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
            </Dialog> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center px-4 py-6 lg:pt-20 lg:py-20 max-w-6xl mx-auto ">
        <p className="font-cinzel text-center text-4xl lg:text-5xl font-bold text-balance text-yellow-900">
          Expedia: Vacation Travel Guide
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

      <div className="flex flex-col items-center justify-center w-full mx-auto py-10 gap-8">
        <Image
          src="https://utfs.io/f/dJLJpH9Hrkw3hoWVZA2LaOUmx7jw6JrqKBblDskWdPvTZoSg"
          alt="Map location of Lombok and surrounding areas"
          width={1000}
          height={600}
          className="w-full h-full lg:max-w-2xl lg:max-h-2xl object-contain lg:rounded-lg lg:shadow-lg"
        />
        <Image
          src="https://utfs.io/f/dJLJpH9Hrkw3JMbcGuFGm1t394BWXOQz0jM2pHhDZeVrkKli"
          alt="Map of attractions around Golden Retreat Lombok Villa"
          width={500}
          height={200}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* <div className="flex flex-col w-full px-20 py-6 lg:pt-20 lg:py-20 max-w-6xl mx-auto">
        <Carousel
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
      </div> */}

      <div className="flex flex-col gap-8 items-center justify-start w-full  px-8 py-6 lg:pt-20 lg:py-20 max-w-6xl mx-auto">
        <p className="font-cinzel text-center text-4xl lg:text-5xl font-bold text-yellow-900 text-balance">
          Reasons Why Tourists are Flocking To Lombok
        </p>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-y-10 flex-wrap items-center justify-center px-4 md:px-10 lg:px-20 w-full">
          {lombokft.map((item, index) => (
            <div
              key={index}
              className="flex md:flex-col flex-row flex-wrap gap-4 items-center justify-between w-full md:w-fit"
            >
              <item.icon className="lg:w-16 w-12 h-12 lg:h-16 text-yellow-600 stroke-1" />
              <p className="font-cinzel text-lg  md:text-xl text-stone-900 hover:text-yellow-900 font-bold">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-6 py-8 lg:px-52 max-w-6xl mx-auto">
        <p className="font-cinzel text-center text-4xl lg:text-5xl font-bold text-yellow-900 text-balance">
          Destination Lombok
        </p>

        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl font-sans"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                {post.icon}
                <span className="ml-2 text-sm text-gray-600">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-amber-900 mb-3 font-cinzel">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-row gap-2 divide-x-2 divide-gray-200">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <p className="text-sm text-gray-500 pl-2">{post.readTime}</p>
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-amber-900 hover:text-amber-700 flex items-center"
                >
                  Read More <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-6 lg:gap-0 lg:px-52 py-8 pt-12 my-10">
        <div className="absolute w-full h-full">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw31hETLWNSAE1eLPCn7ZqI4KBDlfHwUhJit380"
            alt="Lombok International Airport"
            width={2000}
            height={2000}
            loading="eager"
            className="w-full brightness-50 h-full object-cover z-0"
          />
        </div>

        <div className="flex flex-col gap-4 items-center justify-center px-0 z-20 text-white w-full">
          <div className="flex flex-col gap-4 lg:gap-4 w-full justify-start items-start">
            <p className="text-2xl lg:text-3xl font-medium px-8 lg:px-0">
              Accessible International Airport
            </p>
            <p className="text-4xl lg:text-5xl font-extrabold px-8 lg:px-0">
              Zainuddin Abdul Madjid International Airport (LOP)
            </p>
            <div className="flex flex-row gap-2 items-center font-sans w-full px-8 lg:px-0">
              <MapPin className="min-w-4 min-h-4 stroke-1 text-white" />
              <p>
                <span className="font-extrabold">Praya</span>, Lombok
              </p>
            </div>
            <p className="text-md font-sans px-8 lg:px-0 pt-8">
              Direct flights to Lombok from:
            </p>
            <div className="flex flex-row justify-start gap-4 w-full px-8 lg:px-0 py-4">
              <Flag
                code="SG"
                height={500}
                width={500}
                className="w-16 h-16 rounded-full object-left object-cover"
              />
              <Flag
                code="MY"
                height={500}
                width={500}
                className="w-16 h-16 rounded-full object-left object-cover"
              />
              <Flag
                code="AU"
                height={500}
                width={500}
                className="w-16 h-16 rounded-full object-left object-cover"
              />
              <Flag
                code="TH"
                height={500}
                width={500}
                className="w-16 h-16 rounded-full object-left object-cover"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col -gap-4 w-full pt-8 z-20 text-white items-start">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3bj76wEsqfwy05AzFLkTvmpo63dsY7VXnlRD8"
            alt="Air Asia flights information"
            width={500}
            height={500}
            className="w-full h-auto object-contain -mt-6"
          />
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3sO94s1dtfQDR1ujgW04bv39US6XzVqYOLryH"
            alt="Scoot Airlines flights information"
            width={500}
            height={500}
            className="w-full h-auto object-contain -mt-10"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 px-6 py-8 lg:px-52 max-w-6xl mx-auto">
        {blogPosts2.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl font-sans"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                {post.icon}
                <span className="ml-2 text-sm text-gray-600">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-amber-900 mb-3 font-cinzel">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-row gap-2 divide-x-2 divide-gray-200">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <p className="text-sm text-gray-500 pl-2">{post.readTime}</p>
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-amber-900 hover:text-amber-700 flex items-center"
                >
                  Read More <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-14 items-center justify-center w-full py-10 mt-10 lg:py-40 bg-yellow-900/10">
        <div className="flex flex-col gap-4 px-8 lg:px-52">
          <Image
            src="/mgp_logo.svg"
            alt="MotoGP Logo"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
          <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col uppercase text-yellow-900/50">
            Pertamina Mandalika Circuit
          </p>
          <p className="text-md font-sans text-balance">
            Over 121,252 people attended the 2024 MotoGP race at the Mandalika
            International Circuit in Lombok, Indonesia.
          </p>
          <p className="text-md font-sans text-balance">
            The event is proof-positive of Lombok's tourism and investment
            potential. The circuit is located within Lombok’s Special Economic
            Zone, a Federal Government initiative to boost economic development
            on the Island.
          </p>
          <div className="flex flex-row gap-4 items-end justify-start">
            <Link
              href="https://www.youtube.com/watch?v=LuO03fJycyc"
              target="_blank"
            >
              <Button
                variant="default"
                className="w-fit font-extrabold uppercase tracking-wider hover:drop-shadow-md"
              >
                Watch Highlight Video
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-full w-full">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw34DUHLIiILXvxRHuJgz8cqy2TD5QokmWfjNes"
            alt="MotoGP Mandalika 2024"
            width={500}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <BookJourney />
    </main>
  );
}
