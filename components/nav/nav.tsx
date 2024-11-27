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
  { name: "Lombok", link: "/lombok" },
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
    name: "About Us",
    link: "/about",
    target: "_self"
  },
  {
    name: "Contact Us",
    link: "/contact",
    target: "_self"
  },
  {
    name: "Location",
    link: "/location"
  },
  {
    name: "Info Pack",
    link: "https://utfs.io/f/dJLJpH9Hrkw3Mq16Mft7lJKSRYnQdpH4WNEgjBGiyz65xtM9",
    target: "_blank"
  },
  {
    name: "Book Now",
    link: "https://utfs.io/f/dJLJpH9Hrkw3sRFhnDdtfQDR1ujgW04bv39US6XzVqYOLryH",
    target: "_blank"
  }
];

export default function Nav() {
  return (
    <nav className="flex flex-row items-center justify-end w-full mx-auto lg:px-8 max-h-[80px] px-2 absolute md:top-0 bottom-0 z-50 h-32 bg-transparent">
      <div className="flex flex-row items-center justify-end gap-10">
        <div className="fixed p-2">
          <Sheet>
            <SheetTrigger asChild>
              <div className="p-2 bg-beige hover:bg-stone-900 rounded-full group">
                <Menu className="min-w-6 min-h-6 text-white stroke-1 " />
              </div>
            </SheetTrigger>
            <SheetContent
              className="flex flex-col gap-4  items-start border-none bg-stone-900 text-white pt-10"
              style={{ minWidth: "30vw" }}
            >
              <div className="flex flex-row gap-0 px-4 items-center justify-start">
                <SheetClose asChild>
                  <Link href="/" prefetch={true}>
                    <Image
                      src="https://utfs.io/f/dJLJpH9Hrkw3zAIITcj3GaV6XFRQrue8z9wSd3Dysx0bTKlA"
                      alt="Golden Retreat Lombok Villa"
                      width={1000}
                      height={500}
                      className="max-w-52 max-h-52 lg:min-w-60 lg:min-h-60 object-contain drop-shadow-xl -my-10 lg:-ml-8 -ml-6"
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
              <div className="flex flex-col gap-2 lg:gap-4 items-start h-screen w-full">
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

                <div className="flex flex-col gap-2 lg:gap-4 pt-2 lg:pt-4 pl-4">
                  <p className="text-md font-serif ">Quick Links</p>
                  <div className="flex flex-row flex-wrap gap-0 w-full">
                    {links.map((link: any) => (
                      <SheetClose key={link.name} asChild>
                        <Link
                          href={link.link}
                          target={link.target}
                          key={link.name}
                          prefetch={true}
                        >
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
                  <SheetClose asChild>
                    <Link href="/book">
                      <Button variant="default" className="w-full">
                        Book Discovery Call
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="https://utfs.io/f/dJLJpH9Hrkw3Mq16Mft7lJKSRYnQdpH4WNEgjBGiyz65xtM9"
                      target="_blank"
                    >
                      <Button variant="link" className="w-full">
                        Download Info Pack
                      </Button>
                    </Link>
                  </SheetClose>
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
