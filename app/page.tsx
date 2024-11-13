import Cta from "@/components/cta";
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
  FileText,
  Dock
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
              <span className="text-5xl lg:text-8xl font-deco font-bold">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 items-center justify-center w-full lg:pl-0 lg:ml-0 lg:pr-52  pb-20 lg:py-52">
        <div className="flex flex-col gap-4 items-center justify-center h-full w-full lg:col-span-2">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3hbSz8Z2LaOUmx7jw6JrqKBblDskWdPvTZoSg"
            alt="Front Enterence of Golden Retreat Lombok Villa"
            width={700}
            height={700}
            className="w-full h-full object-cover rounded-none lg:rounded-r-lg object-center"
            /*  unoptimized={true} */
          />
        </div>
        <div className="flex flex-col gap-4 px-8 lg:px-0 w-full">
          <p className="font-cinzel text-yellow-900 text-3xl  lg:text-3xl tracking-wide flex flex-col">
            <span className="font-bold text-4xl lg:text-7xl ">
              33 Luxury Villas
            </span>{" "}
            Private & Exclusive
          </p>
          <p className="font-sans text-stone-900 text-sm">
            Experience a rare combination of luxury, exclusivity and value with
            our latest development, Golden Retreat Lombok, where every Villa has
            been meticulously designed with you in mind.
          </p>
          <p className="font-sans text-sm text-stone-900/50">
            Nestled in the beautiful west coast of Lombok, Golden Retreat Lombok
            showcases exquisite design, a quality build, 5-star amenities, and
            exceptional service.
          </p>
          <div className="flex flex-row gap-4">
            <Button variant="default" className="w-fit">
              Discover Lombok
            </Button>
            <Button variant="link" className="w-fit">
              Book A Call
            </Button>
          </div>
        </div>
      </div>

      {/* Villas Section  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-14 items-start justify-start w-full px-8 lg:px-52 py-20">
        <div className="flex flex-col gap-4">
          <p className="text-4xl lg:text-5xl font-cinzel font-bold text-yellow-900">
            An Unparalleled Opportunity
          </p>
          <p className="text-sm font-sans opacity-50 text-pretty">
            Golden Retreat Lombok brings forth an opportunity to tap Lombok’s
            fast-growing tourism industry. Already ranked one of the world's top
            destinations for nature tourism, Lombok Island’s need for quality
            holiday accommodation continues to soar.
          </p>
          <p className="text-sm font-sans italic text-pretty">
            What if you could turn back time?
          </p>
          <p className="text-sm font-sans opacity-50 text-pretty">
            What Lombok truly represents for the astute investor is the
            opportunity to invest in a Bali-like destination 15 to 20 years ago,
            having been first in a rapidly growing market. .
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3wcK398eUX3BuqFPzTD5Kh1H9QyUilcWfbY6d"
            alt="Golden Retreat Lombok Villa"
            width={500}
            height={200}
            className="hidden lg:flex w-full h-auto aspect-video object-cover rounded-lg"
          />
          <div className="hidden lg:flex flex-row items-center justify-center py-4 ring-1 ring-yellow-700 text-yellow-900 font-sans text-sm italic rounded-lg">
            <p>
              Exquisite villa with private pool and deck, perfect for luxury
              living.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4 items-center justify-center w-full px-8 lg:px-52 lg:py-20 -mt-14 pb-14">
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
        <div className="hidden lg:flex flex-row items-center justify-center py-4 ring-1 ring-yellow-700 text-yellow-900 font-sans text-sm italic rounded-lg">
          A lavishly designed bespoke bathroom.
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center py-4 ring-1 ring-yellow-700 text-yellow-900 font-sans text-sm italic rounded-lg">
          Spacious living room with high-end finishings, wide screen TV, bar and
          more.{" "}
        </div>
        <div className="flex flex-row gap-4 lg:col-span-2 items-center justify-center pt-8 ">
          <Link href="/gallery" prefetch={true}>
            <Button variant="link" className="w-fit">
              View Gallery
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-12 items-center justify-center w-full min-h-screen px-8 lg:px-52 py-20 bg-yellow-800/10">
        {/*  <p className="font-cinzel text-yellow-900 font-bold text-5xl">
          The Villas
        </p> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-between w-full lg:gap-14">
          {/* Premium Luxury Villa */}
          <Link href="/villas">
            <Card className="flex flex-col w-full bg-transparent shadow-none border-none group">
              <CardContent className="px-0">
                <div className="flex flex-col gap-0 lg:gap-10 items-center justify-center">
                  <Image
                    src="https://utfs.io/f/dJLJpH9Hrkw3ZbJhQuj5zPGMQWt0kmvD298SjxYqTRlnKLFE"
                    alt="Bedroom in the Premium Luxury Villa"
                    width={500}
                    height={300}
                    className="w-full h-auto z-10 object-cover aspect-video rounded-t-lg lg:rounded-lg group-hover:shadow-lg"
                  />
                  <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg  gap-2 w-full p-6 lg:text-xl text-sm ring-1 ring-yellow-600 group-hover:shadow-lg bg-background -mt-5 pt-12  lg:mt-0">
                    <div className="flex flex-row gap-4 mb-8">
                      <Badge variant={"default"}>2 Bedroom</Badge>
                      <Badge variant={"default"}>150 sqm</Badge>
                    </div>
                    {/* <p className="text-sm font-sans mb-8 opacity-50">
                      2 bedroom | 150 sqm
                    </p> */}
                    <p className="text-2xl lg:text-3xl font-bold uppercase col-span-2 text-yellow-900">
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
                <div className="flex flex-col  gap-0 lg:gap-10 items-center justify-center">
                  <Image
                    src="https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu"
                    alt="Pool Side View of Superior Villa"
                    width={500}
                    height={300}
                    className="w-full h-auto z-10 object-cover aspect-video  rounded-t-lg lg:rounded-lg group-hover:shadow-lg"
                  />
                  <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg  gap-2 w-full p-6 lg:text-xl text-sm ring-1 ring-yellow-600 group-hover:shadow-lg bg-background -mt-5 pt-12 lg:mt-0">
                    <div className="flex flex-row gap-4 mb-8">
                      <Badge variant={"default"}>3 Bedroom</Badge>
                      <Badge variant={"default"}>187 sqm</Badge>
                    </div>

                    <p className="text-2xl lg:text-3xl font-bold uppercase col-span-2 text-yellow-900">
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
      <div className="flex flex-col gap-8 items-center justify-center w-full px-8 lg:px-52 py-10 lg:py-40">
        <p className="text-4xl lg:text-5xl font-cinzel text-yellow-900 font-bold">
          In House Facilities
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 w-full">
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="/brand/restaurant.jpg"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2 w-full p-6 lg:text-xl text-sm ring-1 ring-yellow-700 rounded-lg">
                  <p className="text-xl font-bold font-cinzel text-yellow-900">
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
            <CardContent className="p-0">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="/brand/spa.jpg"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2 w-full h-full p-6 lg:text-xl text-sm ring-1 ring-yellow-700 rounded-lg">
                  <p className="text-xl font-bold font-cinzel text-yellow-900">
                    Wellness Spa & Gymnasium
                  </p>
                  <p className="text-sm opacity-70 font-sans">
                    Never miss a beat with you fitness routine with our
                    gymnasium or take a break at the wellness spa for a nice day
                    of relaxation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="/brand/pond.jpg"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2 w-full h-full p-6 lg:text-xl text-sm ring-1 ring-yellow-700 rounded-lg">
                  <p className="text-xl font-bold font-cinzel text-yellow-900">
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
      <div className="flex flex-col gap-10 items-center justify-start w-full px-8 lg:px-52 py-20 bg-black text-white">
        <p className="text-4xl lg:text-5xl font-cinzel text-white">
          Investment Benefits
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16">
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-row lg:flex-col gap-4 lg:gap-10 w-full p-0 lg:text-xl text-sm items-center lg:items-start">
                <MapPin className="min-w-16 min-h-16 fill-yellow-600 stroke-1" />
                <p className="text-sm  font-sans text-white border-l-2 border-yellow-600/50 pl-4">
                  Heart of the latest tourist destination, in Lombok Island.
                  Located 300m away from Bangsal Beach, Bangsal Fast Boat Port
                  and Boat service to the famous Gili Terawangan, Gili Air and
                  Gili Meno.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-row lg:flex-col gap-4 lg:gap-10 w-full p-0 lg:text-xl text-sm items-center lg:items-start">
                <Award className="min-w-16 min-h-16 fill-yellow-600 stroke-1" />
                <p className="text-sm font-sans text-white border-l-2 border-yellow-600/50 pl-4">
                  Established developer with the experience of successful past
                  projects. Designed with you in mind.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-row lg:flex-col gap-4 lg:gap-10 w-full p-0 lg:text-xl text-sm items-center lg:items-start">
                <Dock className="min-w-16 min-h-16 fill-yellow-600 stroke-1" />
                <p className="text-sm  font-sans text-white border-l-2 border-yellow-600/50 pl-4">
                  Long stay visas for foreign purchasers. Visa application
                  assistance provided.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <Button variant="default" className="lg:w-fit w-full">
          Apply Now
        </Button>
      </div>
      <Cta />
    </main>
  );
}
