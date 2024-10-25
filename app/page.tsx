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
import { ArrowDown, ArrowDown10, ArrowDownCircle } from "lucide-react";
import Link from "next/link";

const handleWaitlist = () => {
  console.log("Form Submitted");
};

const images = [
  {
    src: "/villa/grlv_7.webp",
    alt: "Golden Retreat Villa"
  },
  {
    src: "/villa/grlv_2.webp",
    alt: "Golden Retreat Villa"
  },

  {
    src: "/villa/grlv_3.webp",
    alt: "Golden Retreat Villa"
  },
  {
    src: "/villa/grlv_6.webp",
    alt: "Golden Retreat Villa"
  },
  {
    src: "/villa/grlv_4.webp",
    alt: "Golden Retreat Villa"
  },
  {
    src: "/villa/grlv_5.webp",
    alt: "Golden Retreat Villa"
  }
];

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen font-[family-name:var(--font-geist-sans)]
    bg-gradient-to-tl from-yellow-700/10 to-white"
    >
      <main className="flex flex-col gap-10 items-center justify-center px-8 pt-10">
        <div
          id="villa"
          className="flex flex-col gap-6 lg:max-w-2xl lg:py-24 lg:pb-32 z-10"
        >
          <p className="text-4xl lg:text-5xl font-serif lg:tracking-wide lg:leading-snug font-semibold drop-shadow-md text-pretty">
            Indulge in Elegence.<br></br> Escape to Lombok.
          </p>
          <p className="text-md lg:text-lg text-gray-500 text-balance">
            Step into a world of elegance in where secluded villas await to
            redefine your holiday experience. With breathtaking views and
            sophisticated amenities, each stay is crafted to surpass
            expectations.
          </p>

          <div className="flex flex-row gap-4 w-full">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={"default"}
                  className="border-yellow-600 text-white tracking-wider hover:bg-gradient-to-tl hover:from-yellow-800 hover:to-yellow-500 hover:text-white hover:border-transparent hover:shadow-lg"
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

            <Link href="/about">
              <Button variant={"outline"}>Learn More</Button>
            </Link>
          </div>
        </div>
        <div className="lg:flex flex-col p-0 m-0 w-full -z-2 lg:-mt-[650px] hidden">
          <Image
            src="/enter.png"
            alt="Villa"
            width={2000}
            height={1000}
            className="w-full h-auto p-0 m-0 lg:rounded-b-lg"
          />
        </div>
        <div className="flex flex-col gap-4 items-center px-0">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnMouseEnter: true
              })
            ]}
            opts={{ align: "center", loop: true }}
          >
            <CarouselContent className="my-8">
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              non eius consectetur accusantium quod impedit voluptas accusamus
              corrupti architecto quaerat.
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
              {images.map((image, index) => (
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
      </main>
    </div>
  );
}
