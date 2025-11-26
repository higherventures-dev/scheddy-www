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

    // ------------------------------
    // ⭐ Load FAQs (from relationship or load all)
    // ------------------------------
    let faqs = [];

    if (page.faq?.faqItems?.length) {
      // Selected FAQs
      const ids = page.faq.faqItems.join(",");
      const faqRes = await fetch(`${base}/api/faqs?where[id][in]=${ids}`, {
        next: { revalidate: 30 },
      });

      const faqData = await faqRes.json();
      faqs = faqData.docs ?? [];
    } else {
      // Load ALL FAQs
      const faqRes = await fetch(`${base}/api/faqs?sort=-updatedAt`, {
        next: { revalidate: 30 },
      });

      const faqData = await faqRes.json();
      faqs = faqData.docs ?? [];
    }

    // ------------------------------
    // ⭐ Return Clean Homepage Object
    // ------------------------------
    return {
      hero: page.hero ?? null,
      features: page.features ?? null,
      demo: page.demo ?? null,
      pricing: page.pricing ?? null,
      ctaShowcase: page.ctaShowcase ?? null,

      // ⭐ FAQ SECTION SETTINGS (title, subtitle)
      faqSection: page.faq ?? { title: "", subtitle: "" },

      // ⭐ Loaded FAQ docs
      faqs,

      // ⭐ Testimonials disabled until re-enabled
      testimonials: null,
    };
  } catch (error) {
    console.error("❌ Error loading homepage content:", error);
    return null;
  }
}
