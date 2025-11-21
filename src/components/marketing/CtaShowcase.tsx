import Image from "next/image";
import { Button } from "@/components/ui/button";

type CtaShowcaseProps = {
  data?: {
    title?: string;
    subtitle?: string;
    ctaLabel?: string;
    ctaLink?: string;
    logos?: {
      image?: { url?: string };
      alt?: string;
    }[];
  };
};

export default function CtaShowcase({ data }: CtaShowcaseProps) {
  if (!data) return null;

  const logos = Array.isArray(data.logos) ? data.logos : [];

  return (
    <div className="container mx-auto px-6 py-24 text-center">

      {data.title && (
        <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
      )}

      {data.subtitle && (
        <p className="text-lg text-slate-400 mb-10">{data.subtitle}</p>
      )}

      {logos.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 items-center justify-center">
          {logos.map((logo, i) =>
            logo.image?.url ? (
              <Image
                key={i}
                src={logo.image.url}
                alt={logo.alt ?? "Logo"}
                width={140}
                height={80}
                className="mx-auto opacity-90"
              />
            ) : null
          )}
        </div>
      )}

      {data.ctaLabel && data.ctaLink && (
        <Button asChild size="lg">
          <a href={data.ctaLink}>{data.ctaLabel}</a>
        </Button>
      )}
    </div>
  );
}
