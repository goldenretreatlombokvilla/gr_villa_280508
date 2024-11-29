import Cta from "@/components/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MapPin, SquareDashed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <div className="flex flex-col gap-8 items-center justify-start w-full bg-gradient-to-b from-yellow-900/10 to-5% to-background ">
        <div className=" py-6 lg:px-8 px-4 flex flex-row gap-6 items-center md:justify-start justify-between w-full   z-40">
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
            About Us
          </h1>
        </div>

        <div className="flex flex-col w-full gap-4 items-start md:items-center justify-center px-8 py-20 md:py-52 lg:py-52 max-w-6xl mx-auto">
          <p className="font-cinzel text-3xl lg:text-3xl font-extrabold tracking-wide flex flex-col text-yellow-900 uppercase text-balance">
            Golden Retreat Lombok Villas
          </p>
          <p className="font-cinzel text-xl lg:text-2xl font-bold tracking-wide flex flex-col text-yellow-800/50 uppercase text-balance">
            is Jointly Developed By
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-extrabold md:text-center text-yellow-900">
            PT Propil Land Development
          </p>
          <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col text-yellow-800/50 uppercase ">
            &
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-extrabold text-yellow-900">
            PT Tri Karya Safani
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center w-full px-8 py-10 lg:pt-20 lg:py-0 max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 items-start justify-center">
            <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col text-yellow-800/50 uppercase ">
              Developer Profile
            </p>
            <p className="text-5xl lg:text-6xl font-cinzel font-extrabold text-yellow-900">
              PT Propil Land Development
            </p>
            <div className="flex flex-col lg:w-2/3 gap-2">
              <p className="text-md font-sans">
                With a distinguished portfolio of successful luxury property
                developments in the region, PT Propil Land Development brings
                unparalleled expertise to this project.
              </p>
              <p className="text-md font-sans opacity-50">
                With a proven track record for delivering exceptional quality,
                and deep understanding of the local market, your investment is
                in safe and assured hands.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center w-full px-8 max-w-6xl mx-auto py-10 lg:py-20">
          <p className="text-4xl lg:text-5xl font-cinzel text-yellow-900 font-extrabold">
            Successful Projects
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 w-full">
            <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center relative">
                  <Image
                    src="https://utfs.io/f/dJLJpH9Hrkw3j9nQHGyOLU25km13CFhvApqxP8E60TKIStfD"
                    alt="The Chandi Boutique Resort & Spa"
                    width={500}
                    height={300}
                    className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                  />
                  <Badge
                    variant={"default"}
                    className="text-sm font-sans -mt-2 lg:-mt-6 bg-transparent italic shadow-none text-stone-800/50"
                  >
                    The Chandi Boutique Resort & Spa
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center relative">
                  <Image
                    src="https://utfs.io/f/dJLJpH9Hrkw3dxuEBg9Hrkw3vJqtg1x6b20mBh85RZaG7NSe"
                    alt="The Mora Royal Villa"
                    width={500}
                    height={300}
                    className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                  />
                  <Badge
                    variant={"default"}
                    className="text-sm font-sans -mt-2 lg:-mt-6 bg-transparent italic shadow-none text-stone-800/50"
                  >
                    The Mora Royal Villa
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center relative">
                  <Image
                    src="https://utfs.io/f/dJLJpH9Hrkw39v4L2t0ph4CULED6aSFXol2jeIi7cfZVQMtR"
                    alt="Malimbu Cliff Villa"
                    width={500}
                    height={300}
                    className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                  />
                  <Badge
                    variant={"default"}
                    className="text-sm font-sans -mt-2 lg:-mt-6 bg-transparent italic shadow-none text-stone-800/50"
                  >
                    Malibu Cliff Villa{" "}
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center relative">
                  <Image
                    src="https://utfs.io/f/dJLJpH9Hrkw3fsDpePhLDqapUrcI5X2oh8B9JvKe1ET4tzCf"
                    alt="Villa Matahari Terbenam"
                    width={500}
                    height={300}
                    className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                  />
                  <Badge
                    variant={"default"}
                    className="text-sm font-sans -mt-2 lg:-mt-6 bg-transparent italic shadow-none text-stone-800/50"
                  >
                    Villa Matahari Terbenam{" "}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center py-20">
            <p className="text-5xl lg:text-6xl font-cinzel font-extrabold text-yellow-900 py-10">
              Our Team
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center pb-10 lg:pb-32">
              <Image
                src="https://utfs.io/f/dJLJpH9Hrkw3rSGToQZO6nDLhfspaqg5QwWEVzocUxRXKdkT"
                alt="Jaswin Sawirin"
                width={500}
                height={500}
                className="w-full h-full lg:w-96 lg:h-96 object-cover aspect-square rounded-lg mx-auto"
              />
              <div className="flex flex-col gap-2 ">
                <div className="flex flex-col gap-2 py-4">
                  <p className="font-cinzel text-xl lg:text-3xl font-extrabold flex flex-col text-yellow-800/50 uppercase ">
                    PT Tri Karya Safani
                  </p>
                  <p className="font-cinzel text-3xl lg:text-5xl font-extrabold flex flex-col text-yellow-900 uppercase ">
                    Jusuf Sawirin
                  </p>
                  <p className="font-sans text-xl lg:text-2xl flex flex-col text-yellow-800/50">
                    Chief Executive Officer (CEO)
                  </p>
                </div>
                <p className="text-md font-sans text-pretty">
                  A seasoned hospitality professional with 35 years of
                  experience and has held senior management roles, including
                  General Manager positions at various hotels in Bali and
                  Business Development Director positions at renowned
                  international hotel chains.
                </p>
                <p className="text-md font-sans text-pretty">
                  Throughout his career, he has been associated with esteemed
                  international hotel chains such as Park Royal, Radisson, Aston
                  International, Hyatt, Intercontinental, and Best Western
                  International.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 items-center justify-center lg:text-center py-0">
              <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide col-span-2 text-yellow-800/50 uppercase text-center -mb-10">
                Management Team
              </p>
              <p className="font-cinzel text-3xl lg:text-5xl font-extrabold flex flex-col text-yellow-900 uppercase  col-span-2 text-center">
                Metropalis Hospitality
              </p>

              <div className="flex flex-col col-span-2 lg:col-span-1 gap-4 items-center justify-center">
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw3zC1gnF3GaV6XFRQrue8z9wSd3Dysx0bTKlAn"
                  alt="Glenn de Souza"
                  width={500}
                  height={500}
                  className="w-full h-full lg:w-96 lg:h-96 object-cover aspect-square rounded-lg mx-auto"
                />
                <p className="font-cinzel text-3xl lg:text-4xl font-extrabold flex flex-col text-yellow-900 uppercase ">
                  Glenn de Souza
                </p>
                <p className="font-sans text-xl lg:text-2xl flex flex-col text-yellow-800/50 -mt-4">
                  Chief Executive Officer (CEO)
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center col-span-2 lg:col-span-1">
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw3fplLXBhLDqapUrcI5X2oh8B9JvKe1ET4tzCf"
                  alt="Dominique de Souza "
                  width={500}
                  height={500}
                  className="w-full h-full lg:w-96 lg:h-96 object-cover aspect-square rounded-lg mx-auto"
                />
                <p className="font-cinzel text-3xl lg:text-4xl font-extrabold flex flex-col text-yellow-900 uppercase ">
                  Dominique de Souza
                </p>
                <p className="font-sans text-xl lg:text-2xl flex flex-col text-yellow-800/50 -mt-4">
                  Director of Operations
                </p>
              </div>

              <p className="text-md font-sans col-span-2 text-pretty">
                Metropalis Hospitality combines a blend of technical skills,
                operational expertise as well as creative vision for the 21st
                century. To give unique authentic hospitality services by making
                a difference in the lives of the people we meet and greet every
                day.
              </p>
              <p className="text-md font-sans text-pretty col-span-2">
                The team is equipped to provide pre-opening operational support,
                sales and marketing services, from their experiences working
                with several international hospitality chains; Accor, Sheraton,
                Holiday Inn, Best Western at Corporate, Regional, and Hotel
                level in Asia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Cta />
    </main>
  );
}
