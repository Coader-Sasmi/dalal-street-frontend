"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

interface Plan {
  title: string;
  description: string;
  risk: string;
  return: string;
  type: string;
  period: string;
  registered: string;
  investment: string;
  credits: string;
}

const plansData: Plan[] = [
  {
    title: "Basic Intraday (B)",
    description: "Intraday Cash Segment Stocks for Small Traders (1–2 Trade Calls Per Day)",
    risk: "Moderate Risk",
    return: "Avg Return",
    type: "MIS",
    period: "Short-Term",
    registered: "79466",
    investment: "per month with GST",
    credits: " ₹12,500",
  },
  {
    title: "BASIC",
    description: "Daily 3 To 4 Calls, Expires Special Trade",
    risk: "Moderate Risk",
    return: "Avg Return",
    type: "NRML",
    period: "Short-Term",
    registered: "53150",
    investment: "per month with GST",
    credits: " ₹75,200/-",
  },
  {
    title: "SILVER",
    description: "1 To 2 Calls Daily Basic, WhatsApp Support, Telephone Support, BTST STBT 3 To 5 In Month, Service Hold Facilities Available, Hero Zero Trade With Upto 90% Accuracy",
    risk: "High Risk",
    return: "Avg Return",
    type: "NRML",
    period: "Long Term",
    registered: "49686",
    investment: "quarter (3 months) with GST",
    credits: "₹3,15,000/-",
  },
  {
    title: "PLATINUM",
    description: "2 To 3 Calls In Index And Stock, Futures And Forex, Commodity Market, WhatsApp Support, Telephone Support, Hero Zero Trade With Upto 90% Accuracy",
    risk: "High Risk",
    return: "Avg Return",
    type: "NRML",
    period: "Long Term",
    registered: "46177",
    investment: "",
    credits: "₹7,14,000/-",
  },
  {
    title: "DIAMOND",
    description: "Monthly 10 Calls Only, All Segments, Research Report, Conference Call With Expert, Get Access With Dabba Trading",
    risk: "Moderate Risk",
    return: "Avg Return",
    type: "MIS/NRML",
    period: "Short Term",
    registered: "38427",
    investment: "",
    credits: "₹14,16,000/-",
  },
];

const TradingPlansWithFilter = () => {
  const [selectedRisk, setSelectedRisk] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<string[]>([]);

  const [isOpen, setIsOpen] = useState(false);
   const modalRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleCheckbox = (
    value: string,
    selectedList: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selectedList.includes(value)) {
      setList(selectedList.filter((v) => v !== value));
    } else {
      setList([...selectedList, value]);
    }
  };

  const filteredPlans = plansData.filter((plan) => {
    const matchRisk =
      selectedRisk.length === 0 || selectedRisk.includes(plan.risk);
    const matchType =
      selectedType.length === 0 || selectedType.includes(plan.type);
    const matchPeriod =
      selectedPeriod.length === 0 || selectedPeriod.includes(plan.period);
    return matchRisk && matchType && matchPeriod;
  });

  return (
    <div className="flex flex-col md:flex-row gap-6 min-h-screen my-16">
      {/* Sidebar Filter */}
      <div className="w-full md:w-1/4 bg-blue-50 rounded-2xl p-5 shadow border border-blue-200">
        <div className="flex justify-between mb-4">
          <button className="px-3 py-1 rounded-md border text-sm font-medium bg-gray-100">
            Free
          </button>
          <button className="px-3 py-1 rounded-md border text-sm font-medium bg-gray-100">
            Paid
          </button>
        </div>

        <div className="space-y-5">
          {/* Risk Reward */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Risk Reward</h3>
            {["Moderate Risk", "High Risk", "Low Risk"].map((item) => (
              <label
                key={item}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  checked={selectedRisk.includes(item)}
                  onChange={() =>
                    handleCheckbox(item, selectedRisk, setSelectedRisk)
                  }
                  className="rounded border-gray-300"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          {/* Trade Type */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Trade Type</h3>
            {["MIS", "MIS/NRML", "NRML"].map((item) => (
              <label
                key={item}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  checked={selectedType.includes(item)}
                  onChange={() =>
                    handleCheckbox(item, selectedType, setSelectedType)
                  }
                  className="rounded border-gray-300"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          {/* Investment Period */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Investment Period</h3>
            {["Short-Term", "Short Term", "Long Term"].map((item) => (
              <label
                key={item}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  checked={selectedPeriod.includes(item)}
                  onChange={() =>
                    handleCheckbox(item, selectedPeriod, setSelectedPeriod)
                  }
                  className="rounded border-gray-300"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side Cards */}
      <div className="flex-1 space-y-5">
        {filteredPlans.length > 0 ? (
          filteredPlans.map((plan, i) => (
            <div
              key={i}
              className="bg-blue-50 border border-blue-200 rounded-2xl shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {plan.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">{plan.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      plan.risk.includes("High")
                        ? "bg-red-100 text-red-700"
                        : plan.risk.includes("Moderate")
                        ? "bg-orange-100 text-orange-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {plan.risk}
                  </span>
                  <span className="px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-700">
                    {plan.return}
                  </span>
                  <span className="px-2 py-1 rounded-md text-xs font-medium bg-yellow-100 text-yellow-700">
                    {plan.type}
                  </span>
                  <span className="px-2 py-1 rounded-md text-xs font-medium bg-cyan-100 text-cyan-700">
                    {plan.registered} People Registered
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end mt-3 md:mt-0">
                <span className="text-sm bg-blue-50 text-blue-700 font-medium px-3 py-1 rounded-md mb-2">
                  {plan.credits}
                </span>
                <span className="text-sm text-gray-500 mb-2">
                  {/* Min. Investment: */}
                  <span className="font-semibold">{plan.investment}</span>
                </span>
                <button onClick={() => setIsOpen(true)}
                 className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                  BUY NOW
                </button>
                
              </div>
            </div>
            
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No plans match your filters.</p>
        )}
      </div>
            {/* Modal */}
{/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-[99]"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-lg p-3 relative animate-slide-up"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>

            <Image
              src="/QR_code.jpeg"
              alt="Dalal Street Logo"
              width={600}
              height={300}
              className="h-auto w-auto"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TradingPlansWithFilter;
