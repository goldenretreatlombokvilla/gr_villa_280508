import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Image from "next/image";

const frames = [
  {
    src: "/frames/2.png",
    alt: "bathroom",
    txt: "Private Pool & Yoga Deck"
  },
  {
    src: "/frames/3.png",
    alt: "bathroom",
    txt: "Luxury Furniture & Finishings"
  },
  {
    src: "/frames/1.png",
    alt: "bathroom",
    txt: "5-Star Living Ammenities"
  }
];

export default function BookingPage() {
  return (
    <div>
      <div className="bg-gradient-to-b from-stone-600 to-20% to-stone-950 min-h-screen p-0 items-center justify-start mx-auto flex flex-col gap-2 py-10">
        <h1 className="text-5xl text-center font-bold text-stone-200">
          Golden Retreat
        </h1>
        <h2 className="text-2xl font-sans uppercase text-center font-thin text-stone-200 tracking-[0.3rem] -mt-4">
          Lombok Villas
        </h2>
        <p className="text-muted text-sm italic font-sans">
          Paradise Should Never Be Out Of Reach
        </p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 p-4 px-10 lg:px-52">
          {frames.map((frame) => (
            <div className="flex flex-col gap-4 items-center justify-end first:rotate-3 last:-rotate-6 relative hover:rotate-0 hover:scale-105 transition-all duration-500 ease-in-out">
              <Image
                width={500}
                height={500}
                src={frame.src}
                alt={frame.alt}
                className="w-full h-full object-cover "
              />
              <p className="absolute text-sm text-muted-foreground font-sans font-bold italic z-30 pb-6">
                {frame.txt}
              </p>
            </div>
          ))}
        </div>
        <div className=" min-h-screen flex flex-col gap-2 items-start justify-center px-10">
          <h2 className="text-3xl font-bold text-stone-200 py-2">
            The Property
          </h2>
          <p className="text-md text-muted font-sans">
            <span className="font-serif font-bold">
              Golden Retreat Lombok Villas
            </span>{" "}
            is a unique and exclusive luxury villa development project located
            at the doorway to one of the most popular tourist destinations in
            Indonesia, Gili Islands.
          </p>
          <p className="text-md text-muted font-sans">
            This property represents a calculated approach to luxury real estate
            investment. Situated just a two-hour boat ride from Bali, our
            location offers a perfect balance of accessibility and exclusivity.
          </p>
          <Button variant={"default"} size="lg" className="mt-8">
            Learn More
          </Button>
        </div>

        <div className=" min-h-screen flex flex-col gap-2 items-start justify-center px-10">
          <h2 className="text-3xl font-bold text-stone-200 py-2">The Villas</h2>
          <p className="text-md text-muted font-sans">
            You have two model types, a 2 bedroom and a 3 bedroom villa. Both
            types come with a private pool and yoga deck, complete kitchen and
            living room, garage and store room.
          </p>
          <div className="flex flex-row gap-4 py-4">
            <Button variant={"default"} size="lg" className="">
              Superior - 2 Bedroom
            </Button>
            <Button variant={"default"} size="lg" className="">
              Premium - 3 Bedroom
            </Button>
          </div>
        </div>
        <div className=" min-h-screen flex flex-col gap-2 items-start justify-center px-10">
          <h2 className="text-3xl font-bold text-stone-200 py-2">
            The Timeline
          </h2>
          <p className="text-md text-muted font-sans">
            Our villas are built-to-order and will be ready to move in after 12
            months of build time. Once ready, the property will be available for
            use, and comes with all the fitings and finishings to make it a home
            away from home.
          </p>
          <div className="flex flex-col gap-6 py-8">
            <Card className="ring-2 ring-beige">
              <CardHeader className="flex flex-col">
                <CardTitle className="font-bold">STAGE 1</CardTitle>
                <CardDescription className="text-lg font-bold">
                  Booking Fees & Initial Payment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-md text-muted-foreground font-sans">
                  This initial stage involved a 5% Booking Fee and an additional
                  15% payment upon signing the purchase agreement to initiate
                  consruction.
                </p>
              </CardContent>
              <CardFooter>
                <Button>Book Your Villa Now!</Button>
              </CardFooter>
            </Card>
            <div className="w-[2px] bg-white h-16 -my-8 mx-auto"></div>
            <Card className="ring-2 ring-beige">
              <CardHeader className="flex flex-col">
                <CardTitle className="font-bold">STAGE 2</CardTitle>
                <CardDescription className="text-lg font-bold">
                  Structural Completion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-md text-muted-foreground font-sans">
                  Upon the completion of the foundational work, a 25% payment is
                  required. This stage focuses on the structural enhancements.
                </p>
              </CardContent>
            </Card>
            <div className="w-[2px] bg-white h-16 -my-8 mx-auto"></div>

            <Card className="ring-2 ring-beige">
              <CardHeader className="flex flex-col">
                <CardTitle className="font-bold">STAGE 3</CardTitle>
                <CardDescription className="text-lg font-bold">
                  Interior & Utility Upgrades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-md text-muted-foreground font-sans">
                  The third stage, involving a 25% payment, transitions into the
                  villa’s interiors and utilities.
                </p>
              </CardContent>
            </Card>
            <div className="w-[2px] bg-white h-16 -my-8 mx-auto"></div>

            <Card className="ring-2 ring-beige">
              <CardHeader className="flex flex-col">
                <CardTitle className="font-bold">STAGE 4</CardTitle>
                <CardDescription className="text-lg font-bold">
                  Interior Finalization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-md text-muted-foreground font-sans">
                  The fourth installment of 25% ensures the completion of all
                  interior elements and furnishings.
                </p>
              </CardContent>
            </Card>
            <div className="w-[2px] bg-white h-16 -my-8 mx-auto"></div>

            <Card className="ring-2 ring-beige">
              <CardHeader className="flex flex-col">
                <CardTitle className="font-bold">STAGE 5</CardTitle>
                <CardDescription className="text-lg font-bold">
                  Handover
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-md text-muted-foreground font-sans">
                  The final 5% payment is made during the handover of the
                  completed villa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
