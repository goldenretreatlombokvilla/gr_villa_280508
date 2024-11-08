import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Invest() {
  return (
    <div className="flex flex-col gap-8 items-center justify-start w-full min-h-screen p-10 max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-yellow-800 to-stone-900  rounded-lg py-8 px-8 flex flex-row gap-6 items-center justify-start w-full">
        <div className="flex flex-col gap-0 items-start w-full">
          <h1 className="text-3xl lg:text-5xl  font-bold font-cinzel text-white ">
            Investment Opportunity
          </h1>
          <p className="text-white ">High Projected Yield</p>
        </div>
        <div className="flex items-center justify-center px-2">
          <Link href="/">
            <Image
              src="/brand/logo_icon.png"
              alt="Golden Retreat Lombok Villa"
              width={200}
              height={200}
              className="w-14 h-14 object-contain aspect-square drop-shadow-xl"
            />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center py-20">
        <div className="flex flex-col gap-4 col-span-2">
          <p className="text-3xl lg:text-6xl  font-bold font-cinzel text-yellow-700">
            Your Investment Journey Made Easy
          </p>
          <p className="font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            nisi possimus ratione veritatis dolor eum laborum ipsa tempore.
            Error, nulla?
          </p>
          <p className="opacity-60 font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            facere inventore, nesciunt laborum fugit, vero saepe, expedita
            perferendis cupiditate ipsum tempore debitis. Consequuntur dolores
            doloribus provident exercitationem nihil repudiandae ducimus?
          </p>
          <div className="flex flex-row gap-4 justify-start">
            <Button variant={"default"}>Discover Now</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center py-20">
        <Image
          src="/villa/grlv_6.webp"
          alt="Villa"
          width={500}
          height={500}
          className="rounded-3xl"
        />
        <div className="flex flex-col items-start gap-4 py-20">
          <p className="text-3xl  font-bold font-cinzel text-yellow-700">
            With the rising demand in Lombok, you have a great opportunity to
            break into an untapped market.
          </p>
          <p className="opacity-60 font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            facere inventore, nesciunt laborum fugit, vero saepe, expedita
            perferendis cupiditate ipsum tempore debitis. Consequuntur dolores
            doloribus provident exercitationem nihil repudiandae ducimus?
          </p>
          <Button variant="link" className="p-0">
            Visit The Villa
          </Button>
        </div>
      </div>
    </div>
  );
}
