"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CircleAlert,
  Mail,
  MapPin,
  RotateCcw,
  Sailboat,
  Sun,
  CheckCircle2,
  Trophy,
  Banknote,
  Clock,
  Building,
  MessageCircle,
  ArrowDownCircle,
  Phone,
  FileText,
  ExternalLink,
  Grid2X2,
  House,
  KeyRound,
  Scan,
  UtensilsCrossed,
  Waves,
  CircleCheck
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import CountrySelect from "@/components/form/country-select";
import RegionSelect from "@/components/form/region-select";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Book from "@/components/book";
import Link from "next/link";
import BookJourney from "@/components/book-journey";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import PaymentTimeline from "@/components/payment";
import FakeLeads from "@/components/form/fakeleads";
import WhatsappButton from "@/components/form/whatsapp";

const gallery = [
  {
    image: "https://utfs.io/f/dJLJpH9Hrkw3STzbTcM0TP839gFjLVe25vnd4qspYbylGHrX",
    title: "Bedroom Front View"
  },
  {
    image: "https://utfs.io/f/dJLJpH9Hrkw3ZbJhQuj5zPGMQWt0kmvD298SjxYqTRlnKLFE",
    title: "Bedroom Side View"
  },
  {
    image: "https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu",
    title: "Private Pool View"
  },
  {
    image: "https://utfs.io/f/dJLJpH9Hrkw3Y1KKJxnLOdMUqSH08tvDTRnX1xNaPBF3YW5c",
    title: "Living Room"
  },
  {
    image: "https://utfs.io/f/dJLJpH9Hrkw3wcK398eUX3BuqFPzTD5Kh1H9QyUilcWfbY6d",
    title: "Yoga Deck"
  }
];

