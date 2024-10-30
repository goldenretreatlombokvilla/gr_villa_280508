import Image from "next/image";

export default function Invest() {
  return (
    <div className="flex flex-col gap-8 items-center justify-start w-full h-screen p-10 max-w-6xl mx-auto">
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-4xl font-bold font-cinzel">Investment Service</h1>
        <p className="text-md text-gray-600 font-sans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nam
          omnis distinctio, explicabo eaque, sunt quia iure ipsa non magni fugit
          excepturi, recusandae molestiae deleniti hic. Excepturi sequi officiis
          eveniet.
        </p>
      </div>
      <Image
        src="/villa/grlv_7.webp"
        alt="Golden Retreat Lombok Villa"
        width={500}
        height={200}
        className="w-full h-auto aspect-video object-cover rounded-lg"
      />
      <div className="flex flex-col gap-4 items-center justify-center w-full py-10 relative">
        <Image
          src="/lombok/beach-sand.jpg"
          alt="Lombok Beautiful Sandy Beaches and Mountain Views"
          width={1000}
          height={700}
          className="w-full h-96 object-cover aspect-video rounded-lg brightness-50"
        />
        <div className="flex flex-col gap-4 items-center text-center justify-between w-full absolute px-20">
          <p className="text-yellow-600 font-cinzel font-bold uppercase text-lg">
            Did You Know
          </p>
          <p className="text-white font-cinzel text-5xl font-extrabold drop-shadow-lg">
            Lombok receives over{" "}
            <span className="text-yellow-600">A MILLION</span> tourist every
            year, but only has enough hotels and resorts to lodge 24,000!
          </p>
        </div>
      </div>
    </div>
  );
}
