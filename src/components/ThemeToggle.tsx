"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const shouldDark = stored ? stored === "dark" : prefersDark;
      document.documentElement.classList.toggle("dark", shouldDark);
      setIsDark(shouldDark);
    } catch {}
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  if (!mounted) return (
    <button
      aria-label="Toggle theme"
      className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 hover:shadow-sm transition"
    >
      <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
    </button>
  );

  return (
    <button
      aria-label="Toggle theme"
      aria-pressed={isDark}
      onClick={toggle}
      className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 hover:shadow-sm transition"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
      )}
    </button>
  );
}
