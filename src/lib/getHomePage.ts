export async function getHomePageContent() {
  try {
    const base = process.env.NEXT_PUBLIC_PAYLOAD_URL;
    if (!base) throw new Error("Missing NEXT_PUBLIC_PAYLOAD_URL");

    const homeRes = await fetch(`${base}/api/home-page?limit=1&depth=3`, {
      next: { revalidate: 30 },
    });

    if (!homeRes.ok) {
      console.error("❌ Failed to load Home Page:", await homeRes.text());
      return null;
    }

    const homeData = await homeRes.json();
    const page = homeData.docs?.[0];
    if (!page) return null;

    // ================
    // ⭐ FAQ extraction
    // ================
    const faq = page.faq ?? {};
    const faqItems = Array.isArray(faq.faqItems) ? faq.faqItems : [];

    // ============================
    // ⭐ Product Tour extraction
    // ============================
    const productTour = page.productTour ?? {};
    const productTourSteps = Array.isArray(productTour.steps)
      ? productTour.steps
      : [];

    return {
      hero: page.hero ?? null,
      features: page.features ?? null,
      demo: page.demo ?? null, // OLD demo section remains available
      pricing: page.pricing ?? null,

      // New Product Tour block
      productTour: {
        label: productTour.label ?? "",
        title: productTour.title ?? "",
        subtitle: productTour.subtitle ?? "",
        steps: productTourSteps,
      },

      faqSection: {
        title: faq.title ?? "Frequently Asked Questions",
        subtitle: faq.subtitle ?? "",
        faqItems,
      },

      testimonials: page.testimonials ?? [],
      ctaShowcase: page.ctaShowcase ?? null,
    };
  } catch (err) {
    console.error("❌ Error loading homepage content:", err);
    return null;
  }
}
