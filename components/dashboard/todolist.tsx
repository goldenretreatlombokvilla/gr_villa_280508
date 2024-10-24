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

const todoList = [
  {
    id: 1,
    title: "Setup Nextjs App",
    description:
      "Set up repository, deployments and install neccesary plugins and packages",
    status: "completed"
  },
  {
    id: 2,
    title: "Design and wireframing",
    description:
      "Find inspiration and create design wireframes for the website",
    status: "pending"
  },
  {
    id: 3,
    title: "Coding and Deployment",
    description: "Create a landing page for the website",
    status: "pending"
  }
];

export default function TodoList() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg font-bold">
            Website Development
          </CardTitle>
          <CardDescription>
            Complete to do list for website management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-none flex flex-col gap-4 items-start w-full">
            {todoList.map((item) => (
              <li key={item.id} className="flex flex-row gap-4">
                <div className="grid grid-cols-[16px_1fr_1fr] lg:grid-cols-[16px_300px_1fr] md:gap-2 gap-4 items-start md:items-center">
                  <Input
                    type="checkbox"
                    className="w-4 h-4 rounded-md border-2 border-gray-300 my-1"
                    checked={item.status === "completed"}
                    readOnly
                  />
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-sm opacity-70 text-left">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
            <li>...</li>
          </ul>
        </CardContent>
        <CardFooter className="flex flex-row gap-2 items-center justify-end">
          <Button variant={"default"} size="icon">
            <Plus className="w-5 h-5" />
          </Button>
          <Button variant={"ghost"} size="icon">
            <Inbox className="w-5 h-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
