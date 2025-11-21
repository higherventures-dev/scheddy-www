export async function getHomePageContent() {
  try {
    const base = process.env.NEXT_PUBLIC_PAYLOAD_URL;
    if (!base) throw new Error("Missing NEXT_PUBLIC_PAYLOAD_URL");

    // ------------------------------
    // ⭐ Load Homepage Document
    // ------------------------------
    const homeRes = await fetch(`${base}/api/home-page?limit=1`, {
      next: { revalidate: 30 },
    });

    if (!homeRes.ok) {
      console.error("❌ Failed to load Home Page:", await homeRes.text());
      return null;
    }

    const homeData = await homeRes.json();
    const page = homeData.docs?.[0];
    if (!page) return null;

    // ======================================================
    // Since FAQ + Testimonials groups are REMOVED in schema,
    // we SKIP loading them entirely.
    // ======================================================

    // ------------------------------
    // ⭐ Return Sanitized Homepage Data
    // ------------------------------
    return {
      hero: page.hero ?? null,
      features: page.features ?? null,
      demo: page.demo ?? null,
      pricing: page.pricing ?? null,
      ctaShowcase: page.ctaShowcase ?? null,

      // These purposely return null because schema has them removed
      faqs: null,
      testimonials: null,
    };
  } catch (error) {
    console.error("❌ Error loading homepage content:", error);
    return null;
  }
}
