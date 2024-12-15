"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ChartSpline,
  DollarSign,
  Globe,
  Plane,
  TrendingUp
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title:
      "Beyond Bali: Discovering the Next Luxury Real Estate Frontier in Southeast Asia",
    excerpt:
      "Explore the emerging landscape of luxury property investments beyond traditional markets.",
    date: "December 15, 2024",
    readTime: "7 min read",
    category: "Investment Insights",
    icon: <Globe className="text-amber-600" />,
    slug: "beyond-bali"
  },
  {
    id: 2,
    title: "Golden Retreat Lombok Villas: Comprehensive Payment Structure",
    excerpt:
      "Discover the phased payment process for acquiring a luxury villa at Golden Retreat Lombok Villas, with added support for legal documentation and visa applications.",
    date: "December 17, 2024",
    readTime: "5 min read",
    category: "Purchasing Guide",
    icon: <ChartSpline className="text-green-600" />,
    slug: "payment-structure"
  },
  {
    id: 3,
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

const BlogPostsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category))
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-900 mb-4 font-cinzel">
            Golden Retreat Insights
          </h1>
          <p className="text-xl font-sans text-gray-600 max-w-2xl mx-auto">
            Expert perspectives on luxury villa investments and emerging real
            estate opportunities
          </p>
        </header>

        {/* Search and Category Filters */}
        <div className="mb-12 font-sans flex flex-col  gap-4">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-nowrap rounded-full text-sm ${
                  selectedCategory === category
                    ? "bg-amber-900 text-white"
                    : "bg-amber-100 text-amber-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
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
                    <p className="text-sm text-gray-500 pl-2">
                      {post.readTime}
                    </p>
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

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">
              No blog posts found matching your search or category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostsPage;
