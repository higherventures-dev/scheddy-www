"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Local safe props — no Payload imports, fully compatible with CMS shape
type HeroProps = {
  data?: {
    headline?: string;
    subheadline?: string;
    ctaLabel?: string;
    ctaLink?: string;
    backgroundVideo?: {
      url?: string;
    };
    backgroundImage?: {
      url?: string;
      alt?: string;
    };
  };
};

export default function Hero({ data }: HeroProps) {
  if (!data) return null;

  const videoUrl = data.backgroundVideo?.url;
  const imageUrl = data.backgroundImage?.url;

  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background video */}
      {videoUrl && (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Background image */}
      {!videoUrl && imageUrl && (
        <Image
          src={imageUrl}
          alt={data.backgroundImage?.alt || "Background"}
          fill
          className="object-cover opacity-30"
        />
      )}

      {/* Overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {data.headline && (
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            {data.headline}
          </h1>
        )}

        {data.subheadline && (
          <p className="mt-4 text-lg md:text-xl text-slate-200">
            {data.subheadline}
          </p>
        )}

        {data.ctaLabel && data.ctaLink && (
          <div className="mt-8">
            <Button asChild className="px-8 py-4 text-sm md:text-base font-semibold rounded-full">
              <Link href={data.ctaLink}>{data.ctaLabel}</Link>
            </Button>
          </div>
        )}
      </div>

      {/* Gradient overlay bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
    </div>
  );
}
