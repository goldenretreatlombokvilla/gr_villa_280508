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
  DialogPortal,
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
  ArrowRightCircle,
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
    src: "/villa/grlv_5.webp",
    alt: "Master Bedroom Front View"
  },
  {
    src: "/villa/grlv_3.webp",
    alt: "Private Swimming Pool"
  },
  /* {
    src: "/villa/grlv_4.webp",
    alt: "Yoga Deck"
  }, */
  {
    src: "/villa/grlv_7.webp",
    alt: "Bathroom"
  },
  /* {
    src: "/villa/grlv_2.webp",
    alt: "Living Room"
  }, */
  {
    src: "/villa/grlv_6.webp",
    alt: "Master Bedroom Side View"
  }
];

const villaFaci = [
  /* {
    icon: ConciergeBell,
    name: "Lobby"
  }, */
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
  /* {
    icon: Theater,
    name: "Ampitheatre"
  }, */
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

export default function LpOne() {
  return (
    <div className="flex flex-col items-start justify-start">
      <main className="hidden flex-col gap-10 items-center justify-center px-8 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-stone-900">
          <div className="w-full h-[100vh]">
            <Image
              src="https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu"
              alt="Poolside View of Golden Retreat Lombok Villa"
              width={2000}
              height={2000}
              loading="eager"
              placeholder="blur"
              blurDataURL="https://utfs.io/f/dJLJpH9Hrkw3bjYjbfsqfwy05AzFLkTvmpo63dsY7VXnlRD8"
              className="w-full hidden lg:h-full aspect-video object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center px-0  text-white w-full lg:order-first">
            <div
              className="flex flex-col items-center justify-center gap-0 lg:h-screen py-20 l
            g:py-0 lg:px-10 "
            >
              {/* <p className="uppercase font-sans text-lg lg:text-2xl tracking-[0.5em]">
                  Welcome to
                </p> */}
              <Image
                src="/brand/logo_white_long_big.png"
                alt="Golden Retreat Lombok Villas"
                width={2432}
                height={1071}
                loading="eager"
                unoptimized
                className="lg:w-screen object-contain drop-shadow-2xl"
              />
              <h1 className=" sr-only">Golden Retreat Lombok Villas</h1>
              <div className="flex flex-row flex-wrap gap-4 items-center justify-center py-4 lg:-py-6">
                <div className="flex flex-row gap-4 items-center justify-center px-4 py-2 bg-stone-300/30 rounded-lg">
                  {/*                   <ArrowRightCircle className="w-6 h-6 text-stone-100/60" />
                   */}{" "}
                  <p className="uppercase text-md lg:text-lg tracking-widest text-white font-sans">
                    <span className="font-extrabold">Luxury</span> Holiday
                    Villas
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center px-4 py-2 bg-stone-300/30 rounded-lg">
                  {/*                   <ArrowRightCircle className="w-6 h-6 text-stone-100/60" />
                   */}{" "}
                  <p className="uppercase text-md lg:text-lg tracking-widest  text-white font-sans">
                    <span className="font-extrabold">Turnkey</span> Project
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center px-4 py-2 bg-stone-300/30 rounded-lg">
                  {/*                   <ArrowRightCircle className="w-6 h-6 text-stone-100/60" />
                   */}{" "}
                  <p className="uppercase text-md lg:text-lg tracking-widest  text-white font-sans">
                    <span className="font-extrabold">15-20%</span> Projected
                    Yield
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-0 lg:px-0 py-20 w-full lg:w-2/4 lg:text-center">
          <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col text-yellow-900/50 uppercase -mb-4">
            Private & Exclusive
          </p>
          <h3 className="font-extrabold text-5xl md:text-6xl lg:text-8xl font-cinzel text-yellow-900">
            Luxury Villas
          </h3>
          <p className="font-sans text-stone-900 text-md text-balance">
            Experience a rare coalescence of luxury and exceptional value with
            our latest development,{" "}
            <span className="font-extrabold text-yellow-800">
              Golden Retreat Lombok
            </span>
            , where every Villa has been designed with you in mind.
          </p>
          <p className="font-sans text-md text-stone-900/50">
            Nestled in the beautiful west coast of Lombok, Golden Retreat Lombok
            showcases exquisite design, a quality build and 5-star amenities.
          </p>
          <div className="flex flex-row flex-wrap gap-4 w-full lg:justify-center">
            <Button asChild>
              <Link className="" href="#lombok">
                Destination Lombok
              </Link>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"default"} className="w-fit">
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

        <div className="flex flex-col gap-4 items-center px-0">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-8 max-w-6xl ">
            {villaImages.map((item) => (
              <div
                key={item.alt}
                className="flex flex-col gap-4 items-center justify-center"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex flex-col gap-2 items-center cursor-pointer w-full">
                      <Image
                        src={item.src}
                        alt="Golden Retreat Lombok Villa"
                        width={1000}
                        height={500}
                        loading="eager"
                        className="w-full h-full aspect-video object-cover rounded-lg hover:shadow-lg hover:scale-105 trasition-all duration-300"
                      />
                      <p className="text-sm sr-only font-sans opacity-70 italic">
                        {item.alt}
                      </p>
                    </div>
                  </DialogTrigger>
                  <DialogPortal>
                    <DialogContent className=" border-none shadow-none w-full h-full items-center justify-center bg-transparent">
                      <DialogHeader>
                        <DialogTitle className="sr-only">
                          {item.alt}
                        </DialogTitle>
                        <div className="flex flex-col gap-2 w-full items-center justify-center">
                          <Image
                            src={item.src}
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
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start lg:items-center px-0 lg:px-10 w-full py-10 lg:bg-gradient-to-tl from-yellow-700/10 to-white">
          <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col text-yellow-900/50 uppercase -mb-4">
            In House
          </p>
          <h3 className="font-extrabold text-5xl md:text-6xl lg:text-8xl font-cinzel text-yellow-900">
            Facilities
          </h3>
          <div className="grid grid-cols-2 lg:flex flex-row flex-wrap gap-4 items-center justify-center w-full lg:max-w-4xl py-4">
            {villaFaci.map((item: any) => (
              <div
                key={item.name}
                className="flex flex-col gap-4 bg-white rounded-full pr-6 py-2"
              >
                <div className="flex flex-row gap-4 items-center justify-start pl-4">
                  <item.icon className="min-w-4 min-h-4 lg:h-8 lg:w-8 stroke-2 lg:stroke-1 text-yellow-800" />
                  <p className="text-sm text-nowrap lg:text-md group-hover:text-lg font-sans">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center px-0 lg:px-24 w-full py-20">
          <div className="flex flex-col gap-4 lg:px-32">
            <p className="text-5xl font-serif font-bold">
              Investment Opportunity
            </p>
            <p className="text-md">
              By choosing Golden Retreat Lombok Villa, you're not just buying a
              property; you're securing a lucrative investment opportunity.
            </p>
            <p className="text-md opacity-70">
              Our team of experts will handle all aspects of property
              management, including rental bookings, maintenance, and financial
              reporting, ensuring a hassle-free and profitable experience.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:px-10">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">
                  Foreign Ownership
                </AccordionTrigger>
                <AccordionContent className="text-md text-pretty">
                  We are located within the Mandalika{" "}
                  <Link
                    href="#"
                    className="underline font-semibold hover:text-yellow-800"
                  >
                    Tourism Special Economic Zone (TSEZ)
                  </Link>{" "}
                  which allows foreign investors to own freehold property in the
                  area. This means Golden Retreat Lombok Villa the perfect
                  opportunity for foreign investors who are looking to invest in
                  luxury properties.
                  <br></br>
                  <br></br>
                  With the area seeing a steady increase in growth in numbers
                  and developments, we are confident that we will be able to
                  capitalize on this growth and make a significant return on
                  investment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold">
                  Application Assistance
                </AccordionTrigger>
                <AccordionContent className="text-md opacity-80">
                  We will guide you through the complex visa application
                  process, ensuring a smooth and efficient experience. Our
                  dedicated team will provide expert assistance in preparing all
                  the necessary legal documentation, saving you time and effort.
                  With our support, you can focus on your purchase and travel
                  plans with confidence.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-semibold">
                  8-10% Projected Yield
                </AccordionTrigger>
                <AccordionContent className="text-md opacity-80">
                  Our meticulously crafted villas are designed to generate
                  substantial rental income, with an estimated annual yield of
                  8-10%. This attractive return on investment is made possible
                  by the strong demand for high-end holiday accommodations in
                  Lombok, coupled with our professional property management
                  services.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <div className="flex flex-col gap-8 items-center justify-center w-full xl:min-h-screen p-0 max-w-6xl h-screen mx-auto">
        <div className="absolute w-full h-[100vh] top-0 left-0 -z-10">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu"
            alt="Poolside View of Golden Retreat Lombok Villa"
            width={2000}
            height={2000}
            loading="eager"
            placeholder="blur"
            blurDataURL="https://utfs.io/f/dJLJpH9Hrkw3bjYjbfsqfwy05AzFLkTvmpo63dsY7VXnlRD8"
            className="w-full h-[100vh] lg:h-full  aspect-video object-cover brightness-50"
          />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center px-0  text-white w-full">
          <div className="flex flex-col items-center justify-center gap-0 lg:h-screen py-20 lg:py-0 ">
            {/* <p className="uppercase font-sans text-lg lg:text-2xl tracking-[0.5em]">
                Welcome to
              </p> */}
            <Image
              src="/brand/logo_white_long_big.png"
              alt="Golden Retreat Lombok Villas"
              width={2432}
              height={1071}
              loading="eager"
              unoptimized
              className="lg:w-screen object-contain drop-shadow-2xl"
            />
            <h1 className=" sr-only">Golden Retreat Lombok Villas</h1>
            {/* <p className="font-sans text-white text-md text-center text-balance px-4 lg:px-0">
                Experience a rare coalescence of luxury and exceptional value
                with our latest development,{" "}
                <span className="font-extrabold">
                  Golden Retreat Lombok Villas
                </span>
                .
              </p> */}
            <div className="flex flex-row flex-wrap gap-4 items-center justify-center py-4 lg:-py-6">
              <div className="flex flex-row gap-4 items-center justify-center px-4 py-2 bg-stone-900/60 rounded-lg">
                {/*                   <ArrowRightCircle className="w-6 h-6 text-stone-100/60" />
                 */}{" "}
                <p className="uppercase text-md lg:text-lg tracking-widest text-white font-sans">
                  <span className="font-extrabold">Luxury</span> Holiday Villas
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center justify-center px-4 py-2 bg-stone-900/60 rounded-lg">
                {/*                   <ArrowRightCircle className="w-6 h-6 text-stone-100/60" />
                 */}{" "}
                <p className="uppercase text-md lg:text-lg tracking-widest  text-white font-sans">
                  <span className="font-extrabold">Turnkey</span> Project
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center justify-center px-4 py-2 bg-stone-900/60 rounded-lg">
                {/*                   <ArrowRightCircle className="w-6 h-6 text-stone-100/60" />
                 */}{" "}
                <p className="uppercase text-md lg:text-lg tracking-widest  text-white font-sans">
                  <span className="font-extrabold">15-20%</span> Projected Yield
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
