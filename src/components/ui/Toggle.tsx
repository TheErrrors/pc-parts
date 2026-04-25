"use client";
import React, { useState } from "react";

interface ToggleProps {
  label: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function Toggle({ label, defaultChecked = false, onChange, className = "" }: ToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newValue = !checked;
    setChecked(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <label className={`flex items-center justify-between cursor-pointer group ${className}`}>
      <span className="font-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
        {label}
      </span>
      <div
        className={`relative w-10 h-5 rounded-full transition-colors duration-200 ease-in-out scale-95 group-hover:scale-100 group-active:scale-95 ${
          checked ? "bg-primary" : "bg-surface-container-high"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform duration-200 ease-in-out ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </div>
    </label>
  );
}
