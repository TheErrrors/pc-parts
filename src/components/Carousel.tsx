"use client";

import React from "react";

interface CarouselProps {
  children: React.ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  return (
    <div className="carousel-track">
      {React.Children.map(children, (child) => (
        <div className="carousel-item">{child}</div>
      ))}
    </div>
  );
}
