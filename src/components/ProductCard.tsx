"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    category?: string;
    price: number;
    specs: Record<string, string>;
    images: string[];
    is_in_stock?: boolean;
  };
  isSelected?: boolean;
  onToggleCompare?: (id: string) => void;
}

function getOptimizedImage(url: string | undefined) {
  if (!url) return null;
  if (url.includes('cloudinary.com')) {
    // Basic auto-optimization flag injection for Cloudinary
    return url.replace('/upload/', '/upload/f_auto,q_auto,w_400/');
  }
  return url;
}

import { useRouter } from "next/navigation";

export function ProductCard({ product, isSelected, onToggleCompare }: ProductCardProps) {
  const mainImage = getOptimizedImage(product.images?.[0]);
  const isOutOfStock = product.is_in_stock === false;
  const router = useRouter();

  // Simple priority map for "Quick Specs" preview
  const priorityKeys = ["Chipset", "VRAM", "Socket", "Form Factor", "Capacity", "Memory Type", "Wattage", "Efficiency"];
  const quickSpecs = Object.entries(product.specs || {})
    .filter(([key]) => priorityKeys.includes(key))
    .map(([_, value]) => value)
    .slice(0, 2);

  const handleCardClick = () => {
    router.push(`/product/${product.slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`bg-surface-container-lowest border ${isSelected ? "border-primary shadow-sm" : "border-surface-container-high hover:border-primary hover:shadow-layer-2"} rounded-2xl p-4 transition-all cursor-pointer group relative flex flex-col h-full ${isOutOfStock ? 'opacity-70' : ''}`}
    >
      {/* Compare Checkbox */}
      <div className="absolute top-4 left-4 z-20" onClick={(e) => e.stopPropagation()}>
        <Checkbox
          label="Compare"
          className="font-label-md text-[11px] text-muted-foreground"
          checked={isSelected}
          onChange={() => {
             if (onToggleCompare) onToggleCompare(product.id);
          }}
        />
      </div>

      {/* Image Area */}
      <div className="bg-white rounded-xl aspect-square w-full flex items-center justify-center mb-4 relative mt-8 overflow-hidden border border-surface-container-high/50">
        {mainImage ? (
          <img src={mainImage} alt={product.name} className="object-contain w-full h-full p-4 mix-blend-multiply" />
        ) : (
          <span className="material-symbols-outlined text-[64px] text-on-surface-variant/30">
            developer_board
          </span>
        )}
      </div>

      {/* Spec Tags */}
      <div className="flex flex-wrap gap-2 mb-3 h-6 overflow-hidden">
        {quickSpecs.map((spec, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-surface text-on-surface-variant rounded-full font-label-md text-[11px] truncate max-w-[120px]"
          >
            {spec}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="font-body-md font-semibold text-on-surface line-clamp-2 mt-auto mb-2">
        {product.name}
      </h3>

      {/* Price & Stock */}
      <div className="flex items-center justify-between mb-4">
        <div className="font-price-lg text-primary tabular-nums">
          {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.price)}
        </div>
        {isOutOfStock && (
          <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider bg-red-50 px-2 py-1 rounded-sm">Out of Stock</span>
        )}
      </div>

      {/* Action */}
      <Button variant="ghost" className="w-full mt-auto pointer-events-none" disabled={isOutOfStock}>
        {isOutOfStock ? "Out of Stock" : "View Deals"}
      </Button>
    </div>
  );
}
