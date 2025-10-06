"use client";

import { CheckCircle, ShieldCheck, XCircle } from "lucide-react";
import Image from "next/image";

export default function HeroUnreliable() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl overflow-hidden py-12 px-6 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start justify-between">
      {/* Left Content */}
      <div className="max-w-xl space-y-6">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
          Tired of Unreliable Trade or <br /> Research Recommendations and Wasted Fees?
        </h2>

        <p className="text-lg">
          Join DalalStreet Today! Pay for Successful Research Calls – Credits Based Subscription.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-6 mt-6 text-sm font-medium">
          <div className="flex items-center gap-2">
            <XCircle className="w-5 h-5 text-white" />
            <span>No Contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-white" />
            <span>No Hidden Costs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-white" />
            <span>Just Trusted Results</span>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative mt-10 lg:mt-0 lg:ml-12 flex-shrink-0">
        <Image
          src="/home6.webp" // 👉 replace with your image
          alt="Stressed Trader"
          width={400}
          height={300}
          className="rounded-lg object-contain"
        />

        {/* Popup Box */}
        <div className="absolute top-10 left-0 bg-white text-gray-900 text-sm font-medium px-3 py-1 rounded-lg shadow-md flex items-center gap-2">
          <span className="font-semibold">Loss</span>
          <span className="text-gray-500">ARMC</span>
          <span className="text-red-600">-₹12,398.00</span>
        </div>
      </div>
    </section>
  );
}
