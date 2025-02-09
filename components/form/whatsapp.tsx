import React from "react";
import { MessageSquare, Phone } from "lucide-react";
import Link from "next/link";

const WhatsappButton: React.FC = () => {
  return (
    <Link
      href="https://wa.me/60124112260?text=Hi,%20I%27m%20interested%20in%20the%20Lombok%20villas.%20Can%20you%20send%20me%20more%20details?"
      className="fixed bottom-5 left-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg text-md flex items-center gap-2 font-sans opacity-100 z-50"
      target="_blank"
    >
      <MessageSquare className="w-5 h-5" />
      Chat on WhatsApp
    </Link>
  );
};

export default WhatsappButton;
