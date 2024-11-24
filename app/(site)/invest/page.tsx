import Cta from "@/components/cta";
import { Tchart } from "@/components/tchart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink, FolderCheck, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
              src="/brand/logo_icon.png"
              alt="Golden Retreat Lombok Villa"
              width={200}
              height={200}
              className="w-10 h-10 object-contain aspect-square drop-shadow-sm"
            />
          </Link>
          <h1 className="text-xl font-sans text-yellow-800 pt-1 font-light">
            Investment
          </h1>
        </div>
        <div className="max-w-6xl mx-auto px-10 lg:p-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center lg:py-20 py-10">
            <div className="flex flex-col gap-6 col-span-2">
              <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col text-yellow-800 uppercase opacity-50 -mb-4">
                The Numbers
              </p>
              <h2 className="text-6xl lg:text-6xl  font-extrabold font-cinzel text-yellow-800">
                10 - 16% Projected Yield
              </h2>
              <p className="font-sans text-md text-balance">
                Golden Retreat Lombok Villa offers a unique opportunity for
                foreign investors to tap into a growing market with indicators
                showing a high potential for{" "}
                <span className="font-bold text-yellow-800">growth</span> and
                high{" "}
                <span className="font-bold text-yellow-800">
                  projected yield
                </span>
                .
              </p>
              <p className="opacity-60 font-sans text-md text-balance">
                With our experienced team, we will guide you through the complex
                visa application process, ensuring a smooth and efficient
                experience. With our support, you can focus on your purchase and
                travel plans with confidence.
              </p>
              <div className="flex flex-row gap-4 justify-start">
                <Button
                  variant={"default"}
                  className="w-fit font-extrabold uppercase tracking-wider hover:drop-shadow-md"
                >
                  Invest Now
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center py-20">
            <Image
              src="/lombok/boats.jpg"
              alt="Lombok Beach and Boats"
              width={500}
              height={500}
              className="rounded-lg object-cover aspect-square object-bottom lg:shadow-2xl shadow-lg shadow-yellow-900/20"
            />
            <div className="flex flex-col items-start gap-8 lg:gap-4 py-20">
              <div className="flex flex-col gap-8 lg:gap-4">
                <p className="text-5xl font-cinzel font-extrabold text-yellow-800  text-pretty">
                  What if you could turn back time?
                </p>
                <p className="text-md font-sans text-pretty">
                  What Lombok truly represents for the astute investor is the
                  opportunity to invest in a Bali-like destination 15 to 20
                  years ago, an apportunity to be the first in a rapidly growing
                  market.
                </p>
                <p className="opacity-50 text-md font-sans">
                  With the rising demand for accomodation and tourist
                  attractions in Lombok, it is the perfect time to invest with
                  all indicators showing promising returns and high projected
                  yield in the coming years.
                </p>
              </div>
              <Button
                variant={"default"}
                className="w-fit font-extrabold uppercase tracking-wider hover:drop-shadow-md"
              >
                Invest Now
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start justify-start w-full py-20">
            <div className="flex flex-col gap-4">
              <p className="text-5xl font-cinzel font-bold text-yellow-900">
                Investment Opportunity
              </p>
              <p className="text-md font-sans">
                By choosing Golden Retreat Lombok Villa, you're not just buying
                a property; you're securing a lucrative investment opportunity.
              </p>
              <p className="text-md font-sans opacity-50">
                Our team of experts will handle all aspects of property
                management, including rental bookings, maintenance, and
                financial reporting, ensuring a hassle-free and profitable
                experience.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:px-10">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-semibold">
                    Foreign Ownership
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-sans text-pretty">
                    We are located within the Mandalika{" "}
                    <Link
                      href="#"
                      className="underline font-semibold hover:text-yellow-800"
                    >
                      Tourism Special Economic Zone (TSEZ)
                    </Link>{" "}
                    which allows foreign investors to own leasehold property in
                    the area. This means Golden Retreat Lombok Villa the perfect
                    opportunity for foreign investors who are looking to invest
                    in luxury properties.
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
                  <AccordionContent className="text-sm font-sans text-pretty">
                    We will guide you through the complex visa application
                    process, ensuring a smooth and efficient experience. Our
                    dedicated team will provide expert assistance in preparing
                    all the necessary legal documentation, saving you time and
                    effort. With our support, you can focus on your purchase and
                    travel plans with confidence.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl font-semibold">
                    High Projected Yield
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-sans text-pretty">
                    Our meticulously crafted villas are designed to generate
                    substantial rental income, with an estimated annual yield of
                    10-16%. This attractive return on investment is made
                    possible by the strong demand for high-end holiday
                    accommodations in Lombok, coupled with our professional
                    property management services.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="bg-yellow-900/10 rounded-lg py-20 px-8 lg:px-52 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center justify-center w-full text-left">
          <div className="flex flex-col w-full h-full items-center justify-center">
            {/*           <Tchart />
             */}{" "}
            <Image
              src="https://utfs.io/f/dJLJpH9Hrkw3sumPK6dtfQDR1ujgW04bv39US6XzVqYOLryH"
              alt="Golden Retreat Lombok Villa"
              width={500}
              height={300}
              className="w-full h-full object-cover aspect-video rounded-lg shadow-lg"
              loading="eager"
            />
          </div>
          <div className="flex flex-col gap-2 font-medium text-center">
            <p className="text-xl font-sans text-balance">
              Lombok receives over
            </p>
            <p className="font-extrabold text-5xl font-cinzel text-yellow-800">
              1,000,000 tourist
            </p>
            <p className="text-xl font-sans text-balance">
              every year but only has enough hotels and resorts to lodge
            </p>
            <p className="font-extrabold text-5xl lg:text-6xl font-cinzel text-red-500">
              24,000 visitors
            </p>
            <p className="text-xl font-sans text-balance -mt-2">
              at any one time!
            </p>
          </div>
        </div>
        {/*Articles*/}
        <div className="flex flex-col gap-8 items-center justify-center w-full px-8 lg:px-52 py-10 lg:py-40">
          <p className="text-4xl lg:text-5xl font-cinzel text-yellow-900 font-bold">
            Latest Market Indicators
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 w-full">
            <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center">
                  <Image
                    src="https://utfs.io/f/dJLJpH9Hrkw3ztEe7t3GaV6XFRQrue8z9wSd3Dysx0bTKlAn"
                    alt="Golden Retreat Lombok Villa"
                    width={500}
                    height={300}
                    className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                  />
                  <div className="flex flex-col gap-2 w-full p-6 lg:text-xl text-sm items-start ring-1 ring-yellow-700 rounded-lg group">
                    <p className="text-xl font-bold font-sans text-yellow-900">
                      Why are foreigners Investing in Lombok instead of Bali
                      this year?{" "}
                    </p>
                    <p className="text-sm opacity-50 italic">Emerhub</p>
                    <Button
                      variant="link"
                      className="p-0 w-full font-sans justify-between"
                    >
                      Read Full Article
                      <ExternalLink className="min-w-4 min-h-4 stroke-1 text-yellow-600 group-last:hover:text-yellow-400" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center">
                  <Image
                    src="https://utfs.io/f/dJLJpH9Hrkw3b9gOVVYsqfwy05AzFLkTvmpo63dsY7VXnlRD"
                    alt="Tourist Surfing In Lombok"
                    width={500}
                    height={300}
                    className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                  />
                  <div className="flex flex-col gap-2 w-full p-6 lg:text-xl text-sm items-start ring-1 ring-yellow-700 rounded-lg group">
                    <p className="text-xl font-bold font-sans text-yellow-900">
                      Lombok sees fast growth in foreign tourist arrivals.
                    </p>
                    <p className="text-sm opacity-50 italic">
                      The Jakarta Post
                    </p>
                    <Button
                      variant="link"
                      className="p-0 w-full font-sans justify-between"
                    >
                      Read Full Article
                      <ExternalLink className="min-w-4 min-h-4 stroke-1 text-yellow-600 group-last:hover:text-yellow-400" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center">
                  <Image
                    src="https://utfs.io/f/dJLJpH9Hrkw34DUHLIiILXvxRHuJgz8cqy2TD5QokmWfjNes"
                    alt="Golden Retreat Lombok Villa"
                    width={500}
                    height={300}
                    className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                  />
                  <div className="flex flex-col gap-2 w-full p-6 lg:text-xl text-sm items-start ring-1 ring-yellow-700 rounded-lg group">
                    <p className="text-xl font-bold font-sans text-yellow-900">
                      MotoGP Mandalika 2022 Revives Tourism for West Nusa
                      Tenggara
                    </p>
                    <p className="text-sm opacity-50 italic">Global Expat</p>
                    <Button
                      variant="link"
                      className="p-0 w-full font-sans justify-between"
                    >
                      Read Full Article
                      <ExternalLink className="min-w-4 min-h-4 stroke-1 text-yellow-600 group-last:hover:text-yellow-400" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Benefits */}
        <div className="flex flex-col gap-10 items-center justify-start w-full px-8 lg:px-52 py-20 bg-black text-white">
          <p className="text-4xl lg:text-5xl font-cinzel font-extrabold text-white">
            Investment Benefits
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pl-8 lg:gap-20 py-6">
            <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <div className="flex flex-row lg:flex-col gap-4 lg:gap-10 w-full p-0 items-center lg:items-start group">
                  <MapPin className="min-w-20 min-h-20 lg:w-24 lg:h-24 fill-yellow-700 group-hover:fill-yellow-600 stroke-1 lg:-ml-12" />
                  <p className="text-md  font-sans text-white border-l-2 border-yellow-600/50 pl-8">
                    The land is situated in the heart of the latest tourist
                    destination, the west coast of Lombok Island. Located 300m
                    away from Bangsal Beach, Bangsal Fast Boat Port and Boat
                    service to the famous Gili Terawangan, Gili Air and Gili
                    Meno.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <div className="flex flex-row lg:flex-col gap-4 lg:gap-10 w-full p-0 items-center lg:items-start group">
                  <Award className="min-w-20 min-h-20 lg:w-24 lg:h-24 fill-yellow-700 group-hover:fill-yellow-600 stroke-1 lg:-ml-12" />
                  <p className="text-md font-sans text-white border-l-2 border-yellow-600/50 pl-8">
                    Established developer with the experience of successful past
                    projects. Project is designed with you; the end user in
                    mind. Investment includes premium furnishings and 5-star
                    amenities.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <div className="flex flex-row lg:flex-col gap-4 lg:gap-10 w-full p-0 items-center lg:items-start group">
                  <FolderCheck className="min-w-20 min-h-20 lg:w-24 lg:h-24 fill-yellow-700 group-hover:fill-yellow-600 stroke-1 lg:-ml-12" />
                  <p className="text-md  font-sans text-white border-l-2 border-yellow-600/50 pl-8 ">
                    We will assist you in every step of the way, with whatever
                    you would need. Long stay visas for foreign purchasers. Visa
                    application assistance provided.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <Button
            variant="default"
            className="w-fit font-extrabold uppercase tracking-wider hover:drop-shadow-md"
          >
            Apply Now
          </Button>
        </div>
        <Cta />
      </div>
    </main>
  );
}
