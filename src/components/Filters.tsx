"use client";

import React from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { Toggle } from "@/components/ui/Toggle";
import { Input } from "@/components/ui/Input";

export function Filters() {
  return (
    <div className="w-[280px] shrink-0 hidden lg:block sticky top-24 self-start">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-headline-md text-on-surface">Filters</h2>
        <button className="font-label-md text-primary hover:underline scale-95 hover:scale-100 transition-all">
          Clear All
        </button>
      </div>

      <div className="space-y-8">
        {/* Chipset */}
        <div>
          <h3 className="font-body-sm font-semibold text-on-surface mb-3">Chipset</h3>
          <div className="space-y-2.5">
            <Checkbox label="RTX 4070" />
            <Checkbox label="RTX 4070 Ti" />
            <Checkbox label="RX 7800 XT" />
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
          <div className="flex items-center gap-2">
            <Input type="number" placeholder="Min" />
            <span className="text-on-surface-variant">-</span>
            <Input type="number" placeholder="Max" />
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
