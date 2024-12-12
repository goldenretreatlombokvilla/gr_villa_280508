import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import PhoneInputComp from "./form/phone-input";
import InterestSelect from "./form/interest-select";
import { Button } from "./ui/button";
import { DateTimePicker } from "./form/datetime";
import Link from "next/link";

export default function Bookacall() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:py-40 bg-white items-start justify-start lg:px-52 px-10 py-20">
      <div className="flex flex-col gap-4">
        <p className="text-5xl lg:text-7xl font-extrabold text-yellow-900 font-cinzel">
          Book A Discover Call
        </p>
        <p className="text-sm font-sans text-balance text-stone-800">
          Select your prefered date and time that you would be comfortable with.
          Give us just 30 minutes of your time to present your next investment
          opportunity and answer any of your questions.
        </p>

        <div className="hidden lg:flex flex-row py-20 items-end justify-start gap-8">
          <Link href="https://www.facebook.com/profile.php?id=61569367575846">
            <Facebook className="min-w-6 min-h-6 text-white/70 hover:text-yellow-600 stroke-1" />
          </Link>
          <Link href="https://www.instagram.com/goldenretreatinternational/">
            <Instagram className="min-w-6 min-h-6 text-white/70 hover:text-yellow-600 stroke-1" />
          </Link>
          <Linkedin className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
          <Youtube className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
        </div>
      </div>
      <Card className="flex flex-col w-full lg:col-start-2 bg-transparent border-none shadow-none p-0">
        <CardContent className="p-0">
          <form className="flex flex-col gap-4 font-sans py-6 px-0">
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" name="email" id="email" required />
            <PhoneInputComp />
            <DateTimePicker />

            <Button
              variant={"outline"}
              className="mt-6 text-lg rounded-full h-14"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
