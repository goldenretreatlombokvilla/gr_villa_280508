"use client";

import * as React from "react";
import { useState } from "react";

import {
  Facebook,
  Instagram,
  Linkedin,
  RotateCcw,
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
import CountrySelect from "./form/country-select";
import RegionSelect from "./form/region-select";

export default function Book() {
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [countryCode, setCountryCode] = useState("");
  const [regionCode, setRegionCode] = useState("");
  const [regionshow, setRegionShow] = useState(false);
  const [infoShow, setInfoShow] = useState(false);

  function handleCountryChange(value: any) {
    setRegionShow(true);
    setCountryCode(value);
    setdata({ ...data, countryCode: value });
  }

  function handleRegionChange(value: any) {
    setRegionCode(value);
    setdata({ ...data, regionCode: value });
  }

  const [data, setdata] = useState({
    name: "",
    email: "",
    purpose: "",
    type: "",
    time: "",
    phone: "",
    countryCode: "",
    regionCode: ""
  });

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch("/api/ad-lead", {
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
      purpose: "",
      type: "",
      time: "",
      phone: "",
      countryCode: "",
      regionCode: ""
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:py-40 bg-yellow-900/10 items-start justify-start lg:px-20 xl:px-52 px-8 py-20">
      <div className="flex flex-col gap-4">
        <p className="text-5xl lg:text-7xl font-extrabold text-yellow-900 font-cinzel">
          Book A Discovery Call
        </p>
        <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide flex flex-col uppercase text-yellow-900/50">
          Have Questions?
        </p>
        <p className="text-sm font-sans text-balance">
          Schedule a one on one call with our in-house team of professionals
          today.
        </p>
      </div>
      <Card className="flex flex-col w-full  bg-transparent border-none shadow-none p-0">
        <CardContent className="p-0">
          <form
            onSubmit={sendEmail}
            className="flex flex-col lg:grid grid-cols-1 gap-16 font-sans py-6 px-0"
          >
            <div className="flex flex-col gap-4 pt-8 px-4 border border-y-0 border-r-0 border-beige relative rounded-xl max-h-fit">
              <p className="font-sans font-thin text-lg absolute -top-4 px-2 rounded-full">
                Your Interest
              </p>
              <Label
                htmlFor="purpose"
                className="flex flex-row gap-4 items-center justify-between"
              >
                Purpose
                {data.purpose !== "" && (
                  <RotateCcw
                    onClick={() => setdata({ ...data, purpose: "" })}
                    className="w-4 h-4 text-black/50 cursor-pointer"
                  />
                )}
              </Label>
              <Select
                value={data.purpose}
                required={true}
                onValueChange={(e) => setdata({ ...data, purpose: e })}
              >
                <SelectTrigger className="w-full font-mono mb-4">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  className=" font-mono bg-black text-white"
                  position="popper"
                >
                  <SelectGroup className="flex flex-col gap-4 px-4 py-2">
                    <SelectItem value="self-stay">Self Stay</SelectItem>
                    <SelectItem value="investment">
                      Investment Property
                    </SelectItem>
                    <SelectItem value="self-stay-investment">
                      Self Stay & Investment Property
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Label
                htmlFor="type"
                className="flex flex-row gap-4 items-center justify-between"
              >
                Interested Model
                {data.type !== "" && (
                  <RotateCcw
                    onClick={() => setdata({ ...data, type: "" })}
                    className="w-4 h-4 text-black/50 cursor-pointer"
                  />
                )}
              </Label>
              <Select
                value={data.type}
                required
                onValueChange={(e) => setdata({ ...data, type: e })}
              >
                <SelectTrigger className="w-full font-mono mb-4">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  className=" font-mono bg-black text-white"
                  position="popper"
                >
                  <SelectGroup className="flex flex-col gap-4 px-4 py-2">
                    <SelectItem value="2-bedroom">
                      Superior - 2 Bedroom Villa
                    </SelectItem>
                    <SelectItem value="3-bedroom">
                      Premium - 3 Bedroom Villa
                    </SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Label
                htmlFor="time"
                className="flex flex-row gap-4 items-center justify-between"
              >
                Prefered Time Of Contact
                {data.time !== "" && (
                  <RotateCcw
                    onClick={() => setdata({ ...data, time: "" })}
                    className="w-4 h-4 text-black/50 cursor-pointer"
                  />
                )}
              </Label>
              <Select
                value={data.time}
                required
                onValueChange={(e) => setdata({ ...data, time: e })}
              >
                <SelectTrigger className="w-full font-mono mb-4">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  className=" font-mono bg-black text-white"
                  position="popper"
                >
                  <SelectGroup className="flex flex-col gap-4 px-4 py-2">
                    <SelectItem value="Morning">Morning</SelectItem>
                    <SelectItem value="Afternoon">Afternoon</SelectItem>
                    <SelectItem value="Evening">Evening</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {data.time !== "" && data.type !== "" && data.purpose !== "" && (
              <div className="flex flex-col gap-4 pt-8 px-4 border border-y-0 border-r-0 border-beige relative rounded-xl">
                <p className="font-sans font-thin text-lg absolute -top-4 px-2 rounded-full">
                  Your Information
                </p>
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
                <Label>Country</Label>
                <CountrySelect
                  className="mb-4  font-mono"
                  onChange={(value) => handleCountryChange(value)}
                  priorityOptions={["AU", "CN", "GB", "MY", "RU", "SG"]}
                  placeholder="Select Country"
                ></CountrySelect>
                {/*  <Input
                type="hidden"
                name="countryCode"
                value={countryCode}
                onChange={(e) =>
                  setdata({ ...data, countryCode: e.target.value })
                }
              /> */}
                {regionshow !== false && (
                  <div>
                    <Label>Region</Label>
                    <RegionSelect
                      onChange={(value) => handleRegionChange(value)}
                      className="my-4"
                      placeholder="Select Country First"
                      countryCode={countryCode}
                    ></RegionSelect>
                  </div>
                )}
              </div>
            )}
            <div className="flex flex-col gap-4 -mt-10">
              <Button
                type="submit"
                variant={"outline"}
                className="text-lg rounded-full h-14"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
              <p className="text-xs italic font-sans text-stone-800">
                *We value your privacy. Your information will not be shared with
                third parties.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
