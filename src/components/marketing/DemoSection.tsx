// src/components/marketing/DemoSection.tsx

import Image from "next/image";
import { cn } from "@/lib/utils";

// Safe fallback type for marketing site:
type DemoSectionProps = {
  data?: {
    title?: string;
    subtitle?: string;
    items?: {
      title?: string;
      description?: string;
      image?: {
        url?: string;
        alt?: string;
      };
    }[];
  };
};

export default function DemoSection({ data }: DemoSectionProps) {
  if (!data) return null;

  const demos = Array.isArray(data.items) ? data.items : [];

  return (
    <section className="container mx-auto text-center px-6">
      <h2 className="text-3xl font-bold mb-4">
        {data.title ?? "See Scheddy in Action"}
      </h2>

      {data.subtitle && (
        <p className="text-lg text-muted-foreground mb-10">
          {data.subtitle}
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-10">
        {demos.map((item, index) => (
          <div key={index} className="space-y-4">
            {item.image?.url && (
              <Image
                src={item.image.url}
                alt={item.image.alt ?? item.title ?? ""}
                width={600}
                height={360}
                className="rounded-xl shadow-lg"
              />
            )}

            <h3 className="text-xl font-semibold">{item.title}</h3>

            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
