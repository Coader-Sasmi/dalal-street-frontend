"use client";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What exactly is a model portfolio?",
      answer:
        "A model portfolio is a professionally curated collection of stocks designed to help investors achieve specific financial goals with diversified exposure.",
    },
    {
      question: "How are the portfolios selected?",
      answer:
        "Portfolios are built by experts using thorough market research, company fundamentals, and proven investment strategies.",
    },
    {
      question: "How often are the portfolios updated?",
      answer:
        "Portfolios are reviewed regularly and updated whenever necessary to adapt to market changes and opportunities.",
    },
    {
      question: "Can I choose a portfolio based on my risk tolerance?",
      answer:
        "Yes, you can select from conservative, moderate, or aggressive portfolios based on your risk appetite.",
    },
    {
      question: "Is there any flexibility to switch portfolios later?",
      answer:
        "Absolutely. You can switch portfolios as your investment goals or risk preferences evolve.",
    },
    {
      question: "How does DalalStreet ensure the portfolios are aligned with my goals?",
      answer:
        "DalalStreet portfolios are designed with risk-adjusted returns in mind, ensuring they align with different financial objectives.",
    },
    {
      question: "Is my investment safe with Portfolios by DalalStreet?",
      answer:
        "While all investments carry some risk, DalalStreet’ research-backed approach minimizes unnecessary risks and focuses on long-term wealth creation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Got Questions? We’ve Got Answers.
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <button
              className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-900"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <Remove fontSize="small" />
              ) : (
                <Add fontSize="small" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
