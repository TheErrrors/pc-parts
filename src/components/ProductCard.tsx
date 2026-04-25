"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: number;
    specs: string[];
    icon: string;
  };
  isSelected?: boolean;
  onToggleCompare?: (id: string) => void;
}

export function ProductCard({ product, isSelected, onToggleCompare }: ProductCardProps) {
  return (
    <div className={`bg-surface-container-lowest border ${isSelected ? "border-primary shadow-sm" : "border-surface-container-high hover:border-primary hover:shadow-layer-2"} rounded-2xl p-4 transition-all cursor-pointer group relative flex flex-col h-full`}>
      {/* Compare Checkbox */}
      <div className="absolute top-4 left-4 z-10">
        <Checkbox
          label="Compare"
          className="font-label-md text-[11px] text-muted-foreground"
          checked={isSelected}
          onChange={() => onToggleCompare && onToggleCompare(product.id)}
        />
      </div>

      {/* Image Area */}
      <div className="bg-surface-container rounded-xl h-[180px] flex items-center justify-center mb-4 relative mt-8">
        <span className="material-symbols-outlined text-[64px] text-on-surface-variant/30">
          {product.icon}
        </span>
      </div>

      {/* Spec Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {product.specs.map((spec, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-surface text-on-surface-variant rounded-full font-label-md text-[11px]"
          >
            {spec}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="font-body-md font-semibold text-on-surface line-clamp-2 mt-auto mb-2">
        {product.title}
      </h3>

      {/* Price */}
      <div className="font-price-lg text-primary mb-4 tabular-nums">
        ₹{product.price.toLocaleString("en-IN")}
      </div>

      {/* Action */}
      <Button variant="ghost" className="w-full mt-auto" asChild>
        <Link href={`/products/graphics-cards/${product.id}`}>
          View Deals
        </Link>
      </Button>
    </div>
  );
}
