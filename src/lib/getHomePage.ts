export async function getHomePageContent() {
  try {
    const base = process.env.NEXT_PUBLIC_PAYLOAD_URL;
    if (!base) throw new Error("Missing NEXT_PUBLIC_PAYLOAD_URL");

    const homeRes = await fetch(`${base}/api/home-page?limit=1&depth=2`, {
      next: { revalidate: 30 },
    });

    if (!homeRes.ok) {
      console.error("❌ Failed to load Home Page:", await homeRes.text());
      return null;
    }

    const homeData = await homeRes.json();
    const page = homeData.docs?.[0];
    if (!page) return null;

    const faqSection = page.faq ?? {};
    const faqItems =
      Array.isArray(faqSection.faqItems) ? faqSection.faqItems : [];

    return {
      hero: page.hero ?? null,
      features: page.features ?? null,
      demo: page.demo ?? null,
      pricing: page.pricing ?? null,
      ctaShowcase: page.ctaShowcase ?? null,

      faqSection: {
        title: faqSection.title ?? "Frequently Asked Questions",
        subtitle: faqSection.subtitle ?? "",
        faqItems, // ← ADD THIS LINE
      },

      testimonials: page.testimonials ?? null,
    };
  } catch (err) {
    console.error("❌ Error loading homepage content:", err);
    return null;
  }
}
