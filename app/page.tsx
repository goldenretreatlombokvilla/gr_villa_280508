"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem
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

const handleWaitlist = () => {
  console.log("Form Submitted");
};

const images = [
  {
    src: "/villa/grlv_1.webp",
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
    src: "/villa/grlv_4.webp",
    alt: "Golden Retreat Villa"
  },
  {
    src: "/villa/grlv_5.webp",
    alt: "Golden Retreat Villa"
  },
  {
    src: "/villa/grlv_6.webp",
    alt: "Golden Retreat Villa"
  },
  {
    src: "/villa/grlv_7.webp",
    alt: "Golden Retreat Villa"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-10 items-center justify-center px-8 pt-10">
        {/* <div className="flex flex-col gap-2 items-center pt-10">
          <Image
            className="invert p-0 m-0 drop-shadow-xl"
            src="/gr_logo.png"
            alt="Golden Retreat Lombok Villa"
            width={580}
            height={100}
            priority
          />
        </div> */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Carousel
            opts={{ align: "center", loop: true }}
            plugins={[
              Autoplay({
                delay: 6000
              })
            ]}
          >
            <CarouselContent className="rounded-sm">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 flex flex-col gap-4 items-center justify-center"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={580}
                    height={200}
                    priority
                    className="object-cover w-full h-full rounded-sm"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="flex flex-col gap-4 lg:max-w-2xl">
          <p className="text-4xl lg:text-6xl font-serif font-semibold">
            Invest in Lombok.<br></br> Realise your Dream.
          </p>
          <p className="text-md text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore
            fugiat non totam qui voluptate maxime unde rem numquam sint?
          </p>

          <div className="flex flex-row gap-4 w-full">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"default"}>Join the Waitlist</Button>
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
                      <div className="grid grid-cols-2 gap-4">
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

            <Button variant={"outline"}>
              <a href="mailto:goldenreteatvilla@gmail.com" target="_blank">
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
