import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

function getPost(slug: string) {
  return posts.find((p) => p.slug === slug) || null;
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Steven Whyte`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Steven Whyte`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      siteName: "Steven Whyte",
      type: "article",
      images: [{ url: "/og.svg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Steven Whyte`,
      description: post.excerpt,
      images: ["/og.svg"],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <Link href="/blog" className="text-sm text-blue-700 dark:text-blue-400 hover:underline">← Back to Blog</Link>
          <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">{post.title}</h1>
          <time className="block mt-2 text-slate-500 dark:text-slate-400">{formatDate(post.date)}</time>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800">{t}</span>
            ))}
          </div>
        </header>
        <div className="prose max-w-none">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
