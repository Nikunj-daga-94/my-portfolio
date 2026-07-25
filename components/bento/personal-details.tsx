"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const details = [
  { label: "Full Name", value: "Srikunj Daga" },
  { label: "Date of Birth", value: "18/11/1995" },
  { label: "Time & Place of Birth", value: "10:40 PM, Kolkata, India" },
  { label: "Height", value: "5'7\"" },
  { label: "Dietary Preference", value: "Vegetarian" },
];

export function PersonalDetails() {
  return (
    <motion.div
      className="md:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Card className="p-6 border-[#D9C7A8]/50 bg-[var(--card)]">
        <p className="text-meta mb-4">Personal Details</p>
        <div className="grid grid-cols-2 gap-4">
          {details.map((d) => (
            <div key={d.label}>
              <p className="text-xs text-[#8A7462] mb-1">{d.label}</p>
              <p className="text-heading text-sm text-[#3F2A1C]">{d.value}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Traveling", "Reading", "Culinary Arts", "Photography"].map((h) => (
            <Badge
              key={h}
              variant="outline"
              className="border-[#7A1F2B]/30 text-[#7A1F2B]"
            >
              {h}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
