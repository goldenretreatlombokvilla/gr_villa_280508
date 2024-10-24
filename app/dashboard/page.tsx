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
    <div className="flex flex-col items-start justify-start min-h-screen font-[family-name:var(--font-geist-sans)] px-4 lg:px-10">
      <main className="flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col gap-2 items-start py-10">
          <h1 className="text-4xl font-bold">
            Golden Retreat Marketing Project
          </h1>
          <p className="text-lg opacity-70">Dashboard</p>
        </div>
      </main>
      <section className="flex flex-col gap-4 items-center justify-center">
        <TodoList />
      </section>
    </div>
  );
}
