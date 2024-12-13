"use client";

import * as React from "react";
import { useState } from "react";

import {
  Facebook,
  Inbox,
  Instagram,
  Linkedin,
  Phone,
  Youtube
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
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
import Link from "next/link";

export default function Cta() {
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setdata] = useState({
    name: "",
    email: "",
    interest: "",
    phone: ""
  });

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
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
    if (res.status === 500) {
      toast({
        title: "Something went wrong!",
        description: "Please try again later."
      });
    } else if (res.status === 200) {
      toast({
        title: "Success!",
        description: "Your message has been sent successfully."
      });
    }
    redirect("/thankyou");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:py-40 bg-yellow-900/10 items-start justify-start lg:px-20 xl:px-52 px-10 py-20">
      <div className="flex flex-col gap-4">
        <p className="text-5xl lg:text-7xl font-extrabold text-yellow-900 font-cinzel">
          Contact <br className="hidden lg:block"></br>Form
        </p>
        <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col uppercase text-yellow-900/50">
          Have Questions?
        </p>
        <p className="text-sm font-sans text-balance">
          Speak to a member of our in-house team of professionals today.
        </p>

        <div className="hidden lg:flex flex-row py-20 items-end justify-start gap-4">
          <Link href="https://www.facebook.com/profile.php?id=61569367575846">
            <Facebook className="min-w-12 min-h-12 text-yellow-900 hover:text-yellow-600 stroke-1" />
          </Link>
          <Link href="https://www.instagram.com/goldenretreatinternational/">
            <Instagram className="min-w-12 min-h-12 text-yellow-900 hover:text-yellow-600 stroke-1" />
          </Link>
          |
          <Link href="mailto:contact@gondenretreatinternational.com">
            <Inbox className="min-w-12 min-h-12 text-yellow-900 hover:text-yellow-600 stroke-1" />
          </Link>
          <Link href="https://wa.link/z42apg">
            <Phone className="min-w-12 min-h-12 text-yellow-900 hover:text-yellow-600 stroke-1" />
          </Link>
        </div>
      </div>
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
              required
              value={data.name}
              onChange={(e) => setdata({ ...data, name: e.target.value })}
            />
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              name="email"
              id="email"
              required
              value={data.email}
              onChange={(e) => setdata({ ...data, email: e.target.value })}
            />

            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative w-full">
              <PhoneInput
                required
                international
                defaultCountry="AU"
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
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
