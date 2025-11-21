"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

/* ============================
   ICON COMPONENTS
============================= */
type IconProps = { className?: string };

function IconLink({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M9.5 14.5 7 17a3 3 0 1 1-4.24-4.24l3-3A3 3 0 0 1 9.5 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 9.5 17 7a3 3 0 1 1 4.24 4.24l-3 3A3 3 0 0 1 14.5 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 15 15 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconSync({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M5 8.5V5h3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 15.5V19h-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 11A6 6 0 0 1 17 7.5L19 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.5 13A6 6 0 0 1 7 16.5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconClockRules({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 9v3.2l2 1.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 4h3M6 7h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconCurrency({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M9 7h4.5a2.5 2.5 0 0 1 0 5H10a2.5 2.5 0 0 0 0 5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 4v16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconBellPolicy({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M12 4a4 4 0 0 0-4 4v2.9c0 .4-.13.8-.37 1.1L6.2 14.7A1 1 0 0 0 7 16h10a1 1 0 0 0 .8-1.6l-1.4-1.7a2 2 0 0 1-.37-1.1V8a4 4 0 0 0-4-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 18a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconDashboard({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M4 11a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 18h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 13.5 12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

/* Icon Map */
const iconMap: Record<string, any> = {
  link: IconLink,
  sync: IconSync,
  rules: IconClockRules,
  currency: IconCurrency,
  policy: IconBellPolicy,
  dashboard: IconDashboard,
};

/* ============================
   FEATURES COMPONENT
============================= */
export default function Features({ data }) {
  if (!data) return null;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        {data.title && (
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
            {data.title}
          </h2>
        )}

        {/* Subtitle */}
        {data.subtitle && (
          <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        )}

        {/* Cards Row 1 */}
        <div className="mt-12 grid gap-8 md:grid-cols-3 text-left">
          {data.items?.slice(0, 3).map((item, idx) => {
            const Icon = iconMap[item.icon] || null;
            return (
              <div
                key={idx}
                className="bg-slate-950/90 rounded-3xl border border-slate-800 shadow-sm p-6 flex flex-col gap-3"
              >
                {Icon && <Icon className="h-7 w-7 text-sky-400" />}
                <h3 className="text-lg font-semibold text-slate-50">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Cards Row 2 */}
        <div className="mt-8 grid gap-8 md:grid-cols-3 text-left">
          {data.items?.slice(3, 6).map((item, idx) => {
            const Icon = iconMap[item.icon] || null;
            return (
              <div
                key={idx}
                className="bg-slate-950/90 rounded-3xl border border-slate-800 shadow-sm p-6 flex flex-col gap-3"
              >
                {Icon && <Icon className="h-7 w-7 text-sky-400" />}
                <h3 className="text-lg font-semibold text-slate-50">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      {(data.ctaLabel || data.ctaLink) && (
        <div className="flex flex-col items-center justify-center gap-4 mt-8">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="btn-pulse rounded-full px-8 bg-white text-slate-900 border-white hover:bg-slate-100"
          >
            <Link href={data.ctaLink || "#"}>
              {data.ctaLabel || "Product Tour"}
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
}
