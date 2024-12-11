"use client";

import React, { useState } from "react";
import { Mail, MapPin, Sailboat, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const VillaInvestmentLanding = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Placeholder for email submission logic
    alert(`Thank you for your interest! We'll contact you at ${email}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900/10 to-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-yellow-900 mb-4">
            Paradise Should Never Be Out of Reach
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans uppercase">
            <strong>Exclusive Luxury Villa Development</strong> | Just 2 Hours
            from Bali
          </p>
        </header>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Sailboat className="text-blue-600 w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-semibold text-yellow-900">
                    Unparalleled Location
                  </h3>
                  <p className="text-stone-900 font-sans">
                    33 meticulously designed luxury villas nestled in a tropical
                    paradise, just a short boat ride from the iconic island of
                    Bali.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Sun className="text-yellow-500 w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-semibold text-yellow-900">
                    Investment Opportunity
                  </h3>
                  <p className="text-stone-900 font-sans">
                    Rare chance to own a piece of paradise. High-end development
                    with potential for significant returns and personal luxury
                    retreat.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-green-600 w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-semibold text-yellow-900">
                    Prime Real Estate
                  </h3>
                  <p className="text-stone-900 font-sans">
                    Strategically located to maximize both investment potential
                    and personal enjoyment in one of Southeast Asia's most
                    sought-after regions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-beige/10 shadow-2xl rounded-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-yellow-900">
              Explore Your Investment
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 px-6"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 px-6"
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 px-6"
              />
              <select className="w-full p-3 px-6">
                <option>Investor Interest</option>
                <option>Personal Villa Ownership</option>
                <option>General Inquiry</option>
              </select>
              <textarea
                placeholder="Tell us about your investment goals"
                className="w-full p-3 px-6"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-beige text-white py-3 rounded-lg hover:bg-stone-900 transition duration-300"
              >
                Request Exclusive Brochure
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-stone-900 font-sans">
          <p>© 2024 Golden Retreat International. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default VillaInvestmentLanding;
