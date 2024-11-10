import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  House,
  Grid2X2,
  Scan,
  Waves,
  KeyRound,
  UtensilsCrossed,
  ArrowRightCircle,
  MapPin,
  Award,
  FileText
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main>
      <div className="flex flex-col gap-8 items-center justify-start w-full min-h-screen p-0 max-w-6xl mx-auto">
        <div className="absolute w-full h-[100vh] top-0 left-0 -z-10">
          <Image
            src="/villa/grlv_3.webp"
            alt="Golden Retreat Lombok Villa"
            width={2000}
            height={2000}
            className="w-full h-[100vh] lg:h-auto  aspect-video object-cover brightness-50"
          />
        </div>
        <div className="flex flex-col gap-4 items-center justify-start px-0 lg:pb-32 text-white w-full min-h-[100vh] py-10 ">
          <Image
            src="/brand/logo_full.png"
            alt="Golden Retreat Lombok Villa"
            width={1000}
            height={500}
            className="lg:w-80 w-60 h-fit lg:h-fit object-contain mb-20 drop-shadow-xl"
          />
          <div className="flex flex-col items-center justify-center gap-4 mt-40 lg:mt-20">
            <p className="uppercase font-serif text-lg lg:text-2xl tracking-widest opacity-60 ">
              Welcome to
            </p>
            <h1 className="font-cinzel text-3xl lg:text-4xl flex flex-col gap-0 text-center font-semibold text-nowrap">
              Golden Retreat{" "}
              <span className="text-6xl lg:text-8xl font-deco font-bold">
                Lombok Villas
              </span>
            </h1>
            {/*  <Image
              src="/gr_logo.png"
              alt="Golden Retreat Lombok Villa"
              width={1000}
              height={500}
              className="lg:w-[80vw] w-[100vw] lg:h-fit object-cover drop-shadow-xl lg:-mb-20 "
            /> */}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center justify-center w-full lg:px-52 px-10 py-20 lg:py-52">
        <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3FRpIu8Y3NDtBULj4yZxze2nb6wR7gl1iPYX0"
            alt="Front Enterence of Golden Retreat Lombok Villa"
            width={500}
            height={700}
            className="w-full h-auto object-cover lg:aspect-video rounded-lg object-center"
            unoptimized={true}
          />
        </div>
        <div className="flex flex-col gap-4  w-full">
          <p className="font-cinzel text-yellow-700 text-3xl  lg:text-3xl tracking-wide flex flex-col">
            <span className="font-bold text-5xl lg:text-6xl ">
              33 Luxury Villas
            </span>{" "}
            Private & Exclusive
          </p>
          <p className="font-sans font-semibold text-stone-900 text-md leading-7">
            Experience unparalleled luxury and exclusivity at our stunning new
            luxury villas where every detail has been meticulously crafted with
            the highest standards.
          </p>
          <p className="font-sans text-md text-stone-900/50 leading-7">
            Nestled in the pristine west coast of Lombok with breathtaking
            views, our property stand for exquisite design, top-notch amenities,
            and exceptional service.
          </p>
          {/* <Button variant="default" className="w-fit">
            Visit Villas
          </Button> */}
        </div>
      </div>

      {/* Villas Section  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start justify-start w-full px-10 lg:px-52 py-20">
        <p className="text-5xl lg:text-6xl font-cinzel font-bold text-yellow-700">
          The Villas
        </p>
        <Image
          src="https://utfs.io/f/dJLJpH9Hrkw3wcK398eUX3BuqFPzTD5Kh1H9QyUilcWfbY6d"
          alt="Golden Retreat Lombok Villa"
          width={500}
          height={200}
          className="hidden lg:flex w-full h-auto aspect-video object-cover rounded-lg"
        />
        <p className="text-md font-sans text-stone-900 text-pretty">
          The result of a collaboration between the land owners, experienced
          developers and excellent management teams, this project is designed to
          provide a unique opportunity for investors to tap into the rising
          demand in Lombok Island.
        </p>
        <div className="hidden lg:flex flex-row items-center justify-center py-4 ring-1 ring-yellow-700 text-yellow-700 font-sans text-sm italic rounded-lg">
          Exquisite villa with private pool and deck, perfect for luxury living.
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 items-center justify-center w-full px-10 lg:px-52 lg:py-20 -mt-14 pb-14">
        <Image
          src="https://utfs.io/f/dJLJpH9Hrkw3wcK398eUX3BuqFPzTD5Kh1H9QyUilcWfbY6d"
          alt="Golden Retreat Lombok Villa"
          width={500}
          height={200}
          className="flex lg:hidden w-full h-auto aspect-video object-cover rounded-lg"
        />
        <Image
          src="https://utfs.io/f/dJLJpH9Hrkw3fmFEKjqhLDqapUrcI5X2oh8B9JvKe1ET4tzC"
          alt="Golden Retreat Lombok Villa"
          width={500}
          height={200}
          className="w-full h-full aspect-video object-cover object-right rounded-lg"
        />
        <Image
          src="https://utfs.io/f/dJLJpH9Hrkw3Y1KKJxnLOdMUqSH08tvDTRnX1xNaPBF3YW5c"
          alt="Golden Retreat Lombok Villa"
          width={500}
          height={200}
          className="w-full h-auto aspect-video object-cover rounded-lg"
        />
        <div className="hidden lg:flex flex-row items-center justify-center py-4 ring-1 ring-yellow-700 text-yellow-700 font-sans text-sm italic rounded-lg">
          A lavishly designed bespoke bathroom.
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center py-4 ring-1 ring-yellow-700 text-yellow-700 font-sans text-sm italic rounded-lg">
          Luxury living room, with top of the line furniture, wide screen TV,
          best in class sound system.{" "}
        </div>
      </div>

      <div className="flex flex-col gap-12 items-center justify-center w-full min-h-screen px-10 lg:px-52 py-20 bg-yellow-800/10">
        {/*  <p className="font-cinzel text-yellow-700 font-bold text-5xl">
          The Villas
        </p> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-between w-full lg:gap-14">
          {/* Premium Luxury Villa */}
          <Link href="/villas">
            <Card className="flex flex-col w-full bg-transparent shadow-none border-none group">
              <CardContent className="px-0">
                <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                  <Image
                    src="https://utfs.io/f/dJLJpH9Hrkw3ZbJhQuj5zPGMQWt0kmvD298SjxYqTRlnKLFE"
                    alt="Bedroom in the Premium Luxury Villa"
                    width={500}
                    height={300}
                    className="w-full h-auto  object-cover aspect-video rounded-lg group-hover:shadow-lg"
                  />
                  <div className="grid grid-cols-2 lg:grid-cols-2 rounded-lg  gap-2 w-full p-6 lg:text-xl text-md ring-1 ring-yellow-600 group-hover:shadow-lg bg-background">
                    <div className="flex flex-row gap-4 mb-8">
                      <Badge variant={"default"}>2 Bedroom</Badge>
                      <Badge variant={"default"}>150 sqm</Badge>
                    </div>
                    {/* <p className="text-sm font-sans mb-8 opacity-50">
                      2 bedroom | 150 sqm
                    </p> */}
                    <p className="text-2xl lg:text-3xl font-bold uppercase col-span-2 text-yellow-700">
                      Premium Luxury Villa
                    </p>
                    <div className="col-span-2 flex flex-row gap-4 items-center justify-between">
                      <p className="text-sm  font-sans">
                        <span className="opacity-50">starting at</span> $180,000
                      </p>
                      <Button variant="ghost" size="icon">
                        <ArrowRightCircle className="min-w-6 min-h-6 stroke-1 text-yellow-600 group-hover:text-white group-hover:fill-yellow-800 group-hover:-rotate-45 transition-all duration-500 ease-in-out group-hover:scale-110" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Superior Luxury Villa */}
          <Link href="/villas">
            <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none group">
              <CardContent className="px-0">
                <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                  <Image
                    src="https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu"
                    alt="Pool Side View of Superior Villa"
                    width={500}
                    height={300}
                    className="w-full h-auto  object-cover aspect-video rounded-lg group-hover:shadow-lg"
                  />
                  <div className="grid grid-cols-2 lg:grid-cols-2 rounded-lg  gap-2 w-full p-6 lg:text-xl text-md ring-1 ring-yellow-600 group-hover:shadow-lg bg-background">
                    <div className="flex flex-row gap-4 mb-8">
                      <Badge variant={"default"}>3 Bedroom</Badge>
                      <Badge variant={"default"}>187 sqm</Badge>
                    </div>

                    <p className="text-2xl lg:text-3xl font-bold uppercase col-span-2 text-yellow-700">
                      Superior Luxury Villa
                    </p>
                    <div className="col-span-2 flex flex-row gap-4 items-center justify-between">
                      <p className="text-sm font-sans">
                        <span className="opacity-50">starting at</span> $200,000
                      </p>
                      <Button variant="ghost" size="icon">
                        <ArrowRightCircle className="min-w-6 min-h-6 stroke-1 text-yellow-600 group-hover:text-white group-hover:fill-yellow-800 group-hover:-rotate-45 transition-all duration-500 ease-in-out group-hover:scale-110" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* In House Facilities */}
      <div className="flex flex-col gap-4 items-center justify-center w-full px-10 lg:px-52 py-40">
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
                    variety of dishes or spend the evening in our private
                    lounge.
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
                    Never miss a beat with our on-site gymnasium equipped with
                    your favourite machines and then get a message in our local
                    5-star spa.
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

      {/* Benefits Section */}
      <div className="flex flex-col gap-4 items-center justify-start w-full px-10 lg:px-52 py-20 bg-black text-white">
        <p className="text-5xl font-cinzel text-white">Benefits</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-4 ">
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <div className="flex flex-row lg:flex-col gap-10 w-full p-6 lg:text-xl text-md ">
                  <MapPin className="min-w-16 min-h-16 fill-yellow-600 stroke-1" />
                  <p className="text-md  font-sans text-white">
                    Heart of the latest tourist destination, in Lombok Island.
                    Located 300m away from Bangsal Beach, Bangsal Fast Boat Port
                    and Boat service to the famous Gili Terawangan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <div className="flex flex-row lg:flex-col gap-10 w-full p-6 lg:text-xl text-md ">
                  <Award className="min-w-16 min-h-16 fill-yellow-600 stroke-1" />
                  <p className="text-md font-sans text-white">
                    Established developer project that is the first of it’s
                    kind, while being made with the experience of successful
                    past projects. Desinged with the end user in mind, and has
                    everything that you need.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <div className="flex flex-row lg:flex-col gap-10 w-full p-6 lg:text-xl text-md ">
                  <FileText className="min-w-16 min-h-16 fill-yellow-600 stroke-1" />
                  <p className="text-md  font-sans text-white">
                    Long stay visas for foreign purchasers. Visa application
                    assistance provided. Visa renewal are for every 5 years. 12
                    months progressive payments with an initial deposit of 20%
                    of purchase price.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Button variant="default" className="lg:w-fit w-full">
          Apply Now
        </Button>
      </div>
    </main>
  );
}
