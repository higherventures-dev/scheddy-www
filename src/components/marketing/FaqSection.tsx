"use client";

import { useState } from "react";

interface FAQItem {
  id?: string;
  question?: string;
  answer?: string;
}

interface FaqSectionProps {
  data: {
    title: string;
    subtitle?: string;
    faqs: FAQItem[];
  };
}

export default function FaqSection({ data }: FaqSectionProps) {
  const { title, subtitle, faqs } = data;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
        <p className="text-gray-500 mt-8">No FAQs available yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold">{title}</h2>

      {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}

      <div className="mt-10 space-y-4">
        {faqs.map((item, index) => (
          <div
            key={item.id ?? index}
            className="border border-gray-700 rounded-lg p-5 cursor-pointer bg-black/40"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{item.question}</h3>

              <span className="text-gray-400 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-3 text-gray-300">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
