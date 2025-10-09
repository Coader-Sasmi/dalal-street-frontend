"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResearchCalls() {
  const words = ["Trader", "Investor"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setAnimate(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="main-container bg-white py-32">
      <div className="flex lg:flex-row flex-col justify-between gap-10 items-center">
        {/* Left Section */}
        <div className="flex flex-col gap-5">
          <h2 className="lg:text-6xl text-2xl font-bold text-gray-900">
            Research Calls <br /> For Every{" "}
            <span
              className={`text-blue-500 inline-block transition-all duration-500 transform ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
              }`}
            >
              {words[currentWordIndex]}
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            {`India's`} First SEBI Registered Credits-Based
            <br /> Subscription Model:{" "}
            <span className="font-semibold text-gray-800">
              Pay only for Successful
              <br /> Research Calls.
            </span>
          </p>
          <Link
            href={"service"}
            className="mt-6 w-fit px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get Started Now
          </Link>
        </div>

        {/* Right Section */}
        <div className="relative">
          <Image
            src="/HeroBg.jpg"
            alt="Research Calls"
            width={700}
            height={800}
            className="rounded-2xl shadow"
          />
        </div>
      </div>
    </section>
  );
}
