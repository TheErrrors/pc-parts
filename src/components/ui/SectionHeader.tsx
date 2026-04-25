import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-7 ${className}`}>
      <h2 className="font-display text-headline-md text-on-surface">{title}</h2>
      {subtitle && (
        <p className="font-body-sm text-on-surface-variant mt-1">{subtitle}</p>
      )}
    </div>
  );
}
