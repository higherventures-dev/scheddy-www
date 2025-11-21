"use client";

import FaqList from "./FaqList";
import { Reveal } from "./Reveal";

// Local safe prop type for marketing site
type FaqSectionProps = {
  data?: {
    title?: string;
    subtitle?: string;
    faqs?: {
      question?: string;
      answer?: string;
    }[];
    allFaqs?: {
      question?: string;
      answer?: string;
    }[];
  };
};

export default function FaqSection({ data }: { data?: any | null }) {
  if (!data) return null;

  // Choose selected or fallback FAQ list
  const selectedFaqs = Array.isArray(data.faqs)
    ? data.faqs
    : Array.isArray(data.allFaqs)
    ? data.allFaqs
    : [];

  return (
    <div className="max-w-5xl mx-auto px-4" id="faqs">
      <Reveal>
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-50">
            {data.title || "Frequently Asked Questions"}
          </h2>

          {data.subtitle && (
            <p className="mt-2 text-slate-300 max-w-xl mx-auto">
              {data.subtitle}
            </p>
          )}
        </div>
      </Reveal>

      {/* <Reveal delay={0.1}>
        <FaqList faqs={selectedFaqs} />
      </Reveal> */}
    </div>
  );
}
