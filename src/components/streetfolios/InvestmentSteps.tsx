"use client";
import {
  AccountBalanceWallet,
  ArrowUpward,
  BarChart,
  Description,
} from "@mui/icons-material";

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
      desc: "One-click execution through fully integrated brokers effortlessly. Invest in minutes, with no hidden fees.",
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
    <section className="main-container py-16">
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          A Simple Path to Invest: Structured, Transparent, and Smart
        </h2>
        <p className="text-gray-600 mb-12 ">
          Getting started with Portfolios by DalalStreet is straightforward. Here’s how it works:
        </p>

        {/* Timeline */}
        <div className="relative w-full">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-200"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative w-full md:w-1/4 flex flex-col items-center text-center"
          >
            {/* Circle with Icon */}
            <div className="bg-white border-2 border-blue-100 rounded-full p-3 z-10 shadow-sm">
              {step.icon}
            </div>

            {/* Text */}
            <div className="py-6 flex flex-col gap-2 items-center">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 max-w-xs">{step.desc}</p>
            </div>
          </div>
        ))}

          </div>
        </div>
      </div>
    </section>
  );
}
