"use client";

import {
  Activity,
  BarChart3,
  FileText,
  Filter,
  Headphones,
  Newspaper,
  PhoneCall,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: <PhoneCall className="w-6 h-6 text-blue-600" />,
    title: "Trade Research Calls",
    desc: "Actionable insights for successful, research-backed trading decisions.",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-blue-600" />,
    title: "Personal Guide for Beginners",
    desc: "Step-by-step guidance for new traders and investors.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-blue-600" />,
    title: "Live Market Support",
    desc: "Daily assistance to make informed trading decisions.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    title: "Market Views",
    desc: "Everyday’s perspectives on market trends and opportunities.",
  },
  {
    icon: <Newspaper className="w-6 h-6 text-blue-600" />,
    title: "Market News and Update",
    desc: "Latest news impacting stocks and the overall market.",
  },
  {
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    title: "Stock Research Reports",
    desc: "In-depth analyses to support informed stock choices.",
  },
  {
    icon: <Filter className="w-6 h-6 text-blue-600" />,
    title: "Market Screener",
    desc: "Comprehensive tools to filter stocks by criteria.",
  },
  {
    icon: <Activity className="w-6 h-6 text-blue-600" />,
    title: "Market Mood Index",
    desc: "Gauge overall market sentiment for better timing.",
  },
];

export default function InvestorsHub() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="main-container">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          DalalStreet Investor&apos;s Hub
        </h2>
        <p className="mt-2 text-gray-600 text-xl">
          Daily Market Views. Analyst Research Calls. Consistent Returns.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-12 gap-y-8 mt-12 text-left">
          {features.map((f, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="flex-shrink-0">{f.icon}</div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className=" text-gray-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        {/* <div className="relative mt-16 flex flex-col items-center">
          <Image
            src="/investors.png" 
            alt="Investors"
            width={400}
            height={300}
            className="z-10 relative"
          />

          <div className="mt-4 text-center z-10">
            <p className="text-blue-500 font-semibold">Trusted By</p>
            <h3 className="text-2xl font-bold text-blue-600">329,600+ Investors</h3>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              viewBox="0 0 1440 320"
              className="w-full h-28 text-blue-600"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,170.7C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64V320H0Z"
              ></path>
            </svg>
            <h2 className="absolute bottom-6 w-full text-center text-white font-bold text-xl md:text-2xl">
              Aligning with Your Financial Goal and Risk Tolerance
            </h2>
          </div>
        </div> */}
      </div>
    </section>
  );
}
