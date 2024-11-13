import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import PhoneInputComp from "./form/phone-input";
import InterestSelect from "./form/interest-select";
import { Button } from "./ui/button";

export default function Cta() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:py-40 bg-yellow-900/10 items-start justify-start lg:px-52 px-10 py-20">
      <div className="flex flex-col gap-4">
        <p className="text-5xl lg:text-7xl font-extrabold text-yellow-900 font-cinzel">
          Contact <br className="hidden lg:block"></br>Form
        </p>
        <p className="text-sm font-sans text-balance">
          Fill out this form and we will get back to you as soon as possible. If
          you have any questions, please don't hesitate to contact us on any of
          our social media platforms.
        </p>

        <div className="hidden lg:flex flex-row py-20 items-end justify-start gap-8">
          <Facebook className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
          <Instagram className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
          <Linkedin className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
          <Youtube className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
        </div>
      </div>
      <Card className="flex flex-col w-full lg:col-start-2 bg-transparent border-none shadow-none p-0">
        <CardContent className="p-0">
          <form className="flex flex-col gap-4 font-sans py-6 px-0">
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" name="name" id="name" required />
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" name="email" id="email" required />
            <PhoneInputComp />
            <Label htmlFor="interest">Select Interest</Label>
            <InterestSelect />

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
