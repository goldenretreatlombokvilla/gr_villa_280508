import { link } from "fs";
import {
  DownloadIcon,
  Facebook,
  Inbox,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Youtube
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const navCorp = [
  {
    name: "About Us",
    link: "/about"
  },
  {
    name: "Our Team",
    link: "/about"
  },
  {
    name: "Sustainability",
    link: "/about"
  }
];

const navServices = [
  {
    name: "Investor Services",
    link: "/invest"
  },
  {
    name: "Land Development",
    link: "/invest"
  },
  {
    name: "Villa Designs",
    link: "/invest"
  }
];

const navResources = [
  {
    name: "Market Studies",
    link: "/invest"
  },
  {
    name: "Lombok Guide",
    link: "/invest"
  },
  {
    name: "News & Events",
    link: "/invest"
  },
  {
    name: "Contact Us",
    link: "/contact"
  }
];

export default function Footer() {
  return (
    <footer className="flex flex-col px-10 gap-4 py-8 pt-14 bg-gradient-to-tl from-yellow-700 to-yellow-800 to-60% text-white lg:px-52">
      {/* 1sd Level */}
      <div className="sticky bottom-0 ">
        <div className="flex flex-row gap-4 items-center justify-between max-h-100 w-full bg-black text-white bottom-0 left-0 right-0 fixed px-10 py-4 lg:px-52 ">
          <div className="flex flex-row gap-2 items-center justify-start">
            <MapPin className="w-4 h-4 text-yellow-500 opacity-80" />
            <p className="text-sm italic font-serif font-semibold opacity-80">
              Teluk Kode, <span className="font-normal">Lombok</span>
            </p>
          </div>
          <div className="md:flex flex-row gap-2 items-center justify-start hidden">
            <p className="text-md italic font-serif text-secondary opacity-80">
              Guarenteed ROI, Invest Now!
            </p>
          </div>
          <div className="flex flex-row gap-2 lg:gap-4 text-secondary">
            <Button variant="ghost" size="icon">
              <DownloadIcon className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:block">
              <Inbox className="w-4 h-4" />
            </Button>
            <Button variant="default">
              <Phone className="w-4 h-4" />
              Book Call
            </Button>
          </div>
        </div>
      </div>

      {/* 2nd Level */}
      <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr_1fr_1fr] gap-10 items-start justify-center pb-8">
        <div className="flex flex-col gap-2">
          <p className="text-4xl font-serif font-bold text-balance">
            Golden Retreat<br></br>Lombok Villa
          </p>
          <p className="text-sm text-balance opacity-70">
            A secluded, luxurious villa offering panoramic ocean views, private
            pools, and exquisite interiors, set in the heart of Lombok, crafted
            for the ultimate relaxation and indulgence.
          </p>
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
        <div className="flex flex-col gap-2 ">
          <p className="text-xl font-serif font-bold ">Services</p>
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
          <p className="text-xl font-serif font-bold ">Resources</p>
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
      </div>
      <hr className="opacity-50 py-4"></hr>
      <div className="flex flex-row gap-4 items-center justify-between pb-14 lg:pb-16">
        <p className="text-sm opacity-70">
          © Golden Retreat Lombok Villa 2024 | All Rights Reserved
        </p>
        <div className="hidden lg:flex flex-row gap-4">
          <Facebook className="min-w-4 min-h-4 stroke-1 text-white hover:text-yellow-900" />
          <Instagram className="min-w-4 min-h-4 stroke-1 text-white hover:text-yellow-900" />
          <Linkedin className="min-w-4 min-h-4 stroke-1 text-white hover:text-yellow-900" />
          <Youtube className="min-w-4 min-h-4 stroke-1 text-white hover:text-yellow-900" />
        </div>
      </div>
    </footer>
  );
}
