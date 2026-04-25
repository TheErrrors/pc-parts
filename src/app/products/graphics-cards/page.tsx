import { TopNavBar } from "@/components/TopNavBar";

import React from "react";
import Link from "next/link";
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
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-surface-container-high mt-12 py-10 text-center">
        <p className="font-body-sm text-on-surface-variant">
          © 2026 BharatPCPrice. All prices verified from 500+ authorized retailers across India.
        </p>
      </footer>
    </>
  );
}