const VillaInvestmentLanding = () => {
  // ... (keeping all the existing state and functions)
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [regionCode, setRegionCode] = useState("");
  const [regionshow, setRegionShow] = useState(false);
  const [infoShow, setInfoShow] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900/10 to-white">
      {/*       <FakeLeads />
       */}
      {/*       <WhatsappButton />
       */}{" "}
      {/* Hero Section with CTA */}
      <div className="relative w-full">
        <Image
          src="https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu"
          alt="Poolside View of Golden Retreat Lombok Villa"
          width={2000}
          height={2000}
          loading="eager"
          className="w-full h-screen object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-4xl">
            <h1 className="text-5xl sr-only lg:text-6xl font-extrabold mb-6 text-balance">
              Golden Retreat Lombok Villas
            </h1>
            <Image
              src="/brand/logo_white_long_big.png"
              alt="Golden Retreat Lombok Villas"
              width={2432}
              height={1071}
              loading="eager"
              unoptimized
              className="lg:max-w-4xl h-fit lg:-mb-6 object-contain drop-shadow-2xl"
            />
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mx-auto">
              <Link href="#book">
                <Button
                  variant={"default"}
                  size="lg"
                  className="text-lg justify-between gap-4 opacity-100 w-72 font-sans"
                >
                  <Phone className="w-4 h-4 text-white" /> Book a Discovery Call
                </Button>
              </Link>

              {/* New CTA: Get Info Pack */}
              <Link href="/infopack">
                <Button
                  variant={"default"}
                  size="lg"
                  className="text-lg justify-between gap-4 opacity-100 w-72 font-sans"
                >
                  <FileText className="w-4 h-4 text-white" />
                  Download Brochure (pdf)
                </Button>
              </Link>
            </div>

            {/* <p className="text-md py-4 font-sans text-balance uppercase font-bold tracking-wider">
              starting from USD 180,000
            </p> 
            <div className="flex flex-col lg:flex-row gap-4">
              <Link href="#book">
                <Button
                  variant={"default"}
                  size="lg"
                  className="text-lg justify-between gap-4 opacity-100 w-72 font-sans"
                >
                  <Phone className="w-4 h-4 text-white" /> Book a Discovery Call
                </Button>
              </Link>

              {/* New CTA: Get Info Pack 
              <Link href="/infopack">
                <Button
                  variant={"default"}
                  size="lg"
                  className="text-lg justify-between gap-4 opacity-100 w-72 font-sans"
                >
                  <FileText className="w-4 h-4 text-white" />
                  Download Info Pack
                </Button>
              </Link>
            </div>
            
            <Link href="#book">
              <Button
                variant={"default"}
                size="lg"
                className="flex flex-col py-6 mx-auto opacity-100"
              >
                <p className=" flex flex-row gap-4 text-xl font-bold items-center justify-center">
                  <Phone className="w-4 h-4 text-white" /> Book a Discovery Call
                </p>
              </Button>
            </Link>
            <p className="font-sans text-sm mt-2 italic">
              Special pricing for first 5 villas only!
            </p> */}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-16 py-6 max-w-6xl">
        <div className="flex flex-col min-h-screen">
          <p className="text-2xl flex font-normal items-center justify-center flex-col py-14">
            A Project Like No Other
          </p>
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 text-center text-xl text-balance px-4">
            <div className="p-4">
              <Building className="w-12 h-12 mx-auto mb-4 text-yellow-900 stroke-1 fill-yellow-900/10" />
              <p className="font-bold text-4xl  mb-2">33</p>
              <p className="font-sans uppercase font-light">Luxury Villas</p>
            </div>
            <div className="p-4">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-900 stroke-1 fill-yellow-900/10" />
              <p className="font-bold text-4xl  mb-2">4</p>
              <p className="font-sans uppercase font-light">
                Successful Projects
              </p>
            </div>
            <div className="p-4">
              <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-900 stroke-1 fill-yellow-900/10" />
              <p className="font-bold text-4xl  mb-2">12</p>
              <p className="font-sans uppercase font-light">
                Months Build Time
              </p>
            </div>
            <div className="p-4">
              <Banknote className="w-12 h-12 mx-auto mb-4 text-yellow-900 stroke-1 fill-yellow-900/10" />
              <p className="font-bold text-4xl  mb-2">15-20%</p>
              <p className="font-sans uppercase font-light">Projected Yield</p>
            </div>
          </div>
        </div>

        {/* Project Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <p className="text-xl text-yellow-900 uppercase mb-4">About Us</p>
          <p className="text-4xl font-extrabold text-yellow-900 leading-relaxed">
            Golden Retreat Lombok Villas
          </p>
          <div className="grid md:grid-cols-2 gap-8 font-sans py-4">
            <div>
              <p className="text-md mb-4">
                Launched in December 2024, Golden Retreat Lombok Villas
                represents luxury living at its finest. Just 30 minutes from
                Bali, this exclusive development offers:
              </p>
              <ul className="space-y-4 text-md font-semibold">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-600 mr-2" />
                  Private pools and yoga decks in every villa
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-600 mr-2" />
                  Premium luxury finishings throughout
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-600 mr-2" />
                  Only 15% initial payment required
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-600 mr-2" />
                  Projected yield of 15-20%
                </li>
              </ul>
              <Button
                variant={"default"}
                size="lg"
                className="text-lg mt-4"
                asChild
              >
                <Link href="/villas">Discover Our Villas</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="container bg-yellow-900/10 px-8 lg:px-32 py-8 max-w-md lg:max-w-full rounded-xl shadow-lg mb-20 mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-yellow-900">
            Investment Opportunity
          </h3>
          <ul className="space-y-4 text-md font-medium">
            <li className="flex items-center group">
              <CircleCheck className="h-6 w-6 mr-4 group-hover:text-green-800 text-green-500 transistion duration-300 ease-in-out" />{" "}
              Rental Management Available
            </li>
            <li className="flex items-center group">
              <CircleCheck className="h-6 w-6 mr-4 group-hover:text-green-800 text-green-500 transistion duration-300 ease-in-out" />{" "}
              Daily Flights from Australia
            </li>
            <li className="flex items-center group">
              <CircleCheck className="h-6 w-6 mr-4 group-hover:text-green-800 text-green-500 transistion duration-300 ease-in-out" />{" "}
              Strong Capital Appreciation Potential
            </li>
            <li className="flex items-center group ">
              <CircleCheck className="h-6 w-6 mr-4 group-hover:text-green-800 text-green-500 transition duration-300 ease-in-out" />{" "}
              Rolling Payment Structure
            </li>
            <li className="flex items-center group">
              <CircleCheck className="h-6 w-6 mr-4 group-hover:text-green-800 text-green-500 transistion duration-300 ease-in-out" />{" "}
              Limited Time Launch Prices
            </li>
          </ul>
        </div>
        {/*Location*/}
        <section className="grid md:grid-cols-2 gap-12 px-8 lg:px-32 py-16 bg-white rounded-xl shadow-lg">
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="text-yellow-900 w-12 h-12" />
              <h3 className="text-3xl font-bold text-yellow-900">
                Precise Location
              </h3>
            </div>
            <p className="text-md text-gray-700 font-sans">
              Located in the North West side of Lombok Island, just a 5 minute
              walk away from <span className="font-bold">Bangsal Port</span>,
              our villas offer a perfect blend of luxury and natural beauty.
              Strategically located to provide easy access to the island's most
              stunning attractions including the iconic{" "}
              <span className="font-bold">Gili Islands</span>.
            </p>
            <div className="bg-yellow-900/10 p-6 rounded-xl">
              <h4 className="font-bold text-xl text-yellow-900 mb-2">
                Geographical Coordinates
              </h4>
              <p className="text-gray-700 font-sans">
                Latitude: -8.397083° S
                <br />
                Longitude: 116.096841° E
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.0456584984945!2d116.09683327569908!3d-8.397170284724552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcddd105952e22d%3A0xc6e7db2574405905!2sGolden%20Retreat%20Lombok%20Villas!5e0!3m2!1sen!2smy!4v1734859770461!5m2!1sen!2smy"
              width="600"
              height="450"
              className="w-full h-[500px] rounded-2xl shadow-lg"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="text-sm italic font-sans text-stone-900/50">
              Zoom Out to see proximity to Gili Islands and Bali.
            </p>
          </div>
        </section>

        {/* Existing Features Section */}
        <div className="grid grid-cols-1 gap-12 items-start py-10">
          <div className="px-4 lg:px-20">
            <div className="space-y-6 lg:pt-10">
              <div className="flex items-start space-x-4">
                <Sailboat className="text-blue-600 min-w-6 min-h-6" />
                <div>
                  <h3 className="text-2xl font-bold text-yellow-900">
                    Unparalleled Location
                  </h3>
                  <p className="text-stone-900 font-sans">
                    33 meticulously designed luxury villas nestled in a tropical
                    paradise, just a short boat ride from the island of Bali and
                    famous Gili Islands.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Sun className="text-yellow-500 min-w-6 min-h-6" />
                <div>
                  <h3 className="text-2xl font-bold text-yellow-900">
                    Investment Opportunity
                  </h3>
                  <p className="text-stone-900 font-sans">
                    Seize the opportunity to own a piece of paradise. This
                    high-end development is both an investment with significant
                    potential gains and a personal luxury retreat.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-green-600 min-w-6 min-h-6" />
                <div>
                  <h3 className="text-2xl font-bold text-yellow-900">
                    Prime Real Estate
                  </h3>
                  <p className="text-stone-900 font-sans">
                    Strategically located in one of Southeast Asia’s most sought
                    after regions, Lombok’s rising star as the next Bali is
                    poised to soar even higher.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16">
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <p className="text-xl text-yellow-900 uppercase mb-4 px-8 py-10">
                The Villas
              </p>
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start justify-center">
                <div className="md:grid md:grid-cols-2 flex flex-col gap-6 lg:gap-8 w-full lg:text-xl text-md px-8">
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <p className="text-5xl text-yellow-900 font-bold uppercase ">
                      Superior
                    </p>
                    <p className="text-2xl lg:text-3xl text-yellow-900 opacity-50 font-bold uppercase -mt-1">
                      Luxury Villa
                    </p>
                    <Link href={"/book"} target="_blank">
                      <p className="text-sm font-bold font-sans flex flex-row gap-2">
                        USD 180,000{" "}
                        <ExternalLink className="text-yellow-900 w-4 h-4" />
                      </p>
                    </Link>
                    <p className="opacity-80  font-sans text-sm">
                      Our spacious 2 bedroom Villa comfortably accommodates a
                      family of 4 and comes complete with dining room, living
                      area, parking garage, and a private pool deck.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start md:col-span-2 pb-10 lg:pb-20">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="flex flex-col gap-2 items-center py-10 lg:py-0 cursor-pointer">
                          <Image
                            src="https://utfs.io/f/dJLJpH9Hrkw3uuft60bSOoWvunMekl0ACfLj2rIG8cQDzZmT"
                            alt="2 Bedroom Layout Plan"
                            width={500}
                            height={200}
                            className="w-full h-full object-contain rounded-lg hover:shadow-lg hover:scale-105 trasition-all duration-300"
                          />
                          <p className="text-sm font-sans opacity-70 italic">
                            Superior Villa Layout Plan
                          </p>
                        </div>
                      </DialogTrigger>
                      <DialogPortal>
                        <DialogContent className=" border-none shadow-none w-full h-full items-center justify-center bg-transparent">
                          <DialogHeader>
                            <DialogTitle className="sr-only">
                              Official Siteplan for Superior Villa
                            </DialogTitle>
                            <div className="flex flex-col gap-2 w-full h-full items-center justify-center">
                              <Image
                                src="https://utfs.io/f/dJLJpH9Hrkw3uuft60bSOoWvunMekl0ACfLj2rIG8cQDzZmT"
                                alt="2 Bedroom Layout Plan"
                                width={500}
                                height={200}
                                className="w-full h-full object-contain rounded-lg"
                              />
                            </div>
                          </DialogHeader>
                        </DialogContent>
                      </DialogPortal>
                    </Dialog>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start justify-center">
                <div className="md:grid md:grid-cols-2 flex flex-col gap-6 lg:gap-8 w-full lg:text-xl text-md px-8">
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <p className="text-5xl text-yellow-900 font-bold uppercase ">
                      Premium
                    </p>
                    <p className="text-2xl lg:text-3xl text-yellow-900 opacity-50 font-bold uppercase -mt-1">
                      Luxury Villa
                    </p>
                    <Link href={"/book"} target="_blank">
                      <p className="text-sm font-bold font-sans flex flex-row gap-2">
                        USD 200,000{" "}
                        <ExternalLink className="text-yellow-900 w-4 h-4" />
                      </p>
                    </Link>
                    <p className="opacity-80  font-sans text-sm">
                      Our spacious 3 bedroom Villa comfortably accommodates a
                      family of 6 and comes complete with dining room, living
                      area, parking garage, and a private pool deck.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start md:col-span-2 pb-10 lg:pb-20">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="flex flex-col gap-2 items-center py-10 lg:py-0  cursor-pointer">
                          <Image
                            src="https://utfs.io/f/dJLJpH9Hrkw3fFMByQhLDqapUrcI5X2oh8B9JvKe1ET4tzCf"
                            alt="3 Bedroom Layout Plan"
                            width={500}
                            height={200}
                            className="w-full h-full object-contain rounded-lg hover:shadow-lg hover:scale-105 trasition-all duration-300"
                          />
                          <p className="text-sm font-sans opacity-70 italic">
                            Premium Villa Layout Plan
                          </p>
                        </div>
                      </DialogTrigger>
                      <DialogPortal>
                        <DialogContent className=" border-none shadow-none w-full h-full items-center justify-center bg-transparent">
                          <DialogHeader>
                            <DialogTitle className="sr-only">
                              Official Siteplan for Golden Retreat Lombok Villa
                            </DialogTitle>
                            <div className="flex flex-col gap-2 w-full items-center justify-center">
                              <Image
                                src="https://utfs.io/f/dJLJpH9Hrkw3fFMByQhLDqapUrcI5X2oh8B9JvKe1ET4tzCf"
                                alt="3 Bedroom Layout Plan"
                                width={500}
                                height={200}
                                className="w-full h-full object-contain rounded-lg"
                              />
                            </div>
                          </DialogHeader>
                        </DialogContent>
                      </DialogPortal>
                    </Dialog>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 max-w-6xl py-10 lg:py-20 mx-auto">
          <h2 className="text-4xl font-extrabold text-yellow-900 mb-6">
            Gallery
          </h2>
          {gallery.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 items-center justify-center lg:first:col-span-3"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex flex-col gap-2 items-center cursor-pointer w-full">
                    <Image
                      src={item.image}
                      alt="Golden Retreat Lombok Villa"
                      width={1000}
                      height={500}
                      loading="eager"
                      className="w-full h-full aspect-video object-cover hover:shadow-lg trasition-all duration-300"
                    />
                    <p className="text-sm font-sans opacity-70 italic">
                      {item.title}
                    </p>
                  </div>
                </DialogTrigger>
                <DialogPortal>
                  <DialogContent className=" border-none shadow-none w-full h-full items-center justify-center bg-transparent">
                    <DialogHeader>
                      <DialogTitle className="sr-only">
                        {item.title}
                      </DialogTitle>
                      <div className="flex flex-col gap-2 w-full items-center justify-center">
                        <Image
                          src={item.image}
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

        {/* Developer Credentials */}
        <div className="bg-stone-900 text-white rounded-xl p-8 pb-16 pt-10">
          <h2 className="text-4xl font-bold mb-4">Backed by Excellence</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-md text-balance mb-6 font-sans">
                Our developers bring decades of experience in luxury villa
                development, with a proven track record of successful projects
                in the region.
              </p>
              <Button
                variant={"default"}
                size="lg"
                className="text-lg mb-8"
                asChild
              >
                <Link href="/about">The Team</Link>
              </Button>
              <div className="bg-white/10 p-4 rounded-lg ">
                <h3 className="font-bold text-xl mb-2">Track Record:</h3>
                <div className="font-sans">
                  <p>✓ 4 completed luxury developments</p>
                  <p>✓ 100+ satisfied investors</p>
                  <p>✓ Award-winning designs</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
              {/* Placeholder for project images */}
              <div className="bg-white/20 h-40 lg:h-32 rounded-lg text-center">
                {" "}
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw3j9nQHGyOLU25km13CFhvApqxP8E60TKIStfD"
                  alt="The Chandi Boutique Resort & Spa"
                  width={500}
                  height={300}
                  className="w-full h-full rounded-lg object-cover"
                />
                <p className="text-sm font-sans opacity-70 mt-2 italic">
                  The Chandi Boutique Resort & Spa
                </p>
              </div>
              <div className="bg-white/20 h-40 lg:h-32 rounded-lg text-center">
                {" "}
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw3dxuEBg9Hrkw3vJqtg1x6b20mBh85RZaG7NSe"
                  alt="The Mora Royal Villa"
                  width={500}
                  height={300}
                  className="w-full h-full rounded-lg object-cover"
                />
                <p className="text-sm font-sans opacity-70 mt-2 italic">
                  The Mora Royal Villa
                </p>
              </div>
              <div className="bg-white/20 h-40 lg:h-32 rounded-lg text-center">
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw39v4L2t0ph4CULED6aSFXol2jeIi7cfZVQMtR"
                  alt="Malimbu Cliff Villa"
                  width={500}
                  height={300}
                  className="w-full h-full rounded-lg object-cover "
                />
                <p className="text-sm font-sans opacity-70 mt-2 italic">
                  Malimbu Cliff Villa
                </p>
              </div>
              <div className="bg-white/20 h-40 lg:h-32 rounded-lg text-center">
                {" "}
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw3fsDpePhLDqapUrcI5X2oh8B9JvKe1ET4tzCf"
                  alt="Villa Matahari Terbenam"
                  width={500}
                  height={300}
                  className="w-full h-full rounded-lg object-cover"
                />
                <p className="text-sm font-sans opacity-70 mt-2 italic">
                  Villa Matahari Terbenam
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*   <div className="my-16">
          <PaymentTimeline />
        </div> */}

        <div className="bg-teal-600/80 text-white p-4 rounded-lg text-center mt-8 mb-10">
          <p className="text-xl font-bold">Limited Time Launch Offer!</p>
          {/*  <p className="font-sans px-12">
            <span className="font-extrabold uppercase">
              Fill up form below to get special offer
            </span>
          </p> */}
        </div>

        <div id="book" className="">
          <BookJourney />
        </div>
        <div className="flex flex-col gap-8 items-center justify-start w-full bg-gradient-to-b from-yellow-900/10 to-5% to-background ">
          <div className="flex flex-col w-full px-8">
            <div className="max-w-6xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center py-20">
                <div className="flex flex-col gap-4">
                  <p className="text-6xl lg:text-8xl  font-extrabold font-cinzel text-balance text-yellow-900">
                    Get in touch
                  </p>
                  <p className="font-sans text-sm text-balance">
                    Have questions? Speak to a member of our in-house team of
                    professionals today.
                  </p>
                </div>
                <div className="flex flex-col gap-4 px-4 items-center justify-center">
                  <ArrowDownCircle className="hidden lg:flex w-52 h-52 text-yellow-900 stroke-1 opacity-10" />
                </div>
              </div>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col gap-14 items-start justify-center w-full max-w-6xl mx-auto pb-20 lg:px-0">
              <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
                <CardContent className="p-0">
                  <div className="flex flex-col gap-2 items-start justify-center">
                    <p className="text-md font-sans flex flex-row gap-2">
                      <MessageCircle className="min-w-4 min-h-4 stroke-1 text-yellow-900" />
                      Send a Whatsapp message
                    </p>
                    <div className="flex flex-row flex-wrap gap-4 gap-y-4 items-center justify-start">
                      <Link
                        href="https://wa.link/z42apg"
                        target="_blank"
                        className=" text-yellow-900 font-sans"
                      >
                        <Button
                          variant={"default"}
                          className="text-lg lg:text-3xl"
                        >
                          +60124112260
                        </Button>
                      </Link>
                      <p className="text-sm opacity-50 font-sans">or</p>
                      <Link
                        href="https://wa.link/52f5vb"
                        target="_blank"
                        className=" text-yellow-900 font-sans"
                      >
                        <Button
                          variant={"default"}
                          className="text-lg lg:text-3xl"
                        >
                          +6593661372
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
                <CardContent className="p-0">
                  <div className="flex flex-col gap-2 items-start justify-center">
                    <p className="text-md font-sans flex flex-row gap-2">
                      <Mail className="min-w-4 min-h-4 stroke-1 text-yellow-900" />
                      Send an Email
                    </p>
                    <Link
                      href="mailto:contact@goldenretreatinternational.com"
                      className=" text-yellow-900 font-sans w-full items-start p-0"
                    >
                      <Button
                        variant={"link"}
                        className=" text-md break-words text-wrap text-left lg:text-3xl p-0"
                      >
                        contact@goldenretreatinternational.com
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaInvestmentLanding;
