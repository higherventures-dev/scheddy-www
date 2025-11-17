"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MarketingHeader() {
  const links = [
    { href: "#overview", label: "Overview" },
    { href: "#features", label: "Features" },
    { href: "#scheddy-overview", label: "Tour" },
    { href: "#plans", label: "Plans" },
    { href: "#faqs", label: "FAQs" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="w-full flex justify-center border-b border-white/10 h-16 sticky top-0 z-50backdrop-blur">
      <div className="w-full flex justify-between items-center px-4 lg:px-32 text-sm">
        {/* Brand */}
        <div className="flex items-center py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/images/logo.svg"
              alt="Scheddy"
              width={18}
              height={18}
            />
            <span className="text-xl leading-none">scheddy</span>
          </Link>
        </div>

        {/* Section nav */}
        <div className="hidden md:flex gap-5 items-center font-semibold justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Auth actions */}
        <div className="flex gap-2">
          <Button asChild size="sm" variant="outline">
            <Link href="/auth/sign-in">Log in</Link>
          </Button>
          <Button asChild size="sm" variant="default">
            <Link href="/auth/sign-up">Sign up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
