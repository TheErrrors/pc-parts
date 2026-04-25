import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { StockBadge } from "@/components/ui/StockBadge";

const onlineStores = [
  {
    name: "MD Computers",
    price: 58990,
    inStock: true,
    lastUpdated: "2 mins ago",
    link: "#",
  },
  {
    name: "PrimeABGB",
    price: 59100,
    inStock: true,
    lastUpdated: "15 mins ago",
    link: "#",
  },
  {
    name: "Vedant Computers",
    price: 58900,
    inStock: false,
    lastUpdated: "1 hr ago",
    link: "#",
  },
  {
    name: "Amazon India",
    price: 61500,
    inStock: true,
    lastUpdated: "Just now",
    link: "#",
  },
];

const localPrices = [
  {
    city: "Mumbai (Lamington)",
    price: 57500,
    trend: -4.1,
  },
  {
    city: "Delhi (Nehru Place)",
    price: 57800,
    trend: -3.6,
  },
  {
    city: "Bangalore (SP Road)",
    price: 58200,
    trend: -2.9,
  },
];

const productData = {
  title: "ASUS RTX 4070 Dual OC",
  mpn: "DUAL-RTX4070-O12G",
  msrp: 59990,
  specs: {
    Architecture: "Ada Lovelace",
    VRAM: "12GB GDDR6X",
    CoreClock: "2550 MHz",
    TDP: "200W",
  },
};

export default function ProductDetailPage() {
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
            <Link href="#" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Build Guides</Link>
            <Link href="#" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Compare</Link>
            <Link href="#" className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">Deals</Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 font-body-sm text-on-surface-variant mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link href="/products/graphics-cards" className="hover:text-primary transition-colors">Graphics Cards</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-on-surface font-medium">{productData.title}</span>
          </nav>

          {/* Product Overview Header (1:2 Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

            {/* Left Column: Image Container */}
            <div className="col-span-1">
              <div className="bg-surface-container-lowest border border-surface-container-high rounded-2xl h-[320px] flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[120px] text-surface-container-high">
                  developer_board
                </span>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="col-span-1 lg:col-span-2 flex flex-col justify-center">
              <h1 className="text-headline-lg font-display text-on-surface mb-3">
                {productData.title}
              </h1>

              {/* Tags Row */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="px-3 py-1 bg-surface-container rounded-md font-body-sm text-[13px] text-on-surface-variant border border-surface-container-high">
                  MPN: {productData.mpn}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-[#22c55e]/10 text-[#006c49] rounded-md font-body-sm text-[13px] border border-[#22c55e]/20">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  Verified Specs
                </span>
              </div>

              {/* MSRP Area */}
              <div className="mb-8">
                <div className="font-label-md text-on-surface-variant tracking-wider uppercase mb-1">
                  Official MSRP
                </div>
                <div className="flex items-end gap-2">
                  <span className="font-price-lg text-primary tabular-nums text-4xl">
                    ₹{productData.msrp.toLocaleString("en-IN")}
                  </span>
                  <span className="font-body-sm text-on-surface-variant mb-1">Incl. GST</span>
                </div>
              </div>

              {/* Quick Specs Grid (2x2) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(productData.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="font-label-md text-on-surface-variant text-[11px] uppercase tracking-wide mb-1">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="font-body-sm font-semibold text-on-surface">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Split-View (65/35 Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Column: Online Comparison */}
            <div className="col-span-1 lg:col-span-8">
              <h2 className="font-display text-headline-md text-on-surface mb-6">
                Online Comparison
              </h2>

              <div className="flex flex-col border-t border-surface-container-high">
                {onlineStores.map((store, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 border-b border-surface-container-high hover:bg-surface-container-lowest/50 transition-colors px-2"
                  >
                    <div className="flex flex-col gap-1.5 flex-1">
                      <div className="font-body-md font-semibold text-on-surface">
                        {store.name}
                      </div>
                      <div className="flex items-center gap-3">
                        <StockBadge inStock={store.inStock} />
                        <span className="font-body-sm text-on-surface-variant text-[12px]">
                          Updated {store.lastUpdated}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 flex-1 sm:flex-none">
                      <div className="font-price-lg text-primary tabular-nums">
                        ₹{store.price.toLocaleString("en-IN")}
                      </div>
                      <Button variant="primary" className="shrink-0">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Local Street Price Sidebar */}
            <div className="col-span-1 lg:col-span-4">
              <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 sticky top-24">
                <div className="mb-6">
                  <h2 className="font-display text-headline-md text-on-surface">
                    Local Street Price
                  </h2>
                  <p className="font-body-sm text-on-surface-variant mt-1">
                    Community-verified offline quotes.
                  </p>
                </div>

                <div className="flex flex-col gap-5 mb-8">
                  {localPrices.map((location, index) => (
                    <div key={index} className="flex items-start justify-between">
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[20px] text-primary mt-0.5">
                          location_on
                        </span>
                        <div className="flex flex-col">
                          <span className="font-body-sm font-medium text-on-surface">
                            {location.city}
                          </span>
                          <span className={`font-label-md text-[11px] mt-1 ${location.trend < 0 ? 'text-[#22c55e]' : 'text-red-500'}`}>
                            {location.trend < 0 ? '↘' : '↗'} {location.trend}% vs MSRP
                          </span>
                        </div>
                      </div>
                      <span className="font-price-lg text-primary text-lg tabular-nums">
                        ₹{location.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full">
                  + Contribute Your Price
                </Button>
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
