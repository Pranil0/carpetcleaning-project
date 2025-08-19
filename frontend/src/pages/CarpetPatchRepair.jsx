import React from "react";
import { FaHome, FaStar, FaCheckCircle } from "react-icons/fa";

// Images
import carpetpatch1 from "../assets/carpetpatch1.png";
import carpetpatch2 from "../assets/carpetpatch2.png";
import carpetpatchbeforeafter from "../assets/carpetpatchbeforeafter.png";
import carpetpatchgallery1 from "../assets/carpetpatchgallery1.png";
import carpetpatchgallery2 from "../assets/carpetpatchgallery2.png";
import carpetpatchgallery3 from "../assets/carpetpatchgallery3.png";

const CarpetPatchRepair = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Breadcrumb & Header */}
      <div className="bg-[#4977E5] text-white py-12 text-center relative">
        <div className="max-w-4xl mx-auto">
          <p className="flex justify-center items-center gap-2 text-sm mb-4">
            <FaHome className="text-white" /> Home / Service
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">Carpet Patch Repair</h1>
          <div className="mt-3 flex justify-center items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span className="bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold">
              4.5 (3)
            </span>
          </div>
        </div>
      </div>

      {/* Top Image */}
      <div className="max-w-5xl mx-auto px-6 my-10">
        <img
          src={carpetpatch1}
          alt="Carpet Patch Repair"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          🛠️ About Carpet Patch Repair
        </h2>
        <p className="text-gray-700 mb-4">
          Carpet damage like burns, stains, or tears can be unsightly. Carpet patch repair restores your flooring to its original beauty without a full replacement.
        </p>
        <p className="text-gray-700 mb-4">
          Our professional team carefully matches colors, textures, and pile height to seamlessly repair damaged areas.
        </p>
        <p className="text-gray-700 mb-4">
          Regular maintenance and timely patch repair extends the life of your carpets, keeping them clean, safe, and visually appealing.
        </p>

        <h3 className="text-xl font-semibold mb-3">Our carpet patch repair service:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Seamless color and texture matching.</li>
          <li>Quick, professional repairs with minimal disruption.</li>
          <li>Protects your investment and enhances home comfort.</li>
          <li>Extends carpet life and appearance.</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Expert matching of carpet patches
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Fast & minimally disruptive
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Long-lasting, professional repair
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Affordable solution vs replacement
            </li>
          </ul>
        </div>
        <div>
          <img
            src={carpetpatch2}
            alt="Professional Carpet Patch Repair"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Before VS After */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Before VS After</h2>
        <div className="flex justify-center">
          <img
            src={carpetpatchbeforeafter}
            alt="Before and After Carpet Repair"
            className="rounded-2xl shadow-lg w-full md:w-3/4 object-cover"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Before Repair</span>
          <span>After Repair</span>
        </div>
      </div>

      {/* How We Work & What We Repair */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* How We Work */}
        <div>
          <h2 className="text-2xl font-bold mb-6">How We Work ?</h2>
          <ol className="space-y-6">
            {[
              { step: "Assessment", desc: "We inspect carpet damage and identify repair needs." },
              { step: "Color & Texture Matching", desc: "Select a matching carpet patch." },
              { step: "Cut & Prepare Patch", desc: "Trim damaged area and prepare replacement." },
              { step: "Patch Installation", desc: "Secure the patch seamlessly in place." },
              { step: "Finishing & Grooming", desc: "Blend and finish for a flawless look." },
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

        {/* What We Repair */}
        <div>
          <h2 className="text-2xl font-bold mb-6">What We Repair ?</h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Burned or Stained Carpets",
              "Torn or Cut Carpet Areas",
              "Seam or Edge Damage",
              "Pet Damage",
              "High Traffic Worn Areas",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="text-[#4977E5] mt-1" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Our Work Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[carpetpatchgallery1, carpetpatchgallery2, carpetpatchgallery3].map((img, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-lg overflow-hidden aspect-square"
            >
              <img
                src={img}
                alt={`Carpet Patch Work ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#4977E5] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Restore Your Carpet Today!</h2>
        <p className="mb-6 text-lg">
          Book our carpet patch repair service and make your flooring look like new again.
        </p>
        <button className="bg-white text-[#4977E5] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarpetPatchRepair;
