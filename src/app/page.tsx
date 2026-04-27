
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ProductGrid } from "@/components/ui/ProductGrid";
import { SearchBar } from "@/components/SearchBar";
import { Carousel } from "@/components/Carousel";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

const categoryMap: Record<string, string> = {
  'CPU': 'Processor',
  'GPU': 'Graphics Card',
  'Motherboard': 'Motherboard',
  'RAM': 'Memory',
  'Storage': 'Storage',
  'Case': 'Cabinet',
  'PSU': 'Power Supply',
  'Cooler': 'Cooling',
  'Monitor': 'Monitor',
  'Mouse': 'Mouse',
  'Keyboard': 'Keyboard',
  'Peripherals': 'Peripherals',
};

export const dynamic = 'force-dynamic';

export default async function Home() {
  const supabase = createClient();

  const categoryCounts: Record<string, number> = {};

  // Fetch counts safely (ignoring errors if DB is unpopulated)
  for (const dbCategory of Object.values(categoryMap)) {
    try {
      const { count } = await supabase
        .from('products')
        .select('*', { count: 'exact', head: true })
        .eq('category', dbCategory);
      categoryCounts[dbCategory] = count || 0;
    } catch {
      categoryCounts[dbCategory] = 0;
    }
  }

  const categories = [
    { icon: "memory", name: "CPU" },
    { icon: "developer_board", name: "GPU" },
    { icon: "schema", name: "Motherboard" },
    { icon: "dns", name: "RAM" },
    { icon: "save", name: "Storage" },
    { icon: "computer", name: "Case" },
    { icon: "power", name: "PSU" },
    { icon: "mode_fan", name: "Cooler" },
    { icon: "desktop_windows", name: "Monitor" },
    { icon: "mouse", name: "Mouse" },
    { icon: "keyboard", name: "Keyboard" },
    { icon: "headset_mic", name: "Peripherals" },
  ];

  return (
    <>


      <main className="relative z-10 pt-24 pb-20 space-y-20">
        {/* Hero Section */}
        <section className="max-w-[900px] mx-auto px-6 text-center pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full font-label-md text-[13px] text-primary mb-6">
            <span className="hero-badge-dot"></span>
            Live prices from 500+ verified shops
          </div>
          <h1 className="font-display text-display text-on-surface mb-5 leading-tight tracking-tight">
            Find Your Perfect<br />PC Build. Instantly.
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-[540px] mx-auto mb-10">
            Search thousands of PC components with real-time pricing from trusted local retailers. Build smarter, save more.
          </p>
          <SearchBar />
        </section>

        {/* Categories Grid */}
        <section className="max-w-[1200px] mx-auto px-6">
          <SectionHeader title="Shop by Category" subtitle="Browse 10,000+ verified products" />
          <ProductGrid>
            {categories.map((category) => {
              const dbCategory = categoryMap[category.name] || category.name;
              const count = categoryCounts[dbCategory] || 0;
              return (
              <Link
                key={category.name}
                href={`/products?category=${encodeURIComponent(dbCategory)}`}
                className="bg-surface-container-lowest border border-surface-container-high rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:border-primary hover:shadow-md hover:-translate-y-1 transition-all group h-[160px]"
              >
                <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-[28px] text-on-surface" style={{ fontVariationSettings: "'FILL' 0" }}>
                    {category.icon}
                  </span>
                </div>
                <span className="font-body-sm font-semibold text-on-surface mb-1">{category.name}</span>
                <span className="font-label-md text-[11px] text-on-surface-variant font-normal">{count.toLocaleString('en-IN')} products</span>
              </Link>
            )})}
          </ProductGrid>
        </section>

        {/* Trust Widgets */}
        <section className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top Price Drops */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2.5 font-display text-base font-semibold text-on-surface">
                  <span className="material-symbols-outlined text-on-surface-variant">trending_down</span>
                  Top Price Drops Today
                  <Badge variant="success">LIVE</Badge>
                </div>
                <Link href="#" className="font-body-sm font-medium text-primary hover:underline">View All →</Link>
              </CardHeader>
              <CardContent>
                <Carousel>
                  <div className="bg-surface rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all border border-surface-container-high">
                    <div className="h-[140px] bg-gradient-to-br from-surface-container-lowest to-surface flex items-center justify-center relative border-b border-surface-container-high">
                      <div className="absolute top-3 left-3 px-3 py-1.5 bg-[#22c55e] text-white rounded-md font-label-md text-[11px] flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                        ₹5,000 Drop
                      </div>
                      <span className="material-symbols-outlined text-[64px] text-on-surface-variant/30">memory</span>
                    </div>
                    <div className="p-4">
                      <div className="font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider mb-1.5">CPU</div>
                      <div className="font-body-sm font-semibold text-on-surface mb-3 leading-snug h-10">AMD Ryzen 9 7950X3D</div>
                      <div className="flex items-center justify-between">
                        <span className="font-price-lg text-lg text-on-surface">₹54,999</span>
                        <Badge variant="error">
                          <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                          ₹5,000
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="bg-surface rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all border border-surface-container-high">
                    <div className="h-[140px] bg-gradient-to-br from-surface-container-lowest to-surface flex items-center justify-center relative border-b border-surface-container-high">
                      <div className="absolute top-3 left-3 px-3 py-1.5 bg-[#22c55e] text-white rounded-md font-label-md text-[11px] flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                        ₹8,500 Drop
                      </div>
                      <span className="material-symbols-outlined text-[64px] text-on-surface-variant/30">developer_board</span>
                    </div>
                    <div className="p-4">
                      <div className="font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider mb-1.5">GPU</div>
                      <div className="font-body-sm font-semibold text-on-surface mb-3 leading-snug h-10">NVIDIA RTX 4080 Super</div>
                      <div className="flex items-center justify-between">
                        <span className="font-price-lg text-lg text-on-surface">₹1,09,999</span>
                        <Badge variant="error">
                          <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                          ₹8,500
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </CardContent>
            </Card>

            {/* Latest Verified Local Quote */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2.5 font-display text-base font-semibold text-on-surface">
                  <span className="material-symbols-outlined text-on-surface-variant">verified</span>
                  Latest Verified Local Quote
                  <Badge variant="warning">LIVE</Badge>
                </div>
                <Link href="#" className="font-body-sm font-medium text-primary hover:underline">View All →</Link>
              </CardHeader>
              <div className="flex flex-col">
                <div className="flex items-center gap-4 p-4 border-b border-surface-container-high hover:bg-surface-container-lowest transition-colors">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px] text-primary">memory</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-body-sm text-[13px] text-on-surface-variant mb-0.5 truncate">📍 Bengaluru - Prime Silicon Hub</div>
                    <div className="font-body-sm font-medium text-on-surface truncate">AMD Ryzen 7 7800X3D</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-price-lg text-base text-primary">₹38,499</div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">2 min ago</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border-b border-surface-container-high hover:bg-surface-container-lowest transition-colors">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px] text-primary">developer_board</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-body-sm text-[13px] text-on-surface-variant mb-0.5 truncate">📍 Mumbai - Andheri East</div>
                    <div className="font-body-sm font-medium text-on-surface truncate">NVIDIA RTX 4070 Ti Super</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-price-lg text-base text-primary">₹64,999</div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">5 min ago</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 hover:bg-surface-container-lowest transition-colors">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px] text-primary">developer_board</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-body-sm text-[13px] text-on-surface-variant mb-0.5 truncate">📍 Delhi - Nehru Place</div>
                    <div className="font-body-sm font-medium text-on-surface truncate">ASUS ROG Strix B650E-F</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-price-lg text-base text-primary">₹24,999</div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">8 min ago</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>


          </>
  );
}
