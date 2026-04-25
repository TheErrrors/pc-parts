import React from "react";

interface StockBadgeProps {
  inStock: boolean;
}

export function StockBadge({ inStock }: StockBadgeProps) {
  if (inStock) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#22c55e]/10 text-[#006c49] rounded-md font-label-md text-[11px] whitespace-nowrap border border-[#22c55e]/20">
        <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse shadow-[0_0_4px_#22c55e]"></span>
        In Stock
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-100 text-red-600 rounded-md font-label-md text-[11px] whitespace-nowrap border border-red-200">
      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
      Out of Stock
    </span>
  );
}
