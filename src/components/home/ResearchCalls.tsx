"use client";

import Image from "next/image";
import Link from "next/link";

export default function ResearchCalls() {
  return (
    <section className="main-container bg-white py-12">
      <div className="flex lg:flex-row flex-col justify-between gap-10 items-center">
        
        {/* Left Section */}
        <div className="flex flex-col gap-5">
          <h2 className="lg:text-6xl text-2xl font-bold text-gray-900 ">
            Research Calls <br /> For Every{" "}
            <span className="text-blue-500">Trader</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
           {` India's`} First SEBI Registered Credits-Based<br/> Subscription Model:{" "}
            <span className="font-semibold text-gray-800">
              Pay only for Successful<br/> Research Calls.
            </span>
          </p>
          <Link href={"service"} className="mt-6 w-fit px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            Get Started Now
          </Link>
        </div>

        {/* Right Section */}
        <div className="relative">
          <Image
            src="/home1.webp"
            alt="Research Calls"
            width={700}
            height={600}
            className="rounded-2xl shadow "
          />
          
          {/* Floating Card */}
          {/* <div className="absolute -left-10  bg-white rounded-xl shadow-lg p-5 max-w-sm">
            <div className="flex space-x-2 mb-2">
              <span className="bg-cyan-100 text-cyan-700 text-xs font-semibold px-2 py-1 rounded-md">
                Age 28
              </span>
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-md">
                Entrepreneur
              </span>
            </div>
            <h4 className="font-bold text-gray-900">Meet Hitesh,</h4>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              He easily makes portfolio diversification decisions without having
              to divert too much focus from his start-up,{" "}
              <span className="font-semibold text-gray-800">
                trusting analysts to guide him in the right direction.
              </span>
            </p>
            <a href="#" className="mt-3 inline-block text-blue-600 font-medium text-sm">
              Start Free →
            </a>
          </div> */}
                {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
      </div>
        </div>
        
      </div>


    </section>
  );
}
