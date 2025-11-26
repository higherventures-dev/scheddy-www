"use client";

import { useState, useRef, useEffect } from "react";

type FAQItem = {
  question?: string;
  answer?: string;
};

type FaqSectionProps = {
  data?: {
    title?: string;
    subtitle?: string;
    faqs?: FAQItem[];
  };
};

export default function FaqSection({ data }: FaqSectionProps) {
  if (!data) return null;

  const faqs = Array.isArray(data.faqs) ? data.faqs : [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
          {data.title ?? "Frequently asked questions."}
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItemAnimated
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => toggle(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ================================
   Animated FAQ Item Component
================================ */

function FAQItemAnimated({
  faq,
  isOpen,
  onClick,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  // Smooth height animation
  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      if (isOpen) {
        setHeight(el.scrollHeight + "px");
      } else {
        setHeight("0px");
      }
    }
  }, [isOpen]);

  return (
    <div
      className="bg-slate-900/60 border border-slate-800 rounded-3xl px-6 py-5 cursor-pointer transition hover:bg-slate-900/70"
      onClick={onClick}
    >
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <p className="text-lg text-slate-200 font-medium">{faq.question}</p>

        {/* Animated Indicator */}
        <div
          className={`h-6 w-6 flex items-center justify-center rounded-full border border-slate-500 transition-all duration-300 ${
            isOpen ? "bg-sky-500 border-sky-500 rotate-45" : "bg-transparent"
          }`}
        >
          {/* Plus -> turns into X when rotated */}
          <span
            className={`block h-3 w-0.5 bg-slate-300 absolute transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-70"
            }`}
          ></span>
          <span
            className={`block w-3 h-0.5 bg-slate-300 transition-all duration-300 ${
              isOpen ? "bg-white" : "opacity-70"
            }`}
          ></span>
        </div>
      </div>

      {/* Animated Expandable Content */}
      <div
        style={{ height }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div
          ref={contentRef}
          className={`pt-4 text-slate-400 text-sm leading-relaxed transform transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
