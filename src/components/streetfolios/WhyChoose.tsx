"use client";
import { ArrowUpward, AttachMoney, Description, Security } from "@mui/icons-material";

export default function WhyChoosePortfolios() {
  const features = [
    {
      icon: <ArrowUpward fontSize="large" className="text-blue-500" />,
      title: "Expert-Curated Portfolios",
      desc: "Crafted by SEBI-registered research analysts with market and behavioural discipline.",
    },
    {
      icon: <Description fontSize="large" className="text-blue-500" />,
      title: "Diversified & Research-Backed",
      desc: "Focused on risk-adjusted returns, momentum analysis, and market leadership.",
    },
    {
      icon: <Security fontSize="large" className="text-blue-500" />,
      title: "Seamless Execution",
      desc: "Integrated with leading brokers for one-click investing and smooth rebalancing.",
    },
    {
      icon: <AttachMoney fontSize="large" className="text-blue-500" />,
      title: "Transparent & Cost-Effective",
      desc: "₹750/month. No hidden fees - only well-researched, goal-aligned.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Why Choose Portfolios by DalalStreet?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition">
            Explore Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
