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
import { redirect } from "next/navigation";
import Book from "@/components/book";
import BookJourney from "@/components/book-journey";

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

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
    console.log(userInput);
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInput)
    });
    console.log(res);
    setUserInput({
      datetime: "",
      email: ""
    });
    setDate(new Date());
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
    <main>
      <BookJourney />
    </main>
  );
}
