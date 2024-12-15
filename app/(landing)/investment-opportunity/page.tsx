"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CircleAlert,
  Mail,
  MapPin,
  RotateCcw,
  Sailboat,
  Sun
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import CountrySelect from "@/components/form/country-select";
import RegionSelect from "@/components/form/region-select";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const VillaInvestmentLanding = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-900/10 to-white">
      <div className="w-full">
        <Image
          src="https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu"
          alt="Poolside View of Golden Retreat Lombok Villa"
          width={2000}
          height={2000}
          loading="eager"
          className="w-full h-full md:h-[50vh] lg:h-full aspect-video object-cover lg:object-contain"
        />
      </div>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-yellow-900 mb-4">
            Paradise Should Never Be Out of Reach
          </h1>
          <p className="text-xl text-stone-900 max-w-2xl mx-auto font-sans uppercase font-bold">
            Exclusive Luxury Villas
          </p>
          <p className="text-lg text-stone-900/50 max-w-2xl mx-auto font-sans uppercase">
            Just 45 mins from Bali
          </p>
        </header>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="space-y-6 lg:pt-10">
              <div className="flex items-start space-x-4">
                <Sailboat className="text-blue-600 min-w-6 min-h-6" />
                <div>
                  <h3 className="text-2xl font-bold text-yellow-900">
                    Unparalleled Location
                  </h3>
                  <p className="text-stone-900 font-sans">
                    33 meticulously designed luxury villas nestled in a tropical
                    paradise, just a short boat ride from the island of Bali and
                    famous Gili Islands.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Sun className="text-yellow-500 min-w-6 min-h-6" />
                <div>
                  <h3 className="text-2xl font-bold text-yellow-900">
                    Investment Opportunity
                  </h3>
                  <p className="text-stone-900 font-sans">
                    Seize the opportunity to own a piece of paradise. This
                    high-end development is both an investment with significant
                    potential gains and a personal luxury retreat.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-green-600 min-w-6 min-h-6" />
                <div>
                  <h3 className="text-2xl font-bold text-yellow-900">
                    Prime Real Estate
                  </h3>
                  <p className="text-stone-900 font-sans">
                    Strategically located in one of Southeast Asia’s most sought
                    after regions, Lombok’s rising star as the next Bali is
                    poised to soar even higher.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 py-6">
                {/*                 <CircleAlert className="text-red-600 min-w-6 min-h-6" />
                 */}{" "}
                <div>
                  <p className="text-lg text-stone-900 max-w-2xl font-bold mx-auto font-sans uppercase">
                    Limited Units, Enquire Now!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-yellow-900/20 shadow-xl border border-yellow-900/50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-left text-yellow-900">
              Find Out More
            </h2>
            <form
              onSubmit={sendEmail}
              className="flex flex-col lg:grid grid-cols-1 gap-16 font-sans py-6 px-0"
            >
              <div className="flex flex-col gap-4 px-4 border border-y-0 border-r-0 border-beige relative rounded-xl max-h-fit">
                {/* <p className="font-sans font-thin text-lg absolute -top-4 px-2 rounded-full">
                  Your Interest
                </p> */}
                <Label
                  htmlFor="purpose"
                  className="flex flex-row gap-4 pt-4 items-center justify-between"
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
                <div>
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
                      onChange={(e) =>
                        setdata({ ...data, name: e.target.value })
                      }
                    />
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={data.email}
                      onChange={(e) =>
                        setdata({ ...data, email: e.target.value })
                      }
                    />
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative w-full">
                      <PhoneInput
                        international
                        defaultCountry="AU"
                        value={data.phone}
                        onChange={(e: any) => {
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
                    <Label htmlFor="country">Country</Label>
                    <CountrySelect
                      className="mb-4 font-mono"
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
                          countryCode={countryCode}
                        ></RegionSelect>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-4 pt-6 px-4">
                    <Button
                      type="submit"
                      variant={"outline"}
                      className="text-lg rounded-full h-14"
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Submit"}
                    </Button>
                    <p className="text-xs italic font-sans text-stone-800">
                      *We value your privacy. Your information will not be
                      shared with third parties.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-stone-900 font-sans">
          <p>© 2024 Golden Retreat International. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default VillaInvestmentLanding;
