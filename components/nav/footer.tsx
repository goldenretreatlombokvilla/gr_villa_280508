import { link } from "fs";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

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
      <div className="flex flex-row gap-4 items-center justify-between pb-4">
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
