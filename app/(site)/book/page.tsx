"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import {
  CalendarIcon,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PhoneInputComp from "@/components/form/phone-input";
import { Button } from "@/components/ui/button";
import { DateTimePicker } from "@/components/form/datetime";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { EmailTemplate } from "@/components/form/email-template";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

export default function Bookacall() {
  const [date, setDate] = React.useState<Date>();

  const [isOpen, setIsOpen] = React.useState(false);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (
    type: "hour" | "minute" | "ampm",
    value: string
  ) => {
    if (date) {
      const newDate = new Date(date);
      if (type === "hour") {
        newDate.setHours(
          (parseInt(value) % 12) + (newDate.getHours() >= 12 ? 12 : 0)
        );
      } else if (type === "minute") {
        newDate.setMinutes(parseInt(value));
      } else if (type === "ampm") {
        const currentHours = newDate.getHours();
        newDate.setHours(
          value === "PM" ? currentHours + 12 : currentHours - 12
        );
      }
      setDate(newDate);
      setUserInput({
        ...userInput,
        datetime: format(newDate, "PPPPpppp")
      });
    }
  };
  const { toast } = useToast();
  const [userInput, setUserInput] = useState({
    email: "",
    datetime: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
    console.log(userInput);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    try {
      const emailParams = {
        email: userInput.email,
        datetime: userInput.datetime
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        {
          email: emailParams.email,
          datetime: emailParams.datetime
        },
        userID
      );

      if (res.status === 200) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully."
        });
        setUserInput({
          email: "",
          datetime: ""
        });
        setDate(undefined);
      }
    } catch (error) {
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again."
      });
    }
  };
  return (
    <main>
      <div className=" py-6 px-8 flex flex-row gap-6 items-center md:justify-start justify-between w-full sticky top-0 z-40">
        <Link
          href="/"
          className="flex flex-row gap-8 items-center justify-center"
        >
          <Image
            src="/brand/logo_icon.png"
            alt="Golden Retreat Lombok Villa"
            width={200}
            height={200}
            className="w-10 h-10 object-contain aspect-square drop-shadow-sm"
          />
        </Link>
        <h1 className="sr-only text-xl font-sans text-yellow-800 pt-1 font-light">
          Book A Call
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full px-8 max-w-6xl mx-auto py-10 lg:py-20">
        <div className="flex flex-col gap-8 items-center justify-start">
          <p className="text-5xl lg:text-7xl font-extrabold text-yellow-900 font-cinzel">
            Book A Discovery Call
          </p>
          <p className="text-sm font-sans text-balance text-stone-800">
            Select your preferred date and time, and our in-house team will be
            happy to answer any questions you might have.
          </p>
          <div className="hidden lg:flex flex-row py-20 items-end justify-start gap-8">
            <Facebook className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
            <Instagram className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
            <Linkedin className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
            <Youtube className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
          </div>
        </div>
        {/*New Form */}
        <Card className="flex flex-col w-full lg:col-start-2 bg-transparent border-none shadow-none p-0 mt-20 lg:mt-0">
          <CardContent className="p-0">
            <form
              className="flex flex-col gap-4 font-sans py-6 px-0"
              onSubmit={handleSubmit}
            >
              {/* Date & Time Input */}
              <Label htmlFor="date-time">
                Date & Time{" "}
                <Badge variant="default" className="ml-2">
                  GMT +08:00
                </Badge>
              </Label>
              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-left font-normal h-12 px-6 py-1 rounded-full border-none bg-stone-50 hover:bg-stone-50 font-mono",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "PP p O")
                    ) : (
                      <span>MM/DD/YYYY hh:mm aa</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  side="bottom"
                  className="w-auto p-0"
                >
                  <div className="sm:flex">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateSelect}
                      disabled={{ before: new Date() }}
                      modifiersClassNames={{
                        selected: "border border-yellow-600 text-yellow-600",
                        today: "bg-yellow-900/10"
                      }}
                      initialFocus
                    />
                    <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x font-mono">
                      <p className="mx-auto pb-2 text-sm block lg:hidden">
                        Time (GMT +8:00)
                      </p>
                      <ScrollArea className="w-64 sm:w-auto">
                        <div className="flex sm:flex-col p-2">
                          {hours.reverse().map((hour) => (
                            <Button
                              key={hour}
                              size="icon"
                              variant={
                                date && date.getHours() % 12 === hour % 12
                                  ? "outline"
                                  : "ghost"
                              }
                              className="sm:w-full shrink-0 aspect-square"
                              onClick={() =>
                                handleTimeChange("hour", hour.toString())
                              }
                            >
                              {hour}
                            </Button>
                          ))}
                        </div>
                        <ScrollBar
                          orientation="horizontal"
                          className="sm:hidden"
                        />
                      </ScrollArea>
                      <ScrollArea className="w-64 sm:w-auto">
                        <div className="flex sm:flex-col p-2">
                          {Array.from({ length: 4 }, (_, i) => i * 15).map(
                            (minute) => (
                              <Button
                                key={minute}
                                size="icon"
                                variant={
                                  date && date.getMinutes() === minute
                                    ? "outline"
                                    : "ghost"
                                }
                                className="sm:w-full shrink-0 aspect-square"
                                onClick={() =>
                                  handleTimeChange("minute", minute.toString())
                                }
                              >
                                {minute}
                              </Button>
                            )
                          )}
                        </div>
                        <ScrollBar
                          orientation="horizontal"
                          className="sm:hidden"
                        />
                      </ScrollArea>
                      <ScrollArea className="">
                        <div className="flex sm:flex-col p-2">
                          {["AM", "PM"].map((ampm) => (
                            <Button
                              key={ampm}
                              size="icon"
                              variant={
                                date &&
                                ((ampm === "AM" && date.getHours() < 12) ||
                                  (ampm === "PM" && date.getHours() >= 12))
                                  ? "outline"
                                  : "ghost"
                              }
                              className="sm:w-full shrink-0 aspect-square"
                              onClick={() => handleTimeChange("ampm", ampm)}
                            >
                              {ampm}
                            </Button>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Input
                name="datetime"
                value={userInput.datetime}
                onChange={handleChange}
                type="hidden"
              />
              {/*  Email Input  */}
              <Label htmlFor="email" className="mt-4">
                E-mail
              </Label>
              <Input
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                required
              />
              <div className="flex items-center space-x-2 px-6 ">
                <Checkbox id="contact" />
                <label
                  htmlFor="contact"
                  className="text-sm font-normal leading-none opacity-70"
                >
                  I agree to be contacted at the selected date and time
                </label>
              </div>
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
    </main>
  );
}
