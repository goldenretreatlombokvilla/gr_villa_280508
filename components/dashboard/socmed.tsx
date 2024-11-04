"use client";

import { Plus, Inbox } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "../ui/card";
import { Input } from "../ui/input";
import Link from "next/link";
import { Badge } from "../ui/badge";

const todoList = [
  {
    title: "Project Initiation",
    date: "22 Oct",
    status: "completed"
  },
  {
    title: "Design & CopyWriting",
    date: "28 Oct",
    status: "inprogress"
  },
  {
    title: "Final Client Review",
    date: "4 Nov",
    status: "pending"
  },
  {
    title: "Adjustment & Finalization",
    date: "5 Nov",
    status: "pending"
  },
  {
    title: "Handover",
    date: "11 Nov",
    status: "pending"
  }
];

export default function Socmed() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Content Marketing</CardTitle>
          <CardDescription>
            General posting on social media channels. (2 posts weekly)
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start w-full">
          <div className="flex flex-col gap-2">
            <p className="font-bold">Targeted Platforms</p>
            <ul className="list-inside list-disc">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Planned Posts</p>
            <ul className="list-inside list-disc">
              <li>Launch Countdown</li>
              <li>Launch Promo</li>
              <li>Interesting Features</li>
              <li>Lombok Tourist Destination</li>
            </ul>
          </div>
        </CardContent>
        <hr></hr>
        <CardFooter className="flex flex-col gap-2 items-start pt-4">
          <p className="text-md font-bold">Remarks</p>
          <p className="text-sm opacity-70">
            <span className="text-red-700">Pending payment (USD 750)</span>{" "}
            refer to{" "}
            <Button
              variant="secondary"
              size="sm"
              className="h-4 text-sm font-normal opacity-70 underline p-0 m-0 tracking-normal"
              onClick={() => window.open("/onboarding.pdf")}
            >
              Onboarding Document
            </Button>
          </p>
          <p className="text-md font-bold pt-4">Designs Links</p>
          <div className="flex flex-row gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="h-4 text-sm font-normal opacity-70 underline p-0 m-0 tracking-normal"
              onClick={() => window.open("/strat.pdf")}
            >
              Content Marketing Strategy
            </Button>
            <Badge variant={"default"} className="text-green-700 bg-green-100">
              New!
            </Badge>
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-sm opacity-70 underline">
              <Link href="/dashboard/creatives">Week 1 Creatives</Link>
            </p>
            <Badge variant={"default"} className="text-green-700 bg-green-100">
              New!
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
