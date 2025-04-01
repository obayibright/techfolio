import React from 'react';

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`relative py-12 -mx-4 md:-mx-0 ${className}`}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t [--color-border:color-mix(in_oklab,var(--border)_75%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--border)_60%,transparent)]"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="w-full border-t [--color-border:color-mix(in_oklab,var(--border)_75%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--border)_60%,transparent)] -mt-10"></div>
      </div>
    </div>
  );
}
