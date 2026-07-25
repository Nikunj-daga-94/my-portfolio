"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function PartnerExpectations() {
  return (
    <motion.div
      className="col-span-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Card className="p-10 border-[#D9C7A8]/50 bg-[var(--card)] h-full">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px w-8 bg-[#7A1F2B]/40" />
          <p className="text-meta text-[#8A7462]">Partner Expectations</p>
        </div>
        <p className="text-[#3F2A1C] leading-relaxed text-[15px]">
          I am seeking a partner who is a true equal — someone who is
          grounded, kind-hearted, and shares a similar zest for life. A
          strong relationship based on open communication, trust, and
          mutual respect is essential to me. I admire someone who is
          passionate about their own professional goals while being fully
          supportive of mine. Ideally, my partner will value family bonds
          just as much as I do, gracefully navigating the blend of our
          modern lifestyle with our rich cultural heritage.
        </p>
      </Card>
    </motion.div>
  );
}