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

export default function Presentation() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Presentation Design
          </CardTitle>
          <CardDescription>Task List</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-4 items-start w-full">
            {todoList.map((item) => (
              <li key={item.title} className="flex flex-row gap-4 w-full">
                <div className="flex flex-row items-center justify-between gap-4 w-full">
                  <p className="text-sm font-bold">{item.title} </p>
                  {item.status === "inprogress" && (
                    <p className="text-xs text-red-500 font-bold italic opacity-70">
                      In Progress
                    </p>
                  )}
                  <div className="flex flex-row gap-4">
                    <p className="text-xs font-normal opacity-70">
                      {item.date}
                    </p>
                    <Input
                      type="checkbox"
                      className="w-4 h-4"
                      checked={item.status === "completed"}
                      readOnly
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
        <hr></hr>
        <CardFooter className="flex flex-col gap-2 items-start pt-4">
          <p className="text-md font-bold">Remarks</p>
          <p className="text-sm opacity-70">
            Currently designing the presentation deck to match website design.
            Will share the first draft of the design on the 30th of Nov
          </p>
          <p className="text-md font-bold pt-4">Links</p>
          <div className="flex flex-row gap-2">
            <p className="text-sm opacity-70 underline">
              <Link href="#">Presentation File (TBC)</Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
