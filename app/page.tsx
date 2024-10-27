"use client";

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
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Form from "next/form";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowDown,
  ArrowDown10,
  ArrowDownCircle,
  House,
  Scan,
  Sofa,
  Waves
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const handleWaitlist = () => {
  console.log("Form Submitted");
};

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

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen font-[family-name:var(--font-geist-sans)]
    bg-gradient-to-tl from-yellow-700/10 to-white"
    >
      <main className="flex flex-col gap-10 items-center justify-center px-8 lg:px-0 pt-10">
        <div
          id="villa"
          className="flex flex-col gap-6 lg:max-w-2xl lg:py-24 lg:pb-32 z-10"
        >
          <p className="text-5xl lg:text-6xl font-serif lg:tracking-wide lg:leading-tight font-semibold drop-shadow-md text-balance">
            Step Into A World Of <span className="text-yellow-500">Luxury</span>
          </p>
          <p className="text-md md:text-lg">
            <span className="font-bold text-yellow-600">Golden Retreat</span>{" "}
            houses 33 private holiday villas in west cost of Lombok, beautiful
            and secluded, offering a perfect blend of luxury and relaxation.
          </p>
          {/*  <p className="text-md lg:text-lg opacity-60 text-balance flex lg:hidden">
            With breathtaking views, sophisticated amenities and , each stay is
            crafted to surpass expectations.
          </p> */}

          <div className="flex flex-row gap-4 w-full">
            <Link href="/lombok">
              <Button variant={"default"}>Discover Now</Button>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={"outline"}
                  className="border-yellow-600 text-yellow-600 tracking-wider hover:bg-gradient-to-tl hover:from-yellow-800 hover:to-yellow-500 hover:text-white hover:border-transparent hover:shadow-lg"
                >
                  Book A Call
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Join the Waitlist</DialogTitle>
                  <DialogDescription>
                    Become the first few people to get notified about the new
                    Golden Retreat Lombok Villa!
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <form>
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="name">Name</Label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="w-full rounded-md border-2 border-gray-300 p-2 text-sm"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="email">Email</Label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full rounded-md border-2 border-gray-300 p-2 text-sm"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      <Button
                        variant={"default"}
                        formAction={() => handleWaitlist()}
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="lg:flex flex-col p-0 m-0 w-full -z-2 lg:-mt-[750px] hidden">
          <Image
            src="/enter.png"
            alt="Villa"
            width={2000}
            height={1000}
            className="w-full h-auto p-0 m-0"
          />
        </div>
        <div className="flex flex-col gap-4 items-center px-0">
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
          <div className="flex flex-col gap-4 items-center">
            <p className="tracking-widest text-yellow-700 text-md ">
              Step into peace and luxury
            </p>

            <ArrowDownCircle
              className="w-6 h-6 text-yellow-600 stroke-1 stroke-current animate-pulse"
              onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4 items-center justify-center px-0 lg:px-32 lg:py-32">
          <p className="text-4xl lg:text-6xl font-serif font-semibold">
            Discover the beauty of Lombok
          </p>
          <div className="flex gap-4 flex-col">
            <p className="text-md text-gray-900">
              With breathtaking views, sophisticated amenities and , each stay
              is crafted to surpass expectations.
            </p>
            <p className="text-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ea
              natus ratione neque asperiores sit officiis recusandae corrupti
              distinctio dolor assumenda alias quae rerum veniam ex, eum
              deserunt veritatis id!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center px-0">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3800,
                stopOnMouseEnter: true
              })
            ]}
            opts={{ align: "center", loop: true }}
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
        <div className="flex flex-col gap-4 items-center px-0 py-8">
          <Card className="flex flex-col w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                2 Bedroom Villa
              </CardTitle>
              <CardDescription>
                Parcel Size{" "}
                <span className="text-yellow-600 font-bold">150 sqm</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <Image
                  src="/villa/grlv_7.webp"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={200}
                  className="w-full h-auto aspect-video object-cover rounded-lg"
                />
                <div className="grid grid-cols-2 gap-4 w-full px-2 py-4">
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <House className="min-w-6 min-h-6 stroke-1 text-yellow-500 opacity-80" />
                    <p>Single Storey Villa</p>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Scan className="min-w-6 min-h-6 stroke-1 text-yellow-500 opacity-80" />
                    <p>103 sqm (1108 sqft)</p>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Sofa className="min-w-6 min-h-6 stroke-1 text-yellow-500 opacity-80" />
                    <p>Fully Furnished</p>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Waves className="min-w-6 min-h-6 stroke-1 text-yellow-500 opacity-80" />
                    <p>Private Swimming Pool</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className=" flex flex-row gap-4 items-center justify-between">
              <Button variant="default">Book Tour</Button>
              <Button variant="outline">Learn More</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                3 Bedroom Villa
              </CardTitle>
              <CardDescription>
                Parcel Size{" "}
                <span className="text-yellow-600 font-bold">187 sqm</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <Image
                  src="/villa/grlv_7.webp"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={200}
                  className="w-full h-auto aspect-video object-cover rounded-lg"
                />
                <div className="grid grid-cols-2 gap-4 w-full px-2 py-4">
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <House className="min-w-6 min-h-6 stroke-1 text-yellow-500 opacity-80" />
                    <p>Single Storey Villa</p>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Scan className="min-w-6 min-h-6 stroke-1 text-yellow-500 opacity-80" />
                    <p>135 sqm (1453 sqft)</p>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Sofa className="min-w-6 min-h-6 stroke-1 text-yellow-500 opacity-80" />
                    <p>Fully Furnished</p>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Waves className="min-w-6 min-h-6 stroke-1 text-yellow-500 opacity-80" />
                    <p>Private Swimming Pool</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className=" flex flex-row gap-4 items-center justify-between">
              <Button variant="default">Book Tour</Button>
              <Button variant="outline">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
