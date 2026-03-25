"use client"

import { useEffect, useRef } from "react";

export default function useFadeUp() {
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const els = document.querySelectorAll(".fadeUp");

    const observer = new IntersectionObserver(
      (entries) => {
        const scrollingDown = window.scrollY >= lastScrollY.current;

        entries.forEach((entry) => {
          if (entry.isIntersecting && scrollingDown) {
            entry.target.classList.add("visivel");
          } else if (!entry.isIntersecting && !scrollingDown) {
            entry.target.classList.remove("visivel");
          }
        });

        lastScrollY.current = window.scrollY;
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}