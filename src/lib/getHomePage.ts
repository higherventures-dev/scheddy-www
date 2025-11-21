export async function getHomePageContent() {
  try {
    const base = process.env.NEXT_PUBLIC_PAYLOAD_URL;
    if (!base) throw new Error("Missing NEXT_PUBLIC_PAYLOAD_URL");

    // Load Homepage Document
    const homeRes = await fetch(`${base}/api/home-page?limit=1`, {
      next: { revalidate: 30 },
    });

    if (!homeRes.ok) {
      console.error("❌ Failed to load Home Page:", await homeRes.text());
      return null;
    }

    const homeData = await homeRes.json();
    const page = homeData.docs[0];
    if (!page) return null;

    // ------------------------------
    // ⭐ Load FAQs
    // ------------------------------
    let faqs: any[] = [];

    if (page.faq?.faqs?.length) {
      // Only selected ones
      const ids = page.faq.faqs.join(",");
      const faqRes = await fetch(`${base}/api/faqs?where[id][in]=${ids}`, {
        next: { revalidate: 30 },
      });

      const faqData = await faqRes.json();
      faqs = faqData.docs ?? [];
    } else {
      // All
      const faqRes = await fetch(`${base}/api/faqs?sort=-updatedAt`, {
        next: { revalidate: 30 },
      });

      const faqData = await faqRes.json();
      faqs = faqData.docs ?? [];
    }

    // ------------------------------
    // ⭐ Load Testimonials
    // ------------------------------
    let testimonials: any[] = [];

    if (page.testimonials?.items?.length) {
      const ids = page.testimonials.items.join(",");
      const tRes = await fetch(
        `${base}/api/testimonials?where[id][in]=${ids}`,
        { next: { revalidate: 30 } }
      );

      const tData = await tRes.json();
      testimonials = tData.docs ?? [];
    } else {
      // Featured fallback
      const tRes = await fetch(
        `${base}/api/testimonials?where[featured][equals]=true&sort=-updatedAt`,
        { next: { revalidate: 30 } }
      );

      const tData = await tRes.json();
      testimonials = tData.docs ?? [];
    }

    // ------------------------------
    // ⭐ Return Unified Object
    // ------------------------------
    return {
      ...page,
      faqs,
      testimonials,
    };
  } catch (error) {
    console.error("❌ Error loading homepage content:", error);
    return null;
  }
}
