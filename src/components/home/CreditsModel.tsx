"use client";

import Image from "next/image";
import Link from "next/link";

export default function CreditsModel() {
  return (
    <section className="main-container bg-white py-12">
      <div className="flex lg:flex-row flex-col justify-between gap-10 items-center">
        
        {/* Left Side */}
        <div className="w-full">
          <h2 className="lg:text-5xl text-2xl font-bold text-gray-900">
            What is Credits-Based <br /> Subscription Model?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Our Credits-Based Subscription Model ensures that you just have to
            pay for successful calls. Credits are deducted only when the trade
            is successful –{" "}
            <span className="font-semibold text-gray-800">
              Losses Equals Zero Credits Used.
            </span>
          </p>

          <Link href={"service"}>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            Learn More
          </button>
          </Link>


          <p className="mt-4 text-sm text-gray-500 italic">
            *Successful calls are not assurance of profits, but accountability of
            research calls
          </p>
        </div>

        {/* Right Side - Phone Mockup with Floating Labels */}
        <div className="w-full relative flex justify-end">
          <Image
            src="/home2.webp"
            alt="Credits Subscription Model"
            width={360}
            height={400}
            className="rounded-xl"
          />

          {/* Floating Label - Research Calls */}
          <div className="absolute left-1/3 top-1/3 bg-white shadow px-3 py-2 rounded-lg text-sm font-medium text-gray-700">
            Research Trade Calls
          </div>

          {/* Floating Label - Target/Stoploss */}
          <div className="absolute right-0 bottom-20 bg-white shadow px-3 py-2 rounded-lg text-sm font-medium text-gray-700">
            Target/Stoploss
          </div>
        </div>
      </div>
    </section>
  );
}
