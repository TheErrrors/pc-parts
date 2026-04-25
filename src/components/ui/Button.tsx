import React from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  asChild?: boolean;
}

const variantStyles = {
  primary: "bg-primary text-white hover:bg-primary/90",
  ghost: "bg-transparent text-primary hover:bg-primary/10",
  outline: "bg-transparent text-primary border border-primary hover:bg-primary/10",
};

export function Button({ children, variant = "primary", className = "", asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-label-md font-medium transition-all duration-150 scale-95 hover:scale-100 active:scale-95 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
