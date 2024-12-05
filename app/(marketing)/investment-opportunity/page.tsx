import Book from "@/components/book";
import Cta from "@/components/cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { MapPin, SquareDashed } from "lucide-react";
import Image from "next/image";

const villaImages = [
  {
    src: "/villa/grlv_5.webp",
    alt: "Master Bedroom Front View"
  },
  {
    src: "/villa/grlv_3.webp",
    alt: "Private Swimming Pool"
  },
  /* {
    src: "/villa/grlv_4.webp",
    alt: "Yoga Deck"
  }, */
  {
    src: "/villa/grlv_7.webp",
    alt: "Bathroom"
  },
  /* {
    src: "/villa/grlv_2.webp",
    alt: "Living Room"
  }, */
  {
    src: "/villa/grlv_6.webp",
    alt: "Master Bedroom Side View"
  }
];

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
            className="w-full lg:h-full aspect-video object-cover lg:object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 px-8 lg:px-0 py-20 w-full lg:w-full lg:text-center">
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
          <p className="font-sans text-md text-stone-900/50">
            Nestled in the beautiful west coast of Lombok, Golden Retreat Lombok
            showcases exquisite design, a quality build and 5-star amenities.
          </p>
          <div className="flex flex-row flex-wrap gap-4 w-full lg:justify-center">
            {/* <Button asChild>
              <Link className="" href="#lombok">
                Destination Lombok
              </Link>
            </Button> */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"default"} className="w-fit">
                  Book A Discovery Call
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="hidden">
                  <DialogTitle>Join the Waitlist</DialogTitle>
                  <DialogDescription>
                    Become the first few people to get notified about the new
                    Golden Retreat Lombok Villa!
                  </DialogDescription>
                </DialogHeader>
                <DialogClose />
                <Book />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-10 px-8 bg-yellow-900/10">
        <p className="text-5xl lg:text-7xl  font-extrabold font-cinzel text-yellow-900">
          The Villas
        </p>
        <p className="font-sans text-md">
          Golden Retreat Lombok is a turnkey project, where each Villa is
          designed with attention to detail, and furnished with all the comforts
          of home.
        </p>
        <div className="grid grid-cols-1 lg:flex flex-col gap-6 lg:gap-4 lg:py-8 py-4 items-start">
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-row  gap-4 lg:gap-10 w-full p-0 lg:text-xl text-sm items-start lg:items-start">
                <MapPin className="min-w-8 min-h-8 text-yellow-800 stroke-1" />
                <p className="text-sm font-sans">
                  <span className="font-bold">From Airport</span> - 1 hour 30
                  minute drive
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-row  gap-4 lg:gap-10 w-full p-0 lg:text-xl text-sm items-start lg:items-start">
                <SquareDashed className="min-w-8 min-h-8 text-yellow-800 stroke-1" />
                <p className="text-sm font-sans">
                  <span className="font-bold">Project Parcel Size</span> - 10,
                  000 sqm (107,640 sqft)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-8 max-w-6xl px-8 bg-yellow-900/10">
        {villaImages.map((item) => (
          <div
            key={item.alt}
            className="flex flex-col gap-4 items-center justify-center"
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex flex-col gap-2 items-center cursor-pointer w-full">
                  <Image
                    src={item.src}
                    alt="Golden Retreat Lombok Villa"
                    width={1000}
                    height={500}
                    loading="eager"
                    className="w-full h-full aspect-video object-cover rounded-lg hover:shadow-lg hover:scale-105 trasition-all duration-300"
                  />
                  <p className="text-sm sr-only font-sans opacity-70 italic">
                    {item.alt}
                  </p>
                </div>
              </DialogTrigger>
              <DialogPortal>
                <DialogContent className=" border-none shadow-none w-full h-full items-center justify-center bg-transparent">
                  <DialogHeader>
                    <DialogTitle className="sr-only">{item.alt}</DialogTitle>
                    <div className="flex flex-col gap-2 w-full items-center justify-center">
                      <Image
                        src={item.src}
                        alt="Golden Retreat Lombok Villa"
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
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start justify-start w-full py-20 px-8 bg-yellow-900/10">
        <div className="flex flex-col gap-4">
          <p className="text-5xl font-cinzel font-bold text-yellow-900">
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
        </div>
        <div className="flex flex-col gap-4 lg:px-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold">
                Foreign Ownership
              </AccordionTrigger>
              <AccordionContent className="text-sm font-sans text-pretty">
                Foreigners will be issued leasehold beneficiary titles of up to
                80 years. With Lombok seeing year-on-year growth in tourism, you
                can rely on a lucrative, long term rental income stream.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold">
                Application Assistance
              </AccordionTrigger>
              <AccordionContent className="text-sm font-sans text-pretty">
                We will guide you through visa applications, ensuring a smooth
                and efficient experience. Our dedicated team will provide expert
                assistance in preparing all the necessary documentation, saving
                you time and effort.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold">
                Attractive Rental Yield
              </AccordionTrigger>
              <AccordionContent className="text-sm font-sans text-pretty">
                Our Villas’ market placement is designed to generate substantial
                rental income, with an estimated annual yield of 15-20%. This
                attractive return on investment is made possible by
                ever-increasing demand and a dedicated on-site team primed to
                meet it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start justify-start w-full py-20 px-8 bg-yellow-900/10">
        <div className="flex flex-col gap-4">
          <p className="text-5xl font-cinzel font-bold text-yellow-900">
            Launch Promo!
          </p>
          <p className="text-md font-sans">
            Early investors get to enjoy our launch prices.
          </p>
        </div>
      </div>
      <Book />
    </main>
  );
}
