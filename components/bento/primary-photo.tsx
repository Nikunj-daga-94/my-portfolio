"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function PrimaryPhoto() {
  return (
    <motion.div
      className="md:col-span-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Card className="p-2 border-[#D9C7A8]/50 bg-[var(--card)] h-full overflow-hidden">
        <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden">
          <Image
            src="/images/photo-primary.jpg"
            alt="Srikunj Daga"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            preload
            className="object-cover"
          />
        </div>
      </Card>
    </motion.div>
  );
}
