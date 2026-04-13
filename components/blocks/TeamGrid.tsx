import * as React from "react";

export type TeamMember = {
  name: string;
  role?: string;
  imageUrl?: string;
};

export interface TeamGridProps {
  members?: TeamMember[];
  className?: string;
}

/**
 * Minimal fallback implementation to satisfy imports.
 */
export default function TeamGrid({ members = [], className }: TeamGridProps) {
  return (
    <div className={className}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950"
          >
            <div className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
              {m.name}
            </div>
            {m.role ? (
              <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                {m.role}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
