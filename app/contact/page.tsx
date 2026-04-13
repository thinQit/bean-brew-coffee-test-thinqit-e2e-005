"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/blocks/ContactForm";
import MovingBorder from "@/components/blocks/MovingBorder";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactPage() {
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
                Contact & Reservations
              </h1>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                Reserve a private tasting, ask about wholesale, or request today’s
                origin list. We’ll reply within 1–2 business days.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl bg-[var(--card)] p-4 shadow-sm">
                <img
                  src="/images/hero.png"
                  alt="Coffee tasting table"
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
          <ContactForm
            title="Send a note"
            subtitle="Tell us what you’re looking for—tasting, wholesale, or a menu question."
            fields={[
              { name: "name", label: "Name", type: "text", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "topic", label: "Topic", type: "text", required: false },
              {
                name: "message",
                label: "Message",
                type: "textarea",
                required: true
              }
            ]}
            submitLabel="Send message"
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
          <MovingBorder
            title="Prefer a guided booking?"
            subtitle="Share your preferred date range and group size—we’ll propose a tasting slot and flight."
            image={{ src: "/images/product-2.png", alt: "Coffee and pastry" }}
            cta={{ label: "Request a tasting", href: "/contact" }}
          />
        </div>
      </motion.section>
    </div>
  );
}
