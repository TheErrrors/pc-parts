import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "success" | "warning" | "error" | "default";
  className?: string;
}

const variantStyles = {
  success: "bg-[#22c55e] text-white",
  warning: "bg-orange-500 text-white",
  error: "bg-red-100 text-red-600",
  default: "bg-primary/10 text-primary border border-primary/20",
};

export function Badge({ children, variant = "default", className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md font-label-md text-[11px] ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
