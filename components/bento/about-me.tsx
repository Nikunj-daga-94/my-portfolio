"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function AboutMe() {
  return (
    <motion.div
      className="md:col-span-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Card className="p-10 border-[#D9C7A8]/50 bg-[var(--card)] shadow-[0_4px_24px_rgba(122,31,43,0.06)] h-full">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px w-8 bg-[#7A1F2B]/40" />
          <p className="text-meta text-[#8A7462]">About Me</p>
        </div>
        <p className="text-[#3F2A1C] leading-relaxed text-[15px]">
          I am a progressive yet deeply rooted individual who values the
          beautiful balance between modern aspirations and traditional family
          values. Naturally ambitious, confident, and spiritual, I hold family,
          respect, and love close to everything I do, and I believe in
          approaching life with optimism and gratitude. Professionally, I&apos;m
          driven and passionate about my career in AICT consulting, working as
          an Associate Manager at Accenture — but I equally cherish my time
          spent traveling, reading, exploring culinary arts, and photography.
          I&apos;m looking forward to building a life filled with mutual
          respect, shared laughter, and a strong foundation of friendship.
        </p>
      </Card>
    </motion.div>
  );
}
