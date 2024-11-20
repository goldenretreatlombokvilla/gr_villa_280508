import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PhoneInputComp from "@/components/form/phone-input";
import { Button } from "@/components/ui/button";
import { DateTimePicker } from "@/components/form/datetime";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

export default function Bookacall() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:py-40 bg-yellow-900/10 items-start justify-start lg:px-52 px-10 py-20">
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
          <Facebook className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
          <Instagram className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
          <Linkedin className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
          <Youtube className="min-w-12 min-h-12 stroke-1 text-yellow-900/50 hover:text-yellow-900" />
        </div>
      </div>
      <Card className="flex flex-col w-full lg:col-start-2 bg-transparent border-none shadow-none p-0">
        <CardContent className="p-0">
          <form className="flex flex-col gap-4 font-sans py-6 px-0">
            <Label htmlFor="date-time">
              Date & Time{" "}
              <Badge variant="default" className="ml-2">
                Local Time
              </Badge>
            </Label>

            <DateTimePicker />
            <Label htmlFor="email" className="mt-4">
              E-mail
            </Label>
            <Input type="email" name="email" id="email" required />

            <div className="flex items-center space-x-2 px-6 ">
              <Checkbox id="contact" />
              <label
                htmlFor="contact"
                className="text-sm font-normal leading-none opacity-70"
              >
                I agree to be contacted at the selected date and time.
              </label>
            </div>
            <div className="flex items-center space-x-2 px-6 ">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-normal leading-none opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>

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
