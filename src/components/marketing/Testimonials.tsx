"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Testimonial = {
  id?: string;
  name?: string;
  role?: string;
  quote?: string;
  rating?: number;
  avatar?: {
    url?: string;
    alt?: string;
  };
};

export default function Testimonials({ data }: { data: Testimonial[] }) {
  // Validate array
  const items = Array.isArray(data) ? data : [];
  if (items.length === 0) return null;

  // Guarantee IDs
  const safeItems = items.map((t, i) => ({
    ...t,
    _safeId: t.id || `testimonial-${i}`,
  }));

  const [activeId, setActiveId] = useState<string>(safeItems[0]._safeId);

  const active =
    safeItems.find((t) => t._safeId === activeId) ?? safeItems[0];

  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      {/* Quote Block */}
      <div className="relative">
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 text-7xl md:text-8xl text-slate-700/40">
          &ldquo;
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active._safeId}
            initial={{ opacity: 0, y: 20, rotateX: -8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: 8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-6 pt-6"
          >
            <p className="text-2xl md:text-3xl font-semibold leading-snug text-slate-50">
              {active.quote || ""}
            </p>

            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-100">
                {active.name || ""}
              </p>
              {active.role && (
                <p className="text-xs text-slate-400">{active.role}</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Avatar Selector */}
      <div className="mt-10 flex justify-center gap-4">
        {safeItems.map((t) => {
          const isActive = t._safeId === activeId;
          const avatarURL = t.avatar?.url;

          return (
            <button
              key={t._safeId}
              type="button"
              onClick={() => setActiveId(t._safeId)}
              className={cn(
                "relative h-12 w-12 rounded-2xl overflow-hidden border transition-all",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                isActive
                  ? "border-sky-400 opacity-100 scale-100"
                  : "border-transparent opacity-50 hover:opacity-80 hover:scale-105"
              )}
            >
              {avatarURL ? (
                <Image
                  src={avatarURL}
                  alt={t.avatar?.alt || t.name || "User"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full bg-slate-700" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
