"use client";

import CountrySelect from "@/components/form/country-select";
import InterestSelect from "@/components/form/interest-select";
import PhoneInputComp from "@/components/form/phone-input";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-number-input";
import { cn } from "@/lib/utils";
import "react-phone-number-input/style.css";

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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
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
import { useState } from "react";
import Cta from "@/components/cta";

export default function Contact() {
  const [isValid, setIsValid] = useState(false);

  const [data, setdata] = useState({
    name: "",
    email: "",
    interest: "",
    phone: ""
  });

  const sendEmail = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    console.log(res);
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-start w-full">
      <div className="px-10 flex flex-row w-full">
        <div className="bg-gradient-to-br from-yellow-800 to-stone-900  rounded-lg py-8 px-8 flex flex-row gap-6 items-center justify-start w-full max-w-6xl mx-auto mt-10">
          <div className="flex flex-col gap-0 items-start w-full ">
            <h1 className="text-3xl lg:text-5xl  font-bold font-cinzel text-white ">
              Contact Us
            </h1>
            <p className="text-white ">General Information</p>
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
      </div>

      <div className="flex flex-col w-full px-10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center py-20">
            <div className="flex flex-col gap-4 px-8 lg:px-4">
              <p className="text-5xl lg:text-6xl  font-extrabold font-cinzel text-balance text-yellow-900">
                Get in touch
              </p>
              <p className="font-sans text-sm text-balance">
                Speak to one of our managers who are ready to contact you
                through any platform of your choice.
              </p>
            </div>
            <div className="flex flex-col gap-4 px-4 items-center justify-center">
              <ArrowDownCircle className="hidden lg:flex w-52 h-52 text-yellow-900 stroke-1 opacity-10" />
            </div>
          </div>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-14 items-start justify-center w-full max-w-6xl mx-auto pb-20 px-10 lg:px-0">
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
                      className="p-0 text-2xl lg:text-3xl"
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
                      className="p-0 text-2xl lg:text-3xl"
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
                  <Button variant={"link"} className="p-0 text-2xl lg:text-3xl">
                    info@goldenretreatinternational.com
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:py-40 bg-yellow-900/10 items-start justify-start lg:px-52 px-10 py-20">
        <div className="flex flex-col gap-4">
          <p className="text-5xl lg:text-7xl font-extrabold text-yellow-900 font-cinzel">
            Contact <br className="hidden lg:block"></br>Form
          </p>
          <p className="text-sm font-sans text-balance">
            Fill out this form and we will get back to you as soon as possible.
            If you have any questions, please don't hesitate to contact us on
            any of our social media platforms.
          </p>

          <div className="hidden lg:flex flex-row py-20 items-end justify-start gap-8">
            <Facebook className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
            <Instagram className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
            <Linkedin className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
            <Youtube className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
          </div>
        </div>
        <Cta />
        {/* <Card className="flex flex-col w-full lg:col-start-2 bg-transparent border-none shadow-none p-0">
          <CardContent className="p-0">
            <form
              onSubmit={sendEmail}
              className="flex flex-col gap-4 font-sans py-6 px-0"
            >
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={data.name}
                onChange={(e) => setdata({ ...data, name: e.target.value })}
              />
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={(e) => setdata({ ...data, email: e.target.value })}
              />

              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative w-full">
                <PhoneInput
                  required
                  international
                  defaultCountry="MY"
                  value={data.phone}
                  onChange={(e) => {
                    setdata({ ...data, phone: e || "" });
                    setIsValid(!!e && e.length > 8);
                  }}
                  className={cn(
                    "flex h-12 w-full rounded-full border border-input bg-stone-50 px-6 py-2 text-sm ring-offset-background font-mono file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
                  )}
                />
              </div>
              {data.phone && !isValid && (
                <p className="text-xs italic -mt-4 text-red-500 text-right">
                  Please enter a valid phone number
                </p>
              )}

              <Label htmlFor="interest">Select Interest</Label>
              <Select
                value={data.interest}
                onValueChange={(e) => setdata({ ...data, interest: e })}
              >
                <SelectTrigger className="w-full font-mono">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  className=" font-mono bg-black text-white"
                  position="popper"
                >
                  <SelectGroup className="flex flex-col gap-4 px-4 py-2">
                    <SelectItem value="investment">
                      Property Investment
                    </SelectItem>
                    <SelectItem value="self-stay">
                      Self Stay (Holiday Villa)
                    </SelectItem>
                    <SelectItem value="just-curious">Just Curious</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button
                type="submit"
                variant={"outline"}
                className="mt-6 text-lg rounded-full h-14"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
}
