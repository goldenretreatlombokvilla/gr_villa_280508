import Book from "@/components/book";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { ArrowRightCircle } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investment Opportunity",
  description:
    "A property development offering luxurious Villas set in the heart of Lombok’s best attractions. With private pools, and exquisite interiors, each Villa is designed for the ultimate in luxury island living."
};

export default function LpOne() {
  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-1 bg-yellow-900/10">
        <div className="w-full">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3F8fdEjY3NDtBULj4yZxze2nb6wR7gl1iPYX0"
            alt="Poolside View of Golden Retreat Lombok Villa"
            width={2000}
            height={2000}
            loading="eager"
            placeholder="blur"
            blurDataURL="https://utfs.io/f/dJLJpH9Hrkw3bjYjbfsqfwy05AzFLkTvmpo63dsY7VXnlRD8"
            className="w-full h-full md:h-[50vh] lg:h-full aspect-video object-cover lg:object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 px-8 lg:px-0 pb-40 pt-20 lg:py-20 w-full mx-auto lg:max-w-4xl lg:text-center lg:min-h-[100vh] lg:items-center lg:justify-center">
          <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col text-yellow-900/50 uppercase -mb-4">
            Private & Exclusive
          </p>
          <h3 className="font-extrabold text-5xl md:text-6xl lg:text-8xl font-cinzel text-yellow-900">
            Luxury Villas
          </h3>
          <p className="font-sans text-stone-900 text-md text-balance">
            Experience a rare coalescence of luxury and exceptional value with
            our latest development,{" "}
            <span className="font-extrabold text-yellow-800">
              Golden Retreat Lombok
            </span>
            , where every Villa has been designed with you in mind.
          </p>
          <p className="font-sans text-md text-stone-900/50 text-balance">
            Nestled in the beautiful west coast of Lombok, Golden Retreat Lombok
            showcases exquisite design, a quality build and 5-star amenities.
          </p>
          <div className="flex flex-row flex-wrap gap-4 w-full lg:justify-center">
            <Button variant={"default"} className="w-fit">
              <Link href="#book">Book A Discovery Call</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:grid grid-cols-2 gap-20 lg:gap-4 pb-20 lg:py-10 px-8 bg-yellow-900/10 lg:px-52 items-center justify-center lg:min-h-screen">
        <div className="flex flex-col gap-4">
          <p className="text-5xl lg:text-7xl  font-extrabold font-cinzel text-yellow-900">
            The Villas
          </p>
          <p className="font-sans text-md">
            Golden Retreat Lombok is a turnkey project, where each Villa is
            designed with attention to detail, and furnished with all the
            comforts of home.
          </p>
          <div className="grid grid-cols-1 lg:flex flex-col gap-6 lg:gap-4 lg:py-8 py-4 items-start">
            <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <div className="flex flex-row  gap-4 lg:gap-10 w-full p-0 lg:text-xl text-md items-center ">
                  <ArrowRightCircle className="min-w-6 min-h-6 text-yellow-800 stroke-1" />
                  <p className="text-md font-sans">
                    <span className="font-bold">Superior Villa</span> - 2
                    Bedroom
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <div className="flex flex-row  gap-4 lg:gap-10 w-full p-0 lg:text-xl text-md items-center">
                  <ArrowRightCircle className="min-w-6 min-h-6 text-yellow-800 stroke-1" />
                  <p className="text-md font-sans">
                    <span className="font-bold">Premium Villa</span> - 3 Bedroom
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-col gap-2 items-center cursor-pointer w-full">
                <Image
                  src="https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu"
                  alt="Poolside View Of Villa"
                  width={1000}
                  height={500}
                  loading="eager"
                  className="w-full h-full aspect-video object-cover rounded-lg hover:shadow-lg hover:scale-105 trasition-all duration-300"
                />
              </div>
            </DialogTrigger>
            <DialogPortal>
              <DialogContent className=" border-none shadow-none w-full h-full items-center justify-center bg-transparent">
                <DialogHeader>
                  <DialogTitle className="sr-only">
                    Poolside View Of Villa
                  </DialogTitle>
                  <div className="flex flex-col gap-2 w-full items-center justify-center">
                    <Image
                      src="https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu"
                      alt="Poolside View Of Villa"
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
      </div>
      <div className="grid grid-cols-1 gap-4 lg:items-center lg:justify-center w-full pt-20 pb-20 px-8 mx-auto bg-yellow-900/10 lg:text-center lg:px-72">
        <div className="flex flex-col gap-4">
          <p className="text-5xl lg:text-7xl font-cinzel font-extrabold text-yellow-900">
            Investment Opportunity
          </p>
          <p className="text-md font-sans">
            By choosing a Golden Retreat Lombok Villa, you’re not just
            purchasing a holiday home, you’re securing a lucrative investment
            opportunity.
          </p>
          <p className="text-md font-sans opacity-50">
            Our team of experts will handle all aspects of property management,
            including rental bookings, maintenance, and financial reporting,
            ensuring a hassle-free and profitable experience.
          </p>
          <Button variant={"default"} className="w-fit">
            <Link href="#book">Limited Villas Available</Link>
          </Button>
        </div>
      </div>
      <div id="book">
        <Book />
      </div>
    </main>
  );
}
