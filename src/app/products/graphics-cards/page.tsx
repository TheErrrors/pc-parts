"use client";



import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Filters } from "@/components/Filters";
import { ProductCard } from "@/components/ProductCard";
import { Select } from "@/components/ui/Select";

const products = [
  {
    id: "1",
    title: "ASUS TUF Gaming GeForce RTX 4070 12GB GDDR6X",
    price: 58900,
    specs: ["12GB GDDR6X", "200W"],
    icon: "developer_board",
  },
  {
    id: "2",
    title: "MSI GeForce RTX 4070 Ventus 2X 12G OC",
    price: 57499,
    specs: ["12GB GDDR6X", "200W"],
    icon: "developer_board",
  },
  {
    id: "3",
    title: "Gigabyte GeForce RTX 4070 Ti EAGLE OC 12G",
    price: 76500,
    specs: ["12GB GDDR6X", "285W"],
    icon: "developer_board",
  },
  {
    id: "4",
    title: "Zotac Gaming GeForce RTX 4070 Twin Edge",
    price: 56999,
    specs: ["12GB GDDR6X", "200W"],
    icon: "developer_board",
  },
  {
    id: "5",
    title: "ASUS Dual Radeon RX 7800 XT OC Edition 16GB GDDR6",
    price: 51900,
    specs: ["16GB GDDR6", "263W"],
    icon: "developer_board",
  },
  {
    id: "6",
    title: "Sapphire Pulse AMD Radeon RX 7800 XT",
    price: 50999,
    specs: ["16GB GDDR6", "263W"],
    icon: "developer_board",
  },
];

export default function GraphicsCardsPage() {
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);
  const router = useRouter();

  const handleToggleCompare = (id: string) => {
    setSelectedForCompare((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      }
      if (prev.length < 4) {
        return [...prev, id];
      }
      return prev;
    });
  };

  return (
    <>
      {/* TopNavBar */}

      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* Top Bar (Breadcrumbs, Title, Sort) */}
          <div className="mb-8">
            <nav className="flex items-center gap-2 font-body-sm text-on-surface-variant mb-4">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <Link href="#" className="hover:text-primary transition-colors">Components</Link>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-on-surface font-medium">Graphics Cards</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h1 className="font-display text-headline-lg text-on-surface">Graphics Cards</h1>
              <div className="flex items-center gap-2">
                <span className="font-body-sm text-on-surface-variant">Sort by:</span>
                <Select
                  options={["Price (Low to High)", "Price (High to Low)", "Popularity"]}
                  value="Price (Low to High)"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-8">
            <Filters />

            {/* Main Content Area: Product Grid */}
            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isSelected={selectedForCompare.includes(product.id)}
                    onToggleCompare={handleToggleCompare}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Local Compare Action Bar */}
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

        </div>
      </main>

      {/* Footer */}
          </>
  );
}
