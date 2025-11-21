"use client";

import FaqList from "./FaqList";
import { Reveal } from "./Reveal";

export default function FaqSection({ data }) {
  if (!data) return null;

  const selectedFaqs = Array.isArray(data.faqs) ? data.faqs : [];
  const allFaqs = Array.isArray(data.allFaqs) ? data.allFaqs : [];

  // Prefer homepage-selected FAQs, otherwise fallback to global
  const faqs = selectedFaqs.length > 0 ? selectedFaqs : allFaqs;

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

      <Reveal delay={0.1}>
        <FaqList faqs={faqs} />
      </Reveal>
    </div>
  );
}
