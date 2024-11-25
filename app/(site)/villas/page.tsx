"use client";

import { Badge } from "@/components/ui/badge";
import Video from "next-video";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

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
const siteplan = [
  {
    src: "https://utfs.io/f/dJLJpH9Hrkw34gqO32iILXvxRHuJgz8cqy2TD5QokmWfjNes",
    alt: "Siteplan for Golden Retreat Lombok Villa"
  },
  {
    src: "https://utfs.io/f/dJLJpH9Hrkw3q0bMIVSMBd9KPxAmiZ46NFaSwGRqO2hJYQuW",
    alt: "Pool Club Layout"
  },

  {
    src: "https://utfs.io/f/dJLJpH9Hrkw3lsdxzU6aQ6vkUNZnYhO7eAcj2iwCBSMy1b3p",
    alt: "Spa & Gym Layout"
  }
];

export default function Invest() {
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
            The Villas
          </h1>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center w-full px-8 py-6 lg:pt-20 lg:py-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-5xl lg:text-7xl  font-extrabold font-cinzel text-yellow-900">
                The Villas
              </p>
              <p className="font-sans text-md">
                Golden Retreat Lombok is a turnkey project, where each Villa is
                designed with attention to detail, and furnished with all the
                comforts of home.
              </p>
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
                        10, 000 sqm (107,640 sqft)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-row gap-4 justify-start">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant={"default"}
                      className="w-fit font-extrabold uppercase tracking-wider hover:drop-shadow-md"
                    >
                      View Siteplan
                    </Button>
                  </DialogTrigger>
                  <DialogPortal>
                    <DialogContent className=" border-none shadow-none w-full h-full items-center justify-center bg-transparent">
                      <DialogHeader>
                        <DialogTitle className="sr-only">
                          Official Siteplan for Golden Retreat Lombok Villa
                        </DialogTitle>
                        <div className="flex flex-col gap-2 px-10 w-full items-center justify-center">
                          <Carousel
                            className="w-full max-w-5xl lg:mx-auto -mx-20 "
                            /* plugins={[
                              Autoplay({
                                delay: 3000
                              })
                            ]}
                            opts={{ align: "start", loop: true }} */
                          >
                            <CarouselNext />
                            <CarouselPrevious />
                            <CarouselContent className="">
                              {siteplan.map((image, index) => (
                                <CarouselItem key={index} className="lg:px-20">
                                  <div className="">
                                    <Image
                                      src={image.src}
                                      alt={image.alt}
                                      width={580}
                                      height={580}
                                      loading="eager"
                                      className="w-full h-full object-contain rounded-lg shadow-lg"
                                    />
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                          </Carousel>
                        </div>
                      </DialogHeader>
                    </DialogContent>
                  </DialogPortal>
                </Dialog>
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
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
        {/*  <div className="flex flex-col gap-4 items-center px-8 py-6 lg:pt-20 lg:py-20 max-w-6xl mx-auto ">
          <Video
            src="https://utfs.io/f/dJLJpH9Hrkw3hFSyAj2LaOUmx7jw6JrqKBblDskWdPvTZoSg"
            className="w-full h-full rounded-lg"
          />
          <p className="text-sm font-sans opacity-70 italic">Discover Lombok</p>
        </div> */}
        <div className="flex flex-col gap-10 lg:gap-40 items-center px-8 py-6 lg:pt-20 lg:py-20 max-w-6xl mx-auto">
          {/* 2 Bed */}
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-center">
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu"
                  alt="Superior Luxury Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover aspect-video lg:aspect-square rounded-lg shadow-lg"
                />
                <div className="md:grid md:grid-cols-2 flex flex-col gap-6 lg:gap-8 w-full px-2 lg:text-xl text-md">
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <p className="text-5xl text-yellow-900 font-bold uppercase ">
                      Superior
                    </p>
                    <p className="text-2xl lg:text-3xl text-yellow-900 opacity-50 font-bold uppercase -mt-1">
                      Luxury Villa
                    </p>
                    <p className="opacity-80  font-sans text-sm">
                      Our spacious 2 bedroom Villa comfortably accommodates a
                      family of 4 and comes complete with dining room, lounge
                      area, parking garage, and a private pool deck.
                    </p>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <House className="min-w-8 min-h-8 lg:min-h-12 lg:min-w-12 stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        2 Bed 2 Bath
                      </p>
                      <p className="text-sm font-sans opacity-50">
                        Single Storey
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Grid2X2 className="min-w-8 min-h-8 lg:min-h-12 lg:min-w-12 stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        150 sqm{" "}
                        <span className="text-xs italic font-normal font-sans">
                          (1,615 sqft)
                        </span>
                      </p>
                      <p className="text-sm font-sans opacity-50">
                        Parcel Area
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Scan className="min-w-8 min-h-8 lg:min-h-12 lg:min-w-12 stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        103 sqm{" "}
                        <span className="text-xs italic font-normal font-sans">
                          (1,108 sqft)
                        </span>
                      </p>
                      <p className="text-sm font-sans opacity-50">
                        {" "}
                        Built-Up Area
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Waves className="min-w-8 min-h-8 lg:min-h-12 lg:min-w-12 stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        32.5 sqm{" "}
                        <span className="text-xs italic font-normal font-sans">
                          (350 sqft)
                        </span>{" "}
                      </p>
                      <p className="text-sm font-sans opacity-50">Pool Area</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <KeyRound className="min-w-8 min-h-8 lg:min-h-12 lg:min-w-12 stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        Turnkey Villa
                      </p>
                      <p className="text-sm font-sans opacity-50">
                        Fully Furnished
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <UtensilsCrossed className="min-w-8 min-h-8 lg:min-h-12 lg:min-w-12 stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        Kitchen
                      </p>
                      <p className="text-sm font-sans opacity-50">
                        Fully Functional
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4 items-center lg:w-2/3 justify-start pb-20">
            <Image
              src="https://utfs.io/f/dJLJpH9Hrkw3uuft60bSOoWvunMekl0ACfLj2rIG8cQDzZmT"
              alt="2 Bedroom Layout Plan"
              width={500}
              height={200}
              className="w-full h-full object-contain rounded-lg hover:shadow-lg hover:scale-105 trasition-all duration-300"
            />
            <p className="text-sm font-sans opacity-70 italic">
              Superior Villa Layout Plan
            </p>
          </div>

          {/* 3 Bed */}
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center justify-center">
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw3STzbTcM0TP839gFjLVe25vnd4qspYbylGHrX"
                  alt="Premium Luxury Villa"
                  width={500}
                  height={300}
                  className="w-full h-full  object-cover aspect-video lg:aspect-square rounded-lg shadow-lg"
                />
                <div className="md:grid flex flex-col md:grid-cols-2 gap-6 w-full px-2 lg:text-xl text-md">
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <p className="text-5xl text-yellow-900 font-bold uppercase ">
                      Premium
                    </p>
                    <p className="text-3xl text-yellow-900 opacity-50 font-bold uppercase -mt-1">
                      Luxury Villa
                    </p>
                    <p className="opacity-80  font-sans text-sm">
                      Our spacious 3 bedroom Villa comfortably accommodates a
                      family of 6 and comes complete with dining room, lounge
                      area, parking garage, and a private pool deck.
                    </p>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <House className="min-w-8 min-h-8 lg:min-h-12 lg:min-w-12 stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        3 Bed 3 Bath
                      </p>
                      <p className="text-sm font-sans opacity-50">
                        Single Storey
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Grid2X2 className="min-w-8 min-h-8 lg:min-h-12 lg:min-w-12 stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        187 sqm{" "}
                        <span className="text-xs italic font-normal font-sans">
                          (2,013 sqft)
                        </span>
                      </p>
                      <p className="text-sm font-sans opacity-50">
                        Parcel Area
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Scan className="min-w-8 min-h-8 lg:min-h-12 lg:min-w-12 stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        135 sqm{" "}
                        <span className="text-xs italic font-normal font-sans">
                          (1,453 sqft)
                        </span>
                      </p>
                      <p className="text-sm font-sans opacity-50">
                        {" "}
                        Built-Up Area
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Waves className="min-w-8 min-h-8 lg:min-h-12 lg:min-w-12 stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        42 sqm{" "}
                        <span className="text-xs italic font-normal font-sans">
                          (452 sqft)
                        </span>
                      </p>
                      <p className="text-sm font-sans opacity-50">Pool Area</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <KeyRound className="min-w-8 min-h-8 lg:min-h-12 lg:min-w-12 stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        Turnkey Villa
                      </p>
                      <p className="text-sm font-sans opacity-50">
                        Fully Furnished
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <UtensilsCrossed className="min-w-8 min-h-8 lg:min-h-12 lg:min-w-12 stroke-1 text-yellow-900 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-semibold font-cinzel text-lg text-nowrap">
                        Kitchen
                      </p>
                      <p className="text-sm font-sans opacity-50">
                        Fully Functional
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4 items-center lg:w-2/3 justify-start pb-20">
            <Image
              src="https://utfs.io/f/dJLJpH9Hrkw3fFMByQhLDqapUrcI5X2oh8B9JvKe1ET4tzCf"
              alt="3 Bedroom Layout Plan"
              width={500}
              height={200}
              className="w-full h-full object-contain rounded-lg hover:shadow-lg hover:scale-105 trasition-all duration-300"
            />
            <p className="text-sm font-sans opacity-70 italic">
              Premium Villa Layout Plan
            </p>
          </div>
        </div>
        {/* Furnishings Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 items-start px-8 py-6 lg:pt-20 lg:py-20 max-w-6xl mx-auto w-full">
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-cinzel text-yellow-900 font-bold">
              Room Furnishings
            </p>
            <p className="text-sm font-sans">
              Each Villa comes with a complete set of quality furnishings,
              making it home away from home. Holiday memories not included.
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
        <div className="flex flex-col gap-4 items-center w-full px-8 py-6 lg:pt-20 lg:py-20 max-w-6xl mx-auto">
          <div className="flex flex-col gap-8 lg:gap-4 items-center justify-center">
            <p className="text-yellow-900 text-center text-balance text-4xl lg:text-5xl font-extrabold">
              Step into Peace & Luxury
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
                    className="text-md text-center text-white bg-yellow-900/80 absolute bottom-4 right-4"
                  >
                    {image.alt}
                  </Badge>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <Carousel
            className="flex lg:hidden max-w-[70vw] mx-auto"
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnMouseEnter: true,
                playOnInit: true
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
                      className="text-md text-center text-white bg-yellow-900/80 absolute bottom-4 right-4"
                    >
                      {image.alt}
                    </Badge>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>

          <div className="flex flex-col ">
            <div className="flex flex-row gap-4 items-center justify-center w-full">
              <Link href="/gallery">
                <Button variant="link">View Gallery</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:grid flex flex-col lg:grid-cols-2 gap-8 items-center justify-start w-full px-8 lg:px-32 py-10 lg:py-40 ">
        <p className="text-yellow-900 text-center text-balance text-4xl lg:text-5xl font-extrabold">
          Where We Are Located
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3947.0465431403145!2d116.09684177583974!3d-8.397083291641211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjMnNDkuNSJTIDExNsKwMDUnNTcuOSJF!5e0!3m2!1sen!2smy!4v1732538310231!5m2!1sen!2smy"
          width="600"
          height="450"
          className="w-full border-0 rounded-lg"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Cta />
    </main>
  );
}
