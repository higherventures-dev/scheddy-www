import Image from "next/image";

type DemoSectionProps = {
  data?: {
    label?: string;
    title?: string;
    items?: {
      id?: string;
      icon?: string;
      title?: string;
      description?: string;
      image?: { url?: string };
      alt?: string;
    }[];
    ctaLabel?: string;
    ctaLink?: string;
  };
};

export default function DemoSection({ data }: DemoSectionProps) {
  if (!data) return null;

  const items = Array.isArray(data.items) ? data.items : [];

  return (
    <section className="container mx-auto text-center px-6">

      {data.label && (
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
          {data.label}
        </p>
      )}

      {data.title && (
        <h2 className="text-3xl font-bold mb-10">{data.title}</h2>
      )}

      <div className="grid md:grid-cols-2 gap-12">
        {items.map((item, i) => (
          <div key={i} className="space-y-4 text-left">
            {item.image?.url && (
              <Image
                src={item.image.url}
                alt={item.alt ?? item.title ?? ""}
                width={600}
                height={360}
                className="rounded-xl"
              />
            )}
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>

      {data.ctaLabel && data.ctaLink && (
        <a
          href={data.ctaLink}
          className="inline-block mt-10 bg-sky-500 text-black px-8 py-4 rounded-full"
        >
          {data.ctaLabel}
        </a>
      )}
    </section>
  );
}
