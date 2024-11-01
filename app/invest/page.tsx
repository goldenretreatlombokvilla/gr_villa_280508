import Image from "next/image";

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
          <Image
            src="/brand/logo_icon.png"
            alt="Golden Retreat Lombok Villa"
            width={200}
            height={200}
            className="w-14 h-14 object-contain aspect-square drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
