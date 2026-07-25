"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Card className="col-span-full md:col-span-2 p-8 border-zinc-800/80 bg-[var(--card)] backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] transition-shadow">
        <Badge
          variant="outline"
          className="border-emerald-500/40 text-emerald-400 mb-4"
        >
          Available for contract
        </Badge>
        <h1 className="text-heading text-4xl md:text-5xl mb-3">
          Your Name
        </h1>
        <p className="text-meta mb-4">
          Backend Engineer · Building Systems That Scale
        </p>
        <p className="text-zinc-300 max-w-md leading-relaxed">
          A short, punchy impact statement about what you build and why it
          matters — one or two sentences, no fluff.
        </p>
      </Card>
    </motion.div>
  );
}