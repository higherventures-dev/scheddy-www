"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductTour({ data }) {
  if (!data || !data.steps) return null;

  const [active, setActive] = useState(0);
  const steps = data.steps;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT: Steps */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">{data.title}</h2>
          <p className="text-slate-400">{data.subtitle}</p>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`block w-full text-left p-4 rounded-xl border transition ${
                  active === i
                    ? "bg-sky-600/20 border-sky-500"
                    : "bg-slate-900/50 border-slate-700"
                }`}
              >
                <div className="text-white font-medium flex items-center gap-2">
                  {step.icon && <span>{step.icon}</span>}
                  {step.name}
                </div>
                <p className="text-slate-400 text-sm mt-1">
                  {step.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Screenshot */}
        <div className="md:col-span-2">
          <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
            <Image
              src={steps[active].image.url}
              alt={steps[active].name}
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
