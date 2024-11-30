import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-yellow-900/10">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-stone-900 font-sans text-md uppercase font-extrabold">
          Opps! Page Not Found
        </p>
        <p className="text-yellow-900 font-cinzel text-9xl font-extrabold">
          404
        </p>
        <Button variant={"link"} asChild>
          <Link href="/" className="text-stone-900 font-sans text-md uppercase">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
