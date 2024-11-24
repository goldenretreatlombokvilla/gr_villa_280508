"use client";

import * as React from "react";
import { useState } from "react";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import PhoneInputComp from "./form/phone-input";
import InterestSelect from "./form/interest-select";
import { Button } from "./ui/button";
import PhoneInput from "react-phone-number-input";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./ui/select";
import { toast } from "@/hooks/use-toast";
import "react-phone-number-input/style.css";

import { redirect } from "next/navigation";

export default function Cta() {
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
    setdata({
      name: "",
      email: "",
      interest: "",
      phone: ""
    });
    toast({
      title: "Success!",
      description: "Your message has been sent successfully."
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:py-40 bg-yellow-900/10 items-start justify-start lg:px-52 px-10 py-20">
      <div className="flex flex-col gap-4">
        <p className="text-5xl lg:text-7xl font-extrabold text-yellow-900 font-cinzel">
          Contact <br className="hidden lg:block"></br>Form
        </p>
        <p className="text-sm font-sans text-balance">
          Fill out this form and we will get back to you as soon as possible. If
          you have any questions, please don't hesitate to contact us on any of
          our social media platforms.
        </p>

        <div className="hidden lg:flex flex-row py-20 items-end justify-start gap-8">
          <Facebook className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
          <Instagram className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
          <Linkedin className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
          <Youtube className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
        </div>
      </div>
      {/* <Card className="flex flex-col w-full lg:col-start-2 bg-transparent border-none shadow-none p-0">
        <CardContent className="p-0">
          <form className="flex flex-col gap-4 font-sans py-6 px-0">
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" name="name" id="name" required />
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" name="email" id="email" required />
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
      </Card> */}
      <Card className="flex flex-col w-full lg:col-start-2 bg-transparent border-none shadow-none p-0">
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
      </Card>
    </div>
  );
}
