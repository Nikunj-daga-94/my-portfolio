"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const professional = [
  { label: "Education", value: "MBA from SPJIMR" },
  {
    label: "Occupation",
    value: "Associate Manager, AICT Consulting — Accenture",
  },
  { label: "Annual Income", value: "Will share upon connecting" },
  { label: "Working Location", value: "Kolkata, India" },
];

export function ProfessionalDetails() {
  return (
    <motion.div
      className="md:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Card className="p-6 border-[#D9C7A8]/50 bg-[var(--card)] h-full">
        <p className="text-meta text-[#8A7462] mb-4">Professional Details</p>
        <div className="grid grid-cols-2 gap-4">
          {professional.map((d) => (
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
