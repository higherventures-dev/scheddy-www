"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Media } from "@/payload-types";

type CtaShowcaseProps = {
  data?: {
    title?: string;
    subtitle?: string;
    ctaLabel?: string;
    ctaLink?: string;
    logos?: {
      image?: Media | string;
      alt?: string;
    }[];
  };
};

export default function CtaShowcase({ data }: CtaShowcaseProps) {
  if (!data) return null;

  const {
    title = "Run your books like a pro, even on your busiest days.",
    subtitle = "Scheddy keeps artists and studios in sync so you can spend less time juggling DMs and more time on the work that actually matters.",
    ctaLabel,
    ctaLink,
    logos = [],
  } = data;

  return (
    <section className="bg-black py-20">
      <div className="mx-auto px-4 text-center">
        {/* TITLE */}
        <div className="space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-50">
            {title}
          </h2>

          {subtitle && (
            <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}

          {/* CTA */}
          {ctaLabel && ctaLink && (
            <div className="mt-6 flex justify-center">
              <Button
                asChild
                className="btn-pulse rounded-full px-8 py-3 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase"
              >
                <Link href={ctaLink}>{ctaLabel}</Link>
              </Button>
            </div>
          )}

          <p className="mt-3 text-xs md:text-sm text-slate-400">
            Already trusted by early studios and traveling artists.
          </p>
        </div>

        {/* LOGO MARQUEE */}
        {logos.length > 0 && (
          <div className="logo-marquee-wrapper mt-10">
            <div className="logo-marquee-row">
              {[...logos, ...logos].map((item, index) => {
                const imageUrl =
                  typeof item.image === "object"
                    ? item.image?.url || ""
                    : typeof item.image === "string"
                    ? item.image
                    : "";

                return (
                  <div
                    key={index}
                    className="relative h-40 w-40 md:h-48 md:w-48 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 flex-shrink-0"
                  >
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt={item.alt || "Showcase logo"}
                        fill
                        className="object-cover"
                      />
                    )}

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Text label */}
                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                        USING SHEDDY
                      </p>
                      <p className="text-sm md:text-base font-semibold text-slate-50">
                        {item.alt || "Artist"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
