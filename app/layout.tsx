import "./globals.css";
import type { Metadata } from "next";
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
