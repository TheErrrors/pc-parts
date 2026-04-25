"use client";
import React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ label, className = "", checked, onChange, ...props }: CheckboxProps) {
  return (
    <label className={`flex items-center gap-2 cursor-pointer group w-fit ${className}`} onClick={(e) => e.stopPropagation()}>
      <RadixCheckbox.Root
        className="peer flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-surface-container-highest bg-surface-container-lowest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface data-[state=checked]:border-primary data-[state=checked]:bg-primary"
        checked={checked as boolean}
        onCheckedChange={(checkedState) => {
           if (onChange) {
              const event = { target: { checked: checkedState === true } } as React.ChangeEvent<HTMLInputElement>;
              onChange(event);
           }
        }}
      >
        <RadixCheckbox.Indicator className="flex items-center justify-center text-white">
          <CheckIcon className="h-3.5 w-3.5" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {label && (
        <span className={`text-on-surface-variant group-hover:text-on-surface transition-colors select-none ${className.includes("font-") ? "" : "font-body-sm"}`}>
          {label}
        </span>
      )}
    </label>
  );
}
