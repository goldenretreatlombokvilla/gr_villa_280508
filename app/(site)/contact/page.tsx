import CountrySelect from "@/components/form/country-select";
import InterestSelect from "@/components/form/interest-select";
import PhoneInputComp from "@/components/form/phone-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowDownCircle,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Youtube
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col gap-8 items-center justify-start w-full">
      <div className="bg-gradient-to-br from-yellow-800 to-stone-900  rounded-lg py-8 px-8 flex flex-row gap-6 items-center justify-start w-full max-w-6xl mx-auto mt-10">
        <div className="flex flex-col gap-0 items-start w-full">
          <h1 className="text-3xl lg:text-5xl  font-bold font-cinzel text-white ">
            Contact
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

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center py-20">
          <div className="flex flex-col gap-4 px-8 lg:px-4">
            <p className="text-5xl lg:text-6xl  font-extrabold font-cinzel text-balance text-yellow-700">
              Get in touch
            </p>
            <p className="font-sans text-sm text-balance">
              Speak to one of our managers who are ready to contact you through
              any platform of your choice
            </p>
          </div>
          <div className="flex flex-col gap-4 px-4 items-center justify-center">
            <ArrowDownCircle className="hidden lg:flex w-52 h-52 text-yellow-700 stroke-1 opacity-10" />
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-14 items-start justify-center w-full max-w-6xl mx-auto pb-20 px-8 lg:px-0">
        <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
          <CardContent className="p-0">
            <div className="flex flex-col gap-2 items-start justify-center">
              <p className="text-md font-sans flex flex-row gap-2">
                <MessageCircle className="min-w-4 min-h-4 stroke-1 text-yellow-700" />
                Send a Whatsapp message
              </p>
              <Link href="/" className=" text-yellow-700 font-sans">
                <Button variant={"link"} className="p-0 text-2xl lg:text-3xl">
                  +0123456789
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col w-full lg:p-0 bg-transparent shadow-none border-none">
          <CardContent className="p-0">
            <div className="flex flex-col gap-2 items-start justify-center">
              <p className="text-md font-sans flex flex-row gap-2">
                <Mail className="min-w-4 min-h-4 stroke-1 text-yellow-700" />
                Send an Email
              </p>
              <Link href="/" className=" text-yellow-700 font-sans">
                <Button variant={"link"} className="p-0 text-2xl lg:text-3xl">
                  info@goldenretreatinternational.com
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:py-40 bg-yellow-900/10 items-start justify-start lg:px-52 px-10 py-20">
        <div className="flex flex-col gap-4">
          <p className="text-5xl lg:text-7xl font-extrabold text-yellow-700 font-cinzel">
            Contact <br className="hidden lg:block"></br>Form
          </p>
          <p className="text-sm font-sans text-balance">
            Fill out this form and we will get back to you as soon as possible.
            If you have any questions, please don't hesitate to contact us on
            any of our social media platforms.
          </p>

          <div className="hidden lg:flex flex-row py-20 items-end justify-start gap-8">
            <Facebook className="min-w-12 min-h-12 stroke-1 text-yellow-700/50 hover:text-yellow-700" />
            <Instagram className="min-w-12 min-h-12 stroke-1 text-yellow-700/50 hover:text-yellow-700" />
            <Linkedin className="min-w-12 min-h-12 stroke-1 text-yellow-700/50 hover:text-yellow-700" />
            <Youtube className="min-w-12 min-h-12 stroke-1 text-yellow-700/50 hover:text-yellow-700" />
          </div>
        </div>
        <Card className="flex flex-col w-full lg:col-start-2 bg-transparent border-none shadow-none p-0">
          {/* <CardHeader className="pl-8">
            <CardTitle className="text-4xl text-yellow-700">
              Contact Form
            </CardTitle>
            <CardDescription className="text-sm font-sans text-balance">
              Fill out the form below to get in touch with us
            </CardDescription>
          </CardHeader> */}
          <CardContent className="p-0">
            <form className="flex flex-col gap-4 font-sans py-6 px-0">
              <Label htmlFor="name">Full Name</Label>
              <Input type="text" name="name" id="name" />
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" name="email" id="email" />
              <PhoneInputComp />
              <Label htmlFor="interest">Select Interest</Label>
              <InterestSelect />

              <Button
                variant={"outline"}
                className="mt-6 text-lg rounded-full h-14"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
