"use client";

import React, { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { useRouter } from "next/navigation";

export function ProductGridWrapper({ products }: { products: any[] }) {
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);
  const [compareError, setCompareError] = useState<string | null>(null);
  const router = useRouter();

  const handleToggleCompare = (id: string) => {
    setCompareError(null);
    setSelectedForCompare((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      }
      if (prev.length >= 3) {
        setCompareError("Maximum 3 products allowed for comparison.");
        return prev;
      }
      return [...prev, id];
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selectedForCompare.includes(product.id)}
            onToggleCompare={handleToggleCompare}
          />
        ))}
      </div>

      {compareError && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-md font-label-md shadow-sm z-50 animate-in fade-in slide-in-from-bottom-4">
          {compareError}
        </div>
      )}

      {selectedForCompare.length >= 2 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-surface-container-lowest border border-surface-container-high shadow-lg rounded-full px-6 py-3 flex items-center gap-6 z-50 animate-in slide-in-from-bottom-8">
          <div className="font-body-md font-medium text-on-surface">
            {selectedForCompare.length} items selected
          </div>
          <button
            onClick={() => router.push(`/compare?items=${selectedForCompare.join(',')}`)}
            className="bg-primary text-white hover:bg-primary/90 px-5 py-2 rounded-full font-label-md transition-colors scale-95 hover:scale-100 active:scale-95"
          >
            Compare Now
          </button>
        </div>
      )}
    </>
  );
}
