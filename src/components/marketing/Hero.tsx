"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type HeroProps = {
  data?: {
    title?: string;
    showTrademark?: boolean;
    subtitle?: string;
    ctaLabel?: string;
    ctaLink?: string;
    logo?: { url?: string };
    logoAlt?: string;
    backgroundVideo?: { url?: string };
  };
};

export default function Hero({ data }: HeroProps) {
  if (!data) return null;

  const videoUrl = data.backgroundVideo?.url;
  const logoUrl = data.logo?.url;

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

      {/* Logo (top center) */}
      {logoUrl && (
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">
          <Image
            src={logoUrl}
            alt={data.logoAlt ?? "Logo"}
            width={140}
            height={80}
          />
        </div>
      )}

      {/* Text */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {data.title && (
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {data.title}
            {data.showTrademark && <sup className="ml-1 text-xl">™</sup>}
          </h1>
        )}

        {data.subtitle && (
          <p className="mt-4 text-lg md:text-xl text-slate-200">
            {data.subtitle}
          </p>
        )}

        {data.ctaLabel && data.ctaLink && (
          <div className="mt-8">
            <Button asChild>
              <Link href={data.ctaLink}>{data.ctaLabel}</Link>
            </Button>
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
    </div>
  );
}
