"use client";

import { CheckCircle } from "@mui/icons-material";
import Image from "next/image";

export default function DownloadApp() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: App Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/home3.webp" 
            alt="DalalStreet App"
            width={400}
            height={600}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
            Download Our Apps <br />
            <span className="text-gray-700">Trade Smarter, Invest Better</span>
          </h2>

          {/* Tag */}
          <div className="mt-4">
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-md">
              For Traders
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-3 text-xl md:text-2xl font-bold text-gray-800">
            DalalStreet Trade Calls App
          </h3>

          {/* Description */}
          <p className="mt-2 text-gray-600">
            Stay ahead in the markets with research-backed calls in{" "}
            <span className="font-semibold">Stocks, Futures and Options.</span>
          </p>

          {/* Features */}
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-600" />
              <span className="text-gray-700">Pay only for successful research calls</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-600" />
              <span className="text-gray-700">Real-time alerts with stop-loss discipline</span>
            </li>
          </ul>

          {/* Divider */}
          <hr className="my-6 border-gray-200" />

          {/* Download Links */}
          <p className="text-blue-600 text-sm font-semibold mb-3">
            Download Trade Calls App
          </p>
          <div className="flex gap-4">
            <a href="#">
              <Image
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                width={140}
                height={50}
              />
            </a>
            <a href="#">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                width={150}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
