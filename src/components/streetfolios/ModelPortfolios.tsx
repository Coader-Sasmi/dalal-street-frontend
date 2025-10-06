"use client";
import {
  Insights,
  Favorite,
  ShowChart,
  Business,
  TrendingUp,
} from "@mui/icons-material";

export default function ModelPortfolios() {
  const portfolios = [
    {
      icon: <Insights className="text-green-600" fontSize="large" />,
      title: "Hidden Gems Fundamental",
      desc: "Investing in quality at a discount – strong businesses with low PEs and high potential.",
      risk: "High Volatile",
      minInvestment: "₹10,455",
      registered: "1926 People Registered",
      updated: "Last Updated: 25 Aug",
      slots: "2 Limited Slots Left",
    },
    {
      icon: <Favorite className="text-red-500" fontSize="large" />,
      title: "Health First Portfolio",
      desc: "A beautifully healthcare portfolio featuring fundamentally sound hospital chains and pharma companies.",
      risk: "Low Volatile",
      minInvestment: "₹12,034",
      registered: "544 People Registered",
      updated: "Last Updated: 25 Aug",
      slots: "3 Limited Slots Left",
    },
    {
      icon: <Business className="text-blue-600" fontSize="large" />,
      title: "Blue Chip Legacy",
      desc: "Large-Cap Equity Portfolio for Long-Term Wealth Preservation.",
      risk: "Low Volatile",
      minInvestment: "₹25,589",
      registered: "2556 People Registered",
      updated: "Last Updated: 25 Aug",
      slots: "5 Limited Slots Left",
    },
    {
      icon: <ShowChart className="text-purple-600" fontSize="large" />,
      title: "Midcap Masters Portfolio",
      desc: "A portfolio of quality midcap companies from the Nifty Midcap 150, selected for strong fundamentals.",
      risk: "High Volatile",
      minInvestment: "₹11,464",
      registered: "875 People Registered",
      updated: "Last Updated: 25 Aug",
      slots: "1 Limited Slot Left",
    },
    {
      icon: <TrendingUp className="text-orange-500" fontSize="large" />,
      title: "Little Masters",
      desc: "Small & Mid-Cap Portfolio of Emerging Disruptors.",
      risk: "High Volatile",
      minInvestment: "₹13,118",
      registered: "987 People Registered",
      updated: "Last Updated: 25 Aug",
      slots: "2 Limited Slots Left",
    },
    {
      icon: <ShowChart className="text-pink-600" fontSize="large" />,
      title: "Aggressive Momentum",
      desc: "Aggressive Momentum Portfolio targets short-term trades by capturing weekly trends in high-volume stocks.",
      risk: "High Volatile",
      minInvestment: "₹8,452",
      registered: "566 People Registered",
      updated: "Last Updated: 25 Aug",
      slots: "3 Limited Slots Left",
    },
    {
      icon: <Insights className="text-yellow-500" fontSize="large" />,
      title: "New Test Portfolio",
      desc: "Small & Mid-Cap Portfolio of Emerging Disruptors.",
      risk: "High Volatile",
      minInvestment: "₹910",
      registered: "89 People Registered",
      updated: "Last Updated: 25 Aug",
      slots: "2 Limited Slots Left",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Model Portfolios That Fit Your Goals
        </h2>
        <p className="text-gray-600 mb-12">
          Choose from a range of professionally constructed portfolios, each
          designed to match different investor profiles and financial needs.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((portfolio, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-100 rounded-lg">{portfolio.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {portfolio.title}
                  </h3>
                </div>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                  {portfolio.slots}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">{portfolio.desc}</p>

              {/* Info badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                  {portfolio.risk}
                </span>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                  {portfolio.minInvestment}
                </span>
                <span className="text-xs text-gray-500">{portfolio.registered}</span>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-400">{portfolio.updated}</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
