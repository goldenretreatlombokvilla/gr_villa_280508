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
  KeyRound,
  Scan,
  UtensilsCrossed,
  Waves
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const images = [
  {
    src: "/villa/grlv_7.webp",
    alt: "Spacious Bathroom"
  },
  {
    src: "/villa/grlv_2.webp",
    alt: "Living Room"
  },

  {
    src: "/villa/grlv_3.webp",
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
    <div className="flex flex-col gap-8 items-center justify-start w-full min-h-screen p-10 max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-yellow-800 to-stone-900  rounded-lg py-8 px-8 flex flex-row gap-6 items-center justify-start w-full">
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
      <div className="flex flex-col gap-4 items-center justify-center w-full h-[50vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-3xl lg:text-6xl  font-bold font-cinzel text-yellow-700">
              Get To Know The Villas
            </p>
            <p className="font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur nisi possimus ratione veritatis dolor eum laborum ipsa
              tempore. Error, nulla?
            </p>
            <p className="opacity-60 font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              facere inventore, nesciunt laborum fugit, vero saepe, expedita
              perferendis cupiditate ipsum tempore debitis. Consequuntur dolores
              doloribus provident exercitationem nihil repudiandae ducimus?
            </p>
            <div className="flex flex-row gap-4 justify-start">
              <Button variant={"default"}>Discover Now</Button>
              <Button variant="outline">Our Facilities</Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center px-0">
            <Carousel
              className="hidden lg:flex"
              plugins={[
                Autoplay({
                  delay: 3000
                })
              ]}
              opts={{ align: "start", loop: true }}
            >
              <CarouselContent className="py-8">
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="flex flex-col gap-4 items-center justify-center lg:pl-14 group rounded-lg"
                  >
                    <div className="relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={580}
                        height={400}
                        loading="eager"
                        className="object-cover w-full h-full rounded-lg transition-all duration-300 group-hover:shadow-lg brightness-100 lg:brightness-90 group-hover:brightness-100"
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

      <div className="flex flex-col gap-20 items-center px-0 py-8">
        <Card className="flex flex-col w-full lg:p-8 bg-transparent shadow-none border-none">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-6 lg:gap-24 items-center justify-center">
              <Image
                src="/villa/grlv_3.webp"
                alt="Golden Retreat Lombok Villa"
                width={500}
                height={300}
                className="w-full h-auto  object-cover aspect-square rounded-lg shadow-lg"
              />
              <div className="grid grid-cols-2 lg:grid-cols-2  gap-6 lg:gap-8 w-full px-2 lg:text-xl text-md">
                <div className="flex flex-col gap-2 col-span-2">
                  <p className="text-2xl lg:text-5xl text-yellow-700 font-bold uppercase ">
                    Premium
                  </p>
                  <p className="text-2xl opacity-50 font-bold uppercase tracking-widest -mt-1">
                    Luxury Villa
                  </p>
                  <p className="opacity-80  font-sans text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illum ut, dolores voluptas tenetur deleniti cumque.
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start">
                  <House className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-700 opacity-80" />
                  <div className="flex flex-col gap-0 items-start">
                    <p className="font-semibold font-cinzel text-lg text-nowrap">
                      2 Bed 2 Bath
                    </p>
                    <p className="text-sm font-sans">Single Storey</p>
                  </div>
                </div>

                <div className="flex flex-row gap-4 items-center justify-start">
                  <Grid2X2 className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-700 opacity-80" />
                  <div className="flex flex-col gap-0 items-start">
                    <p className="font-semibold font-cinzel text-lg text-nowrap">
                      150 sqm
                    </p>
                    <p className="text-sm font-sans">Parcel Area</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start">
                  <Scan className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-700 opacity-80" />
                  <div className="flex flex-col gap-0 items-start">
                    <p className="font-semibold font-cinzel text-lg text-nowrap">
                      103 sqm
                    </p>
                    <p className="text-sm font-sans"> Built-Up Area</p>
                  </div>
                </div>

                <div className="flex flex-row gap-4 items-center justify-start">
                  <Waves className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-700 opacity-80" />
                  <div className="flex flex-col gap-0 items-start">
                    <p className="font-semibold font-cinzel text-lg text-nowrap">
                      47 sqm
                    </p>
                    <p className="text-sm font-sans">Pool Area</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start">
                  <KeyRound className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-700 opacity-80" />
                  <div className="flex flex-col gap-0 items-start">
                    <p className="font-semibold font-cinzel text-lg text-nowrap">
                      Turnkey Villa
                    </p>
                    <p className="text-sm font-sans">Fully Furnished</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start">
                  <UtensilsCrossed className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-700 opacity-80" />
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
        <Card className="flex flex-col w-full lg:p-8 bg-transparent shadow-none border-none">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row-reverse gap-6 lg:gap-24 items-center justify-center">
              <Image
                src="/villa/grlv_5.webp"
                alt="Golden Retreat Lombok Villa"
                width={500}
                height={300}
                className="w-full h-full  object-cover aspect-square rounded-lg shadow-lg"
              />
              <div className="grid grid-cols-2 lg:grid-cols-2  gap-6 w-full px-2 lg:text-xl text-md">
                <div className="flex flex-col gap-2 col-span-2">
                  <p className="text-2xl lg:text-5xl text-yellow-700 font-bold uppercase ">
                    Superior
                  </p>
                  <p className="text-2xl opacity-50 font-bold uppercase tracking-widest -mt-1">
                    Luxury Villa
                  </p>
                  <p className="opacity-80  font-sans text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illum ut, dolores voluptas tenetur deleniti cumque.
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start">
                  <House className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-700 opacity-80" />
                  <div className="flex flex-col gap-0 items-start">
                    <p className="font-semibold font-cinzel text-lg text-nowrap">
                      3 Bed 3 Bath
                    </p>
                    <p className="text-sm font-sans">Single Storey</p>
                  </div>
                </div>

                <div className="flex flex-row gap-4 items-center justify-start">
                  <Grid2X2 className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-700 opacity-80" />
                  <div className="flex flex-col gap-0 items-start">
                    <p className="font-semibold font-cinzel text-lg text-nowrap">
                      187 sqm
                    </p>
                    <p className="text-sm font-sans">Parcel Area</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start">
                  <Scan className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-700 opacity-80" />
                  <div className="flex flex-col gap-0 items-start">
                    <p className="font-semibold font-cinzel text-lg text-nowrap">
                      135 sqm
                    </p>
                    <p className="text-sm font-sans"> Built-Up Area</p>
                  </div>
                </div>

                <div className="flex flex-row gap-4 items-center justify-start">
                  <Waves className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-700 opacity-80" />
                  <div className="flex flex-col gap-0 items-start">
                    <p className="font-semibold font-cinzel text-lg text-nowrap">
                      52 sqm
                    </p>
                    <p className="text-sm font-sans">Pool Area</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start">
                  <KeyRound className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-700 opacity-80" />
                  <div className="flex flex-col gap-0 items-start">
                    <p className="font-semibold font-cinzel text-lg text-nowrap">
                      Turnkey Villa
                    </p>
                    <p className="text-sm font-sans">Fully Furnished</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start">
                  <UtensilsCrossed className="min-w-6 min-h-6 lg:min-h-12 lg:min-w-12 stroke-2 lg:stroke-1 text-yellow-700 opacity-80" />
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

      <div className="flex flex-col gap-4 items-center px-0">
        <div className="flex flex-col gap-4 items-center">
          <p className="tracking-widest text-yellow-700 text-2xl lg:text-5xl font-bold">
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

      <div className="flex flex-col gap-4 items-center justify-start w-full py-20">
        <p className="text-5xl font-cinzel text-yellow-700 font-semibold">
          In House Facilities
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-4 ">
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="/brand/restaurant.jpg"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2 w-full p-6 lg:text-xl text-md ring-1 ring-yellow-700 rounded-lg">
                  <p className="text-2xl font-bold uppercase text-yellow-700">
                    Restaurant, Bar & Lounge{" "}
                  </p>
                  <p className="text-sm opacity-70 font-sans">
                    Dine in luxury in our 5 star restaurant with a delicious
                    menu by Chef Ramsey or spend the evening in our private
                    lounge.{" "}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="/brand/spa.jpg"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2 w-full h-full p-6 lg:text-xl text-md ring-1 ring-yellow-700 rounded-lg">
                  <p className="text-2xl font-bold uppercase text-yellow-700">
                    Wellness Spa & Gymnasium
                  </p>
                  <p className="text-sm opacity-70 font-sans">
                    Never miss a beat with you gym equiped with your favourite
                    machines and then get a message in our local 5-star spa.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="/brand/pond.jpg"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2 w-full h-full p-6 lg:text-xl text-md ring-1 ring-yellow-700 rounded-lg">
                  <p className="text-2xl font-bold uppercase text-yellow-700">
                    Serenity Garden & Koi Pond
                  </p>
                  <p className="text-sm opacity-70 font-sans">
                    Be at peace with the sound of water and a beautiful sight in
                    our gardens, where memories of a lifetime are made.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
