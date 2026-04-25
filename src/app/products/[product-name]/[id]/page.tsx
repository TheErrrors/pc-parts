
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
  fullSpecs: {
    "Dimensions": "267 x 136 x 51 mm",
    "Slot Size": "2.5 Slot",
    "Recommended PSU": "650W",
    "Power Connectors": "1x 8-pin",
    "Display Outputs": "3x DP 1.4a, 1x HDMI 2.1",
    "CUDA Cores": "5888",
    "Memory Bus": "192-bit",
    "Maximum Display Support": "4",
    "HDCP Support": "2.3",
    "OpenGL": "4.6",
  }
};

import { usePathname } from "next/navigation";

export default function ProductDetailPage() {
  const pathname = usePathname();
  const category = pathname.split('/')[2] || 'graphics-cards';

  return (
    <>

      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 font-body-sm text-on-surface-variant mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link href={`/products/${category}`} className="hover:text-primary transition-colors">Graphics Cards</Link>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">

            {/* Left Column: Online Comparison */}
            <div className="col-span-1 lg:col-span-8 bg-surface-container-lowest border border-surface-container-high rounded-2xl p-6">
              <h2 className="font-display text-headline-md text-on-surface mb-6">
                Online Comparison
              </h2>

              <div className="flex flex-col border-t border-surface-container-high">
                {onlineStores.map((store, index) => (
                  <div
                    key={index}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 border-b border-surface-container-high transition-colors px-4 ${store.inStock ? "hover:bg-surface-container/30" : "bg-surface/50"}`}
                  >
                    <div className="flex flex-col gap-1.5 flex-1">
                      <div className={`font-body-md font-semibold ${store.inStock ? "text-on-surface" : "text-on-surface-variant"}`}>
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
                      <div className={`font-price-lg tabular-nums ${store.inStock ? "text-primary" : "text-on-surface-variant/70"}`}>
                        ₹{store.price.toLocaleString("en-IN")}
                      </div>
                      <Button variant={store.inStock ? "primary" : "outline"} className={`shrink-0 ${!store.inStock && "text-on-surface-variant border-surface-container-high hover:bg-surface-container"}`}>
                        {store.inStock ? "Buy Now" : "View"}
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

          {/* Price History Section */}
          <div className="bg-surface-container-lowest border border-surface-container-high rounded-2xl p-6 mb-12">
            <h2 className="font-display text-headline-md text-on-surface mb-6">
              Price History (Last 30 Days)
            </h2>
            <div className="h-[300px] w-full bg-surface rounded-xl border border-surface-container-high relative overflow-hidden flex flex-col justify-between py-6">
              {/* CSS generated grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,_transparent_calc(100%_-_1px),_var(--color-surface-container-high)_calc(100%_-_1px))] bg-[length:100%_20%]" />

              {/* Legend */}
              <div className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur-sm border border-surface-container-high rounded-lg p-3 flex gap-4 text-[12px] font-label-md shadow-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                  <span className="text-on-surface-variant">Amazon</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                  <span className="text-on-surface-variant">MD Computers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                  <span className="text-on-surface-variant">PrimeABGB</span>
                </div>
              </div>

              {/* Placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-on-surface-variant/50 font-body-sm font-medium">Interactive Chart Placeholder</span>
              </div>
            </div>
          </div>

          {/* Full Specifications Section */}
          <div className="bg-surface-container-lowest border border-surface-container-high rounded-2xl p-6">
            <h2 className="font-display text-headline-md text-on-surface mb-6">
              Technical Specifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 border border-surface-container-high rounded-xl overflow-hidden">
              {Object.entries(productData.fullSpecs).map(([key, value], index) => (
                <div
                  key={key}
                  className={`flex flex-col sm:flex-row sm:items-center py-3 px-4 ${Math.floor(index / 2) % 2 === 0 ? "bg-surface" : "bg-surface-container-lowest"} ${index % 2 !== 0 ? "border-l border-surface-container-high" : ""} border-b border-surface-container-high`}
                >
                  <span className="font-label-md text-on-surface-variant w-48 shrink-0">{key}</span>
                  <span className="font-body-sm text-on-surface font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
          </>
  );
}
