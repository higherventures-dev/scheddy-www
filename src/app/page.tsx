import Hero from "@/components/marketing/Hero";
import FeatureAlt from "@/components/marketing/FeatureAlt";
import Features from "@/components/marketing/Features";
import Cta from "@/components/marketing/Cta";
import Testimonials from "@/components/marketing/Testimonials";
import { Reveal } from "@/components/marketing/Reveal";
import { ImageCarousel } from "@/components/marketing/ImageCarousel";
import DemoSection from "@/components/marketing/DemoSection";
import PricingSection from "@/components/marketing/PricingSection";
import FaqSection from "@/components/marketing/FaqSection";
import CtaShowcase from "@/components/marketing/CtaShowcase";
import ScreenshotMarquee from "@/components/marketing/ScreenshotMarquee";

import { getHomePageContent } from "@/lib/getHomePage";

export default async function HomePage() {
  const page = await getHomePageContent();

  if (!page) {
    return <div>Failed to load content</div>;
  }

  return (
    <>
      {/* HERO */}
      <section id="hero" className="scroll-mt-24">
        <Reveal>
          <Hero data={page.hero} />
        </Reveal>
      </section>

      {/* FEATURES */}
      <section id="features" className="scroll-mt-24 py-16">
        <Reveal>
          <Features data={page.features} />
        </Reveal>
      </section>

      {/* DEMO */}
      <section id="demo" className="scroll-mt-24 py-20 bg-black/75">
        <Reveal>
          <DemoSection data={page.demo} />
        </Reveal>
      </section>

      {/* PRICING */}
      <section id="pricing" className="scroll-mt-24 py-20">
        <Reveal>
          <PricingSection data={page.pricing} />
        </Reveal>
      </section>

      {/* CTA (Get Started) */}
      <section id="contact" className="scroll-mt-24 py-20">
        <Reveal>
          <Cta/>
        </Reveal>
      </section>

      {/* FAQS */}
      <section id="faqs" className="scroll-mt-24 py-20">
        <Reveal>
          <FaqSection data={page.faqs ?? null} />
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="scroll-mt-24 py-20">
        <Reveal>
          <Testimonials data={page.testimonials ?? []} />

        </Reveal>
      </section>

      {/* CTA + LOGOS */}
      <section className="scroll-mt-24">
        <Reveal>
          <CtaShowcase data={page.ctaShowcase} />
        </Reveal>
      </section>
    </>
  );
}

// import Hero from "@/components/marketing/Hero";
// import FeatureAlt from "@/components/marketing/FeatureAlt";
// import Features from "@/components/marketing/Features";
// import Cta from "@/components/marketing/Cta";
// import Testimonials from "@/components/marketing/Testimonials";
// import { Reveal } from "@/components/marketing/Reveal";
// import { ImageCarousel } from "@/components/marketing/ImageCarousel";
// import DemoSection from "@/components/marketing/DemoSection";
// import PricingSection from "@/components/marketing/PricingSection";
// import FaqSection from "@/components/marketing/FaqSection";
// import CtaShowcase from "@/components/marketing/CtaShowcase";
// import ScreenshotMarquee from "@/components/marketing/ScreenshotMarquee";

// export default function HomePage() {
//   return (
//     <>
//       {/* HERO */}
//       <section id="hero" className="scroll-mt-24">
//         <Reveal>
//           <Hero />
//         </Reveal>
//       </section>


//       {/* FEATURES */}
//       <section id="features" className="scroll-mt-24 py-16">
//         <Reveal>
//           <Features />
//         </Reveal>
//       </section>

//       {/* DEMO */}
//       <section id="demo" className="scroll-mt-24 py-20  bg-black/75">
//         <Reveal>
//           <DemoSection />
//         </Reveal>
//       </section>


//          {/* PRICING */}
//       <section id="pricing" className="scroll-mt-24 py-20">
//         <Reveal>
//           <PricingSection />
//         </Reveal>
//       </section>

//       {/* CONTACT (Get Started) */}
//       <section id="contact" className="scroll-mt-24 py-20">
//         <Reveal>
//           <Cta />
//         </Reveal>
//       </section>

//             {/* FAQS */}
//       <section id="faqs" className="scroll-mt-24 py-20">
//         <Reveal>
//           <FaqSection />
//         </Reveal>
//       </section>


//       {/* TESTIMONIALS */}
//       <section id="testimonials" className="scroll-mt-24 py-20">
//         <Reveal>
//           <Testimonials />
//         </Reveal>
//       </section>

//       {/* CTA + LOGOS */}
//       <section className="scroll-mt-24">
//         <Reveal>
//           <CtaShowcase />
//         </Reveal>
//       </section>

//     </>
//   );
// }
