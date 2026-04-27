"use client";

import React from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { Toggle } from "@/components/ui/Toggle";
import { RangeSlider } from "@/components/ui/RangeSlider";

import { useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

const allCategories = [
  "Processor", "Graphics Card", "Motherboard", "Memory",
  "Storage", "Cabinet", "Power Supply", "Cooling",
  "Monitor", "Mouse", "Keyboard", "Peripherals"
];

export function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showAllCategories, setShowAllCategories] = useState(false);

  const displayedCategories = showAllCategories ? allCategories : allCategories.slice(0, 4);

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    const currentCategory = searchParams.get("category");

    if (currentCategory === category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    router.push(`/products?${params.toString()}`);
  }

  const handleInStockToggle = (checked: boolean) => {
    const params = new URLSearchParams(searchParams);
    if (checked) {
      params.set("inStock", "true");
    } else {
      params.delete("inStock");
    }
    router.push(`/products?${params.toString()}`);
  }

  const handleClearAll = () => {
    router.push(`/products`);
  }

  return (
    <div className="w-[280px] shrink-0 hidden lg:block sticky top-24 self-start">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-headline-md text-on-surface">Filters</h2>
        <button
          onClick={handleClearAll}
          className="font-label-md text-primary hover:underline scale-95 hover:scale-100 transition-all"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-8">
        {/* Categories */}
        <div>
          <h3 className="font-body-sm font-semibold text-on-surface mb-3">Categories</h3>
          <div className="space-y-2.5">
            {displayedCategories.map(cat => (
              <Checkbox
                key={cat}
                label={cat}
                onChange={() => handleCategoryChange(cat)}
                checked={searchParams.get("category") === cat}
              />
            ))}
          </div>
          {allCategories.length > 4 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="mt-3 font-label-md text-primary hover:underline"
            >
              {showAllCategories ? "Show Less" : `+ Show ${allCategories.length - 4} More`}
            </button>
          )}
        </div>

        {/* Brand */}
        <div>
          <h3 className="font-body-sm font-semibold text-on-surface mb-3">Brand</h3>
          <div className="space-y-2.5">
            <Checkbox label="ASUS" />
            <Checkbox label="MSI" />
            <Checkbox label="Gigabyte" />
            <Checkbox label="Zotac" />
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-body-sm font-semibold text-on-surface mb-3">Price Range</h3>
          <div className="pt-2 pb-1">
            <RangeSlider min={0} max={150000} step={1000} defaultValue={[25000, 100000]} />
          </div>
        </div>

        {/* Availability */}
        <div>
          <h3 className="font-body-sm font-semibold text-on-surface mb-3">Availability</h3>
          <Toggle label="In-Stock Only" defaultChecked={searchParams.get("inStock") === "true"} onChange={handleInStockToggle} />
        </div>
      </div>
    </div>
  );
}
