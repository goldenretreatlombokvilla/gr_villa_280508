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
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investment",
  description: `Golden Retreat Lombok Villas is a property development offering luxurious Villas set in the heart of Lombok’s best attractions.`,
  keywords: `golden retreat lombok villa, luxury villa, lombok villas, private pool, villas, island villas, island villa, private pools, poolside villa, pool villa, poolside villas, gold retreat lombok, gold retreat lombok villas, gold retreat lombok villa`
};

export default function Invest() {
  return (
    <main>
      <div className="flex flex-col gap-8 items-center justify-start w-full bg-gradient-to-b from-yellow-900/10 to-5% to-background ">
        <div className=" py-6 px-8 flex flex-row gap-6 items-center md:justify-start justify-between w-full">
          <Link
            href="/"
            className="flex flex-row gap-8 items-center justify-center"
          >
            <Image
              src="https://utfs.io/f/dJLJpH9Hrkw3HQH8eio47KGLVT5JMX0nbiCWRIZyzPwUDrcp"
              alt="Golden Retreat Lombok Villa"
              width={500}
              height={500}
              className="max-w-32 z-40 -my-8 h-full object-cover"
            />
          </Link>
          <h1 className="sr-only text-xl font-sans text-yellow-800 pt-1 font-light">
            Investment
          </h1>
        </div>
        <div className="max-w-6xl mx-auto px-10 lg:p-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:py-20 py-10">
            <div className="flex flex-col gap-6 lg:col-span-1">
              <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col text-yellow-800 uppercase opacity-50 -mb-4">
                A Superior Investment
              </p>
              <h2 className="text-6xl lg:text-6xl  font-extrabold font-cinzel text-yellow-800">
                15 - 20% per annum projected yield
              </h2>
            </div>
          </div>

          <div className="lg:grid flex flex-col lg:grid-cols-2 gap-4 lg:gap-10 items-start justify-start pb-20">
            <div className="flex flex-col gap-4">
              <p className="font-sans text-md text-pretty">
                Golden Retreat Lombok presents a unique opportunity to
                capitalise on Lombok’s rise as a top destination for holiday
                makers who seek out the island’s unspoilt natural beauty.
              </p>
              <p className="font-sans text-md text-pretty">
                Just a two hour boat ride from Bali, Lombok attracts thousands
                of visitors each year looking for a change of pace. Another
                major boost to tourism is Lombok’s International Airport,
                attracting more direct flights each year. As a result, the
                demand for quality holiday accommodation on the island continues
                to soar!
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-sans text-md text-pretty">
                Our experienced on-site property management team will assist
                with the management of your Villa. Ensuring that you maximise
                rental yield, while also securing easy access to your property
                whenever you desire.
              </p>
              <p className="font-sans text-md text-pretty">
                Our team will also guide you through visa applications where
                needed, should you choose to stay for longer stretches at a
                time. With our support, we endeavour to make the decision to
                purchase with us your best one yet.
              </p>
              <p className="font-sans text-md text-pretty">
                Contact our team to find out how you can benefit from purchasing
                a Golden Retreat Villa with us today.
              </p>
            </div>
            {/* <p className="font-sans text-md text-pretty">
              Contact our team to find out how you can benefit by purchasing a
              Villa with us today.
            </p> */}
            <div className="flex flex-row gap-4 col-span-2 justify-end">
              <Link href="/book">
                <Button
                  variant={"default"}
                  className="w-fit font-extrabold uppercase tracking-wider hover:drop-shadow-md"
                >
                  Book A Discovery Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center w-full justify-center py-20">
            <Image
              src="https://utfs.io/f/dJLJpH9Hrkw33szOgdpTdrJVe6Xx1zuEqfmI3Dn2OagRU8op"
              alt="Lombok Beach and Boats"
              width={500}
              height={500}
              className="object-cover aspect-square object-bottom  shadow-yellow-900/20 w-full"
            />
            <div className="flex flex-col items-start gap-8 lg:gap-4 py-20 px-8 lg:px-32">
              <div className="flex flex-col gap-8 lg:gap-4">
                <p className="text-5xl font-cinzel font-extrabold text-yellow-800  text-pretty">
                  First-Mover Advantage
                </p>
                <p className="text-md font-sans text-pretty">
                  Imagine foreseeing the meteoric rise of South-East Asia’s most
                  popular destinations like Bali and Phuket. Well, don’t feel
                  like you’ve missed the boat.
                </p>
                <p className="text-md font-sans text-pretty">
                  Lombok’s rapidly growing tourism industry presents the perfect
                  opportunity to be counted as a first-mover primed for success.
                </p>
                <p className="text-md font-sans text-pretty">
                  To find out more about investment yields, speak with our
                  in-house team of property consultants.
                </p>
              </div>
              <Link href="/book">
                <Button
                  variant={"default"}
                  className="w-fit font-extrabold uppercase tracking-wider hover:drop-shadow-md"
                >
                  Find Out More
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start justify-start w-full py-20 px-8 lg:px-32">
            <div className="flex flex-col gap-4">
              <p className="text-5xl font-cinzel font-bold text-yellow-900">
                Investment Opportunity
              </p>
              <p className="text-md font-sans">
                By choosing a Golden Retreat Lombok Villa, you’re not just
                purchasing a holiday home, you’re securing a lucrative
                investment opportunity.
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
                    Foreigners will be issued leasehold beneficiary titles of up
                    to 80 years. With Lombok seeing year-on-year growth in
                    tourism, you can rely on a lucrative, long term rental
                    income stream.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl font-semibold">
                    Application Assistance
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-sans text-pretty">
                    We will guide you through visa applications, ensuring a
                    smooth and efficient experience. Our dedicated team will
                    provide expert assistance in preparing all the necessary
                    documentation, saving you time and effort.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl font-semibold">
                    Attractive Rental Yield
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-sans text-pretty">
                    Our Villas’ market placement is designed to generate
                    substantial rental income, with an estimated annual yield of
                    15-20%. This attractive return on investment is made
                    possible by ever-increasing demand and a dedicated on-site
                    team primed to meet it.
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
        <div className="flex flex-col gap-8 items-center justify-center w-full px-8 lg:px-52 py-10 lg:py-40 ">
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
                    <p className="text-sm font-sans text-stone-900/80">
                      Emerhub
                    </p>
                    <Link
                      href="https://emerhub.com/indonesia/why-are-foreigners-investing-in-lombok-instead-of-bali-this-year/"
                      target="_blank"
                    >
                      <Button
                        variant="link"
                        className="p-0 w-full font-sans justify-between"
                      >
                        Read Full Article
                      </Button>
                    </Link>
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
                    <p className="text-sm font-sans text-stone-900/80">
                      The Jakarta Post
                    </p>
                    <Link
                      href="https://www.thejakartapost.com/news/2017/04/20/lombok-airport-gears-up-to-attract-more-tourists.html"
                      target="_blank"
                    >
                      <Button
                        variant="link"
                        className="p-0 w-full font-sans justify-between"
                      >
                        Read Full Article
                      </Button>
                    </Link>
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
                    <p className="text-sm font-sans text-stone-900/80">
                      Global Expat
                    </p>
                    <Link
                      href="https://globalexpatrecruiting.com/motogp-mandalika-2022-revives-tourism-for-west-nusa-tenggara/"
                      target="_blank"
                    >
                      <Button
                        variant="link"
                        className="p-0 w-full font-sans justify-between"
                      >
                        Read Full Article
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start justify-start w-full px-8 lg:px-52 py-10 lg:py-40">
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-cinzel font-bold text-yellow-900">
              Payment Structure
            </p>
            <p className="text-md font-sans">
              Find out more about our payment structure and management fees.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:px-10">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">
                  Progressive Payment Plan
                </AccordionTrigger>
                <AccordionContent className="text-sm font-sans text-pretty">
                  We have a defined progressive payment structure in place to
                  ensure your Villa is completed on schedule. Our in-house team
                  is on hand take you through the process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold">
                  Quaterly Reports
                </AccordionTrigger>
                <AccordionContent className="text-sm font-sans text-pretty">
                  Stay informed through every step of the process with quarterly
                  reports. From groundbreaking to completion, ensuring
                  transparency and peace of mind.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-semibold">
                  Management Fees
                </AccordionTrigger>
                <AccordionContent className="text-sm font-sans text-pretty">
                  Upon completion, your Villa will be managed by an experienced
                  team of in-house professionals, ensuring the best maintenance
                  and property management services. Here again, owners can rely
                  on a comprehensive and fair fee structure.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link href="/book">
              <Button
                variant="default"
                className="w-fit font-extrabold uppercase tracking-wider hover:drop-shadow-md"
              >
                Book A Discovery Call
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center justify-start w-full px-8 lg:px-32 py-10 lg:py-40 ">
          <p className="text-yellow-900 text-center text-balance text-4xl lg:text-5xl font-extrabold">
            Current Progress
          </p>
          <video
            className="w-full lg:w-fit h-full md:h-[70vh] rounded-lg"
            width="1080"
            height="1920"
            controls
            playsInline
            preload="none"
            poster="https://utfs.io/f/dJLJpH9Hrkw3aINp6gzVNOG2SrpjuDZU3Iwen5yqf7ETJbki"
          >
            <source
              src="https://utfs.io/f/dJLJpH9Hrkw3HSjkmUyo47KGLVT5JMX0nbiCWRIZyzPwUDrc"
              type="video/mp4"
            />
          </video>
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
                    The land is situated in the heart of Lombok’s most popular
                    attractions. Nestled in the west coast of Lombok Island and
                    located 300m away from Bangsal Beach, Bangsal Fast Boat
                    Port, we are a stones throw away from the fast boat services
                    that ferry tourists to the famous smaller Islands just off
                    Lombok, namely Gili Terawangan, Gili Air and Gili Meno. This
                    is by far one of the more popular attractions, and THE
                    reason why many tourists visit Lombok.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <div className="flex flex-row lg:flex-col gap-4 lg:gap-10 w-full p-0 items-center lg:items-start group">
                  <Award className="min-w-20 min-h-20 lg:w-24 lg:h-24 fill-yellow-700 group-hover:fill-yellow-600 stroke-1 lg:-ml-12" />
                  <p className="text-md font-sans text-white border-l-2 border-yellow-600/50 pl-8">
                    Established developer with the experience and success of 4
                    sold-out projects. Designed with you in mind, Golden Retreat
                    Lombok Villas includes premium furnishings and 5-star
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
                    We will lend assistance every step of the way. Including
                    long-stay visa applications where required for foreign
                    purchasers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <Link href="/book">
            <Button
              variant="default"
              className="w-fit font-extrabold uppercase tracking-wider hover:drop-shadow-md"
            >
              Apply Now
            </Button>
          </Link>
        </div>
        <Cta />
      </div>
    </main>
  );
}
