"use client";

import { useEffect } from "react";

const SECTION_IDS = ["about", "journey", "app", "projects", "content", "support", "contact"] as const;

export default function NavSpy() {
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    let currentId: string | null = null;

    const callback: IntersectionObserverCallback = (entries) => {
      // Find the most visible section
      let top: { id: string; ratio: number } | null = null;
      for (const e of entries) {
        const id = e.target.id;
        if (!id) continue;
        const ratio = e.intersectionRatio;
        if (!top || ratio > top.ratio) top = { id, ratio };
      }
      if (top && top.id !== currentId) {
        currentId = top.id;
        const links = document.querySelectorAll<HTMLAnchorElement>('nav a');
        links.forEach((a) => {
          const href = a.getAttribute("href") || "";
          const isAnchor = href.includes("#");
          const isActive = isAnchor && (href === `#${currentId}` || href.endsWith(`/#${currentId}`));
          if (isActive) {
            a.setAttribute("aria-current", "true");
            a.classList.add("text-blue-600", "dark:text-blue-400", "font-semibold");
          } else {
            a.removeAttribute("aria-current");
            a.classList.remove("text-blue-600", "dark:text-blue-400", "font-semibold");
          }
        });
      }
    };

    const observer = new IntersectionObserver(callback, options);
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
