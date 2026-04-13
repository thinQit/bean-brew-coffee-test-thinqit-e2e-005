"use client";

import { motion } from "framer-motion";
import PricingTable from "@/components/blocks/PricingTable";
import TestimonialsGrid from "@/components/blocks/TestimonialsGrid";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function PricingPage() {
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
                Pricing
              </h1>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                Transparent, premium, and simple. Choose a tasting experience or
                a wholesale plan tailored to your program.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl bg-[var(--card)] p-4 shadow-sm">
                <img
                  src="/images/product-3.png"
                  alt="Cold brew and beans"
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
          <PricingTable
            title="Plans & experiences"
            subtitle="For guests, teams, and premium coffee programs."
            plans={[
              {
                name: "Tasting for Two",
                price: "$48",
                description:
                  "A guided flight with origin cards and brew methods.",
                features: [
                  "2 guests",
                  "3-coffee flight",
                  "Brew method selection",
                  "Take-home tasting notes"
                ],
                cta: { label: "Reserve", href: "/contact" },
                highlighted: true
              },
              {
                name: "Group Cupping",
                price: "$120",
                description:
                  "A private session for small groups and celebrations.",
                features: [
                  "Up to 6 guests",
                  "Seasonal flight",
                  "Espresso + filter",
                  "Pairing add-on available"
                ],
                cta: { label: "Book a date", href: "/contact" }
              },
              {
                name: "Wholesale Starter",
                price: "From $220/mo",
                description:
                  "Roasts + training support for premium office or café programs.",
                features: [
                  "Weekly roasting",
                  "Menu consultation",
                  "Barista training session",
                  "Ongoing calibration support"
                ],
                cta: { label: "Talk wholesale", href: "/contact" }
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
          <TestimonialsGrid
            title="Why guests book tastings"
            subtitle="A premium experience that still feels warm and approachable."
            testimonials={[
              {
                name: "J. Morgan",
                role: "Anniversary tasting",
                quote:
                  "The flight was beautifully curated. We learned a lot and left with a new favorite origin.",
                avatar: "/images/avatar-4.png"
              },
              {
                name: "K. Alvarez",
                role: "Office manager",
                quote:
                  "Wholesale onboarding was smooth—training and calibration made a huge difference.",
                avatar: "/images/avatar-5.png"
              }
            ]}
          />
        </div>
      </motion.section>
    </div>
  );
}
