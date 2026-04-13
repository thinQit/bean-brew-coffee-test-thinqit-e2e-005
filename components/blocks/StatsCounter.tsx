import * as React from "react";

export type StatItem = {
  label: string;
  value: number | string;
};

export interface StatsCounterProps {
  stats?: StatItem[];
  className?: string;
}

/**
 * Minimal fallback implementation to satisfy imports.
 * (No animation; just renders values.)
 */
export default function StatsCounter({ stats = [], className }: StatsCounterProps) {
  return (
    <div className={className}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950"
          >
            <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
