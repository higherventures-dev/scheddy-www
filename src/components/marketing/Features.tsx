"use client";

import { cn } from "@/lib/utils";

// Local safe props for marketing site
type FeaturesProps = {
  data?: {
    title?: string;
    subtitle?: string;
    features?: {
      icon?: string;
      title?: string;
      description?: string;
    }[];
  };
};

export default function Features({ data }: FeaturesProps) {
  if (!data) return null;

  const items = Array.isArray(data.features) ? data.features : [];

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Section Title */}
      {(data.title || data.subtitle) && (
        <div className="text-center mb-12">
          {data.title && (
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
              {data.title}
            </h2>
          )}
          {data.subtitle && (
            <p className="mt-2 text-slate-400 max-w-2xl mx-auto">
              {data.subtitle}
            </p>
          )}
        </div>
      )}

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {items.map((feature, i) => (
          <div
            key={i}
            className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 text-center"
          >
            {feature.icon && (
              <div className="text-4xl mb-4">{feature.icon}</div>
            )}
            <h3 className="text-lg font-semibold text-slate-50">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
