export async function getHomePageContent() {
  try {
    const base = process.env.NEXT_PUBLIC_PAYLOAD_URL;
    if (!base) throw new Error("Missing NEXT_PUBLIC_PAYLOAD_URL");

    // Load home-page document
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

    // Extract FAQ data
    const faqSection = page.faq ?? {};

    const faqsArray =
      Array.isArray(faqSection.faqItems) && faqSection.faqItems.length > 0
        ? faqSection.faqItems
        : []; // fallback

    return {
      hero: page.hero ?? null,
      features: page.features ?? null,
      demo: page.demo ?? null,
      pricing: page.pricing ?? null,
      ctaShowcase: page.ctaShowcase ?? null,

      // FAQ section
      faqSection: {
        title: faqSection.title ?? "Frequently Asked Questions",
        subtitle: faqSection.subtitle ?? "",
      },

      // The actual FAQ items
      faqs: faqsArray,

      // Testimonials
      testimonials: page.testimonials ?? null,
    };
  } catch (err) {
    console.error("❌ Error loading homepage content:", err);
    return null;
  }
}
