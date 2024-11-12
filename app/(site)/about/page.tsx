import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
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

      <div className="flex flex-col gap-4 py-20 items-center justify-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-5xl lg:text-6xl  font-bold font-cinzel text-yellow-700">
              Get To Know The Developers
            </p>
            <p className="font-sans text-sm">
              This project is the culmination of a visionary partnership between
              the landowners, esteemed developers, and a dedicated management
              company.
            </p>
            <p className="opacity-60 text-sm font-sans">
              United by a shared commitment, each partner has contributed to
              crafting an exclusive retreat that prioritizes sustainability,
              luxurious comfort, and absolute privacy—offering a truly unique
              experience in every detail.
            </p>
            <div className="flex flex-row gap-4 justify-start">
              <Button variant={"default"}>Dicvoery Lombok</Button>
              <Button variant="link">View Gallery</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center w-full px-0 py-10 lg:pt-20 lg:py-0">
        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <p className="text-xl font-cinzel font-extrabold text-yellow-700">
            Main Developer
          </p>
          <p className="text-6xl font-cinzel font-bold text-yellow-700">
            PT Propil Land Development
          </p>
          <div className="flex flex-col gap-2 px-10 text-balance">
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
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center justify-center w-full py-10 lg:py-40">
        <p className="text-4xl lg:text-5xl font-cinzel text-yellow-700 font-bold">
          Succefull Project
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 w-full">
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw3j9nQHGyOLU25km13CFhvApqxP8E60TKIStfD"
                  alt="The Chandi Boutique Resort & Spa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2 w-full p-6 lg:text-xl text-sm ring-1 ring-yellow-700 rounded-lg">
                  <p className="text-3xl font-bold font-cinzel text-yellow-700">
                    The Chandi Boutique Resort & Spa{" "}
                  </p>
                  <div className="grid grid-cols-[1fr_30px] gap-6 items-end justify-start">
                    <p className="text-sm font-sans flex flex-row gap-4">
                      <MapPin className="min-w-4 min-h-4 stroke-1 text-yellow-700" />
                      Jl, Raya Senggigi No.KM5, Senggigi, Kec. Batu Layar,
                      Kabupaten Lombok Barat, Nusa Tenggara Bar. 83355,
                      Indonesia.
                    </p>
                    <Button
                      variant="link"
                      className="flex flex-row justify-end"
                    >
                      <ExternalLink className="min-w-4 min-h-4 stroke-1 text-yellow-700" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw3dxuEBg9Hrkw3vJqtg1x6b20mBh85RZaG7NSe"
                  alt="The Mora Royal Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2 w-full p-6 lg:text-xl text-sm ring-1 ring-yellow-700 rounded-lg">
                  <p className="text-3xl font-bold font-cinzel text-yellow-700">
                    The Mora Royal Villa
                  </p>
                  <div className="grid grid-cols-[1fr_30px] gap-6 items-end justify-start">
                    <p className="text-sm font-sans flex flex-row gap-4">
                      <MapPin className="min-w-4 min-h-4 stroke-1 text-yellow-700" />
                      Batu Layar, West Lombok Regency, West Nusa Tenggara,
                      83355, Indonesia
                    </p>
                    <Button
                      variant="link"
                      className="flex flex-row justify-end"
                    >
                      <ExternalLink className="min-w-4 min-h-4 stroke-1 text-yellow-700" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw39v4L2t0ph4CULED6aSFXol2jeIi7cfZVQMtR"
                  alt="Malimbu Cliff Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2 w-full p-6 lg:text-xl text-sm ring-1 ring-yellow-700 rounded-lg">
                  <p className="text-3xl font-bold font-cinzel text-yellow-700">
                    Malibu Cliff Villa
                  </p>
                  <div className="grid grid-cols-[1fr_30px] gap-6 items-end justify-start">
                    <p className="text-sm font-sans flex flex-row gap-4">
                      <MapPin className="min-w-4 min-h-4 stroke-1 text-yellow-700" />
                      Jl, Raya Senggigi Pemenang Dusun Malimbu Senggigi, Malaka,
                      Kec. Pemenang, Kabupaten Lombok Utara, Nusa Tenggara Bar,
                      Indonesia
                    </p>
                    <Button
                      variant="link"
                      className="flex flex-row justify-end"
                    >
                      <ExternalLink className="min-w-4 min-h-4 stroke-1 text-yellow-700" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw3fsDpePhLDqapUrcI5X2oh8B9JvKe1ET4tzCf"
                  alt="Villa Matahari Terbenam"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2 w-full p-6 lg:text-xl text-sm ring-1 ring-yellow-700 rounded-lg">
                  <p className="text-3xl font-bold font-cinzel text-yellow-700">
                    Villa Matahari Terbenam
                  </p>
                  <div className="grid grid-cols-[1fr_30px] gap-6 items-end justify-start">
                    <p className="text-sm font-sans flex flex-row gap-4">
                      <MapPin className="min-w-4 min-h-4 stroke-1 text-yellow-700" />
                      Jl. Bukit Batu Layar No. 19, Batu Layar, Batulayar,
                      Singgigi, Kabupaten, Lombok Barat, Nusa Tenggara Bar.
                      83355, Indonesia
                    </p>
                    <Button
                      variant="link"
                      className="flex flex-row justify-end"
                    >
                      <ExternalLink className="min-w-4 min-h-4 stroke-1 text-yellow-700" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
