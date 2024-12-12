import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";
import Link from "next/link";

export default function Thankyou() {
  return (
    <div className="flex flex-col gap-8 items-center justify-start w-full">
      <div className="flex flex-col w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center py-20">
            <div className="flex flex-col gap-4 px-8 lg:px-4">
              <Link href="/" className="flex flex-row gap-2 items-center">
                <ChevronLeft className="w-4 h-4 text-yellow-900 stroke-1" />{" "}
                <Button variant={"link"} className="p-0 m-0 h-fit font-sans">
                  Back to Homepage
                </Button>
              </Link>
              <p className="text-5xl lg:text-6xl pt-20 font-extrabold font-cinzel text-balance text-yellow-900">
                Thank you!
              </p>
              <p className="font-sans text-sm text-balance">
                Thank you for contacting us. We will get back to you as soon as
                possible.
              </p>
            </div>
          </div>
          <div className="hidden lg:flex flex-row py-20 items-end justify-start gap-8">
            <Link href="https://www.facebook.com/people/Golden-Retreat-Lombok-Villas/61569367575846/">
              <Facebook className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
            </Link>
            <Link href="https://www.instagram.com/goldenretreatinternational/">
              <Instagram className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
