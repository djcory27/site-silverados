import "./globals.css";
import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Silverados Dog Park – Dogs • Live Music • Full Bar",
    template: "%s | Silverados Dog Park"
  },
  description: "Where dogs, live music, and cold drinks meet in perfect harmony. Family-friendly dog park with live entertainment, craft beer, and mountain views in Black Mountain, NC.",
  keywords: ["dog park", "Black Mountain", "live music", "craft beer", "pet friendly", "outdoor entertainment", "North Carolina"],
  authors: [{ name: "Silverados Dog Park" }],
  creator: "Silverados Dog Park",
  publisher: "Silverados Dog Park",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://silveradosdogpark.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Silverados Dog Park – Dogs • Live Music • Full Bar",
    description: "Where dogs, live music, and cold drinks meet in perfect harmony. Family-friendly dog park with live entertainment in Black Mountain, NC.",
    url: 'https://silveradosdogpark.com',
    siteName: 'Silverados Dog Park',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Silverados Dog Park - Dogs, Music, and Fun',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Silverados Dog Park – Dogs • Live Music • Full Bar",
    description: "Where dogs, live music, and cold drinks meet in perfect harmony.",
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-brand-light text-brand-dark scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="" />

        {/* Font loading with display=swap for better performance */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=DM+Serif+Display:ital,wght@0,400&display=swap"
          rel="stylesheet"
        />

        {/* Preload critical resources */}
        <link rel="preload" href="/media/dogs-at-play.jpg" as="image" />
        <link rel="preload" href="/logo.png" as="image" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google.com" />
      </head>
      <body className="antialiased">
        <Nav />
        <main className="relative">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
