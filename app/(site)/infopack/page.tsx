import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/cta";
import { Metadata } from "next";
import { DownloadIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Info Pack 2025",
  description: `Golden Retreat Lombok Villas is a property development offering luxurious Villas set in the heart of Lombok’s best attractions.`,
  keywords: `golden retreat lombok villa, luxury villa, lombok villas, private pool, villas, island villas, island villa, private pools, poolside villa, pool villa, poolside villas, gold retreat lombok, gold retreat lombok villas, gold retreat lombok villa`
};

export default function Location() {
  return (
    <main>
      <div className="flex flex-col gap-8 items-center justify-start w-full bg-gradient-to-b from-yellow-900/10 to-5% to-background lg:px-52 px-8">
        <div className="flex flex-col gap-4 items-center justify-center w-full lg:min-h-screen py-20 lg:py-0">
          <p className="text-yellow-900 text-center text-balance text-4xl lg:text-5xl font-extrabold">
            Info Pack 2025
          </p>
          <Link
            href="https://utfs.io/f/dJLJpH9Hrkw3ud1pFPubSOoWvunMekl0ACfLj2rIG8cQDzZm"
            target="_blank"
            className="flex flex-row gap-4 items-center justify-center w-full"
          >
            Download <DownloadIcon className="w-4 h-4" />
          </Link>
          <iframe
            loading="lazy"
            width="100%"
            height="100%"
            className="borded-none w-full h-full aspect-video object-cover rounded-lg drop-shadow-lg"
            src="https://www.canva.com/design/DAGH285Q47E/_gfshECuJ2xec5RaYgvOiQ/view?embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Cta />
    </main>
  );
}
