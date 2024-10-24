"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import {
  ArrowRightCircle,
  Inbox,
  Menu,
  PanelRightOpen,
  Send
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

const navItems = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About Us",
    link: "/about"
  },
  {
    name: "Lombok",
    link: "/lombok"
  },
  {
    name: "Invest",
    link: "/invest"
  },
  {
    name: "Contact",
    link: "/contact"
  }
];

export default function Nav() {
  return (
    <nav className="flex flex-row items-center justify-between w-full bg-background min-h-[80px] pr-8">
      <Link href="/">
        <Image
          className="max-w-32 max-h-32 p-0 m-0"
          src="/brand/logo_gr.png"
          alt="Golden Retreat Lombok Villa"
          width={200}
          height={200}
          priority
        />
      </Link>
      <div className="hidden md:flex flex-row items-center justify-end gap-0 w-full">
        {navItems.map((item) => (
          <a href={item.link} key={item.name}>
            <Button key={item.name} variant="link">
              {item.name}
            </Button>
          </a>
        ))}
      </div>
      <div className="flex md:hidden flex-row items-center justify-end gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="min-w-6 min-h-6 text-yellow-600 hover:text-yellow-900 opacity-70 stroke-2 hover:opacity-100" />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-4 items-start">
            <div className="flex flex-row gap-0 px-4 items-center justify-start">
              <p className="text-4xl font-serif">Golden Retreat Lombok Villa</p>
              <Image
                className="max-w-44 h-auto aspect-square object-contain -ml-10"
                src="/brand/petal_gold.png"
                alt="Golden Retreat Lombok Villa"
                width={500}
                height={500}
                priority
              />
            </div>
            <SheetClose />
            <SheetHeader className="hidden">
              <SheetTitle className="sr-only">GRLV</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 items-start h-screen w-full">
              {navItems.map((item) => (
                <SheetClose key={item.name} asChild>
                  <a href={item.link} className="w-full group">
                    <Button
                      key={item.name}
                      variant="link"
                      className="font-thin text-md flex flex-row w-full justify-between "
                    >
                      {item.name}
                      <ArrowRightCircle className="min-w-6 min-h-6 stroke-1 group-hover:opacity-90 opacity-30 group-hover:rotate-180 transition-all duration-300" />
                    </Button>
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button
                  variant={"default"}
                  className="font-thin text-md flex flex-row w-full justify-between group"
                >
                  Enquire
                  <Send className="min-w-5 min-h-5 stroke-1 mr-1 opacity-70" />
                </Button>
              </SheetClose>
            </div>
            <SheetFooter className="opacity-50 text-sm font-sans bottom-2 items-end justify-end">
              <p>
                Copyright © 2024 |{" "}
                <span className="">Golden Retreat Villa</span>
              </p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
