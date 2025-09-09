import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Silverados Dog Park – Live Music, Cold Brews, Happy Pups",
    template: "%s | Silverados Dog Park"
  },
  description: "🎵 Live Music • 🥤 Cold Brews • 🐕 Happy Pups. Family-friendly dog park with live entertainment, craft beer, and mountain views in Black Mountain, NC.",
  keywords: ["dog park", "Black Mountain", "live music", "craft beer", "cold brews", "pet friendly", "outdoor entertainment", "North Carolina", "happy pups"],
  authors: [{ name: "Silverados Dog Park" }],
  creator: "Silverados Dog Park",
  publisher: "Silverados Dog Park",
  metadataBase: new URL('https://silveradosdogpark.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Silverados Dog Park – Live Music, Cold Brews, Happy Pups",
    description: "🎵 Live Music • 🥤 Cold Brews • 🐕 Happy Pups. Family-friendly dog park with live entertainment in Black Mountain, NC.",
    url: 'https://silveradosdogpark.com',
    siteName: 'Silverados Dog Park',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Silverados Dog Park - Live Music, Cold Brews, Happy Pups',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Silverados Dog Park – Live Music, Cold Brews, Happy Pups",
    description: "🎵 Live Music • 🥤 Cold Brews • 🐕 Happy Pups. Family-friendly dog park with live entertainment.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
