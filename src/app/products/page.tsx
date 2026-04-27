import React, { Suspense } from "react";
import Link from "next/link";
import { Filters } from "@/components/Filters";
import { ProductGridWrapper } from "@/components/ProductGridWrapper";
import { SortSelect } from "@/components/SortSelect";
import { createClient } from "@/utils/supabase/server";

export const dynamic = 'force-dynamic';

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string, page?: string, query?: string, inStock?: string, sort?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const supabase = createClient();
  const category = resolvedSearchParams.category;
  const query = resolvedSearchParams.query;
  const inStock = resolvedSearchParams.inStock;
  const sort = resolvedSearchParams.sort;

  const page = parseInt(resolvedSearchParams.page || '1');
  const limit = 20;
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  let queryBuilder = supabase.from('products').select('*').range(start, end);

  if (category) {
    queryBuilder = queryBuilder.eq('category', category);
  }

  if (query) {
    queryBuilder = queryBuilder.or(`name.ilike.%${query}%,brand.ilike.%${query}%`);
  }

  if (inStock === 'true') {
    queryBuilder = queryBuilder.eq('is_in_stock', true);
  }

  if (sort === 'price_desc') {
    queryBuilder = queryBuilder.order('price', { ascending: false });
  } else if (sort === 'newest') {
    queryBuilder = queryBuilder.order('created_at', { ascending: false });
  } else {
    // Default or price_asc
    queryBuilder = queryBuilder.order('price', { ascending: true });
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
              <span className="text-on-surface font-medium capitalize">{category ? `${category.replace('-', ' ')}s` : 'All Components'}</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h1 className="font-display text-headline-lg text-on-surface capitalize">{category ? `${category.replace('-', ' ')}s` : 'All Components'}</h1>
              <div className="flex items-center gap-2">
                <span className="font-body-sm text-on-surface-variant">Sort by:</span>
                <Suspense fallback={<div className="w-[180px] h-9 bg-surface-container rounded-md animate-pulse"></div>}>
                  <SortSelect />
                </Suspense>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-8">
            <Suspense fallback={<div>Loading filters...</div>}>
              <Filters />
            </Suspense>

            {/* Main Content Area: Product Grid */}
            <div className="flex-1 min-w-0">
              <ProductGridWrapper products={products || []} />
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
