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
            Working on calendar and schedule - 1 Nov 2024
          </p>
          <p className="text-md font-bold pt-4">Designs Links</p>
          <div className="flex flex-row gap-2">
            <p className="text-sm opacity-70 underline">
              <Link href="#">Post 1</Link>
            </p>
            <p className="text-sm opacity-70 underline">
              <Link href="#">Post 2</Link>
            </p>
            <p className="text-sm opacity-70 underline">
              <Link href="#">Post 3</Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
