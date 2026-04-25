import React from "react";
import { Button } from "@/components/ui/Button";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: number;
    specs: string[];
    icon: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-surface-container-lowest border border-surface-container-high rounded-2xl p-4 hover:border-primary hover:shadow-layer-2 transition-all cursor-pointer group relative flex flex-col h-full">
      {/* Compare Checkbox */}
      <div className="absolute top-6 right-6 z-10">
        <label className="flex items-center gap-2 cursor-pointer scale-95 hover:scale-100 active:scale-95 transition-transform">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-surface-container-high text-primary focus:ring-primary focus:ring-offset-surface bg-surface-container-lowest transition-all"
          />
          <span className="sr-only">Compare</span>
        </label>
      </div>

      {/* Image Area */}
      <div className="bg-surface-container rounded-xl h-[180px] flex items-center justify-center mb-4 relative">
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
      <Button variant="ghost" className="w-full mt-auto">
        View Deals
      </Button>
    </div>
  );
}
