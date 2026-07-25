"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageCircle } from "lucide-react";

const EMAIL = "your.email@example.com";
const PHONE_DISPLAY = "+91 XXXXX XXXXX";
const PHONE_WHATSAPP = "91XXXXXXXXXX"; // country code + number, no +, no spaces

export function Contact() {
  return (
    <motion.div
      className="col-span-full md:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Card className="p-6 border-[#D9C7A8]/50 bg-[var(--card)] h-full">
        <p className="text-meta text-[#8A7462] mb-4">Connect</p>
        <div className="flex flex-col gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 text-sm text-[#3F2A1C] hover:text-[#7A1F2B] transition-colors"
          >
            <Mail size={18} className="text-[#7A1F2B]" />
            {EMAIL}
          </a>
          <a
            href={`tel:+${PHONE_WHATSAPP}`}
            className="flex items-center gap-3 text-sm text-[#3F2A1C] hover:text-[#7A1F2B] transition-colors"
          >
            <Phone size={18} className="text-[#7A1F2B]" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={`https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(
              "Hi, I came across your biodata and would love to connect.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-[#3F2A1C] hover:text-[#7A1F2B] transition-colors"
          >
            <MessageCircle size={18} className="text-[#7A1F2B]" />
            Chat on WhatsApp
          </a>
        </div>
      </Card>
    </motion.div>
  );
}
