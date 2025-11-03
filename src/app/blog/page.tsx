import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog | Steven Whyte",
  description: "Insights from the road and practical frameworks for social change.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function BlogPage() {
  return (
    <main className="min-h-screen py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Blog</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Insights from the road and practical frameworks for change</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((p) => (
            <article key={p.slug} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <header className="mb-3">
                <time className="text-sm text-slate-500 dark:text-slate-400">{formatDate(p.date)}</time>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{p.title}</h2>
              </header>
              <p className="text-slate-600 dark:text-slate-300">{p.excerpt}</p>
              <div className="mt-6">
                <Link href={`/blog/${p.slug}`} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
