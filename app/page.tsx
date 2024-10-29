import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  FileText
} from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main>
      <div className="flex flex-col gap-8 items-center justify-start w-full min-h-screen p-0 max-w-6xl mx-auto">
        <div className="absolute w-full h-screen top-0 left-0 -z-10">
          <Image
            src="/villa/grlv_3.webp"
            alt="Golden Retreat Lombok Villa"
            width={2000}
            height={2000}
            className="w-full h-[100vh] lg:h-auto  aspect-video object-cover rounded-lg brightness-50"
          />
        </div>
        <div className="flex flex-col gap-4 items-center lg:justify-start justify-between px-0 lg:pb-32 text-white w-full min-h-[90vh] py-10">
          <Image
            src="/brand/logo_full.png"
            alt="Golden Retreat Lombok Villa"
            width={1000}
            height={500}
            className="lg:w-80 w-60 h-fit lg:h-fit object-contain mb-20 drop-shadow-xl"
          />
          <div className="flex flex-col items-center justify-center gap-4 -mt-40 lg:mt-20">
            <p className="uppercase font-cinzel font-bold text-xl lg:text-2xl tracking-widest">
              Welcome to
            </p>
            <Image
              src="/gr_logo.png"
              alt="Golden Retreat Lombok Villa"
              width={1000}
              height={500}
              className="lg:w-[80vw] w-[100vw] h-full lg:h-fit object-contain drop-shadow-xl lg:-mb-20 -mb-10"
            />
            <p className="uppercase font-cinzelD font-bold text-2xl lg:text-5xl tracking-widest opacity-70">
              Phase 1
            </p>
          </div>
          <Button variant="default" className="lg:hidden flex">
            Learn More
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-4 items-center justify-center w-full min-h-screen lg:px-52 px-10 py-20">
        <div className="flex flex-col gap-6">
          <p className="font-cinzel text-yellow-800 text-4xl lg:text-5xl tracking-widest opacity-70">
            Your Luxurious Home Away From Home
          </p>
          <p className="font-sans text-md opacity-70">
            Experience unparalleled luxury and exclusivity at our stunning new
            luxury villas in Lombok Island, where every detail has been
            meticulously crafted with the end user in mind.
          </p>
          <p className="font-sans text-md opacity-70">
            Nestled in a pristine location with breathtaking views, our
            properties stand out from the competition with their exquisite
            design, top-notch amenities, and exceptional service.
          </p>
          <p className="font-sans text-md opacity-70">
            Trust us to turn your dream of owning a luxurious villa in Lombok
            into a reality - your perfect getaway awaits!
          </p>
          <Button variant="default" className="w-fit">
            Visit Villas
          </Button>
        </div>
        <div className="flex flex-col gap-4 items-center h-full text-yellow-700">
          <Image
            src="/villa/grlv_7.webp"
            alt="Golden Retreat Lombok Villa"
            width={1000}
            height={700}
            className="w-full h-[90%] object-left object-cover lg:aspect-[10/14] rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-start w-full min-h-screen px-10 lg:px-52 py-20">
        <p className="font-cinzeldeco text-yellow-800 text-5xl tracking-widest">
          Luxury Villas
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4">
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="/villa/grlv_6.webp"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="grid grid-cols-2 lg:grid-cols-2  gap-2 w-full p-6 lg:text-xl text-md ring-1 ring-yellow-700">
                  <p className="text-sm opacity-70 font-sans mb-8">
                    2 bedroom | 150 sqm
                  </p>
                  <p className="text-2xl lg:text-3xl font-bold uppercase col-span-2 text-yellow-700">
                    Premium Luxury Villa
                  </p>
                  <div className="col-span-2 flex flex-row gap-4 items-center justify-between">
                    <p className="text-sm opacity-70 font-sans">$ 200,000</p>
                    <Button variant="ghost" size="icon">
                      <ArrowRightCircle className="min-w-6 min-h-6 stroke-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="/villa/grlv_3.webp"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="grid grid-cols-2 lg:grid-cols-2  gap-2 w-full p-6 lg:text-xl text-md ring-1 ring-yellow-700 ">
                  <p className="text-sm opacity-70 font-sans mb-8">
                    3 bedroom | 187 sqm
                  </p>
                  <p className="text-2xl lg:text-3xl font-bold uppercase col-span-2 text-yellow-700">
                    Superior Luxury Villa
                  </p>
                  <div className="col-span-2 flex flex-row gap-4 items-center justify-between">
                    <p className="text-sm opacity-70 font-sans">$ 250,000</p>
                    <Button variant="ghost" size="icon">
                      <ArrowRightCircle className="min-w-6 min-h-6 stroke-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start justify-start w-full px-10 lg:px-52 py-20">
        <p className="text-5xl font-cinzel text-yellow-700">The Villa</p>
        <Image
          src="/villa/grlv_4.webp"
          alt="Golden Retreat Lombok Villa"
          width={500}
          height={200}
          className="w-full h-auto aspect-video object-cover rounded-lg"
        />
        <p className="text-md font-sans opacity-70">
          Whether you are an investor seeking a profitable opportunity or a
          holiday home owner looking for a slice of paradise, our villas offer
          the perfect blend of sophistication and comfort.{" "}
        </p>
        <div className="hidden lg:flex flex-row items-center justify-center py-4 ring-1 ring-yellow-700 text-yellow-700 font-sans text-sm opacity-70 italic">
          Exquisite villa with private pool and deck, perfect for luxury living.
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 items-center justify-center w-full px-10 lg:px-52 lg:py-20 -mt-14 ">
        <Image
          src="/villa/grlv_7.webp"
          alt="Golden Retreat Lombok Villa"
          width={500}
          height={200}
          className="w-full h-full aspect-video object-cover object-right rounded-lg"
        />
        <Image
          src="/villa/grlv_2.webp"
          alt="Golden Retreat Lombok Villa"
          width={500}
          height={200}
          className="w-full h-auto aspect-video object-cover rounded-lg"
        />
        <div className="hidden lg:flex flex-row items-center justify-center py-4 ring-1 ring-yellow-700 text-yellow-700 font-sans text-sm opacity-70 italic">
          A lavishly designed bespoke bathroom.
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center py-4 ring-1 ring-yellow-700 text-yellow-700 font-sans text-sm opacity-70 italic">
          Luxury living room, with top of the line furniture, wide screen TV,
          best in class sound system.{" "}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-start w-full px-10 lg:px-52 py-20">
        <p className="text-5xl font-cinzel text-yellow-700">
          In House Facilities
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-4 ">
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="/brand/restaurant.jpg"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2 w-full p-6 lg:text-xl text-md ring-1 ring-yellow-700 ">
                  <p className="text-2xl lg:text-2xl font-bold uppercase col-span-2 text-yellow-700">
                    Restaurant, Bar & Lounge{" "}
                  </p>
                  <p className="text-sm opacity-70 font-sans">
                    Dine in luxury in our 5 star restaurant with a delicious
                    menu by Chef Ramsey or spend the evening in our private
                    lounge.{" "}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="/brand/spa.jpg"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2 w-full h-full p-6 lg:text-xl text-md ring-1 ring-yellow-700 ">
                  <p className="text-2xl lg:text-2xl font-bold uppercase col-span-2 text-yellow-700">
                    Wellness Spa & Gymnasium
                  </p>
                  <p className="text-sm opacity-70 font-sans">
                    Never miss a beat with you gym equiped with your favourite
                    machines and then get a message in our local 5-star spa.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <Image
                  src="/brand/pond.jpg"
                  alt="Golden Retreat Lombok Villa"
                  width={500}
                  height={300}
                  className="w-full h-auto  object-cover aspect-video rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2 w-full h-full p-6 lg:text-xl text-md ring-1 ring-yellow-700 ">
                  <p className="text-2xl lg:text-2xl font-bold uppercase col-span-2 text-yellow-700">
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
      <div className="flex flex-col gap-4 items-center justify-start w-full px-10 lg:px-52 py-20 bg-black text-white">
        <p className="text-5xl font-cinzel text-white">Benefits</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-4 ">
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <div className="flex flex-col gap-10 w-full p-6 lg:text-xl text-md ">
                  <MapPin className="w-16 h-16 fill-yellow-600 stroke-1" />
                  <p className="text-md  font-sans text-white">
                    Heart of the latest tourist destination, in Lombok Island.
                    Located 300 meters away from Bangsal Beach, Bangsal Fast
                    Boat Port and Boat service to the famous Gili Terawangan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <div className="flex flex-col gap-10 w-full p-6 lg:text-xl text-md ">
                  <Award className="w-16 h-16 fill-yellow-600 stroke-1" />
                  <p className="text-md  font-sans text-white">
                    Established developer project that is the first of it’s
                    kind, while being made with the experience of successful
                    past projects. Desiged with the end user in mind, and has
                    everything that you need.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-4">
              <div className="flex flex-col  gap-6 lg:gap-10 items-center justify-center">
                <div className="flex flex-col gap-10 w-full p-6 lg:text-xl text-md ">
                  <FileText className="w-16 h-16 fill-yellow-600 stroke-1" />
                  <p className="text-md  font-sans text-white">
                    5-year long stay visas for foreign purchasers. Visa
                    application assistance provided. Visa renewal are for every
                    5 years. 12 months progressive payments with an initial
                    deposit of 20% of purchase price.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Button variant="default" className="w-fit">
          Apply Now
        </Button>
      </div>
    </main>
  );
}
