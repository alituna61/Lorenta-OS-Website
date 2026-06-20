"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border-subtle">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-start justify-between gap-6 py-7 text-left"
            aria-expanded={open === i}
          >
            <span className="text-h4 font-medium text-ink-primary">{item.q}</span>
            <span
              className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-subtle font-mono text-micro text-ink-tertiary transition-transform duration-200 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="animate-fade-in pb-7">
              <p className="text-body text-ink-secondary">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
