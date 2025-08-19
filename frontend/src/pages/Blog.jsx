import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

// Import blog images
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";
import blog4 from "../assets/blog/blog4.png";
import blog5 from "../assets/blog/blog5.png";
import blog6 from "../assets/blog/blog6.png";

// Hero background image
import maskgroup from "../assets/maskgroup.png";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Pet Owners’ Cleaning Guide: Keeping Homes Clean and Safe for Everyone",
      desc: "Pets bring joy, but keeping your home clean is essential for safety and hygiene. Learn tips to maintain a spotless and safe environment for everyone.",
      img: blog1,
    },
    {
      id: 2,
      title: "Why Professional Home Cleaning is Booming in Australia (and How You Can Benefit)",
      desc: "Discover why professional cleaning is in demand, and how hiring experts can save you time while maintaining a healthy home.",
      img: blog2,
    },
    {
      id: 3,
      title: "How Often Should You Really Clean These 15 Household Items?",
      desc: "Avoid germs by knowing exactly when and how to clean your household items. This guide gives clear cleaning schedules.",
      img: blog3,
    },
    {
      id: 4,
      title: "10 Everyday Cleaning Hacks That Actually Work",
      desc: "Practical cleaning hacks that save time, money, and effort while keeping your home sparkling.",
      img: blog4,
    },
    {
      id: 5,
      title: "Cleaning Schedules That Actually Work: Daily, Weekly, Monthly",
      desc: "Organize your cleaning tasks efficiently with structured schedules that really work.",
      img: blog5,
    },
    {
      id: 6,
      title: "5 Common Cleaning Mistakes That Could Be Harming Your Health",
      desc: "Avoid common cleaning mistakes that could negatively affect your health and wellbeing.",
      img: blog6,
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative w-full h-[250px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${maskgroup})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#4977E5]/80"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
          <div className="flex items-center justify-center gap-2 text-sm mt-2">
            <FaHome className="text-white" />
            <Link
              to="/"
              className="hover:underline hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <span>›</span>
            <span className="font-medium">Blog</span>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Latest Cleaning Tips</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition hover:scale-105 duration-300"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.desc}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="mt-2 inline-block text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            View More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
