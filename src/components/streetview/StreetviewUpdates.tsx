"use client";
import { useState } from "react";

export default function StreetviewUpdates() {
  const [tab, setTab] = useState("daily");

  const gainers = [
    { name: "TATAMTRDVR", price: "₹712.20", change: "+6.92%" },
    { name: "POWERGRID", price: "₹206.55", change: "+3.65%" },
    { name: "KOTAKBANK", price: "₹1,892.45", change: "+3.44%" },
    { name: "ASIANPAINT", price: "₹3,440.00", change: "+2.62%" },
    { name: "LT", price: "₹3,010.00", change: "+2.61%" },
  ];

  const losers = [
    { name: "MARUTI", price: "₹9,080.00", change: "-6.42%" },
    { name: "TECHM", price: "₹1,260.00", change: "-3.28%" },
    { name: "DRREDDY", price: "₹5,350.00", change: "-2.15%" },
    { name: "COALINDIA", price: "₹325.00", change: "-1.82%" },
    { name: "MANAPPURAM", price: "₹105.00", change: "-1.61%" },
  ];

  const news = [
    "Street View index value stable today.",
    "Nifty closed higher, Sensex target of 102,000 achieved.",
    "Midcap Index gains 2.4% on positive quarterly results.",
    "Tata Investment Corp gains momentum with dividend news.",
    "Global markets react to new US inflation report.",
  ];

  return (
    <section className="bg-gray-50 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4">Home &gt; Streetview</p>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setTab("daily")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              tab === "daily"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Streetview Daily Updates
          </button>
          <button
            onClick={() => setTab("weekly")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              tab === "weekly"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Streetview Weekly Updates
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6">Streetview Daily Updates</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Charts */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-semibold mb-2">Street Open</h3>
              <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">
                📈 Chart Placeholder
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-semibold mb-2">Street Close</h3>
              <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">
                📊 Chart Placeholder
              </div>
            </div>

            {/* Gainers */}
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-semibold mb-3">Top Gainers</h3>
              <ul className="space-y-2">
                {gainers.map((g, i) => (
                  <li key={i} className="flex justify-between text-sm">
                    <span>{g.name}</span>
                    <span className="font-medium text-green-600">{g.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Losers */}
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-semibold mb-3">Top Losers</h3>
              <ul className="space-y-2">
                {losers.map((l, i) => (
                  <li key={i} className="flex justify-between text-sm">
                    <span>{l.name}</span>
                    <span className="font-medium text-red-600">{l.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar News */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-semibold mb-3">Daily Stock Market News</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {news.map((n, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-blue-500">•</span> {n}
                  </li>
                ))}
              </ul>
            </div>

            {/* Promo Box */}
            <div className="bg-blue-100 rounded-xl shadow p-6 text-center">
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                New to trading?
              </h3>
              <p className="text-sm text-blue-800 mb-4">
                Our hand-holding support makes getting started easy!
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Get Started Now
              </button>
            </div>
          </div>
        </div>

        {/* Trending Now */}
        <div className="mt-10">
          <h3 className="font-semibold text-lg mb-3">Trending Now</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow p-4">
              📢 True Deal: Nifty Midcap index hits all-time high
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              💡 Navama Wealth: Secure investments with AI insights
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              📊 Warren Growth: 4.5% CAGR outperforming markets
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="bg-white rounded-xl shadow mt-10 p-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              Get daily predictions and stock updates
            </h3>
            <p className="text-gray-500 text-sm">
              Enter your email and never miss an update.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="border rounded-lg px-3 py-2"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
