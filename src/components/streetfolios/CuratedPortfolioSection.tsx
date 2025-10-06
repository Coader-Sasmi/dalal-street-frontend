"use client";

import Image from "next/image";
import React from "react";

const CuratedPortfolioSection = () => {
  return (
    <section
      className="w-full bg-gradient-to-b from-white to-[#f6faff] py-12 md:py-20 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl shadow-sm"
    >
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
          Invest with Confidence. <br />
          <span className="text-blue-600">Curated Portfolios</span> for Every Investor.
        </h2>

        <p className="text-gray-600 text-base md:text-lg mt-6 leading-relaxed">
          Professional-grade model portfolios, crafted by SEBI-registered experts,
          designed to match your goals with clarity, structure, and simplicity.
        </p>

        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-medium px-6 md:px-8 py-3 rounded-xl transition shadow-md">
            Explore Portfolio
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="rounded-2xl overflow-hidden shadow-lg max-w-lg">
          <Image
            src="/street1.webp" // replace with your image path
            alt="Investor analyzing stock portfolio"
            width={600}
            height={400}
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CuratedPortfolioSection;
