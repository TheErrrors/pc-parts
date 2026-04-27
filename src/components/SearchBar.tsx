"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const searchResults = [
  { id: 1, title: "AMD Ryzen 7 7800X3D", subtitle: "CPU - Gaming Processor", price: 38499, icon: "memory", url: "/products/cpus/1" },
  { id: 2, title: "NVIDIA RTX 4070", subtitle: "GPU - Graphics Card", price: 52999, icon: "developer_board", url: "/products/graphics-cards/1" },
  { id: 3, title: "Intel Core i5-13600K", subtitle: "CPU - Mid-Range", price: 28999, icon: "memory", url: "/products/cpus/2" },
  { id: 4, title: "AMD Radeon RX 7800 XT", subtitle: "GPU - High-End", price: 44999, icon: "developer_board", url: "/products/graphics-cards/2" },
];

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    if (query.trim()) {
      router.push(`/products?query=${encodeURIComponent(query.trim())}`);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-[700px] mx-auto relative group" ref={dropdownRef}>
      <form onSubmit={handleSearch}>
        <input
          className="search-bar w-full bg-surface-container-lowest border-2 border-surface-container-high rounded-2xl py-5 pl-6 pr-16 font-body-md text-lg text-on-surface placeholder-on-surface-variant focus:border-primary focus:outline-none transition-all shadow-sm"
          placeholder="Search components... e.g., Ryzen 7 7800X3D, RTX 4070"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsDropdownOpen(true)}
        />
        <button
          type="submit"
          className="absolute right-5 top-[28px] -translate-y-1/2 w-[22px] h-[22px] text-on-surface-variant pointer-events-none"
        >
          <svg
            className="w-full h-full stroke-current"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </form>

      {/* Autocomplete Dropdown */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-full z-50 mt-2 bg-surface-container-lowest border border-surface-container-high rounded-xl shadow-lg overflow-hidden">
          <ul className="flex flex-col">
            {searchResults.map((result) => (
              <li key={result.id} className="border-b border-surface-container-high last:border-b-0">
                <Link
                  href={result.url}
                  className="flex items-center gap-4 p-4 cursor-pointer transition-colors hover:bg-surface"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px] text-primary">{result.icon}</span>
                  </div>
                  <div className="flex flex-col flex-1 text-left min-w-0">
                    <div className="font-body-md font-semibold text-on-surface truncate">{result.title}</div>
                    <div className="font-label-md text-on-surface-variant truncate">{result.subtitle}</div>
                  </div>
                  <div className="font-price-lg text-base text-primary tabular-nums shrink-0">
                    ₹{result.price.toLocaleString("en-IN")}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="absolute right-5 -bottom-8 flex items-center gap-1.5 font-label-md text-xs text-on-surface-variant">
        <span>Press</span>
        <kbd className="px-2 py-0.5 bg-surface-container border border-surface-container-high rounded font-body-sm text-[11px]">
          /
        </kbd>
        <span>to search</span>
      </div>
    </div>
  );
}
