"use client";

import Image from "next/image";
import Link from "next/link";

const steps = [
  "Register to access our services.",
  "Receive a call back from our team.",
  "Understand the risks associated with investments.",
  "Choose services based on the information provided.",
  "Evaluate research recommendations.",
  "Subscribe to research calls.",
  "Get notified about Buy, Sell, and Hold options.",
  "Stay connected with our research analysts.",
  "Make well-informed investment decisions.",
];

export default function OurProcess() {
  return (
    <section className="main-container py-16">
      <div className=" flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1f2023]">
            Our Process
          </h2>
          <p className=" text-center font-medium text-2xl text-[#1f2023] tracking-wider">
            Get premium access to well-researched trade calls!
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
        {/* Left Image */}
        <div className="w-full">
          <Image
            src="/home4.webp"
            alt="Our Process"
            width={700}
            height={400}
            className=""
          />
        </div>

        {/* Right Stepper */}
        <div className=" w-full">
          <div className="w-fit">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  idx === 1 ? "bg-blue-50 border-blue-400 border" : ""
                }`}
              >
                <span
                  className={`flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold ${
                    idx === 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {idx + 1}
                </span>
                <p
                  className={`font-medium  ${
                    idx === 1 ? "text-blue-700" : "text-gray-900"
                  }`}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>


        </div>
        
        </div>
          {/* CTA Button */}
          <div className="md:mt-10 mt-6 flex justify-center lg:justify-start">
            <Link href={"service"}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-lg font-medium shadow">
              Explore Services
            </button>
            </Link>

          </div>

      </div>
    </section>
  );
}
