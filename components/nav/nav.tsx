"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import {
  ArrowRight,
  ArrowRightCircle,
  Facebook,
  Inbox,
  Instagram,
  Linkedin,
  Menu,
  PanelRightOpen,
  Phone,
  Plus,
  Send,
  Youtube
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../ui/sheet";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { link } from "fs";

const navItems = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Villas",
    link: "/villas"
  },
  {
    name: "Gallery",
    link: "/gallery"
  },
  { name: "About Us", link: "/about" },
  {
    name: "Investment",
    link: "/invest"
  }
];

const facilities = [
  {
    name: "Pool Club",
    link: "/villa"
  },
  {
    name: "Wellness Spa",
    link: "/villa"
  },
  {
    name: "Restaurant",
    link: "/villa"
  },
  {
    name: "Bar & Lounge",
    link: "/villa"
  },
  {
    name: "Amphiteatre",
    link: "/villa"
  }
];

const links = [
  {
    name: "Destination Lombok",
    link: "/lombok"
  },
  {
    name: "Presentation Deck",
    link: "/dashboard/presentation"
  },
  {
    name: "Booking Form",
    link: "/"
  },
  {
    name: "Contact Us",
    link: "/contact"
  }
];

export default function Nav() {
  return (
    <nav className="flex flex-row items-center justify-end w-full mx-auto lg:px-8 max-h-[80px] px-2 absolute md:top-0 bottom-0 z-50 h-32 bg-transparent">
      {/* <Link href="/">
        <Image
          className="w-12 h-12 object-contain drop-shadow-sm"
          src="/brand/logo_icon.png"
          alt="Golden Retreat Lombok Villa"
          width={200}
          height={200}
          priority
        />
      </Link> */}
      <div className="hidden flex-row items-center justify-end gap-0 w-full">
        {navItems.map((item: any) => (
          <Link href={item.link} key={item.name}>
            <Button key={item.name} variant="link">
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
      <div className="flex flex-row items-center justify-end gap-10">
        {/* <div className="hidden lg:flex flex-row gap-4">
          <Facebook className="min-w-4 min-h-4 stroke-1 text-yellow-600 hover:text-yellow-400" />
          <Instagram className="min-w-4 min-h-4 stroke-1 text-yellow-600 hover:text-yellow-400" />
          <Linkedin className="min-w-4 min-h-4 stroke-1 text-yellow-600 hover:text-yellow-400" />
          <Youtube className="min-w-4 min-h-4 stroke-1 text-yellow-600 hover:text-yellow-400" />
        </div> */}
        {/*   <Button
          variant={"outline"}
          className="border-yellow-600 text-yellow-600 tracking-wider hover:bg-gradient-to-tl hover:from-yellow-800 hover:to-yellow-500 hover:text-white hover:border-transparent hover:shadow-lg lg:flex hidden font-sans uppercase"
        >
          Enquire
        </Button> */}
        <div className="fixed p-2">
          <Sheet>
            <SheetTrigger asChild>
              <div className="p-2 bg-stone-900 rounded-full ring-1 ring-stone-300/20 hover:ring-yellow-600 group">
                <Menu className="min-w-6 min-h-6 text-white group-hover:text-yellow-600 opacity-70 stroke-2 hover:opacity-100" />
              </div>
            </SheetTrigger>
            <SheetContent
              className="flex flex-col gap-4 items-start border-none bg-stone-900 text-white pt-10"
              style={{ minWidth: "30vw" }}
            >
              <div className="flex flex-row gap-0 px-4 items-center justify-start">
                <SheetClose asChild>
                  <Link href="/" prefetch={true}>
                    <Image
                      src="/brand/logo_icon.png"
                      alt="Golden Retreat Lombok Villa"
                      width={1000}
                      height={500}
                      className="lg:w-20 h-20 object-contain mb-10 drop-shadow-xl"
                    />
                  </Link>
                </SheetClose>
                {/*  <SheetClose asChild>
                  <Link href="/">
                    <Image
                      className="max-w-44 h-auto aspect-square object-contain -ml-10 drop-shadow-md"
                      src="/brand/petal_gold.png"
                      alt="Golden Retreat Lombok Villa"
                      width={500}
                      height={500}
                      priority
                    />
                  </Link>
                </SheetClose> */}
              </div>
              <SheetClose />
              <SheetHeader className="hidden">
                <SheetTitle className="sr-only">GRLV</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 items-start h-screen w-full">
                {navItems.map((item: any) => (
                  <SheetClose key={item.name} asChild>
                    <Link
                      href={item.link}
                      className="w-full group"
                      prefetch={true}
                    >
                      <Button
                        key={item.name}
                        variant="link"
                        className="text-md flex flex-row w-full justify-between font-serif tracking-wider"
                      >
                        {item.name}
                        <ArrowRightCircle className="min-w-6 min-h-6 stroke-1 group-hover:opacity-90 opacity-30 group-hover:scale-125 group-hover:rotate-180 transition-all duration-300 group-hover:text-yellow-600" />
                      </Button>
                    </Link>
                  </SheetClose>
                ))}
                {/* <SheetClose asChild>
                  <Button
                    variant={"default"}
                    className="font-thin text-md flex flex-row w-full justify-between group"
                  >
                    Enquire
                    <Send className="min-w-5 min-h-5 stroke-1 mr-1 opacity-70" />
                  </Button>
                </SheetClose> */}
                <div className="hidden flex-col gap-4 pt-8 pl-4">
                  <p className="text-md font-serif font-bold">Our Facilities</p>
                  <div className="flex flex-row flex-wrap gap-0 w-full">
                    {facilities.map((link: any) => (
                      <SheetClose key={link.name} asChild>
                        <Link href={link.link} key={link.name} prefetch={true}>
                          <Button
                            variant="link"
                            key={link.name}
                            className="pl-0 group opacity-70 hover:opacity-100"
                          >
                            <Plus className="max-w-3 max-h-3 group-hover:rotate-45 transition-all duration-300 group-hover:text-yellow-600" />
                            {link.name}
                          </Button>
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4 pt-4 pl-4">
                  <p className="text-md font-serif font-bold">Quick Links</p>
                  <div className="flex flex-row flex-wrap gap-0 w-full">
                    {links.map((link: any) => (
                      <SheetClose key={link.name} asChild>
                        <Link href={link.link} key={link.name} prefetch={true}>
                          <Button
                            variant="link"
                            key={link.name}
                            className="pl-0 group opacity-60 hover:opacity-100"
                          >
                            <Plus className="max-w-3 max-h-3 group-hover:rotate-45 transition-all duration-300 group-hover:text-yellow-600" />
                            {link.name}
                          </Button>
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
                <div className="py-4 w-full flex flex-col gap-4">
                  <Link href="/book">
                    <Button variant="default" className="w-full">
                      Book Discovery Call
                    </Button>
                  </Link>
                  <Link
                    href="https://utfs.io/f/dJLJpH9Hrkw3BasnUblcXTk7SfiUKBuzqNOW3Hw01dEptmVg"
                    target="_blank"
                  >
                    <Button variant="link" className="w-full">
                      Download Brochure
                    </Button>
                  </Link>
                </div>
              </div>
              <SheetFooter className="text-sm font-sans bottom-2 items-end justify-end w-full">
                <div className="flex flex-row gap-4">
                  <Facebook className="min-w-6 min-h-6 text-white/70 hover:text-yellow-600 stroke-1" />
                  <Instagram className="min-w-6 min-h-6 text-white/70 hover:text-yellow-600 stroke-1" />
                  <Linkedin className="min-w-6 min-h-6 text-white/70 hover:text-yellow-600 stroke-1" />
                  <Youtube className="min-w-6 min-h-6 text-white/70 hover:text-yellow-600 stroke-1" />
                  |
                  <Inbox className="min-w-6 min-h-6 text-white/70 hover:text-yellow-600 stroke-1" />
                  <Phone className="min-w-6 min-h-6 text-white/70 hover:text-yellow-600 stroke-1" />
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
