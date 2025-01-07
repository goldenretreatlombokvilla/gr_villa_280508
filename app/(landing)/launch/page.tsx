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
  Building
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

const VillaInvestmentLanding = () => {
  // ... (keeping all the existing state and functions)
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [regionCode, setRegionCode] = useState("");
  const [regionshow, setRegionShow] = useState(false);
  const [infoShow, setInfoShow] = useState(false);

  // ... (rest of the existing state and functions)

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900/10 to-white">
      {/* Hero Section with CTA */}
      <div className="relative w-full h-[70vh]">
        <Image
          src="https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu"
          alt="Poolside View of Golden Retreat Lombok Villa"
          width={2000}
          height={2000}
          loading="eager"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-balance">
              Golden Retreat Lombok Villas
            </h1>
            <p className="text-2xl mb-8 font-sans text-balance uppercase tracking-wider">
              <span className="text-lg tracking-wider uppercase font-bold">
                Exclusive Luxury Villas
              </span>{" "}
              starting from USD 180,000
            </p>
            <Link href="#book">
              <Button
                variant={"default"}
                size="lg"
                className="flex flex-col py-6 mx-auto opacity-100"
              >
                <p className="text-xl font-bold">🎉 Launch Promotion</p>
              </Button>
            </Link>
            <p className="font-sans text-sm mt-2 italic">
              Special pricing for first 5 villas only!
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 py-6 max-w-6xl">
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
            <p className="font-sans uppercase font-light">Months Build Time</p>
          </div>
          <div className="p-4">
            <Banknote className="w-12 h-12 mx-auto mb-4 text-yellow-900 stroke-1 fill-yellow-900/10" />
            <p className="font-bold text-4xl  mb-2">15-20%</p>
            <p className="font-sans uppercase font-light">Projected Yield</p>
          </div>
        </div>

        {/* Project Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <p className="text-xl text-yellow-900 uppercase mb-4">About Us</p>
          <h2 className="text-4xl font-extrabold text-yellow-900 mb-6">
            Golden Retreat Lombok Villas
          </h2>
          <div className="grid md:grid-cols-2 gap-8 font-sans">
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
            <div className="bg-yellow-900/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-yellow-900">
                Investment Highlights
              </h3>
              <ul className="space-y-2 text-md font-medium">
                <li>✓ Flexible payment structure</li>
                <li>✓ Rental management available</li>
                <li>✓ Prime location near Bali</li>
                <li>✓ Strong capital appreciation potential</li>
                <li>✓ Limited time launch prices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Developer Credentials */}
        <div className="bg-stone-900 text-white rounded-xl p-8 mb-16">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Placeholder for project images */}
              <div className="bg-white/20 h-40 lg:h-32 rounded-lg">
                {" "}
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw3j9nQHGyOLU25km13CFhvApqxP8E60TKIStfD"
                  alt="The Chandi Boutique Resort & Spa"
                  width={500}
                  height={300}
                  className="w-full h-full  object-cover"
                />
              </div>
              <div className="bg-white/20 h-40 lg:h-32 rounded-lg">
                {" "}
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw3dxuEBg9Hrkw3vJqtg1x6b20mBh85RZaG7NSe"
                  alt="The Mora Royal Villa"
                  width={500}
                  height={300}
                  className="w-full h-full  object-cover"
                />
              </div>
              <div className="bg-white/20 h-40 lg:h-32 rounded-lg">
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw39v4L2t0ph4CULED6aSFXol2jeIi7cfZVQMtR"
                  alt="Malimbu Cliff Villa"
                  width={500}
                  height={300}
                  className="w-full h-full  object-cover "
                />
              </div>
              <div className="bg-white/20 h-40 lg:h-32 rounded-lg">
                {" "}
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw3fsDpePhLDqapUrcI5X2oh8B9JvKe1ET4tzCf"
                  alt="Villa Matahari Terbenam"
                  width={500}
                  height={300}
                  className="w-full h-full  object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Existing Features Section */}
        <div className="grid grid-cols-1 gap-12 items-start">
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

              <div className="flex items-center justify-center space-x-4 py-6">
                {/*                 <CircleAlert className="text-red-600 min-w-6 min-h-6" />
                 */}{" "}
                <div>
                  <p className="text-lg text-stone-900 max-w-2xl font-bold mx-auto font-sans uppercase">
                    Limited Units, Enquire Now!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="book" className="">
          <BookJourney />
        </div>
        {/* ... (keeping your existing form section) */}

        {/* Urgency Footer */}
        <div className="bg-red-600 text-white p-4 rounded-lg text-center mt-8">
          <p className="text-2xl font-bold">🔥 Limited Time Launch Offer</p>
          <p className="font-sans px-12">
            Special pricing available for the first 5 villas only.{" "}
            <span className="font-extrabold uppercase">Don't miss out!</span>
          </p>
        </div>

        <footer className="mt-8 text-center text-stone-900/60 text-sm font-sans">
          <p>© 2024 Golden Retreat International. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default VillaInvestmentLanding;
