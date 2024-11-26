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
    src: "https://utfs.io/f/dJLJpH9Hrkw3ZbJhQuj5zPGMQWt0kmvD298SjxYqTRlnKLFE",
    alt: "Master Bedroom"
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
              src="https://utfs.io/f/dJLJpH9Hrkw3HQH8eio47KGLVT5JMX0nbiCWRIZyzPwUDrcp"
              alt="Golden Retreat Lombok Villa"
              width={500}
              height={500}
              className="max-w-32 -my-8 h-full object-cover"
            />
          </Link>
          <h1 className="sr-only text-xl font-sans text-yellow-800 pt-1 font-light">
            Our Location
          </h1>
        </div>
      </div>

      <div className="lg:grid flex flex-col lg:grid-cols-2 gap-8 items-center justify-start w-full px-8 lg:px-32 py-10 lg:py-40 ">
        <p className="text-yellow-900 text-center text-balance text-4xl lg:text-5xl font-extrabold">
          Our Location
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

      <div className="lg:grid flex flex-col lg:grid-cols-2 gap-8 items-center justify-start w-full px-8 lg:px-32 py-10 lg:py-40 ">
        <p className="text-yellow-900 lg:order-last text-center text-balance text-4xl lg:text-5xl font-extrabold">
          Surrounding Attractions
        </p>
        <div className="flex flex-col gap-4 h-full w-full">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3JMbcGuFGm1t394BWXOQz0jM2pHhDZeVrkKli"
            alt="Map of attractions around Golden Retreat Lombok Villa"
            width={500}
            height={200}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <Cta />
    </main>
  );
}
