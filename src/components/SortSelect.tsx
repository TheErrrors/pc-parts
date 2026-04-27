"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Select } from "@/components/ui/Select";

const sortOptions = [
  { label: "Price (Low to High)", value: "price_asc" },
  { label: "Price (High to Low)", value: "price_desc" },
  { label: "Newest Arrivals", value: "newest" },
];

export function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "price_asc";

  const currentLabel = sortOptions.find(opt => opt.value === currentSort)?.label || "Price (Low to High)";

  const handleSortChange = (valueLabel: string) => {
    const selectedOption = sortOptions.find(opt => opt.label === valueLabel);
    if (!selectedOption) return;

    const params = new URLSearchParams(searchParams);
    params.set("sort", selectedOption.value);
    router.push(`/products?${params.toString()}`);
  };

  return (
    <Select
      options={sortOptions.map(opt => opt.label)}
      value={currentLabel}
      onChange={handleSortChange}
    />
  );
}
