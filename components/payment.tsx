import React from "react";
import {
  CircleDollarSign,
  HomeIcon,
  Paintbrush,
  Wrench,
  KeyRound
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PaymentTimeline = () => {
  const stages = [
    {
      stage: "Stage 1",
      title: "Booking Fee and Initial Payment",
      percentage: "20%",
      description: "5% booking fee and 15% upon signing the purchase agreement",
      icon: CircleDollarSign
    },
    {
      stage: "Stage 2",
      title: "Structural Completion",
      percentage: "25%",
      description:
        "Payment upon completion of foundational work and structural enhancements",
      icon: HomeIcon
    },
    {
      stage: "Stage 3",
      title: "Interior and Utility Upgrades",
      percentage: "25%",
      description: "Covers interior developments and utility installations",
      icon: Wrench
    },
    {
      stage: "Stage 4",
      title: "Interior Finalization",
      percentage: "25%",
      description: "Completion of all interior elements and furnishings",
      icon: Paintbrush
    },
    {
      stage: "Final Stage",
      title: "Handover",
      percentage: "5%",
      description: "Final payment during villa handover",
      icon: KeyRound
    }
  ];

  return (
    <Card className="w-full bg-white/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-yellow-900">
          Comprehensive Payment Structure
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0  bottom-20 w-0.5 bg-yellow-900/20 -z-10" />

          {/* Timeline items */}
          <div className="space-y-8">
            {stages.map((stage, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Timeline node */}
                <div className="absolute left-8 -translate-x-1/2 w-2 h-2 rounded-full bg-yellow-900 border-2 border-white" />

                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-stone-300 flex items-center justify-center">
                  <stage.icon className="w-8 h-8 text-yellow-900" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg text-yellow-900">
                      {stage.stage}
                    </h3>
                    <span className="bg-yellow-900 text-white px-2 py-0.5 rounded text-sm">
                      {stage.percentage}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {stage.title}
                  </h4>
                  <p className="text-gray-600 font-sans text-sm">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentTimeline;
