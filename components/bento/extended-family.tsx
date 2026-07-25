"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const paternal = [
  { label: "Paternal Grandfather", value: "[Fill in]" },
  { label: "Paternal Grandmother", value: "[Fill in]" },
  { label: "Paternal Uncles/Aunts", value: "[Fill in]" },
  { label: "Family Business/Legacy", value: "[Fill in]" },
];

const maternal = [
  { label: "Maternal Grandfather", value: "[Fill in]" },
  { label: "Maternal Grandmother", value: "[Fill in]" },
  { label: "Maternal Uncles/Aunts", value: "[Fill in]" },
  { label: "Family Background", value: "[Fill in]" },
];

export function ExtendedFamily() {
  return (
    <motion.div
      className="col-span-full md:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Card className="p-6 border-[#D9C7A8]/50 bg-[var(--card)] h-full">
        <p className="text-meta text-[#8A7462] mb-4">Extended Family</p>
        <div className="grid grid-cols-2 gap-x-6">
          <div>
            <p className="text-xs text-[#8A7462] mb-2 font-semibold">
              Paternal Side
            </p>
            <div className="grid grid-cols-1 gap-3">
              {paternal.map((d) => (
                <div key={d.label}>
                  <p className="text-xs text-[#8A7462] mb-1">{d.label}</p>
                  <p className="text-heading text-sm text-[#3F2A1C]">
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-[#8A7462] mb-2 font-semibold">
              Maternal Side
            </p>
            <div className="grid grid-cols-1 gap-3">
              {maternal.map((d) => (
                <div key={d.label}>
                  <p className="text-xs text-[#8A7462] mb-1">{d.label}</p>
                  <p className="text-heading text-sm text-[#3F2A1C]">
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
