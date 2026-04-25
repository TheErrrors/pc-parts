import React from "react";
import Link from "next/link";

export function TopNavBar() {
  return (
    <header className="bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 border-b border-surface-container-high font-body-sm font-medium tracking-tight">
      <div className="flex items-center gap-8 max-w-[1400px] w-full mx-auto">
        <Link href="/" className="text-xl font-bold font-display text-primary flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-[#009b6b] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 stroke-white" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 00-2.25 2.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          BharatPCPrice
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Home</Link>
          <Link href="/products/graphics-cards" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Build Guides</Link>
          <Link href="/contribute" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Upload Quote</Link>
          <Link href="/suggest-store" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Suggest a Store</Link>
          <Link href="/products/deals" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Deals</Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/auth" className="scale-95 duration-150 ease-in-out text-on-surface-variant hover:text-primary flex items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>account_circle</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
