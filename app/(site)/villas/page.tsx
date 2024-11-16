"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowDownCircle,
  Grid2X2,
  House,
  Images,
  KeyRound,
  MapPin,
  Scan,
  SquareDashed,
  UtensilsCrossed,
  Waves
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Cta from "@/components/cta";

const images = [
  {
    src: "https://utfs.io/f/dJLJpH9Hrkw3fmFEKjqhLDqapUrcI5X2oh8B9JvKe1ET4tzC",
    alt: "Spacious Bathroom"
  },
  {
    src: "https://utfs.io/f/dJLJpH9Hrkw3Y1KKJxnLOdMUqSH08tvDTRnX1xNaPBF3YW5c",
    alt: "Living Room"
  },

  {
    src: "https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu",
    alt: "Poolside Area"
  }
];

const villaImages = [
  {
    src: "/villa/grlv_7.webp",
    alt: "Golden Retreat Lombok Villa"
  },
  {
    src: "/villa/grlv_2.webp",
    alt: "Living Room"
  },

  {
    src: "/villa/grlv_3.webp",
    alt: "Poolside Area"
  },
  {
    src: "/villa/grlv_4.webp",
    alt: "Kitchen"
  },
  {
    src: "/villa/grlv_5.webp",
    alt: "Dining Room"
  },
  {
    src: "/villa/grlv_6.webp",
    alt: "Balcony"
  }
];

