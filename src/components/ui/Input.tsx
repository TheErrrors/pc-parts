import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full bg-surface-container-lowest border border-surface-container-high rounded-lg px-3 py-2 font-body-sm text-on-surface placeholder-on-surface-variant focus:border-primary focus:outline-none transition-all ${className}`}
      {...props}
    />
  );
}
