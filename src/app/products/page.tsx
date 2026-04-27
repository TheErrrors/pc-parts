import React, { Suspense } from "react";
import Link from "next/link";
import { Filters } from "@/components/Filters";
import { ProductCard } from "@/components/ProductCard";
import { Select } from "@/components/ui/Select";
import { createClient } from "@/utils/supabase/server";

export const dynamic = 'force-dynamic';

export default async function ProductsPage({ searchParams }: { searchParams: { category?: string, page?: string, query?: string } }) {
  const supabase = createClient();
  const category = searchParams.category;
  const query = searchParams.query;
  const page = parseInt(searchParams.page || '1');
  const limit = 20;
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  let queryBuilder = supabase.from('products').select('*').range(start, end);

  if (category) {
    queryBuilder = queryBuilder.eq('category', category);
  }

  if (query) {
    queryBuilder = queryBuilder.ilike('name', `%${query}%`);
  }

  const { data: products, error } = await queryBuilder;

  if (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <>


      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* Top Bar (Breadcrumbs, Title, Sort) */}
          <div className="mb-8">
            <nav className="flex items-center gap-2 font-body-sm text-on-surface-variant mb-4">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <Link href="#" className="hover:text-primary transition-colors">Components</Link>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-on-surface font-medium capitalize">{category ? category.replace('-', ' ') : 'All Components'}</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h1 className="font-display text-headline-lg text-on-surface capitalize">{category ? category.replace('-', ' ') : 'All Components'}</h1>
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
            <Suspense fallback={<div>Loading filters...</div>}>
              <Filters />
            </Suspense>

            {/* Main Content Area: Product Grid */}
            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products && products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
              {/* Basic Pagination Controls */}
              <div className="flex justify-center mt-8 gap-4">
                {page > 1 && (
                  <Link href={`/products?page=${page - 1}${category ? `&category=${category}` : ''}${query ? `&query=${query}` : ''}`} className="px-4 py-2 border rounded-md hover:bg-surface-container">
                    Previous
                  </Link>
                )}
                {products && products.length === limit && (
                  <Link href={`/products?page=${page + 1}${category ? `&category=${category}` : ''}${query ? `&query=${query}` : ''}`} className="px-4 py-2 border rounded-md hover:bg-surface-container">
                    Next
                  </Link>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>


          </>
  );
}
