"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const photos = [
  "/images/photo-2.jpg",
  "/images/photo-3.jpg",
  "/images/photo-4.jpg",
];

export function PhotoGallery() {
  return (
    <motion.div
      className="col-span-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Card className="p-6 border-[#D9C7A8]/50 bg-[var(--card)]">
        <p className="text-meta text-[#8A7462] mb-4">Gallery</p>
        <div className="grid grid-cols-3 gap-3">
          {photos.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`Photo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 33vw, 200px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
