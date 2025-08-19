import React from "react";
import { FaHome, FaStar, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";
import upholsteryImg from "../assets/upholstrey.png";
import cleancouch from "../assets/cleancouch.png";
import upholsterybeforeafter from "../assets/upholsterybeforeafter.png";

// gallery images (replace with your own images if needed)
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";

const UpholsteryCleaning = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Breadcrumb & Header Section */}
      <div className="bg-[#4977E5] text-white py-12 text-center relative">
        <div className="max-w-4xl mx-auto">
          <p className="flex justify-center items-center gap-2 text-sm mb-4">
            <FaHome className="text-white" /> Home / Service
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Upholstery Cleaning
          </h1>
          <div className="mt-3 flex justify-center items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span className="bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold">
              4.0 (2)
            </span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-5xl mx-auto px-6 my-10">
        <img
          src={upholsteryImg}
          alt="Upholstery Cleaning"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span role="img" aria-label="sofa">🛋️</span> About Upholstery Cleaning
        </h2>
        <p className="text-gray-700 mb-4">
          Your furniture is one of the most used – and often most overlooked – parts of your home. 
          Whether it’s the sofa where your family gathers, the chair you relax in after a long day, 
          or the cushions that make your space cozy, they all collect more than just comfort. 
          Dust, dirt, food crumbs, pet hair, and allergens slowly settle deep within the fabric, 
          while stains and odors creep in over time.
        </p>
        <p className="text-gray-700 mb-4">
          A simple wipe or vacuuming isn’t enough to truly refresh your upholstery. 
          That’s where professional upholstery cleaning makes a difference. 
          Using specialized equipment and fabric-safe solutions, our team removes hidden dirt, lifts stubborn stains, 
          and neutralizes odors – restoring the original look and feel of your furniture.
        </p>
        <p className="text-gray-700 mb-4">
          Regular upholstery cleaning not only enhances the appearance of your home but also improves indoor air quality 
          by reducing allergens, bacteria, and dust mites. This is especially important for families with children or pets, 
          as fabrics can easily trap unwanted germs and smells.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Our upholstery cleaning service is designed to:
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Protect delicate fabrics and leather without damage.</li>
          <li>Eliminate deep-set stains and unpleasant odors.</li>
          <li>Refresh colors and texture, making your furniture look new again.</li>
          <li>Extend the life of your investment so you enjoy comfort for years to come.</li>
        </ul>

        <p className="text-gray-700">
          Think of it as a spa day for your furniture – a treatment that brings back its beauty, freshness, 
          and hygiene while giving you peace of mind.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Fabric-safe cleaning solutions
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Eco-friendly, non-toxic products
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Removal of tough stains & odors
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Gentle care for delicate fabrics & leather
            </li>
          </ul>
        </div>
        <div>
          <img
            src={cleancouch}
            alt="Clean Couch"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Before VS After Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Before VS After</h2>
        <div className="flex justify-center">
          <img
            src={upholsterybeforeafter}
            alt="Before and After Upholstery Cleaning"
            className="rounded-2xl shadow-lg w-full md:w-3/4 object-cover"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Before Our Services</span>
          <span>After Our Services</span>
        </div>
      </div>

      {/* How We Work & What We Clean Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* How We Work */}
        <div>
          <h2 className="text-2xl font-bold mb-6">How We Work ?</h2>
          <ol className="space-y-6">
            {[
              { step: "Inspection", desc: "We check fabric type & stains." },
              { step: "Vacuuming", desc: "Remove dust, dirt & debris." },
              { step: "Stain & Spot Treatment", desc: "Target stubborn marks." },
              { step: "Deep Cleaning & Sanitization", desc: "Steam or foam cleaning as per material." },
              { step: "Drying & Grooming", desc: "Quick dry & fabric protection." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4977E5] text-white font-semibold">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">{item.step}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* What We Clean */}
        <div>
          <h2 className="text-2xl font-bold mb-6">What We Clean ?</h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Sofas & Recliners",
              "Dining Chairs & Armchairs",
              "Mattresses & Cushions",
              "Office Chairs",
              "Car Upholstery",
              "Curtains & Drapes",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="text-[#4977E5] mt-1" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image Gallery Section */}
<div className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-2xl font-bold text-center mb-10">Our Work Gallery</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[gallery1, gallery2, gallery3].map((img, i) => (
      <div
        key={i}
        className="rounded-2xl shadow-lg overflow-hidden aspect-square" // keeps images same size
      >
        <img
          src={img}
          alt={`Upholstery Work ${i + 1}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
</div>


      {/* Reviews Section */}
<div className="bg-white py-16">
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-2xl font-bold text-center mb-10">Rate Our Service</h2>

    {/* Rating Form */}
    <form className="bg-white shadow-md rounded-2xl p-6 mb-10">
      {/* Name Input */}
      <input
        type="text"
        placeholder="Your Name"
        className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      {/* Star Rating */}
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-200"
            size={30}
          />
        ))}
      </div>

      {/* Review Textarea */}
      <textarea
        placeholder="Write your review (optional)"
        className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl transition-colors duration-200"
      >
        Submit Rating
      </button>
    </form>
  </div>
</div>


      {/* CTA Section */}
      <div className="bg-[#4977E5] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Refresh Your Furniture?</h2>
        <p className="mb-6 text-lg">
          Book our upholstery cleaning service today and bring back the comfort & beauty of your home.
        </p>
        <button className="bg-white text-[#4977E5] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default UpholsteryCleaning;