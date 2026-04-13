"use client";

import { motion } from "framer-motion";
import HoverEffect from "@/components/blocks/HoverEffect";
import TeamGrid from "@/components/blocks/TeamGrid";
import StatsCounter from "@/components/blocks/StatsCounter";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutPage() {
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
          <div className="grid gap-10 md:grid-cols-12 items-start">
            <div className="md:col-span-7">
              <h1 className="font-heading text-4xl md:text-5xl text-[var(--destructive)]">
                About Bean & Brew
              </h1>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                Bean & Brew is a premium roastery and tasting room built around
                one idea: coffee deserves the same editorial care as wine. We
                roast for sweetness, document origins, and serve with calm
                precision.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl bg-[var(--card)] p-4 shadow-sm">
                <img
                  src="/images/product-2.png"
                  alt="Single origin pour-over"
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
            title="Measured craft, warm hospitality"
            subtitle="A few numbers that reflect our daily practice."
            stats={[
              { label: "Roast batches per week", value: 12 },
              { label: "Origins featured each season", value: 8 },
              { label: "Espresso dial-ins per day", value: 6 },
              { label: "Private tastings per month", value: 24 }
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
            title="Our values"
            subtitle="The principles behind every roast and every cup."
            items={[
              {
                title: "Transparency",
                description:
                  "Origin cards, processing notes, and roast dates—always visible."
              },
              {
                title: "Restraint",
                description:
                  "We roast to reveal character, not to overpower it."
              },
              {
                title: "Ritual",
                description:
                  "A calm, repeatable brew process that respects your time."
              },
              {
                title: "Warmth",
                description:
                  "Premium doesn’t mean cold. Hospitality is part of the craft."
              }
            ]}
          />
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
          <TeamGrid
            title="The team"
            subtitle="Roasters, baristas, and hosts—aligned on one standard: the cup."
            members={[
              {
                name: "Head Roaster",
                role: "Roast profiling & sourcing",
                image: "/images/team-1.png"
              },
              {
                name: "Espresso Lead",
                role: "Dial-in & training",
                image: "/images/team-2.png"
              },
              {
                name: "Tasting Host",
                role: "Private cuppings",
                image: "/images/team-1.png"
              }
            ]}
          />
        </div>
      </motion.section>
    </div>
  );
}
