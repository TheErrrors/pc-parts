"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const recentVerifications = [
  {
    id: "1",
    user: "Rahul99",
    part: "AMD Ryzen 5 7600",
    price: 18500,
    location: "SP Road, BLR",
  },
  {
    id: "2",
    user: "TechBuilder21",
    part: "ASUS RTX 4070 Dual OC",
    price: 57500,
    location: "Lamington Road, MUM",
  },
  {
    id: "3",
    user: "Aman_PC",
    part: "Gigabyte B650M DS3H",
    price: 13200,
    location: "Nehru Place, DEL",
  },
];

export default function ContributePage() {
  return (
    <>
      {/* TopNavBar */}
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
            <Link href="/compare" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Compare</Link>
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
        <div className="max-w-[1000px] mx-auto px-6">

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-headline-lg text-on-surface mb-2">
              Seen a Lower Price Offline? Help the Community!
            </h1>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Upload a recent quotation or enter details manually to keep our pricing data accurate and honest.
            </p>
          </div>

          {/* Contribution Split-View */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

            {/* Left Column: Upload Route */}
            <div className="bg-surface-container-lowest border-2 border-dashed border-primary/50 hover:border-primary transition-colors rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px] group cursor-pointer">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-[40px] text-primary">cloud_upload</span>
              </div>
              <h2 className="font-body-lg font-bold text-on-surface mb-2">Upload Quotation</h2>
              <p className="font-body-sm text-on-surface-variant max-w-[280px] mx-auto mb-8">
                Drag & drop your quotation slip here, or click to browse. Photos or PDFs accepted.
              </p>
              <Button variant="primary" className="px-8 pointer-events-none">
                Browse Files
              </Button>
            </div>

            {/* Right Column: Manual Entry Route */}
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-on-surface-variant">keyboard</span>
                <h2 className="font-display text-headline-md text-on-surface">Manual Entry</h2>
              </div>

              <form className="space-y-6 flex flex-col h-full" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block font-body-sm font-medium text-on-surface mb-2">Component</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[20px] text-on-surface-variant">search</span>
                    <Input placeholder="e.g., AMD Ryzen 5 7600" className="pl-10" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block font-body-sm font-medium text-on-surface">Offline Price</label>
                    <span className="font-label-md text-[11px] text-on-surface-variant uppercase tracking-wide bg-surface-container px-2 py-0.5 rounded">Incl. GST</span>
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-price-lg text-on-surface-variant text-xl">₹</span>
                    <Input type="number" placeholder="0.00" className="pl-9 py-3 text-xl font-bold font-price-lg bg-surface placeholder:font-body-md placeholder:font-normal placeholder:text-lg" />
                  </div>
                </div>

                <div>
                  <label className="block font-body-sm font-medium text-on-surface mb-2">Shop Name & Market</label>
                  <Input placeholder="e.g., Cost-to-Cost, Nehru Place" />
                </div>

                <div className="pt-2 mt-auto">
                  <Button variant="ghost" className="w-full bg-surface border border-surface-container-high hover:border-primary hover:bg-surface transition-colors py-3">
                    Submit Price
                  </Button>
                </div>
              </form>
            </div>

          </div>

          {/* Gamification / Trust Section */}
          <div>
            <h2 className="font-display text-headline-md text-on-surface mb-6 text-center">
              Recent Community Verifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentVerifications.map((item) => (
                <div key={item.id} className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-5 hover:-translate-y-1 hover:shadow-layer-2 transition-all cursor-default">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-label-md text-[12px]">
                        {item.user.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-body-sm font-medium text-on-surface">{item.user}</span>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-label-md bg-[#22c55e]/10 text-[#006c49] px-2 py-0.5 rounded-md border border-[#22c55e]/20">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      Verified
                    </span>
                  </div>

                  <div className="font-body-sm font-medium text-on-surface mb-1 truncate" title={item.part}>
                    {item.part}
                  </div>

                  <div className="flex items-end justify-between mt-3">
                    <span className="font-price-lg text-primary tabular-nums">₹{item.price.toLocaleString("en-IN")}</span>
                    <span className="font-label-md text-[11px] text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      {item.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
