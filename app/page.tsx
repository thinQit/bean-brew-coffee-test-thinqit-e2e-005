"use client";

import { motion } from "framer-motion";

import HeroSpotlight from "@/components/blocks/HeroSpotlight";
import FeaturesGrid from "@/components/blocks/FeaturesGrid";
import BentoGrid from "@/components/blocks/BentoGrid";
import StickyScrollReveal from "@/components/blocks/StickyScrollReveal";
import TestimonialsGrid from "@/components/blocks/TestimonialsGrid";
import CTASplit from "@/components/blocks/CTASplit";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <div className="bg-[var(--background)]">
      <HeroSpotlight
        title="The Sensorial Sommelier of Coffee"
        subtitle="Premium roasts, editorial craft. Discover single-origin espresso, seasonal pairings, and private tastings—curated like a journal, brewed like a ritual."
        image={{
          src: "/images/hero.png",
          alt: "Bean & Brew Coffee hero — espresso and roasted beans"
        }}
        primaryCta={{ label: "Explore the Menu", href: "/services" }}
        secondaryCta={{ label: "Reserve a Tasting", href: "/contact" }}
        overlayClassName="bg-gradient-to-b from-black/70 via-black/40 to-black/70"
        textClassName="text-white"
      />

      <motion.section
        className="py-16 md:py-24 bg-[var(--background)]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12 items-start">
            <div className="md:col-span-5">
              <h2 className="font-heading text-3xl md:text-4xl text-[var(--destructive)]">
                A Roastery Built Like a Tasting Journal
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                We roast in small batches, calibrate daily, and serve with
                narrative detail—origin, process, and tasting notes—so every cup
                reads like a story.
              </p>
            </div>
            <div className="md:col-span-7">
              <FeaturesGrid
                title="What makes Bean & Brew premium"
                subtitle="Warm, earthy, and precise—crafted for espresso lovers and curious palates."
                features={[
                  {
                    title: "Single-Origin Focus",
                    description:
                      "Rotating lots with transparent sourcing and seasonal profiles.",
                    icon: "Coffee"
                  },
                  {
                    title: "Roasted Weekly",
                    description:
                      "Peak freshness with roast dates you can trust.",
                    icon: "Flame"
                  },
                  {
                    title: "Tasting Notes, Not Hype",
                    description:
                      "A sensory map: fruit, florals, cocoa, spice—clearly described.",
                    icon: "BookOpen"
                  },
                  {
                    title: "Brewed with Intention",
                    description:
                      "Dialed espresso, careful water, and repeatable recipes.",
                    icon: "Droplets"
                  }
                ]}
              />
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
            title="Seasonal Menu Highlights"
            subtitle="A curated grid of espresso, pour-over, and pairings—designed for discovery."
            items={[
              {
                title: "Espresso — House Burgundy",
                description:
                  "Dark cherry, cacao nib, and a velvet finish. Built for milk or straight shots.",
                image: { src: "/images/product-1.png", alt: "Espresso shot" }
              },
              {
                title: "Pour-Over — Single Origin",
                description:
                  "Clean sweetness with bright aromatics. Ask for today’s origin card.",
                image: { src: "/images/product-2.png", alt: "Pour-over coffee" }
              },
              {
                title: "Cold Brew — Barrel Rest",
                description:
                  "Silky, low-acid, and layered. A slow extraction for warm afternoons.",
                image: { src: "/images/product-3.png", alt: "Cold brew glass" }
              },
              {
                title: "Pairing — Citrus Olive Cake",
                description:
                  "A delicate crumb that lifts florals and honeyed notes in lighter roasts.",
                image: { src: "/images/product-1.png", alt: "Coffee and pastry" }
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        className="py-16 md:py-24 bg-[var(--background)]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <StickyScrollReveal
            title="The Roaster’s Journey"
            subtitle="From green bean to first sip—our process is slow, deliberate, and repeatable."
            steps={[
              {
                title: "Source with transparency",
                description:
                  "We choose lots for clarity and character—then document the story behind each origin.",
                image: { src: "/images/process-1.png", alt: "Green coffee beans" }
              },
              {
                title: "Roast for expression",
                description:
                  "Profiles are tuned to highlight sweetness and structure—never burnt, never flat.",
                image: { src: "/images/process-2.png", alt: "Roaster machine" }
              },
              {
                title: "Brew with precision",
                description:
                  "Water chemistry, grind, and time—measured daily so the cup stays consistent.",
                image: { src: "/images/process-3.png", alt: "Brewing coffee" }
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
          <TestimonialsGrid
            title="Loved by espresso purists & weekend wanderers"
            subtitle="A few notes from guests who came for coffee—and stayed for the ritual."
            testimonials={[
              {
                name: "A. Rivera",
                role: "Regular",
                quote:
                  "The tasting notes are spot-on. Every visit feels like opening a new issue of a coffee journal.",
                avatar: "/images/avatar-1.png"
              },
              {
                name: "M. Chen",
                role: "Home brewer",
                quote:
                  "Their pour-over is unbelievably clean. The staff explained the origin like a sommelier—without the attitude.",
                avatar: "/images/avatar-2.png"
              },
              {
                name: "S. Patel",
                role: "Creative director",
                quote:
                  "Warm, editorial, and calm. The espresso has depth, and the space feels premium without being precious.",
                avatar: "/images/avatar-3.png"
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        className="py-16 md:py-24 bg-[var(--background)]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <CTASplit
            title="Reserve a Private Tasting"
            subtitle="A guided cupping for two to six guests—seasonal flights, origin cards, and brew methods tailored to your palate."
            image={{ src: "/images/product-1.png", alt: "Coffee tasting setup" }}
            primaryCta={{ label: "Book a Tasting", href: "/contact" }}
            secondaryCta={{ label: "See Services", href: "/services" }}
            badge="Limited weekly slots"
          />
        </div>
      </motion.section>
    </div>
  );
}
