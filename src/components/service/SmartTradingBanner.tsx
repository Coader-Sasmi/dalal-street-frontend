"use client";
import Image from "next/image";

const SmartTradingBanner = () => {
  return (
    
    <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 my-10">
      {/* Left Text Section */}
      <div className="main-container space-y-4 md:p-12 p-6">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 leading-snug">
          Unlock the potential of smart trading with our well-researched stock
          calls that save you time and help optimize your investment decisions
          Making.
        </h2>

        <button className="mt-6 px-6 py-3 bg-white text-gray-800 font-semibold rounded-md border border-gray-300 hover:bg-gray-100 transition">
          Get Started Now
        </button>
      </div>

      {/* Right Image Section */}
      <div className="relative mt-10 md:mt-0">
        <div className="relative">
          <Image
            src="/serviveimg1.webp" // <-- place your image in /public/trader.png
            alt="Trader"
            width={400}
            height={300}
            className="rounded-xl"
          />

          {/* Floating Stock Card */}
          <div className="absolute -left-16 top-20 bg-blue-600 text-white rounded-lg shadow-lg p-3 text-sm w-44">
            <p className="font-semibold">Best Stocks to Invest in</p>
            <div className="flex justify-between items-center mt-1 text-blue-100 bg-blue-700 rounded-md px-2 py-1">
              <span>BHHDF</span>
              <span className="bg-green-500 text-white px-2 py-0.5 rounded-md text-xs flex items-center">
                ₹ 588.08 <span className="ml-1">⬆</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartTradingBanner;
