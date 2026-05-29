"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

function FAQRow({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className={cn(
          "font-medium text-base transition-colors duration-150",
          open ? "text-violet" : "text-fg group-hover:text-fg"
        )}>
          {item.question}
        </span>
        <div className={cn(
          "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200",
          open ? "bg-violet text-white" : "bg-surface text-fg-muted border border-border"
        )}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-fg-muted text-sm leading-relaxed pb-5">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ({ items, className }: FAQProps) {
  return (
    <div className={cn("divide-y divide-border rounded-2xl glass-card border border-border px-6", className)}>
      {items.map((item, i) => (
        <FAQRow key={i} item={item} index={i} />
      ))}
    </div>
  );
}
