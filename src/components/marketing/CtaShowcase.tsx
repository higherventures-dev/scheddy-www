// src/components/marketing/CtaShowcase.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";

// ❌ REMOVE import { Media } from "@/payload-types"
// Marketing site cannot import Payload-generated types.

// Define a safe fallback type:
type CtaShowcaseProps = {
  data?: {
    title?: string;
    subtitle?: string;
    image?: {
      url?: string;
      alt?: string;
    };
    buttonText?: string;
    buttonLink?: string;
  };
};

export default function CtaShowcase({ data }: CtaShowcaseProps) {
  return (
    <div className="container mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">
        {data?.title ?? "Ready to Transform Your Workflow?"}
      </h2>

      <p className="text-lg text-muted-foreground mb-8">
        {data?.subtitle ?? "Join hundreds of creators already using Scheddy."}
      </p>

      {data?.image?.url && (
        <div className="mb-10 flex justify-center">
          <Image
            src={data.image.url}
            alt={data.image.alt ?? "Showcase Image"}
            width={900}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>
      )}

      <Button asChild size="lg">
        <a href={data?.buttonLink ?? "#"}>
          {data?.buttonText ?? "Get Started"}
        </a>
      </Button>
    </div>
  );
}
