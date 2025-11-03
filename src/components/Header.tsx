"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            <Link href="/">Steven Whyte</Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex space-x-8">
              <Link href={sectionHref("about")} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
              <Link href={sectionHref("journey")} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Journey</Link>
              <Link href={sectionHref("app")} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Mental Health App</Link>
              <Link href={sectionHref("projects")} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</Link>
              <Link href="/blog" className={`text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition ${pathname?.startsWith("/blog") ? "font-semibold text-blue-600 dark:text-blue-400" : ""}`}>Blog</Link>
              <Link href={sectionHref("content")} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Content</Link>
              <Link href={sectionHref("support")} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Support</Link>
              <Link href={sectionHref("contact")} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link>
            </div>
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
