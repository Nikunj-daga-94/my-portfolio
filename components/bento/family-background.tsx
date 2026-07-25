"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const family = [
  { label: "Family Values", value: "Traditional" },
  { label: "Family Type", value: "Joint" },
  { label: "Father", value: "Indra Kumar Daga — Business Owner" },
  { label: "Mother", value: "Raj Kumari Daga — Homemaker" },
  { label: "Siblings", value: "One elder brother (married, working in IT)" },
  { label: "Native Place", value: "Bikaner, Rajasthan" },
];

export function FamilyBackground() {
  return (
    <motion.div
      className="col-span-full md:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Card className="p-6 border-[#D9C7A8]/50 bg-[var(--card)] h-full">
        <p className="text-meta text-[#8A7462] mb-4">Family Background</p>
        <div className="grid grid-cols-2 gap-4">
          {family.map((d) => (
            <div key={d.label}>
              <p className="text-xs text-[#8A7462] mb-1">{d.label}</p>
              <p className="text-heading text-sm text-[#3F2A1C]">{d.value}</p>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
