"use client";

import React from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { Toggle } from "@/components/ui/Toggle";
import { RangeSlider } from "@/components/ui/RangeSlider";

import { useRouter, useSearchParams } from "next/navigation";

export function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`/products?${params.toString()}`);
  }
  return (
    <div className="w-[280px] shrink-0 hidden lg:block sticky top-24 self-start">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-headline-md text-on-surface">Filters</h2>
        <button className="font-label-md text-primary hover:underline scale-95 hover:scale-100 transition-all">
          Clear All
        </button>
      </div>

      <div className="space-y-8">
        {/* Categories */}
        <div>
          <h3 className="font-body-sm font-semibold text-on-surface mb-3">Categories</h3>
          <div className="space-y-2.5">
            <Checkbox label="Graphics Card" onChange={() => handleCategoryChange("Graphics Card")} checked={searchParams.get("category") === "Graphics Card"} />
            <Checkbox label="Processor" onChange={() => handleCategoryChange("Processor")} checked={searchParams.get("category") === "Processor"} />
            <Checkbox label="Motherboard" onChange={() => handleCategoryChange("Motherboard")} checked={searchParams.get("category") === "Motherboard"} />
            <Checkbox label="Cabinet" onChange={() => handleCategoryChange("Cabinet")} checked={searchParams.get("category") === "Cabinet"} />
          </div>
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
          <Toggle label="In-Stock Only" />
        </div>
      </div>
    </div>
  );
}
