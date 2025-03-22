import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Globe, Sun, Cloud, Plane, ArrowRight } from "lucide-react";
import Cta from "@/components/cta";
import BookJourney from "@/components/book-journey";

const blogPosts = [
  {
    id: 1,
    title:
      "Discover Lombok: A Haven of Accessibility for International Travelers",
    excerpt:
      "Lombok, the idyllic island in Indonesia’s West Nusa Tenggara province, has long been a hidden gem for travelers seeking pristine beaches, majestic mountains, and rich cultural experiences.",
    date: "December 19, 2024",
    readTime: "5 min read",
    category: "Accessibility",
    icon: <Plane className="text-blue-600" />,
    slug: "discover-lombok"
  }
];

const LocationPage = () => {
  const attractions = [
    {
      name: "Kuta Beach",
      distance: "10 min drive",
      description:
        "World-renowned beach with pristine white sand and crystal-clear waters.",
      icon: <Sun className="text-yellow-500" />
    },
    {
      name: "Tanjung Aan",
      distance: "15 min drive",
      description:
        "Stunning beach known for its unique pepper-like sand and turquoise waters.",
      icon: <Cloud className="text-blue-400" />
    },
    {
      name: "Local Markets",
      distance: "5 min drive",
      description:
        "Experience authentic Lombok culture and traditional handicrafts.",
      icon: <Globe className="text-green-500" />
    }
  ];

  return (
    <main className="bg-gradient-to-b from-yellow-900/10 to-5% to-background">
      {/* Header Section */}
      <header className="flex flex-row items-center justify-between p-6 px-8 lg:px-32 bg-white shadow-sm">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3HQH8eio47KGLVT5JMX0nbiCWRIZyzPwUDrcp"
            alt="Golden Retreat Lombok Villa"
            width={150}
            height={150}
            className="object-contain"
          />
        </Link>
        <h1 className="text-2xl sr-only font-bold text-yellow-900">
          Our Location
        </h1>
      </header>

      {/* Hero Video Section */}
      <section className="w-full px-8 lg:px-32 py-12">
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <video
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            controls
            playsInline
            preload="auto"
            poster="https://utfs.io/f/dJLJpH9Hrkw3Paabqs1clERpursMSoUGgjFXvWt7KzqYwIyP"
          >
            <source
              src="https://utfs.io/f/dJLJpH9Hrkw3K7rPewNc46JnO82q7LEaXkrW9I5b1PZCYT0m"
              type="video/mp4"
            />
          </video>
          {/*  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold text-center">
              Discover Lombok's Hidden Paradise
            </h2>
          </div> */}
        </div>
      </section>

      {/* Location Details */}
      <section className="grid md:grid-cols-2 gap-12 px-8 lg:px-32 py-16 bg-white">
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-4">
            <MapPin className="text-yellow-900 w-12 h-12" />
            <h3 className="text-3xl font-bold text-yellow-900">
              Prime Location
            </h3>
          </div>
          <p className="text-md text-gray-700 font-sans">
            Nestled in the heart of Lombok, our villas offer a perfect blend of
            luxury and natural beauty. Strategically located with easy access to
            the island's most stunning attractions.
          </p>
          <div className="bg-yellow-900/10 p-6 rounded-xl">
            <h4 className="font-bold text-xl text-yellow-900 mb-2">
              Geographical Coordinates
            </h4>
            <p className="text-gray-700 font-sans">
              Latitude: -8.397083° S
              <br />
              Longitude: 116.096841° E
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3947.0465431403145!2d116.09684177583974!3d-8.397083291641211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjMnNDkuNSJTIDExNsKwMDUnNTcuOSJF!5e0!3m2!1sen!2smy!4v1732538310231!5m2!1sen!2smy"
            className="w-full h-[500px] rounded-2xl shadow-lg"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="text-sm italic text-stone-900/50">
            Zoom out to see proximity to Gili Islands and Bali.
          </p>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="px-8 lg:px-32 py-16 bg-yellow-900/10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-yellow-900 mb-4">
            Surrounding Attractions
          </h2>
          <p className="text-xl font-sans text-gray-700 max-w-2xl mx-auto">
            Explore the rich tapestry of Lombok's natural beauty and cultural
            heritage, all within a short drive from our villas.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                {attraction.icon}
                <h4 className="text-xl font-bold text-yellow-900">
                  {attraction.name}
                </h4>
              </div>
              <p className="text-gray-700 mb-2 font-sans font-medium">
                {attraction.distance}
              </p>
              <p className="text-gray-600 font-sans">
                {attraction.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 h-full w-full">
          <Image
            src="https://utfs.io/f/dJLJpH9Hrkw3JMbcGuFGm1t394BWXOQz0jM2pHhDZeVrkKli"
            alt="Map of attractions around Golden Retreat Lombok Villa"
            width={500}
            height={200}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>

      <div className="flex flex-col gap-4 px-6 py-8 lg:px-52 max-w-6xl mx-auto">
        <p className="font-cinzel text-center text-4xl lg:text-5xl font-bold text-yellow-900 text-balance">
          Destination Lombok
        </p>

        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl font-sans"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                {post.icon}
                <span className="ml-2 text-sm text-gray-600">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-amber-900 mb-3 font-cinzel">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-row gap-2 divide-x-2 divide-gray-200">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <p className="text-sm text-gray-500 pl-2">{post.readTime}</p>
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-amber-900 hover:text-amber-700 flex items-center"
                >
                  Read More <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BookJourney />
    </main>
  );
};

export default LocationPage;
