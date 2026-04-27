"use client";

import React, { useState } from "react";

export function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="bg-surface-container-lowest border border-surface-container-high rounded-2xl h-[320px] flex items-center justify-center shadow-sm">
        <span className="material-symbols-outlined text-[120px] text-surface-container-high">
          developer_board
        </span>
      </div>
    );
  }

  return (
    <div className="col-span-1">
      <div className="bg-surface-container-lowest border border-surface-container-high rounded-2xl h-[320px] flex items-center justify-center shadow-sm overflow-hidden p-4">
        <img src={images[activeIndex]} alt={alt} className="w-full h-full object-contain" />
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-16 h-16 border rounded-md shrink-0 p-1 flex items-center justify-center cursor-pointer transition-all ${activeIndex === i ? 'border-primary shadow-sm' : 'border-surface-container-high hover:border-primary/50'}`}
            >
              <img src={img} alt="" className="w-full h-full object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
