import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full bg-surface-container-lowest border border-surface-container-high rounded-lg px-3 py-2 font-body-sm text-on-surface placeholder-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all resize-y min-h-[100px] ${className}`}
      {...props}
    />
  );
}
