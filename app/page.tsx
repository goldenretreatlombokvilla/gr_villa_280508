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
  Dock,
  Phone,
  Images,
  FolderCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main>
      <div className="flex flex-col gap-8 items-center justify-start w-full xl:min-h-screen p-0 max-w-6xl mx-auto pb-52">
        <div className="absolute w-full h-[100vh] top-0 left-0 -z-10">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu"
            alt="Poolside View of Golden Retreat Lombok Villa"
            width={2000}
            height={2000}
            loading="eager"
            className="w-full h-[100vh] lg:h-full  aspect-video object-cover brightness-50"
          />
        </div>
        <div className="flex flex-col gap-4 items-center justify-start px-0 lg:pb-20 text-white w-full h-fit py-10">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw31JUxKmNSAE1eLPCn7ZqI4KBDlfHwUhJit380"
            alt="Golden Retreat Lombok Villa Logo"
            width={1000}
            height={500}
            className="lg:w-40 w-28 h-fit lg:h-fit object-contain mb-20 drop-shadow-xl"
          />
          <div className="flex flex-col items-center justify-center gap-0 md:gap-1 py-[20vh] lg:py-24">
            <p className="uppercase font-serif text-lg lg:text-2xl tracking-widest">
              Welcome to
            </p>
            <h1 className="font-cinzel text-[2.75rem] md:text-7xl lg:text-8xl flex flex-col gap-0 text-center font-extrabold text-nowrap">
              Golden Retreat{" "}
              <span className="text-2xl md:text-4xl tracking-widest font-cinzel font-bold uppercase">
                Lombok Villas
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:gap-20 items-center justify-center w-full px-8 pt-14 lg:pt-20 lg:py-20 max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3hbSz8Z2LaOUmx7jw6JrqKBblDskWdPvTZoSg"
            alt="Front Enterence of Golden Retreat Lombok Villa"
            width={700}
            height={700}
            className="w-full h-full object-cover rounded-lg object-center lg:shadow-2xl shadow-yellow-900"
          />
        </div>
        <div className="flex flex-col gap-4 px-0 lg:px-0 w-full order-first lg:w-2/3">
          <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col text-yellow-800/50 uppercase -mb-4">
            Private & Exclusive
          </p>
          <h3 className="font-extrabold text-5xl md:text-6xl lg:text-8xl font-cinzel text-yellow-800">
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
          <div className="flex flex-row flex-wrap gap-4">
            <Link href="/villas" prefetch={true}>
              <Button
                variant="default"
                className="w-fit font-extrabold uppercase tracking-wider hover:drop-shadow-md"
              >
                The Villas
              </Button>
            </Link>
            {/*  <Link href="/book">
              <Button variant="link" className="w-fit group ">
                <Phone className="min-w-6 min-h-6 stroke-1 text-yellow-700 group-hover:animate-ping" />{" "}
                <p className="opacity-0 group-hover:opacity-100 transisition-all duration-500 ease-in-out text-yellow-800">
                  Book A Call
                </p>
              </Button>
            </Link> */}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-14 items-center justify-center w-full px-8 lg:px-32 py-10 my-10 lg:py-40 bg-yellow-900/10">
        <div className="flex flex-col gap-4">
          <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col uppercase text-yellow-900/50">
            Paradise on Earth
          </p>
          <h2 className="text-5xl lg:text-7xl font-cinzel font-extrabold text-yellow-900">
            Lombok Island
          </h2>
          <p className="text-md font-sans text-balance">
            Lombok Island is fast becoming a popular choice for nature lovers
            and holiday makers. With its pristine beaches, lush rainforests, and
            abundant attractions, the Island offers unique and unforgettable
            experiences for all tastes. From adventure to soul-healing serenity,
            and everything in between, Lombok has it all.
          </p>
          <div className="flex flex-row gap-4 items-end justify-start">
            <Link href="/lombok" prefetch={true}>
              <Button
                variant="default"
                className="w-fit font-extrabold uppercase tracking-wider hover:drop-shadow-md"
              >
                Destination Lombok
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:order-first h-full w-full">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3s7ADYDdtfQDR1ujgW04bv39US6XzVqYOLryH"
            alt="Destination Lombok: A Rising Tourist Destination"
            width={500}
            height={200}
            className="flex w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-14 items-start justify-start w-full px-8  lg:px-20 xl:px-52 py-20">
        <div className="flex flex-col gap-4">
          <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col uppercase text-yellow-900/50">
            An Unparalleled
          </p>
          <h2 className="text-4xl lg:text-6xl font-cinzel font-extrabold text-yellow-900">
            Investment Opportunity
          </h2>
          <p className="text-md font-sans text-balance">
            Golden Retreat Lombok presents an opportunity to capitalise on
            Lombok’s fast-growing tourism industry. Already ranked one of the
            world's top destinations for nature tourism, Lombok Island’s demand
            for quality holiday accommodation continues to soar!
          </p>
          <div className="flex flex-row gap-4 items-end justify-start">
            <Link href="/invest" prefetch={true}>
              <Button
                variant="default"
                className="w-fit font-extrabold uppercase tracking-wider hover:drop-shadow-md"
              >
                Investment Opportunity
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3wcK398eUX3BuqFPzTD5Kh1H9QyUilcWfbY6d"
            alt="Golden Retreat Lombok Villa"
            width={500}
            height={200}
            className="hidden lg:flex w-full h-auto aspect-video object-cover rounded-lg"
          />
          <div className="hidden lg:flex flex-row items-center justify-center py-0 text-stone-900/50 font-sans text-sm italic rounded-lg">
            <p>
              Exquisite villa with private pool and deck, perfect for luxury
              living.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4 items-center justify-center w-full px-8 lg:px-20 xl:px-52 lg:py-20 -mt-14 pb-14">
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
        <div className="hidden lg:flex flex-row items-center justify-center py-0 text-stone-900/50 font-sans text-sm italic rounded-lg">
          A lavishly designed bespoke bathroom.
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center py-0 text-stone-900/50 font-sans text-sm italic rounded-lg">
          Spacious living room with high-end finishings, wide screen TV, bar and
          more.{" "}
        </div>
        <div className="flex flex-row gap-4 lg:col-span-2 items-center justify-end pt-8 "></div>
      </div>

      <div className="flex flex-col gap-12 items-center justify-center w-full min-h-screen px-8 lg:px-20 xl:px-52 py-20 bg-yellow-800/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-between w-full lg:gap-14">
          <Link href="/villas">
            <Card className="flex flex-col w-full bg-transparent shadow-none border-none group">
              <CardContent className="px-0">
                <div className="flex flex-col gap-0 lg:gap-10 items-center justify-center">
                  <Image
                    src="https://utfs.io/f/dJLJpH9Hrkw3ZbJhQuj5zPGMQWt0kmvD298SjxYqTRlnKLFE"
                    alt="Bedroom in the Premium Luxury Villa"
                    width={500}
                    height={300}
                    className="w-full h-auto z-10 object-cover aspect-video rounded-t-lg lg:rounded-lg group-hover:shadow-lg shadow-yellow-900"
                  />
                  <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg  gap-2 w-full p-6 lg:text-xl text-sm ring-1 ring-yellow-600 group-hover:shadow-lg bg-background -mt-5 pt-12 lg:mt-0">
                    <p className="text-2xl lg:text-3xl font-bold uppercase col-span-2 text-yellow-900">
                      Superior Luxury Villa
                    </p>
                    <div className="flex flex-row gap-4 mb-8">
                      <p className="text-sm font-sans uppercase font-bold text-yellow-900 opacity-80">
                        2 Bedroom | 150 sqm (1,615 sqft)
                      </p>
                      {/*  <Badge variant={"default"}>3 Bedroom</Badge>
                      <Badge variant={"default"}>187 sqm</Badge> */}
                    </div>
                    <div className="col-span-2 flex flex-row gap-4 items-center justify-between">
                      <div className="flex flex-row gap-2 items-center">
                        <p className="text-sm font-sans opacity-80">
                          starting at{" "}
                        </p>
                        <Badge variant={"default"}>$180,000</Badge>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRightCircle className="min-w-6 min-h-6 stroke-1 text-yellow-600 group-hover:text-white group-hover:fill-yellow-800 group-hover:-rotate-45 transition-all duration-500 ease-in-out group-hover:scale-110" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
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
                    <p className="text-2xl lg:text-3xl font-bold uppercase col-span-2 text-yellow-900">
                      Premium Luxury Villa
                    </p>
                    <div className="flex flex-row gap-4 mb-8">
                      <p className="text-sm font-sans uppercase font-bold text-yellow-900 opacity-80">
                        3 Bedroom | 187 sqm (2,013 sqft)
                      </p>
                      {/*  <Badge variant={"default"}>3 Bedroom</Badge>
                      <Badge variant={"default"}>187 sqm</Badge> */}
                    </div>
                    <div className="col-span-2 flex flex-row gap-4 items-center justify-between">
                      <div className="flex flex-row gap-2 items-center">
                        <p className="text-sm font-sans opacity-80">
                          starting at{" "}
                        </p>
                        <Badge variant={"default"}>$200,000</Badge>
                      </div>
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

      <div className="flex flex-col gap-8 items-center justify-center w-full px-8 lg:px-32 py-10 lg:py-40">
        <p className="text-4xl lg:text-5xl font-cinzel font-extrabold text-yellow-900">
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
                <div className="flex flex-col gap-2 w-full p-6 ring-1 ring-yellow-700 rounded-lg">
                  <p className="text-2xl font-bold font-cinzel text-yellow-900">
                    Restaurant, Bar & Lounge{" "}
                  </p>
                  <p className="text-md font-sans">
                    Dine in luxury in our 5 star restaurant with a delicious
                    variety of dishes, both local and international cuisines, or
                    spend the evening in our private lounge.
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
                <div className="flex flex-col gap-2 w-full h-full p-6 ring-1 ring-yellow-700 rounded-lg">
                  <p className="text-2xl font-bold font-cinzel text-yellow-900">
                    Wellness Spa & Gymnasium
                  </p>
                  <p className="text-md font-sans">
                    Never miss a beat with our on-site gymnasium equipped with
                    your favourite machines and treat yourself to a message in
                    our local 5-star spa.
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
                <div className="flex flex-col gap-2 w-full h-full p-6 ring-1 ring-yellow-700 rounded-lg">
                  <p className="text-2xl font-bold font-cinzel text-yellow-900">
                    Serenity Garden & Koi Pond
                  </p>
                  <p className="text-md font-sans">
                    Centre body, mind and spirit with the sound of water in our
                    serenity garden.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Cta />
    </main>
  );
}
