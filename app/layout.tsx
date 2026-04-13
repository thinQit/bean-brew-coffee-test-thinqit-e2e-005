import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif, Manrope } from "next/font/google";

import NavbarGlass from "@/components/blocks/NavbarGlass";
import FooterMultiColumn from "@/components/blocks/FooterMultiColumn";

const heading = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Bean & Brew Coffee — Premium Roastery",
  description:
    "Bean & Brew Coffee is a premium coffee roastery serving single-origin espresso, curated seasonal menus, and private tastings."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {/* Navbar must be full width */}
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <NavbarGlass
            brand={{
              name: "Bean & Brew Coffee",
              href: "/"
            }}
            links={[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact", href: "/contact" }
            ]}
            cta={{
              label: "Reserve a Tasting",
              href: "/contact"
            }}
          />
        </div>

        {/* Offset for fixed nav */}
        <main className="pt-20">{children}</main>

        <FooterMultiColumn
          brand={{
            name: "Bean & Brew Coffee",
            description:
              "A premium roastery and tasting room. Single-origin coffees, seasonal espresso, and private cuppings—crafted with editorial-level care."
          }}
          columns={[
            {
              title: "Explore",
              links: [
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "Portfolio", href: "/portfolio" }
              ]
            },
            {
              title: "Visit",
              links: [
                { label: "Contact", href: "/contact" },
                { label: "Reserve a Tasting", href: "/contact" }
              ]
            },
            {
              title: "Signature",
              links: [
                { label: "Seasonal Menu", href: "/services" },
                { label: "Wholesale", href: "/services" },
                { label: "Private Cuppings", href: "/services" }
              ]
            }
          ]}
          bottomText="© 2026 Bean & Brew Coffee. All rights reserved."
        />
      </body>
    </html>
  );
}