export default function Invest() {
  return (
    <main>
      <div className="flex flex-col gap-8 items-center justify-center w-full px-8 pt-10 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-yellow-800 to-stone-900  rounded-lg px-8 flex flex-row gap-6 items-center justify-start w-full py-8">
          <div className="flex flex-col gap-0 items-start w-full">
            <h1 className="text-3xl lg:text-5xl  font-bold font-cinzel text-white ">
              The Villas
            </h1>
            <p className="text-white ">Luxury Getaway Paradise</p>
          </div>
          <div className="flex items-center justify-center px-2">
            <Link href="/">
              <Image
                src="/brand/logo_icon.png"
                alt="Golden Retreat Lombok Villa"
                width={200}
                height={200}
                className="w-14 h-14 object-contain aspect-square drop-shadow-xl"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-20 items-center justify-center w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-5xl lg:text-7xl  font-extrabold font-cinzel text-yellow-900">
                The Villas
              </p>
              <p className="font-sans text-md">
                Golden Retreat Lombok Villa is a turnkey project, where the
                villas are designed, built and furnished with everything that
                you would need before moving in. From the furniture, to the
                kitchen utensils and the bedding.
              </p>
              {/* <p className="opacity-60 text-md font-sans">
                Once everything is ready, all you need to do to move in is bring
                your clothes and a toothbrush. We will take care of the rest.
              </p> */}
              <div className="grid grid-cols-1 lg:flex flex-col gap-6 lg:gap-4 lg:py-8 py-4 items-start">
                <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
                  <CardContent className="p-0">
                    <div className="flex flex-row  gap-4 lg:gap-10 w-full p-0 lg:text-xl text-sm items-start lg:items-start">
                      <MapPin className="min-w-8 min-h-8 text-yellow-800 stroke-1" />
                      <p className="text-sm font-sans">
                        <span className="font-bold">From Airport</span> - 1 hour
                        30 minute drive
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
                  <CardContent className="p-0">
                    <div className="flex flex-row  gap-4 lg:gap-10 w-full p-0 lg:text-xl text-sm items-start lg:items-start">
                      <SquareDashed className="min-w-8 min-h-8 text-yellow-800 stroke-1" />
                      <p className="text-sm font-sans">
                        <span className="font-bold">Project Parcel Size</span> -
                        10, 000 sqm
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-row gap-4 justify-start">
                <Link href="#">
                  <Button
                    variant={"default"}
                    className="w-fit font-extrabold uppercase tracking-wider hover:drop-shadow-md"
                  >
                    Learn More
                  </Button>
                </Link>
                <Link href="/gallery" prefetch={true}>
                  <Button variant="link" className="w-fit group ">
                    <Images className="min-w-6 min-h-6 stroke-1 text-yellow-700 group-hover:animate-ping" />{" "}
                    <p className="opacity-0 group-hover:opacity-100 transisition-all duration-500 ease-in-out text-yellow-800">
                      View Gallery
                    </p>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center px-0">
              {/* Carousel Desktop */}
              <Carousel
                className="hidden lg:flex"
                plugins={[
                  Autoplay({
                    delay: 3000
                  })
                ]}
                opts={{ align: "start", loop: true }}
              >
                <CarouselContent className="">
                  {images.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="flex flex-col gap-4 items-center justify-center lg:pl-14 w-full group rounded-lg"
                    >
                      <div className="relative">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={580}
                          height={580}
                          loading="eager"
                          className="object-cover aspect-square min-w-full min-h-full rounded-lg"
                        />
                        <Badge
                          variant="default"
                          className="text-md text-center text-white opacity-80 absolute bottom-4 right-4"
                        >
                          {image.alt}
                        </Badge>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              {/* Carousel Mobile */}
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 3800,
                    stopOnMouseEnter: true
                  })
                ]}
                opts={{ align: "center", loop: true }}
                className="flex lg:hidden"
              >
                <CarouselContent className="my-8">
                  {villaImages.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="flex flex-col gap-4 items-center justify-center basis-1/2 lg:basis-1/4 lg:pl-14 group rounded-lg"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={580}
                        height={200}
                        loading="eager"
                        className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg brightness-100 lg:brightness-90 group-hover:brightness-100"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-40 items-center px-0 py-8 lg:py-20">
          {/* 2 Bed */}
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row gap-6 lg:gap-24 items-center justify-center">
                <Image
                  src="/villa/grlv_3.webp"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover aspect-video lg:aspect-square rounded-lg shadow-lg"
                />
                <div className="grid grid-cols-2 gap-6 lg:gap-8 w-full px-2 lg:text-xl text-md">
                  <div className="flex flex-col gap-2 col-span-2">
                    <p className="text-5xl text-yellow-900 font-bold uppercase ">
                      Premium
                    </p>
                    <p className="text-2xl lg:text-3xl text-yellow-900 opacity-50 font-bold uppercase -mt-1">
                      Luxury Villa
                    </p>
                    <p className="opacity-80  font-sans text-sm">
                      Spacious 2 bedroom holiday villa that can comfortably
                      accomodate a family of 4 that comes complete with dining
                      room, lounge area, parking garage, and a private pool
                      area.
                    </p>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <House className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        2 Bed 2 Bath
                      </p>
                      <p className="text-sm font-sans">Single Storey</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Grid2X2 className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        150 sqm
                      </p>
                      <p className="text-sm font-sans">Parcel Area</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Scan className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        103 sqm
                      </p>
                      <p className="text-sm font-sans"> Built-Up Area</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Waves className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        32.5 sqm
                      </p>
                      <p className="text-sm font-sans">Pool Area</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <KeyRound className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        Turnkey Villa
                      </p>
                      <p className="text-sm font-sans">Fully Furnished</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <UtensilsCrossed className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        Kitchen
                      </p>
                      <p className="text-sm font-sans">Fully Functional</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* 3 Bed */}
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row-reverse gap-6 lg:gap-24 items-center justify-center">
                <Image
                  src="/villa/grlv_5.webp"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-full  object-cover aspect-video lg:aspect-square rounded-lg shadow-lg"
                />
                <div className="grid grid-cols-2 lg:grid-cols-2  gap-6 w-full px-2 lg:text-xl text-md">
                  <div className="flex flex-col gap-2 col-span-2">
                    <p className="text-5xl text-yellow-900 font-bold uppercase ">
                      Superior
                    </p>
                    <p className="text-3xl text-yellow-900 opacity-50 font-bold uppercase -mt-1">
                      Luxury Villa
                    </p>
                    <p className="opacity-80  font-sans text-sm">
                      Spacious 3 bedroom holiday villa that can comfortably
                      accomodate a family of 6 that comes complete with dining
                      room, lounge area, parking garage, and a private pool
                      area.
                    </p>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <House className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        3 Bed 3 Bath
                      </p>
                      <p className="text-sm font-sans">Single Storey</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Grid2X2 className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        187 sqm
                      </p>
                      <p className="text-sm font-sans">Parcel Area</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Scan className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        135 sqm
                      </p>
                      <p className="text-sm font-sans"> Built-Up Area</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Waves className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        42 sqm
                      </p>
                      <p className="text-sm font-sans">Pool Area</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <KeyRound className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        Turnkey Villa
                      </p>
                      <p className="text-sm font-sans">Fully Furnished</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <UtensilsCrossed className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        Kitchen
                      </p>
                      <p className="text-sm font-sans">Fully Functional</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Furnishings Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 items-start px-0  w-full py-20">
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-cinzel text-yellow-900 font-bold">
              Room Furnishings
            </p>
            <p className="text-sm font-sans">
              Each villa comes with a complete set of furnishings which includes
              everything you would need to make your stay a comfortable one.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:px-10">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">
                  Master Bedroom
                </AccordionTrigger>
                <AccordionContent className="text-sm font-sans">
                  <div className="grid grid-cols-2 justify-between">
                    <ul className="list-disc list-inside">
                      <li>Bedsheet (180x200)</li>
                      <li>King Size Matress</li>
                      <li>Pillow</li>
                      <li>Side Table (x2)</li>
                      <li>Wardrobe</li>
                      <li>Working Table</li>
                      <li>Working Chair</li>
                    </ul>
                    <ul className="list-disc list-inside">
                      <li>Cardensa</li>
                      <li>Side Lamp (x2)</li>
                      <li>Standing Lamp</li>
                      <li>Carpet</li>
                      <li>Artwork</li>
                      <li>Mirror</li>
                      <li>AC 1 PK</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold">
                  2nd Bedroom
                </AccordionTrigger>
                <AccordionContent className="text-sm font-sans">
                  <div className="grid grid-cols-2 justify-between">
                    <ul className="list-disc list-inside">
                      <li>Bedsheet (160x200)</li>
                      <li>Queen Size Matress</li>
                      <li>Pillow (x4)</li>
                      <li>Side Table (x2)</li>
                      <li>Wardrobe (x2)</li>
                      <li>Working Table</li>
                    </ul>
                    <ul className="list-disc list-inside">
                      <li>Working Chair</li>
                      <li>Cardensa</li>
                      <li>Carpet</li>
                      <li>Artwork</li>
                      <li>Mirror</li>
                      <li>AC 1 PK</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-semibold flex flex-row gap-2">
                  <p>
                    3rd Bedroom{" "}
                    <span className="font-sans text-xs opacity-50 italic font-normal">
                      (Superior villa only)
                    </span>
                  </p>
                </AccordionTrigger>
                <AccordionContent className="text-sm font-sans">
                  <div className="grid grid-cols-2 justify-between">
                    <ul className="list-disc list-inside">
                      <li>Bedsheet (160x200)</li>
                      <li>Queen Size Matress</li>
                      <li>Pillow (x4)</li>
                      <li>Side Table</li>
                      <li>Wardrobe</li>
                    </ul>
                    <ul className="list-disc list-inside">
                      <li>Working Table</li>
                      <li>Working Chair</li>
                      <li>Artwork</li>
                      <li>Mirror</li>
                      <li>AC 1 PK</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-semibold">
                  Living Area
                </AccordionTrigger>
                <AccordionContent className="text-sm font-sans">
                  <div className="grid grid-cols-2 justify-between">
                    <ul className="list-disc list-inside">
                      <li>Sofa L Shape</li>
                      <li>Coffee Table</li>
                      <li>Single Chair</li>
                      <li>Carpet</li>
                      <li>Decorative Lamp (x3)</li>
                    </ul>
                    <ul className="list-disc list-inside">
                      <li>TV Cabinet</li>
                      <li>Standing Lamp</li>
                      <li>Artwork</li>
                      <li>AC 2 PK</li>
                      <li>TV 42 inch</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl font-semibold">
                  Dining Area
                </AccordionTrigger>
                <AccordionContent className="text-sm font-sans">
                  <div className="grid grid-cols-2 justify-start">
                    <ul className="list-disc list-inside">
                      <p className="font-bold">Kitchen Set</p>
                      <li>Freezer</li>
                      <li>Stove</li>
                      <li>Sink</li>
                      <li>Microwave</li>
                    </ul>
                    <ul className="list-disc list-inside">
                      <li>Dining Table</li>
                      <li>Dining Chair (x6)</li>
                      <li>Decorative Lamp (x3)</li>
                      <li>Painting</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        {/* Gallery Section */}
        <div className="flex flex-col gap-4 items-center px-0 pb-20">
          <div className="flex flex-col gap-4 items-center">
            <p className="text-yellow-900 text-2xl lg:text-5xl font-bold">
              Step into peace and luxury
            </p>
          </div>
          <Carousel
            className="hidden lg:flex"
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnMouseEnter: true
              })
            ]}
            opts={{ align: "center", loop: true }}
          >
            <CarouselContent className="py-8">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col gap-4 items-center justify-center lg:basis-1/2 lg:pl-14 group rounded-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={580}
                    height={200}
                    loading="eager"
                    className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg brightness-100 lg:brightness-90 group-hover:brightness-100"
                  />
                  <Badge
                    variant="default"
                    className="text-md text-center text-white opacity-80 absolute bottom-4 right-4"
                  >
                    {image.alt}
                  </Badge>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Carousel
            plugins={[
              Autoplay({
                delay: 3800,
                stopOnMouseEnter: true
              })
            ]}
            opts={{ align: "center", loop: true }}
            className="flex lg:hidden"
          >
            <CarouselContent className="my-8">
              {villaImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col gap-4 items-center justify-center basis-1/2 lg:basis-1/4 lg:pl-14 group rounded-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={580}
                    height={200}
                    loading="eager"
                    className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg brightness-100 lg:brightness-90 group-hover:brightness-100"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex flex-col ">
            <div className="flex flex-row gap-4 items-center justify-center w-full">
              <Button variant="link">Book A Discovery Call</Button>
            </div>
          </div>
        </div>
      </div>

      <Cta />
    </main>
  );
}
