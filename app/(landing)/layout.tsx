import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page",
  description: `Golden Retreat Lombok Villas is a property development offering luxurious Villas set in the heart of Lombok’s best attractions.`,
  keywords: `golden retreat lombok villa, luxury villa, lombok villas, private pool, villas, island villas, island villa, private pools, poolside villa, pool villa, poolside villas, gold retreat lombok, gold retreat lombok villas, gold retreat lombok villa`
};

export default function VillaLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="z-10 relative top-0 right-0 left-0 min-h-screen bg-white">
      {children}
    </section>
  );
}
