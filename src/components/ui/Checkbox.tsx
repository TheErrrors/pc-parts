import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return (
    <label className={`flex items-center gap-2 cursor-pointer group ${className}`}>
      <input
        type="checkbox"
        className="w-4 h-4 rounded border-surface-container-high text-primary focus:ring-primary focus:ring-offset-surface bg-surface-container-lowest transition-all scale-95 group-hover:scale-100 group-active:scale-95"
        {...props}
      />
      <span className="font-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
        {label}
      </span>
    </label>
  );
}
