import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col gap-2 items-center py-10">
          <Image
            className="invert p-0 m-0"
            src="/gr_logo.png"
            alt="Golden Retreat Lombok Villa"
            width={580}
            height={100}
            priority
          />
          <p className="opacity-50 italic">Coming Soon!</p>
        </div>
        <div className="flex flex-row gap-4">
          <Button variant={"default"}>
            <a href="mailto:goldenreteat@gmail.com" target="_blank">
              Get In Contact
            </a>
          </Button>
          <Button variant={"outline"}>
            <a href="mailto:goldenreteat@gmail.com" target="_blank">
              Sign Up For Updates
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
