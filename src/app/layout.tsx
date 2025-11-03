import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steven Whyte | Homeless Advocacy & Research",
  description: "A year cycling 5000+ miles across Europe, experiencing homelessness firsthand to provide lived experience advice on homeless projects and services.",
  keywords: ["homeless advocacy", "lived experience", "Europe", "cycling", "social research", "Steven Whyte"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Steven Whyte | Homeless Advocacy & Research",
    description: "A year cycling 5000+ miles across Europe, experiencing homelessness firsthand to provide lived experience advice on homeless projects and services.",
    url: "/",
    siteName: "Steven Whyte",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Steven Whyte - Homeless Advocacy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven Whyte | Homeless Advocacy & Research",
    description: "A year cycling 5000+ miles across Europe, experiencing homelessness firsthand to provide lived experience advice on homeless projects and services.",
    images: ["/og.svg"],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <Script
            src="https://plausible.io/js/script.js"
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            strategy="afterInteractive"
          />
        ) : null}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var s=localStorage.getItem('theme');var d=s? s==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark', d);}catch(e){}})();",
          }}
        />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-slate-900 focus:shadow-lg dark:focus:bg-slate-800 dark:focus:text-white">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
