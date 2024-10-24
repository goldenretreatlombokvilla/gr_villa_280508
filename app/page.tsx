"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Form from "next/form";
import Image from "next/image";

const handleWaitlist = () => {
  console.log("Form Submitted");
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col gap-2 items-center py-10">
          <Image
            className="invert p-0 m-0 drop-shadow-xl"
            src="/gr_logo.png"
            alt="Golden Retreat Lombok Villa"
            width={580}
            height={100}
            priority
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"default"}>Join the Waitlist</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Join the Waitlist</DialogTitle>
                <DialogDescription>
                  Become the first few people to get notified about the new
                  Golden Retreat Lombok Villa!
                </DialogDescription>
              </DialogHeader>
              <div>
                <form>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full rounded-md border-2 border-gray-300 p-2 text-sm"
                      placeholder="Enter your email"
                    />
                    <Label htmlFor="name">Name</Label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full rounded-md border-2 border-gray-300 p-2 text-sm"
                      placeholder="Enter your name"
                    />
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      name="message"
                      id="message"
                      className="w-full rounded-md border-2 border-gray-300 p-2 text-sm"
                      placeholder="Enter your message"
                    ></textarea>
                    <Button
                      variant={"default"}
                      formAction={() => handleWaitlist()}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant={"outline"}>
            <a href="mailto:goldenreteatvilla@gmail.com" target="_blank">
              Email Us
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
