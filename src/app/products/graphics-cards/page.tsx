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
      <header className="bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 border-b border-surface-container-high font-body-sm font-medium tracking-tight">
        <div className="flex items-center gap-8 max-w-[1400px] w-full mx-auto">
          <Link href="/" className="text-xl font-bold font-display text-primary flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-[#009b6b] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 stroke-white" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                <path
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            BharatPCPrice
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Home</Link>
            <Link href="#" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Build Guides</Link>
            <Link href="#" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Compare</Link>
            <Link href="#" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Deals</Link>
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <button className="scale-95 duration-150 ease-in-out text-on-surface-variant hover:text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>account_circle</span>
            </button>
          </div>
        </div>
      </header>

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
