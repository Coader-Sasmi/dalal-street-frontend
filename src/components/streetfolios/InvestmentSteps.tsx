"use client";
import { AccountBalanceWallet, ArrowUpward, BarChart, Description } from "@mui/icons-material";

export default function InvestmentSteps() {
  const steps = [
    {
      icon: <Description fontSize="large" className="text-blue-500" />,
      title: "Select a Portfolio",
      desc: "Browse our curated portfolios and choose one that aligns with your investment goals and risk tolerance.",
    },
    {
      icon: <AccountBalanceWallet fontSize="large" className="text-blue-500" />,
      title: "Invest Seamlessly",
      desc: "One-click execution through integrated brokers. Invest in minutes, with no hidden fees.",
    },
    {
      icon: <BarChart fontSize="large" className="text-blue-500" />,
      title: "Track & Rebalance",
      desc: "Get regular updates and recommendations on rebalancing your portfolio to keep it aligned with market trends and your risk comfort.",
    },
    {
      icon: <ArrowUpward fontSize="large" className="text-blue-500" />,
      title: "Grow Your Wealth",
      desc: "Stay invested, track your progress, and reach your financial goals with consistent, research-backed strategies.",
    },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          A Simple Path to Invest: Structured, Transparent, and Smart
        </h2>
        <p className="text-gray-600 mb-12">
          Getting started with Portfolios by DalalStreet is straightforward. Here’s how it works:
        </p>

        {/* Step Timeline */}
        <div className="relative flex justify-between items-start">
          {/* Horizontal Line */}
          <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-200"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative w-1/4 flex flex-col items-center px-2">
              {/* Circle with Icon */}
              <div className="bg-white border-2 border-blue-100 rounded-full p-3 z-10">
                {step.icon}
              </div>
              {/* Text */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
