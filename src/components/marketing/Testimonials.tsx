"use client";

import Image from "next/image";

// Safe props for marketing site — accept array or null
type TestimonialsProps = {
  data?: {
    quote?: string;
    name?: string;
    role?: string;
    avatar?: {
      url?: string;
      alt?: string;
    };
  }[] | null;
};

export default function Testimonials({ data }: TestimonialsProps) {
  const items = Array.isArray(data) ? data : [];

  if (!items.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((t, i) => (
          <div
            key={i}
            className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <p className="text-slate-300 italic mb-4">“{t.quote}”</p>

            <div className="flex items-center gap-4">
              {t.avatar?.url && (
                <Image
                  src={t.avatar.url}
                  alt={t.avatar.alt ?? t.name ?? "Avatar"}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              )}

              <div>
                <p className="font-semibold text-slate-50">{t.name}</p>
                {t.role && (
                  <p className="text-sm text-slate-400">{t.role}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
