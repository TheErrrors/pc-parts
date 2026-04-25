"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const initialCompareData = [
  {
    id: "1",
    title: "ASUS TUF Gaming GeForce RTX 4070 12GB GDDR6X",
    mpn: "TUF-RTX4070-O12G-GAMING",
    price: 58900,
    icon: "developer_board",
    specs: {
      Architecture: "Ada Lovelace",
      VRAM: "12GB GDDR6X",
      CoreClock: "2580 MHz",
      TDP: "200W",
      RecommendedPSU: "650W",
      Length: "301 mm",
      SlotSize: "3.15 Slot",
    },
  },
  {
    id: "2",
    title: "MSI GeForce RTX 4070 Ventus 2X 12G OC",
    mpn: "RTX 4070 VENTUS 2X 12G OC",
    price: 57499,
    icon: "developer_board",
    specs: {
      Architecture: "Ada Lovelace",
      VRAM: "12GB GDDR6X",
      CoreClock: "2520 MHz",
      TDP: "200W",
      RecommendedPSU: "650W",
      Length: "242 mm",
      SlotSize: "2 Slot",
    },
  },
  {
    id: "3",
    title: "Gigabyte GeForce RTX 4070 WINDFORCE OC 12G",
    mpn: "GV-N4070WF3OC-12GD",
    price: 56500,
    icon: "developer_board",
    specs: {
      Architecture: "Ada Lovelace",
      VRAM: "12GB GDDR6X",
      CoreClock: "2490 MHz",
      TDP: "200W",
      RecommendedPSU: "650W",
      Length: "261 mm",
      SlotSize: "2.5 Slot",
    },
  },
];

export default function ComparePage() {
  const [products, setProducts] = useState(initialCompareData);

  const removeProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // Ensure consistent layout logic for columns
  const gridColumnsClass =
    products.length === 1 ? "grid-cols-2" :
    products.length === 2 ? "grid-cols-3" :
    products.length === 3 ? "grid-cols-4" :
    "grid-cols-5"; // Assuming max 4 products + 1 label column

  return (
    <>
      <header className="bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 border-b border-surface-container-high font-body-sm font-medium tracking-tight">
        <div className="flex items-center gap-8 max-w-[1400px] w-full mx-auto">
          <Link href="/" className="text-xl font-bold font-display text-primary flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-[#009b6b] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 stroke-white" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            BharatPCPrice
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Home</Link>
            <Link href="/products/graphics-cards" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Build Guides</Link>
            <Link href="#" className="text-primary font-medium">Compare</Link>
            <Link href="#" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Deals</Link>
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <button className="scale-95 duration-150 ease-in-out text-on-surface-variant hover:text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>account_circle</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-16 min-h-[calc(100vh-160px)]">
        <div className="max-w-[1280px] mx-auto px-6 py-12">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <h1 className="font-display text-headline-lg text-on-surface mb-2">Compare Components</h1>
              <p className="font-body-sm text-on-surface-variant">Side-by-side technical specifications and real-time pricing.</p>
            </div>
            {products.length > 0 && (
              <Button variant="ghost" onClick={() => setProducts([])} className="text-on-surface-variant">
                Clear All
              </Button>
            )}
          </div>

          {products.length === 0 ? (
            /* Empty State */
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-2xl p-16 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[32px] text-on-surface-variant">compare</span>
              </div>
              <h2 className="font-display text-headline-md text-on-surface mb-2">Nothing to compare yet</h2>
              <p className="font-body-sm text-on-surface-variant max-w-sm mb-6">Select up to 4 components from our product listings to analyze them side-by-side.</p>
              <Button variant="outline" onClick={() => window.location.href = "/products/graphics-cards"}>
                Browse Components
              </Button>
            </div>
          ) : (
            <div className="relative bg-surface-container-lowest border border-surface-container-high rounded-2xl overflow-x-auto shadow-sm">
              <div className="min-w-[800px]">

                {/* Sticky Header */}
                <div className={`grid ${gridColumnsClass} sticky top-16 z-40 bg-surface/95 backdrop-blur-md border-b border-surface-container-high p-4`}>
                  {/* Empty cell for Labels column */}
                  <div className="p-4 flex items-end">
                    <span className="font-label-md text-on-surface-variant uppercase tracking-wider">Specifications</span>
                  </div>

                  {/* Product Header Cards */}
                  {products.map((product) => (
                    <div key={product.id} className="p-4 flex flex-col border border-surface-container-high rounded-xl bg-surface-container-lowest mx-2">
                      <div className="flex justify-end mb-2">
                        <button
                          onClick={() => removeProduct(product.id)}
                          className="p-1 text-on-surface-variant hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                          title="Remove"
                        >
                          <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                      </div>

                      <div className="bg-surface-container rounded-lg h-[120px] flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-[48px] text-on-surface-variant/30">
                          {product.icon}
                        </span>
                      </div>

                      <h3 className="font-body-md font-semibold text-on-surface line-clamp-2 mb-1 min-h-[48px]">
                        {product.title}
                      </h3>
                      <p className="font-label-md text-[11px] text-on-surface-variant truncate mb-4">
                        MPN: {product.mpn}
                      </p>

                      <div className="mt-auto">
                        <p className="font-label-md text-[10px] text-on-surface-variant uppercase mb-1">Lowest Price</p>
                        <div className="font-price-lg text-primary tabular-nums mb-4">
                          ₹{product.price.toLocaleString("en-IN")}
                        </div>
                        <Button className="w-full">View Deals</Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Smart Diff Table Body */}
                <div className="divide-y divide-surface-container-high">
                  {Object.keys(products[0].specs).map((specKey) => {
                    // Highlight logic check
                    const allValues = products.map((p) => p.specs[specKey as keyof typeof p.specs]);
                    const isDifferent = allValues.some((val) => val !== allValues[0]);

                    return (
                      <div
                        key={specKey}
                        className={`grid ${gridColumnsClass} ${isDifferent ? "bg-primary/15 border-l-4 border-primary" : "bg-transparent border-l-4 border-transparent"} hover:bg-surface-container/30 transition-colors`}
                      >
                        {/* Spec Label */}
                        <div className="p-4 flex items-center font-body-sm font-medium text-on-surface-variant border-r border-surface-container-high/50">
                          {specKey.replace(/([A-Z])/g, ' $1').trim()}
                        </div>

                        {/* Spec Values */}
                        {products.map((product) => (
                          <div key={`${product.id}-${specKey}`} className="p-4 px-6 flex items-center font-body-sm text-on-surface tabular-nums border-r border-surface-container-high/50 last:border-r-0">
                            {product.specs[specKey as keyof typeof product.specs]}
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          )}

        </div>
      </main>

      <footer className="relative z-10 border-t border-surface-container-high mt-12 py-10 text-center">
        <p className="font-body-sm text-on-surface-variant">
          © 2026 BharatPCPrice. All prices verified from 500+ authorized retailers across India.
        </p>
      </footer>
    </>
  );
}
