"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const artistLogos = [
  {
    name: "Midnight Needle",
    src: "/assets/images/artists/midnight-needle.jpg",
  },
  {
    name: "Blackline Studio",
    src: "/assets/images/artists/blackline-studio.jpg",
  },
  {
    name: "Golden Raven Ink",
    src: "/assets/images/artists/golden-raven.jpg",
  },
  {
    name: "Eastside Electric",
    src: "/assets/images/artists/eastside-electric.jpg",
  },
  {
    name: "Nova Skinworks",
    src: "/assets/images/artists/nova-skinworks.jpg",
  },
  {
    name: "Ghostlight Tattoo",
    src: "/assets/images/artists/ghostlight.jpg",
  },
];

export default function CtaShowcase() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto px-4 text-center">
        {/* Headline + CTA */}
        <div className="space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-50">
            Run your books like a pro,
            <br className="hidden md:block" /> even on your busiest days.
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto">
            Scheddy keeps artists and studios in sync so you can spend less time
            juggling DMs and more time on the work that actually matters.
          </p>

          <div className="mt-6 flex justify-center">
            <Button
              asChild
              className="btn-pulse rounded-full px-8 py-3 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase"
            >
              <Link href="#contact">Join the waitlist</Link>
            </Button>
          </div>

          <p className="mt-3 text-xs md:text-sm text-slate-400">
            Already trusted by early studios and traveling artists.
          </p>
        </div>

        {/* Scrolling artist logos / cards */}
        <div className="logo-marquee-wrapper mt-10">
          <div className="logo-marquee-row">
            {/* duplicate the list so the loop looks seamless */}
            {[...artistLogos, ...artistLogos].map((artist, index) => (
              <div
                key={`${artist.name}-${index}`}
                className="relative h-40 w-40 md:h-48 md:w-48 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 flex-shrink-0"
              >
                <Image
                  src={artist.src}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                    USING SHEDDY
                  </p>
                  <p className="text-sm md:text-base font-semibold text-slate-50">
                    {artist.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
