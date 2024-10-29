import Adstrat from "@/components/dashboard/adstrat";
import Presentation from "@/components/dashboard/presentation";
import Socmed from "@/components/dashboard/socmed";
import TodoList from "@/components/dashboard/todolist";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Inbox, Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-10 lg:px-52 mx-auto font-sans">
      <main className="flex flex-col gap-4 items-start justify-center">
        <div className="flex flex-col gap-2 items-start py-10">
          <p className="text-3xl font-bold">Dashboard</p>
        </div>
      </main>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-8 items-start justify-center ">
        <TodoList />
        <Presentation />
        <Socmed />
        <Adstrat />
      </section>
    </div>
  );
}
