"use client";

import { motion } from "framer-motion";
import BentoGrid from "@/components/blocks/BentoGrid";
import HoverEffect from "@/components/blocks/HoverEffect";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function PortfolioPage() {
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
                Portfolio
              </h1>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                A rotating gallery of seasonal flights, origin cards, and
                editorial moments—how we translate sourcing into experience.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl bg-[var(--card)] p-4 shadow-sm">
                <img
                  src="/images/hero.png"
                  alt="Coffee beans and crema"
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
          <BentoGrid
            title="Seasonal stories"
            subtitle="A few recent highlights from the roastery and tasting room."
            items={[
              {
                title: "Spring Citrus Flight",
                description: "Honey, bergamot, and stone fruit—bright and clean.",
                image: { src: "/images/product-2.png", alt: "Pour-over flight" }
              },
              {
                title: "Burgundy Espresso Dial-In",
                description: "Cacao depth with a cherry lift—balanced for milk.",
                image: { src: "/images/product-1.png", alt: "Espresso dial-in" }
              },
              {
                title: "Cold Brew Texture Study",
                description: "Silky body and layered sweetness—slow extraction.",
                image: { src: "/images/product-3.png", alt: "Cold brew study" }
              },
              {
                title: "Pairing Card Series",
                description: "A pastry pairing designed to elevate the cup.",
                image: { src: "/images/product-2.png", alt: "Coffee pairing" }
              }
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
          <HoverEffect
            title="What we document"
            subtitle="Editorial details that make the experience feel premium."
            items={[
              {
                title: "Origin Cards",
                description:
                  "Farm, region, process, altitude, and tasting notes—kept current."
              },
              {
                title: "Brew Recipes",
                description:
                  "Repeatable ratios and methods so you can recreate the cup at home."
              },
              {
                title: "Seasonal Pairings",
                description:
                  "Flavors designed to complement—not mask—the coffee."
              },
              {
                title: "Roast Notes",
                description:
                  "Profile intent and calibration details for consistency."
              }
            ]}
          />
        </div>
      </motion.section>
    </div>
  );
}
