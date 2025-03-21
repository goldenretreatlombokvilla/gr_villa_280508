"use client";

import * as React from "react";
import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Home,
  Building,
  User,
  Clock
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
import CountrySelect from "./form/country-select";
import RegionSelect from "./form/region-select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function BookJourney() {
  const [step, setStep] = useState(1);
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [regionCode, setRegionCode] = useState("");
  const [regionshow, setRegionShow] = useState(false);

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

  const purpose = [
    { id: 1, title: "Self Stay", value: "selfstay" },
    { id: 2, title: "Investment Property", value: "investment" },
    { id: 3, title: "Agent", value: "agent" },
    { id: 4, title: "Both", value: "both" }
  ];
  const models = [
    { id: 1, title: "2 Bedroom Villa", value: "2-bed" },
    { id: 2, title: "3 Bedroom Villa", value: "3-bed" }
  ];

  function handleCountryChange(value: any) {
    setRegionShow(true);
    setCountryCode(value);
    setdata({ ...data, countryCode: value });
  }

  function handleRegionChange(value: any) {
    setRegionCode(value);
    setdata({ ...data, regionCode: value });
  }

  const canProceedToStep2 = data.purpose && data.type;
  const canSubmit =
    data.name &&
    data.email &&
    data.phone &&
    data.time &&
    isValid &&
    data.countryCode;

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
      window.location.href = "/thankyou";
    }
    setIsLoading(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:py-40 bg-yellow-900/10 items-start justify-start lg:px-20 px-8 py-20">
      <div className="flex flex-col gap-2">
        <p className="text-5xl lg:text-7xl font-extrabold text-yellow-900 font-cinzel text-balance leading-relaxed">
          Instant Call Back
        </p>
        {/*  <p className="font-cinzel text-xl lg:text-2xl font-extrabold tracking-wide uppercase text-yellow-900/50">
          Have Questions?
        </p>
        */}
        <p className="text-md text-stone-900/70 font-sans">
          Get a one-on-one call with our in-house team of professionals now.
          Will reply within 5 minutes of submitting form.
        </p>

        {/* Progress Indicator */}
        <div className="flex items-center gap-4 mt-8">
          <p className="text-md text-yellow-900/70">Step {step} of 2</p>
          <div
            className={`h-2 rounded-full flex-1 ${
              step >= 1 ? "bg-yellow-900" : "bg-yellow-900/20"
            }`}
          />
          <div
            className={`h-2 rounded-full flex-1 ${
              step >= 2 ? "bg-yellow-900" : "bg-yellow-900/20"
            }`}
          />
        </div>
      </div>

      <Card className="flex flex-col w-full bg-white shadow-lg border-yellow-900/20">
        <CardContent className="p-8">
          <form onSubmit={sendEmail} className="space-y-8">
            {step === 1 && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-yellow-900 mb-6">
                    <Home className="w-5 h-5" />
                    <h2 className="text-xl font-bold">Your Interest</h2>
                  </div>

                  <div className="space-y-2 font-sans px-4">
                    <div className="flex flex-col gap-2 pb-2">
                      <Label>Purchase Interest</Label>
                      <p className="text-sm text-stone-900/50 font-sans font-normal">
                        What type of purchase are you interested in?
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 font-sans">
                      <RadioGroup
                        value={data.purpose}
                        required
                        onValueChange={(e) => setdata({ ...data, purpose: e })}
                      >
                        <div className="grid grid-cols-1 gap-2">
                          {purpose.map((item) => (
                            <div
                              className="flex items-center space-x-2 py-4 px-4 border border-stone-900 rounded-full"
                              key={item.id}
                            >
                              <RadioGroupItem
                                value={item.value}
                                id={item.value}
                              />
                              <Label
                                htmlFor={item.value}
                                className="font-medium"
                              >
                                {item.title}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="space-y-2 font-sans px-4">
                    <div className="flex flex-col gap-2 pt-4 pb-2">
                      <Label>Villa Model Type</Label>
                      <p className="text-sm text-stone-900/50 font-sans font-normal">
                        Which villa model are you interested in?
                      </p>
                    </div>
                    <div className="flex flex-col gap-4font-sans">
                      <RadioGroup
                        value={data.type}
                        required
                        onValueChange={(e) => setdata({ ...data, type: e })}
                      >
                        <div className="grid grid-cols-1 gap-2">
                          {models.map((item) => (
                            <div
                              className="flex items-center space-x-2 py-4 px-4 border border-stone-900 rounded-full"
                              key={item.id}
                            >
                              <RadioGroupItem
                                value={item.value}
                                id={item.value}
                              />
                              <Label
                                htmlFor={item.value}
                                className="font-medium"
                              >
                                {item.title}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                <Button
                  type="button"
                  className="w-full"
                  disabled={!canProceedToStep2}
                  onClick={() => setStep(2)}
                >
                  Next
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-yellow-900 mb-6">
                    <User className="w-5 h-5" />
                    <h2 className="text-xl font-bold">Your Information</h2>
                  </div>

                  <div className="space-y-2 px-4">
                    <Label>Full Name</Label>
                    <Input
                      required
                      value={data.name}
                      onChange={(e) =>
                        setdata({ ...data, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2 px-4">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      required
                      value={data.email}
                      onChange={(e) =>
                        setdata({ ...data, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2 px-4">
                    <Label>WhatsApp Number</Label>
                    <PhoneInput
                      international
                      defaultCountry="AU"
                      value={data.phone}
                      onChange={(e: any) => {
                        setdata({ ...data, phone: e || "" });
                        setIsValid(!!e && e.length > 8);
                      }}
                      className={cn(
                        "flex h-12 w-full rounded-full border border-stone-900 bg-white px-4 py-2 text-sm ring-offset-background font-sans"
                      )}
                    />
                    {data.phone && !isValid && (
                      <p className="text-xs text-red-500">
                        Please enter a valid phone number
                      </p>
                    )}
                  </div>

                  <div className="space-y-2 px-4">
                    <Label>Location</Label>
                    <CountrySelect
                      onChange={handleCountryChange}
                      priorityOptions={["AU", "CN", "GB", "MY", "RU", "SG"]}
                      placeholder="Select Country"
                    />
                    {regionshow && (
                      <RegionSelect
                        onChange={handleRegionChange}
                        countryCode={countryCode}
                      />
                    )}
                  </div>

                  <div className="space-y-2 px-4">
                    <Label>Preferred Time of Contact</Label>
                    <Select
                      value={data.time}
                      required
                      onValueChange={(e) => setdata({ ...data, time: e })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Morning">Morning</SelectItem>
                          <SelectItem value="Afternoon">Afternoon</SelectItem>
                          <SelectItem value="Evening">Evening</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="default"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    <ChevronLeft className="mr-2 w-4 h-4" /> Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={!canSubmit || isLoading}
                    className="flex-1"
                  >
                    {isLoading ? "Submitting..." : "Submit Enquire"}
                  </Button>
                </div>
              </div>
            )}
          </form>

          <p className="text-xs font-sans text-stone-900/70 mt-6 text-left">
            *We value your privacy. Your information will not be shared with
            third parties.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
