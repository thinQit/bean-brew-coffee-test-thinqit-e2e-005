"use client";

import { motion } from "framer-motion";
import BentoGrid from "@/components/blocks/BentoGrid";
import StatsCounter from "@/components/blocks/StatsCounter";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function MenuPage() {
  return (
    <div className="bg-[var(--background)]">
      <motion.section
        className="py-14 md:py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12 items-center">
            <div className="md:col-span-7">
              <h1 className="font-heading text-4xl md:text-5xl text-[var(--destructive)]">
                Menu
              </h1>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                A seasonal selection of espresso, filter, and pairings. Ask for
                today’s origin card for the current single-origin list.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl bg-[var(--card)] p-4 shadow-sm">
                <img
                  src="/images/product-2.png"
                  alt="Menu pour-over"
                  className="h-64 w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 md:py-24 bg-[var(--muted)]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <StatsCounter
            title="Seasonal rotation"
            subtitle="We keep the menu tight so every item stays dialed."
            stats={[
              { label: "Espresso options daily", value: 2 },
              { label: "Single origins in rotation", value: 6 },
              { label: "Brew methods offered", value: 4 },
              { label: "Pairings each season", value: 5 }
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        className="py-16 md:py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <BentoGrid
            title="Today’s highlights"
            subtitle="A sample of what you might find—availability changes seasonally."
            items={[
              {
                title: "Espresso — House Burgundy",
                description: "Cacao, cherry, velvet body.",
                image: { src: "/images/product-1.png", alt: "Espresso" }
              },
              {
                title: "Filter — Single Origin",
                description: "Bright aromatics, clean sweetness.",
                image: { src: "/images/product-2.png", alt: "Filter coffee" }
              },
              {
                title: "Cold Brew — Barrel Rest",
                description: "Silky, layered, low-acid.",
                image: { src: "/images/product-3.png", alt: "Cold brew" }
              },
              {
                title: "Pairing — Citrus Olive Cake",
                description: "Delicate crumb, lifts florals and honey.",
                image: { src: "/images/product-3.png", alt: "Pastry pairing" }
              }
            ]}
          />
        </div>
      </motion.section>
    </div>
  );
}
