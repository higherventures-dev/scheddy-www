"use client";

import { Button } from "@/components/ui/button";

export default function PricingSection({ data }) {
  if (!data) return null;

  const plans = Array.isArray(data.plans) ? data.plans : [];

  return (
    <div className="max-w-6xl mx-auto px-4" id="plans">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
          {data.label || "Pricing"}
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-50">
          {data.title || "Simple, Transparent Pricing"}
        </h2>

        {data.subtitle && (
          <p className="mt-3 text-slate-300">{data.subtitle}</p>
        )}
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => {
          const features = Array.isArray(plan.features)
            ? plan.features
            : [];

          return (
            <div
              key={plan.id || plan.name}
              className={[
                "flex flex-col rounded-3xl border px-6 py-7 md:px-8 md:py-9",
                "bg-slate-900/90 text-left shadow-lg",
                plan.highlight
                  ? "border-sky-500/80 shadow-sky-900/40 md:scale-[1.02]"
                  : "border-slate-800",
              ].join(" ")}
            >
              {/* Top Text */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-300">
                  {plan.name || "Plan"}
                </p>

                <p className="text-2xl md:text-3xl font-bold text-slate-50">
                  {plan.price || "$0"}
                </p>

                {plan.subtitle && (
                  <p className="text-sm text-slate-400">
                    {plan.subtitle}
                  </p>
                )}
              </div>

              {/* CTA */}
              <div className="mt-6">
                <Button
                  className={
                    plan.highlight
                      ? "w-full bg-sky-500 text-slate-950 hover:bg-sky-400"
                      : "w-full"
                  }
                >
                  {plan.buttonLabel || "Select Plan"}
                </Button>
              </div>

              {/* Features */}
              <div className="mt-8">
                <p className="text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase">
                  Includes
                </p>

                <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                  {features.map((feature, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-400">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}

                  {features.length === 0 && (
                    <li className="text-slate-500 text-sm">
                      No features listed.
                    </li>
                  )}
                </ul>
              </div>

              {/* Details link */}
              <div className="mt-6 pt-2 text-xs text-slate-400">
                <button className="underline underline-offset-4 hover:text-slate-200">
                  {plan.detailsLabel || "See details"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
