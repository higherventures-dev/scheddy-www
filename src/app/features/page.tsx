import Features from "@/components/marketing/Features";
import FeatureAlt from "@/components/marketing/FeatureAlt";
import FeatureGrid from "@/components/marketing/FeatureGrid";

export default function FeaturesPage() {
  // Temporary static data so the page compiles
  const placeholder = {
    title: "All Features",
    subtitle: "Explore everything Scheddy offers.",
    items: [
      {
        icon: "link",
        title: "Smart Booking Links",
        description: "Give clients one link — Scheddy handles everything automatically.",
      },
      {
        icon: "sync",
        title: "Real-Time Sync",
        description: "Every artist, every room, every device stays synced instantly.",
      },
      {
        icon: "rules",
        title: "Custom Availability Rules",
        description: "Travel days, healing time, preferred hours — all automated.",
      },
      {
        icon: "currency",
        title: "Deposits & Payments",
        description: "Track deposits and balances with zero stress.",
      },
      {
        icon: "policy",
        title: "Policies & Reminders",
        description: "Automatic reminders and no-show enforcement.",
      },
      {
        icon: "dashboard",
        title: "Unified Studio View",
        description: "One clean dashboard to manage everything.",
      },
    ],
    ctaLabel: "Get Started",
    ctaLink: "/",
  };

  // Placeholder for the other components
  const placeholderAlt = {
    title: "Built for Artists & Studios",
    subtitle: "Tools designed around the way real tattoo shops operate.",
    features: placeholder.items,
  };

  const placeholderGrid = {
    title: "Everything You Need",
    subtitle: "A clean grid of every feature Scheddy offers.",
    items: placeholder.items,
  };

  return (
    <>
      <Features data={placeholder} />
      <FeatureAlt data={placeholderAlt} />
      <FeatureGrid data={placeholderGrid} />
    </>
  );
}
