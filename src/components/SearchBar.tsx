"use client";

import React, { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to be added later
  };

  return (
    <div className="max-w-[700px] mx-auto relative group">
      <form onSubmit={handleSearch}>
        <input
          className="search-bar w-full bg-surface-container-lowest border-2 border-surface-container-high rounded-2xl py-5 pl-6 pr-16 font-body-md text-lg text-on-surface placeholder-on-surface-variant focus:border-primary focus:outline-none transition-all shadow-sm"
          placeholder="Search components... e.g., Ryzen 7 7800X3D, RTX 4070"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-5 top-1/2 -translate-y-1/2 w-[22px] h-[22px] text-on-surface-variant pointer-events-none"
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
