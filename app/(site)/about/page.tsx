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
          <h1 className="sr-only text-xl font-sans text-yellow-800 pt-1 font-light">
            About Us
          </h1>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center w-full px-8 py-10 lg:pt-20 lg:py-0 max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 items-start justify-center">
            <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col text-yellow-800/50 uppercase ">
              Primary Developer
            </p>
            <p className="text-4xl lg:text-6xl font-cinzel font-extrabold text-yellow-900">
              PT Propil Land Development
            </p>
            <div className="flex flex-col lg:w-1/2 gap-2">
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
          <p className="text-4xl lg:text-5xl font-cinzel text-yellow-900 font-bold">
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
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center justify-center w-full px-0 py-10 lg:py-20">
        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col text-yellow-800/50 uppercase ">
            Secondary Developer
          </p>
          <p className="text-4xl lg:text-6xl font-cinzel font-bold text-yellow-900">
            PT Tri Karya Safani
          </p>
        </div>{" "}
        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col text-yellow-800/50 uppercase ">
            Jointly Managed By
          </p>
          <p className="text-4xl lg:text-6xl font-cinzel font-bold text-yellow-900">
            Metropalis Indonesia
          </p>
          <p className="text-4xl lg:text-6xl font-cinzel font-bold text-yellow-900">
            Metropalis Thailand
          </p>
          {/* <div className="flex flex-col gap-2 px-10 text-balance">
            <p className="text-md font-sans">
              With a distinguished portfolio of successful luxury villas in the
              region, PT Propil Land Development brings unparalleled expertise
              to this project.
            </p>
            <p className="text-md font-sans opacity-50">
              Their proven track record for delivering exceptional quality and
              their deep understanding of the local market make them the ideal
              partner in crafting an extraordinary experience.
            </p>
          </div> */}
        </div>
      </div>
      <Cta />
    </main>
  );
}
