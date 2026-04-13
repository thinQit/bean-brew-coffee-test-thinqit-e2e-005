import * as React from "react";

export type HoverEffectItem = {
  title: string;
  description?: string;
  href?: string;
};

export interface HoverEffectProps {
  items?: HoverEffectItem[];
  className?: string;
}

/**
 * Minimal fallback implementation to satisfy imports.
 * Renders a simple responsive grid of cards.
 */
export default function HoverEffect({ items = [], className }: HoverEffectProps) {
  return (
    <div className={className}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => {
          const CardTag: any = item.href ? "a" : "div";
          return (
            <CardTag
              key={idx}
              href={item.href}
              className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
            >
              <div className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                {item.title}
              </div>
              {item.description ? (
                <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {item.description}
                </div>
              ) : null}
            </CardTag>
          );
        })}
      </div>
    </div>
  );
}
