import React from "react";
import { Ship, Clock, Waves } from "lucide-react";

const GiliIslandsSection = () => {
  const giliFeatures = [
    {
      icon: <Clock className="w-6 h-6 text-yellow-900" />,
      title: "Quick Access",
      description:
        "Just a 5-minute walk to Bangsal Port, your gateway to the Gilis"
    },
    {
      icon: <Ship className="w-6 h-6 text-yellow-900" />,
      title: "Fast Boat Shuttle Service",
      description:
        "Frequent boat services to all three Gili Islands throughout the day"
    },
    {
      icon: <Waves className="w-6 h-6 text-yellow-900" />,
      title: "Island Paradise",
      description:
        "Experience pristine beaches, world-class snorkeling, and vibrant island life"
    }
  ];

  return (
    <section className="px-8 lg:px-32 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-yellow-900 mb-4">
            Gateway to the Gili Islands
          </h2>
          <p className="text-lg font-sans text-gray-700 max-w-2xl mx-auto">
            Our villas are strategically located just minutes away from Bangsal
            Port, making the magical Gili Islands easily accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {giliFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-yellow-900/10 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h4 className="text-xl font-bold text-yellow-900">
                  {feature.title}
                </h4>
              </div>
              <p className="text-gray-600 font-sans">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-yellow-900/10 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-yellow-900 mb-4">
            Your Journey to Paradise
          </h3>
          <div className="space-y-4 text-gray-700 font-sans">
            <p>
              From our villas, take a scenic 5-minute walk to Bangsal Port, the
              main gateway to the Gili Islands. Regular boat services run
              throughout the day to all three islands - Gili Trawangan, Gili
              Meno, and Gili Air.
            </p>
            <p>
              Each island offers its own unique charm: Gili Trawangan for
              vibrant nightlife and diving, Gili Meno for secluded beaches and
              romance, and Gili Air for the perfect blend of relaxation and
              activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiliIslandsSection;
