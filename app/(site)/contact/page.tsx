import { Button } from "@/components/ui/button";
import "react-phone-number-input/style.css";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownCircle, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Golden Retreat Lombok Villas is a property development offering luxurious Villas set in the heart of Lombok’s best attractions.`,
  keywords: `golden retreat lombok villa, luxury villa, lombok villas, private pool, villas, island villas, island villa, private pools, poolside villa, pool villa, poolside villas, gold retreat lombok, gold retreat lombok villas, gold retreat lombok villa`
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-8 items-center justify-start w-full bg-gradient-to-b from-yellow-900/10 to-5% to-background ">
      <div className=" py-6 px-8 flex flex-row gap-6 items-center md:justify-start justify-between w-full   z-40">
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
          Contact Us
        </h1>
      </div>

      <div className="flex flex-col w-full px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center py-20">
            <div className="flex flex-col gap-4">
              <p className="text-6xl lg:text-8xl  font-extrabold font-cinzel text-balance text-yellow-900">
                Get in touch
              </p>
              <p className="font-sans text-sm text-balance">
                Have questions? Speak to a member of our in-house team of
                professionals today.
              </p>
            </div>
            <div className="flex flex-col gap-4 px-4 items-center justify-center">
              <ArrowDownCircle className="hidden lg:flex w-52 h-52 text-yellow-900 stroke-1 opacity-10" />
            </div>
          </div>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-14 items-start justify-center w-full max-w-6xl mx-auto pb-20 px-4 lg:px-0">
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-col gap-2 items-start justify-center">
                <p className="text-md font-sans flex flex-row gap-2">
                  <MessageCircle className="min-w-4 min-h-4 stroke-1 text-yellow-900" />
                  Send a Whatsapp message
                </p>
                <div className="flex flex-row flex-wrap gap-4 gap-y-0 items-center justify-start">
                  <Link
                    href="https://wa.link/z42apg"
                    target="_blank"
                    className=" text-yellow-900 font-sans"
                  >
                    <Button
                      variant={"link"}
                      className="p-0 text-xl lg:text-3xl"
                    >
                      +6 012 411 2260
                    </Button>
                  </Link>
                  <p className="text-sm opacity-50 font-sans">or</p>
                  <Link
                    href="https://wa.link/52f5vb"
                    target="_blank"
                    className=" text-yellow-900 font-sans"
                  >
                    <Button
                      variant={"link"}
                      className="p-0 text-xl lg:text-3xl"
                    >
                      +65 9366 1372
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <div className="flex flex-col gap-2 items-start justify-center">
                <p className="text-md font-sans flex flex-row gap-2">
                  <Mail className="min-w-4 min-h-4 stroke-1 text-yellow-900" />
                  Send an Email
                </p>
                <Link href="/" className=" text-yellow-900 font-sans">
                  <Button
                    variant={"link"}
                    className="p-0 text-xl lg:text-3xl truncate"
                  >
                    contact@goldenretreatinternational.com
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Cta />
    </div>
  );
}
