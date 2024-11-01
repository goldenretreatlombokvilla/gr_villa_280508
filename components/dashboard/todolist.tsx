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
    title: "Website Design & Wireframing",
    date: "23 Oct",
    status: "completed"
  },
  {
    title: "Development & Coding",
    date: "28 Oct",
    status: "inprogress"
  },
  {
    title: "Client Review",
    date: "7 Nov",
    status: "pending"
  },
  {
    title: "Testing & Troubleshooting",
    date: "10 Nov",
    status: "pending"
  },
  {
    title: "Website Launch",
    date: "15 Nov",
    status: "pending"
  },
  {
    title: "Post-Launch Support",
    date: "16 Nov",
    status: "pending"
  }
];

export default function TodoList() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Website Development
          </CardTitle>
          <CardDescription>Task List</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-4 items-start w-full list-disc">
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
                    {item.status === "completed" ? (
                      <p className="text-xs font-normal line-through opacity-70 text-red-600">
                        {item.date}
                      </p>
                    ) : (
                      <p className="text-xs font-normal opacity-70">
                        {item.date}
                      </p>
                    )}
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
            The website development is currently under progress. I am currently
            designing the homepage and trying out several designs. Can view the
            WIP through the links below.
          </p>
          <p className="text-md font-bold pt-4">Links</p>
          <div className="flex flex-row gap-2">
            <p className="text-sm opacity-70 underline">
              <Link href="https://grvilla.vercel.app/" target="_blank">
                Homepage 1
              </Link>
            </p>
            <p className="text-sm opacity-70 underline">
              <Link
                href="https://grvilla.vercel.app/landing-page"
                target="_blank"
              >
                Homepage 2 (alternate design)
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
