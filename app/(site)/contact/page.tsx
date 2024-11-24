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

      <Cta />
    </div>
  );
}
