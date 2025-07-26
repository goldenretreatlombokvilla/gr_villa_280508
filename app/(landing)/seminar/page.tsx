"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Coffee,
  CheckCircle2,
  MessageCircle,
  ArrowDownCircle,
  Phone,
  FileText,
  Mail,
  User
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Recaptcha from "@/components/recaptcha";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const SeminarLanding = () => {
  const handleRecaptchaVerify = (token: string) => {
    console.log("Recaptcha token:", token);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  /*  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Registration Successful!",
        description: "We'll see you at the seminar."
      });
      setIsLoading(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 1500);
  }; */

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch("/api/seminar-lead", {
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
      setIsLoading(false);
      setdata({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      window.location.href = "/thankyou";
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige/10 to-white">
      {/* Hero Section with CTA */}
      <div className="relative w-full">
        <Image
          src="https://utfs.io/f/dJLJpH9Hrkw3pXyUf0A8fDXoAL2Jay9kEY7gbmpj3CvcG0Pu"
          alt="Discovery Seminar"
          width={1920}
          height={1080}
          loading="eager"
          className="w-full h-screen object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-balance">
              Discovery Seminar
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-sans text-balance">
              Join us for an insightful session on an investment opportunity.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mx-auto">
              <Link href="#register">
                <Button
                  variant={"default"}
                  size="lg"
                  className="text-lg justify-between gap-4 opacity-100 w-72 font-sans"
                >
                  <User className="w-4 h-4 text-white" /> Register Now
                </Button>
              </Link>

              <Link href="#details">
                <Button
                  variant={"outline"}
                  size="lg"
                  className="text-lg justify-between gap-4 opacity-100 w-72 font-sans bg-transparent text-white border-white hover:bg-white/20"
                >
                  <FileText className="w-4 h-4 text-white" />
                  Event Details
                </Button>
              </Link>
            </div>
            <p className="font-sans py-6">
              Starting at<span className="font-bold"> USD 162,000</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Event Details */}
        <div
          id="details"
          className="flex flex-col min-h-[50vh] items-center justify-center py-16"
        >
          <h2 className="text-3xl font-bold mb-12 text-yellow-900">
            Event Details
          </h2>

          {/* Event Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-yellow-900 stroke-1 fill-yellow-900/10" />
              <p className="font-bold text-xl mb-2">Date</p>
              <p className="font-sans">
                3 May 2025<br></br> Saturday
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-900 stroke-1 fill-yellow-900/10" />
              <p className="font-bold text-xl mb-2">Time</p>
              <p className="font-sans">
                3:00 PM <br></br>Start Time
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-yellow-900 stroke-1 fill-yellow-900/10" />
              <p className="font-bold text-xl mb-2">Venue</p>
              <p className="font-sans">
                Concorde Hotel, <br></br>Kuala Lumpur
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <Coffee className="w-12 h-12 mx-auto mb-4 text-yellow-900 stroke-1 fill-yellow-900/10" />
              <p className="font-bold text-xl mb-2">Refreshments</p>
              <p className="font-sans">
                Coffee/Tea + <br></br>Light Refreshments
              </p>
            </div>
          </div>
        </div>

        {/* About the Seminar */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <p className="text-xl text-yellow-900 uppercase">About the Seminar</p>
          <p className="text-4xl font-extrabold text-yellow-900 leading-tight">
            Discovery Seminar
          </p>
          <div className="grid md:grid-cols-2 gap-8 font-sans py-4">
            <div>
              <p className="text-md mb-4">
                Join us for an exclusive seminar where we will go through the
                project details, your investment opportunity and special launch
                prices.
              </p>
              <ul className="space-y-4 text-md font-semibold">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-600 mr-2" />
                  Property Overview
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-600 mr-2" />
                  Lombok, A Tropical Paradise
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-600 mr-2" />
                  Investment & Building Schedule
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-600 mr-2" />
                  Q&A session
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://utfs.io/f/dJLJpH9Hrkw3wcK398eUX3BuqFPzTD5Kh1H9QyUilcWfbY6d"
                alt="Seminar Preview"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        {/* <div className="container bg-yellow-900/10 px-8 lg:px-32 py-8 max-w-md lg:max-w-full rounded-xl shadow-lg mb-20 mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-yellow-900">
            What You'll Learn
          </h3>
          <ul className="space-y-4 text-md font-semibold font-sans">
            <li className="flex items-center group">
              <CheckCircle2 className="h-6 w-6 mr-4 group-hover:text-green-800 text-green-500 transition duration-300 ease-in-out" />
              Market trends and investment opportunities
            </li>
            <li className="flex items-center group">
              <CheckCircle2 className="h-6 w-6 mr-4 group-hover:text-green-800 text-green-500 transition duration-300 ease-in-out" />
              Strategies for portfolio diversification
            </li>
            <li className="flex items-center group">
              <CheckCircle2 className="h-6 w-6 mr-4 group-hover:text-green-800 text-green-500 transition duration-300 ease-in-out" />
              Risk management techniques
            </li>
            <li className="flex items-center group">
              <CheckCircle2 className="h-6 w-6 mr-4 group-hover:text-green-800 text-green-500 transition duration-300 ease-in-out" />
              Long-term wealth building approaches
            </li>
            <li className="flex items-center group">
              <CheckCircle2 className="h-6 w-6 mr-4 group-hover:text-green-800 text-green-500 transition duration-300 ease-in-out" />
              Exclusive investment opportunities
            </li>
          </ul>
        </div> */}

        {/* Location */}
        <section className="grid md:grid-cols-2 gap-12 px-8 lg:px-32 py-16 bg-white rounded-xl shadow-lg mb-16">
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-center gap-2">
              <MapPin className="text-yellow-900 w-8 h-8" />
              <h3 className="text-3xl font-bold text-yellow-900">
                Venue Location
              </h3>
            </div>

            <div className="bg-yellow-900/10 p-6 rounded-xl flex flex-col gap-2 py-6">
              <h4 className="font-bold flex flex-row items-center gap-2 text-xl text-yellow-900">
                <MapPin className="w-4 h-4 text-yellow-900" /> Address
              </h4>
              <p className="text-gray-700 font-sans">
                Concorde Hotel, 2 Jalan Sultan Ismail, 50250 Kuala Lumpur,
                Malaysia
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.769843049252!2d101.7033060749712!3d3.155287796820093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc482a3d602131%3A0x6473062a3b5dad97!2sConcorde%20Hotel%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1744675745284!5m2!1sen!2smy"
              width="600"
              height="450"
              className="w-full h-[500px] rounded-2xl shadow-lg"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Limited Seats Banner */}
        <div className="bg-yellow-600/80 text-white p-6 rounded-lg text-center mt-8 mb-10">
          <p className="text-xl font-bold">Limited Seats Available!</p>
          <p className="font-sans px-12 mt-2">
            <span className="font-bold">
              Register now to secure our<br></br> Special Launch Promotion!
            </span>
          </p>
        </div>

        {/* Registration Form */}
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY || ""}
          language="en"
        >
          <div
            id="register"
            className="bg-white rounded-xl shadow-lg p-8 mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-yellow-900">
              Register for the Seminar
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={data.name}
                    onChange={(e) => setdata({ ...data, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={(e) =>
                      setdata({ ...data, email: e.target.value })
                    }
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={data.phone}
                  onChange={(e) => setdata({ ...data, phone: e.target.value })}
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">
                  Questions or Comments (Optional)
                </Label>
                <Textarea
                  id="message"
                  value={data.message}
                  onChange={(e) =>
                    setdata({ ...data, message: e.target.value })
                  }
                  placeholder="Any specific topics you'd like us to cover?"
                  rows={4}
                />
              </div>
              <Recaptcha onVerify={handleRecaptchaVerify} />
              <Button
                type="submit"
                className="w-full py-6 text-lg"
                disabled={isLoading}
              >
                {isLoading ? "Registering..." : "Register Now"}
              </Button>
              <p className="text-center text-sm text-gray-500 font-sans">
                By registering, you agree to receive communications about this
                and future events.
              </p>
            </form>
          </div>
        </GoogleReCaptchaProvider>
      </div>
    </div>
  );
};

export default SeminarLanding;
