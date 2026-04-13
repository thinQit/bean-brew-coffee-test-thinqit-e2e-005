"use client";

import { motion } from "framer-motion";
import FeaturesGrid from "@/components/blocks/FeaturesGrid";
import BentoGrid from "@/components/blocks/BentoGrid";
import MovingBorder from "@/components/blocks/MovingBorder";
import FAQAccordion from "@/components/blocks/FAQAccordion";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
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
                Menu & Services
              </h1>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                From espresso to private tastings, everything is designed around
                clarity, sweetness, and a warm, editorial experience.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl bg-[var(--card)] p-4 shadow-sm">
                <img
                  src="/images/product-1.png"
                  alt="Espresso service"
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
          <FeaturesGrid
            title="Core offerings"
            subtitle="A premium set of services for guests, teams, and coffee programs."
            features={[
              {
                title: "Seasonal Espresso Bar",
                description:
                  "Daily dial-ins, rotating espresso, and milk drinks with restraint.",
                icon: "Coffee"
              },
              {
                title: "Single-Origin Pour-Over",
                description:
                  "Brewed to order with origin cards and tasting notes.",
                icon: "Droplets"
              },
              {
                title: "Private Tastings",
                description:
                  "Guided cuppings for 2–6 guests with curated flights.",
                icon: "Users"
              },
              {
                title: "Wholesale & Office",
                description:
                  "Roasts, training, and menu support for premium programs.",
                icon: "Building2"
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
          <BentoGrid
            title="Signature menu grid"
            subtitle="A few favorites—ask in-store for today’s origin and process."
            items={[
              {
                title: "House Espresso",
                description: "Cacao, dark cherry, and a long finish.",
                image: { src: "/images/product-1.png", alt: "House espresso" }
              },
              {
                title: "Single Origin Filter",
                description: "Bright aromatics and clean sweetness.",
                image: { src: "/images/product-2.png", alt: "Filter coffee" }
              },
              {
                title: "Cold Brew",
                description: "Silky body, low acidity, layered notes.",
                image: { src: "/images/product-3.png", alt: "Cold brew" }
              },
              {
                title: "Seasonal Pairing",
                description: "Pastry pairings designed to lift the cup.",
                image: { src: "/images/product-3.png", alt: "Pastry pairing" }
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
          <MovingBorder
            title="Golden Gradient Gift Cards"
            subtitle="A premium gift for coffee lovers—redeemable for drinks, beans, and tastings."
            image={{ src: "/images/hero.png", alt: "Gift card and coffee" }}
            cta={{ label: "Ask about gift cards", href: "/contact" }}
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
          <FAQAccordion
            title="Menu & service questions"
            subtitle="Quick answers for tastings, wholesale, and seasonal rotations."
            items={[
              {
                question: "Do you rotate single origins?",
                answer:
                  "Yes—our pour-over and retail beans rotate seasonally. Ask for the current origin card in-store."
              },
              {
                question: "How do private tastings work?",
                answer:
                  "We host guided cuppings for 2–6 guests with curated flights and brew methods. Reserve via Contact."
              },
              {
                question: "Do you offer wholesale?",
                answer:
                  "Yes—roasted weekly with training and menu support for premium programs."
              }
            ]}
          />
        </div>
      </motion.section>
    </div>
  );
}
