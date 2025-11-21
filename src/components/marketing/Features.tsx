"use client";

type FeaturesProps = {
  data?: {
    title?: string;
    subtitle?: string;
    items?: {
      icon?: string;
      title?: string;
      description?: string;
    }[];
    ctaLabel?: string;
    ctaLink?: string;
  };
};

export default function Features({ data }: FeaturesProps) {
  if (!data) return null;

  const items = Array.isArray(data.items) ? data.items : [];

  return (
    <div className="max-w-6xl mx-auto px-4">

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

      {data.ctaLabel && data.ctaLink && (
        <div className="text-center mt-12">
          <a
            href={data.ctaLink}
            className="inline-block px-6 py-3 rounded-lg bg-sky-600 text-white"
          >
            {data.ctaLabel}
          </a>
        </div>
      )}
    </div>
  );
}
