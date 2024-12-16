import Image from "next/image";
import Book from "@/components/book";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LocationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[600px] w-full">
        <Image
          src="https://utfs.io/f/dJLJpH9Hrkw3wcK398eUX3BuqFPzTD5Kh1H9QyUilcWfbY6d"
          alt="Golden Retreat Lombok Villas Location"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-cinzel text-center mb-6 font-extrabold">
            Our Location
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-center font-sans">
            Discover paradise in Teluk Kode, Lombok
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Location Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-cinzel mb-6">Find Us</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-yellow-900" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      Teluk Kode, Lombok, Indonesia
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-yellow-900" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+62 123 4567 890</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      info@goldenretreatinternational.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-cinzel mb-4">Getting Here</h3>
              <p className="text-muted-foreground mb-4">
                Our luxury villas are easily accessible from Lombok
                International Airport, with a scenic drive through the island's
                beautiful landscapes.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 45 minutes from Lombok International Airport</li>
                <li>• 15 minutes from local beaches</li>
                <li>• 20 minutes from shopping districts</li>
              </ul>
            </div>
          </div>

          {/* Map Card */}
          <Card className="w-full h-[400px] relative overflow-hidden">
            <CardContent className="p-0 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3947.0465431403145!2d116.09684177583974!3d-8.397083291641211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjMnNDkuNSJTIDExNsKwMDUnNTcuOSJF!5e0!3m2!1sen!2smy!4v1732538310231!5m2!1sen!2smy"
                width="600"
                height="450"
                className="w-full border-0 rounded-lg"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className=" py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-cinzel text-center mb-12">
            Nearby Attractions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pristine Beaches",
                description:
                  "Experience the crystal-clear waters and white sandy beaches just minutes away from your villa."
              },
              {
                title: "Local Markets",
                description:
                  "Immerse yourself in the local culture at traditional markets offering fresh produce and crafts."
              },
              {
                title: "Water Sports",
                description:
                  "Enjoy world-class diving, snorkeling, and surfing spots in the surrounding waters."
              }
            ].map((attraction, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-cinzel mb-3">
                    {attraction.title}
                  </h3>
                  <p className="text-muted-foreground  font-sans">
                    {attraction.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="">
        <Book />
      </section>
    </div>
  );
}
