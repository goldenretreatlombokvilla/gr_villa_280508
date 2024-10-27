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
  Blocks,
  ConciergeBell,
  Dumbbell,
  FishSymbol,
  Flower,
  Grid2X2,
  HandPlatter,
  House,
  Key,
  KeyRound,
  Martini,
  Scan,
  Sofa,
  Sparkles,
  Theater,
  UtensilsCrossed,
  Waves,
  Wind
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

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

const villaFaci = [
  {
    icon: ConciergeBell,
    name: "Lobby"
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurant"
  },
  {
    icon: Martini,
    name: "Bar & Lounge"
  },
  {
    icon: Sparkles,
    name: "Wellness Spa"
  },
  {
    icon: Dumbbell,
    name: "Gymnasium"
  },
  {
    icon: Theater,
    name: "Ampitheatre"
  },
  {
    icon: Waves,
    name: "Pool Club"
  },
  {
    icon: Blocks,
    name: "Playground"
  },
  {
    icon: Flower,
    name: "Serenity Garden"
  },
  {
    icon: FishSymbol,
    name: "Koi Pond"
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
        <div className="flex flex-col gap-20 items-center px-0 py-8">
          <Card className="flex flex-col w-full lg:p-8 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="/villa/grlv_3.webp"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="grid grid-cols-2 lg:grid-cols-2  gap-6 w-full px-2 lg:text-xl text-md">
                  <p className="text-2xl lg:text-4xl font-bold uppercase col-span-2">
                    2 Bedroom Villa
                  </p>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <House className="min-w-6 min-h-6 lg:h-12 lg:w-12 stroke-2 lg:stroke-1 text-yellow-500 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-bold">2 Bed 2 Bath</p>
                      <p className="text-sm">Single Storey</p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Grid2X2 className="min-w-6 min-h-6 lg:h-12 lg:w-12 stroke-2 lg:stroke-1 text-yellow-500 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-bold">150 sqm</p>
                      <p className="text-sm">Parcel Area</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Scan className="min-w-6 min-h-6 lg:h-12 lg:w-12 stroke-2 lg:stroke-1 text-yellow-500 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-bold">103 sqm</p>
                      <p className="text-sm"> Built-Up Area</p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Waves className="min-w-6 min-h-6 lg:h-12 lg:w-12 stroke-2 lg:stroke-1 text-yellow-500 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-bold">47 sqm</p>
                      <p className="text-sm">Pool Area</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <KeyRound className="min-w-6 min-h-6 lg:h-12 lg:w-12 stroke-2 lg:stroke-1 text-yellow-500 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-bold">Turnkey Villa</p>
                      <p className="text-sm">Fully Furnished</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <UtensilsCrossed className="min-w-6 min-h-6 lg:h-12 lg:w-12 stroke-2 lg:stroke-1 text-yellow-500 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-bold">Kitchen & Dining</p>
                      <p className="text-sm">Fully Functional</p>
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-row gap-4 items-center justify-start">
                    <Button variant="default">Virtual Tour</Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-full lg:p-8 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="/villa/grlv_5.webp"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-full  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="grid grid-cols-2 lg:grid-cols-2  gap-6 w-full px-2 lg:text-xl text-md">
                  <p className="text-2xl lg:text-4xl font-bold uppercase col-span-2">
                    3 Bedroom Villa
                  </p>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <House className="min-w-6 min-h-6 lg:h-12 lg:w-12 stroke-2 lg:stroke-1 text-yellow-500 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-bold">3 Bed 3 Bath</p>
                      <p className="text-sm">Single Storey</p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Grid2X2 className="min-w-6 min-h-6 lg:h-12 lg:w-12 stroke-2 lg:stroke-1 text-yellow-500 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-bold">187 sqm</p>
                      <p className="text-sm">Parcel Area</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Scan className="min-w-6 min-h-6 lg:h-12 lg:w-12 stroke-2 lg:stroke-1 text-yellow-500 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-bold">135 sqm</p>
                      <p className="text-sm"> Built-Up Area</p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4 items-center justify-start">
                    <Waves className="min-w-6 min-h-6 lg:h-12 lg:w-12 stroke-2 lg:stroke-1 text-yellow-500 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-bold">52 sqm</p>
                      <p className="text-sm">Pool Area</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <KeyRound className="min-w-6 min-h-6 lg:h-12 lg:w-12 stroke-2 lg:stroke-1 text-yellow-500 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-bold">Turnkey Villa</p>
                      <p className="text-sm">Fully Furnished</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <UtensilsCrossed className="min-w-6 min-h-6 lg:h-12 lg:w-12 stroke-2 lg:stroke-1 text-yellow-500 opacity-80" />
                    <div className="flex flex-col gap-0 items-start">
                      <p className="font-bold">Kitchen & Dining</p>
                      <p className="text-sm">Fully Functional</p>
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-row gap-4 items-center justify-start">
                    <Button variant="default">Virtual Tour</Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-4 items-center px-0 lg:px-10 w-full py-10">
          <p className="text-5xl font-serif font-bold">The Facilities</p>
          <div className="flex flex-row flex-wrap gap-4 items-center justify-center w-full lg:px-52">
            {villaFaci.map((item: any) => (
              <div
                key={item.name}
                className="flex flex-col gap-4 bg-white rounded-full pr-6 py-2 hover:shadow-md"
              >
                <div className="flex flex-row gap-4 items-center justify-start pl-4">
                  <item.icon className="min-w-6 min-h-6 lg:h-8 lg:w-8 stroke-2 lg:stroke-1 text-yellow-500 opacity-80" />
                  <p className="">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="link" className="w-full">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center px-0 lg:px-10 w-full py-20">
          <div className="flex flex-col gap-4 lg:px-32">
            <p className="text-5xl font-serif font-bold">Investment Service</p>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
              molestiae? Praesentium maiores unde eos id.
            </p>
            <p className="text-md opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              animi ullam adipisci nulla aliquid debitis non soluta nihil
              mollitia veritatis!
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:px-10">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">
                  Investment Options
                </AccordionTrigger>
                <AccordionContent className="text-md opacity-80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, amet adipisci temporibus sed doloribus aut rerum.
                  Soluta ullam cupiditate obcaecati sed possimus vitae nam quo
                  id! Iusto officiis aliquid labore?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold">
                  Visa Application
                </AccordionTrigger>
                <AccordionContent className="text-md opacity-80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  tempora odit at? Animi, pariatur architecto! Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Odit vitae,
                  explicabo quod quae id doloremque quia laboriosam distinctio
                  sequi nesciunt?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-semibold">
                  Legal Documents
                </AccordionTrigger>
                <AccordionContent className="text-md opacity-80">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consectetur qui quam perferendis aliquid doloremque earum
                  similique animi eius dolore? Ratione earum unde porro delectus
                  dolorem quo quidem doloribus provident tenetur?
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
}
