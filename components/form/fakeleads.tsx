"use client";

import { useEffect, useState } from "react";

export default function FakeLeads() {
  const [recentLead, setRecentLead] = useState<string | null>(null);

  useEffect(() => {
    const leads = [
      "Tony from Australia just booked a call!",
      "Ong from Singapore just booked a call!",
      "Russel from Australia just inquired about the villas!",
      "Ken from Malaysia just booked a call!",
      "Sahit from Malaysia just booked a call!"
    ];

    const showLead = () => {
      setRecentLead(leads[Math.floor(Math.random() * leads.length)]);
      setTimeout(() => setRecentLead(null), 160000); // Hide after 5 sec
    };

    const interval = setInterval(showLead, 2000000); // Show every 30 sec
    return () => clearInterval(interval);
  }, []);

  return (
    recentLead && (
      <div className="fixed top-6 right-4 font-sans bg-white shadow-lg px-4 py-2 rounded-full text-sm z-50">
        {recentLead}
      </div>
    )
  );
}
