import { link } from "fs";
import {
  DownloadIcon,
  Facebook,
  Inbox,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger
} from "../ui/dialog";
import Cta from "../cta";
import Bookacall from "../bookcall";

const navCorp = [
  {
    name: "About Us",
    link: "/about"
  },
  /* {
    name: "Developer Profile",
    link: "/about"
  },
  {
    name: "Management Profile",
    link: "/about"
  }, */
  {
    name: "Contact Us",
    link: "/contact"
  },
  {
    name: "Privacy Policy",
    link: "/privacypolicy"
  }
];

const navServices = [
  {
    name: "Opportunity",
    link: "/invest"
  },
  {
    name: "Destination Lombok",
    link: "/lombok"
  },
  {
    name: "Book A Call",
    link: "/book"
  }
];

const navResources = [
  {
    name: "Villas",
    link: "/villas"
  },
  {
    name: "Site Plan",
    link: "/villas"
  },
  {
    name: "Gallery",
    link: "/gallery"
  }
];

export default function Footer() {
  return (
    <footer className="flex flex-col px-10 gap-4 py-8 pt-14 bg-beige text-white lg:px-52">
      {/* 1sd Level */}
      <div className="hidden lg:flex sticky bottom-0 z-50 shadow-xl">
        <div className="flex flex-row gap-4 items-center justify-between max-h-100 w-full lg:max-w-[75vw] mx-auto bg-black  bottom-10 left-0 right-0 fixed px-10 py-4 lg:px-4 lg:pl-12 rounded-full">
          <div className="flex flex-row gap-2 items-center justify-start">
            <MapPin className="w-4 h-4 text-yellow-500 opacity-80" />
            <p className="text-sm italic font-serif font-semibold opacity-80">
              Teluk Kode, <span className="font-normal">Lombok</span>
            </p>
          </div>
          <div className="md:flex flex-row gap-2 items-center justify-start hidden">
            <p className="text-md italic font-serif text-secondary opacity-80">
              Limited Villas Available{" "}
              <span className="font-bold">Invest Now!</span>
            </p>
          </div>
          <div className="flex flex-row gap-2 lg:gap-8 text-secondary items-center justify-center">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href="https://utfs.io/f/dJLJpH9Hrkw34oSPs1NiILXvxRHuJgz8cqy2TD5QokmWfjNe"
                    target="_blank"
                    className="hidden md:flex opacity-50 hover:opacity-100"
                  >
                    <DownloadIcon className="w-4 h-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-black rounded-full shadow-sm shadow-yellow-500 py-1 px-6 text-sm ">
                  <p className="text-sm font-sans">Info Pack</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/contact"
                    className="hidden md:flex opacity-50 hover:opacity-100"
                  >
                    <Mail className="w-4 h-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-black rounded-full shadow-sm shadow-yellow-500 py-1 px-6 text-sm  mr-4">
                  <p className="text-sm font-sans">Contact Us</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Link href="/book">
              <Button variant="default" className="rounded-full">
                <Phone className="w-4 h-4" />
                Book A Call
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 2nd Level */}
      <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr_1fr_1fr] gap-10 items-start justify-center pb-8">
        <div className="flex flex-col gap-2">
          <p className="text-4xl font-serif font-bold text-balance">
            Golden Retreat<br></br>Lombok Villa
          </p>
          <p className="text-sm font-sans text-balance">
            A property development offering luxurious Villas set in the heart of
            Lombok’s best attractions. With private pools, and exquisite
            interiors, each Villa is designed for the ultimate in luxury island
            living.
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-xl font-serif font-bold ">The Villas</p>
          <ul className="list-none space-y-2">
            {navResources.map((item: any) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="text-sm font-sans opacity-70 hover:opacity-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-xl font-serif font-bold ">Investment</p>
          <ul className="list-none space-y-2">
            {navServices.map((item: any) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="text-sm font-sans opacity-70 hover:opacity-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-xl font-serif font-bold ">The Company</p>
          <ul className="list-none space-y-2">
            {navCorp.map((item: any) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="text-sm font-sans opacity-70 hover:opacity-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="opacity-50 py-4"></hr>
      <div className="flex flex-row gap-4 items-center font-sans justify-between lg:pb-24">
        <p className="text-sm">
          © Golden Retreat Lombok Villa 2024 | All Rights Reserved
        </p>
        <div className="hidden lg:flex flex-row gap-4">
          <Facebook className="min-w-4 min-h-4 stroke-1  hover:text-yellow-900" />
          <Instagram className="min-w-4 min-h-4 stroke-1  hover:text-yellow-900" />
          <Linkedin className="min-w-4 min-h-4 stroke-1  hover:text-yellow-900" />
          <Youtube className="min-w-4 min-h-4 stroke-1  hover:text-yellow-900" />
        </div>
      </div>
    </footer>
  );
}
