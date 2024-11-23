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
      <div className="flex flex-col gap-8 items-center justify-start w-full min-h-screen p-10 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-yellow-800 to-stone-900  rounded-lg py-8 px-8 flex flex-row gap-6 items-center justify-start w-full">
          <div className="flex flex-col gap-0 items-start w-full">
            <h1 className="text-3xl lg:text-5xl  font-bold font-cinzel text-white ">
              About Us
            </h1>
          </div>
          <div className="flex items-center justify-center px-2">
            <Link href="/">
              <Image
                src="/brand/logo_icon.png"
                alt="Golden Retreat Lombok Villa"
                width={200}
                height={200}
                className="w-14 h-14 object-contain aspect-square drop-shadow-xl"
              />
            </Link>
          </div>
        </div>

        {/*  <div className="grid grid-cols-2 gap-10 py-20">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-sans">
              This project is the result of a collaboration between four
              companies that share the same vision and work together to achieve
              a common goal.{" "}
            </p>
          </div>
        </div>
 */}
        <div className="flex flex-col gap-4 items-center justify-center w-full px-0 py-10 lg:pt-20 lg:py-0">
          <div className="flex flex-col gap-4 items-start justify-center">
            <p className="text-xl font-bold uppercase">Primary Developer</p>
            <p className="text-4xl lg:text-6xl font-cinzel font-extrabold text-yellow-900">
              PT Propil Land Development
            </p>
            <div className="flex flex-col lg:w-1/2 gap-2">
              <p className="text-md font-sans">
                With a distinguished portfolio of successful luxury villas in
                the region, PT Propil Land Development brings unparalleled
                expertise to this project.
              </p>
              <p className="text-md font-sans opacity-50">
                Their proven track record for delivering exceptional quality and
                their deep understanding of the local market make them the ideal
                partner in crafting an extraordinary experience.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center w-full py-10 lg:py-20">
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
          <p className="text-xl font-bold">Secondary Developer</p>
          <p className="text-4xl lg:text-6xl font-cinzel font-bold text-yellow-900">
            PT Tri Karya Safani
          </p>
        </div>{" "}
        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <p className="text-xl font-bold">Jointly managed by</p>
          <p className="text-4xl lg:text-6xl font-cinzel font-bold text-yellow-900">
            Metrolalis Indonesia
          </p>
          <p className="text-4xl lg:text-6xl font-cinzel font-bold text-yellow-900">
            Metrolalis Thailand
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
