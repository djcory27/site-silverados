"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { cn } from "../lib/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/attractions", label: "Attractions" },
  { href: "/events", label: "Events" },
  { href: "/menu", label: "Menu" },
  { href: "/rules", label: "Rules" },
  { href: "/memberships", label: "Memberships" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-gradient-to-b from-brand-dark/90 to-brand-dark/70 backdrop-blur-lg"
      )}
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link
          href="/"
          aria-label="Silverados Dog Park home"
          className="group relative overflow-hidden rounded-lg p-2 transition-all duration-300 hover:scale-105"
        >
          <Logo className="w-48 md:w-64 transition-all duration-300 group-hover:drop-shadow-[0_0_30px_rgba(37,99,235,0.7)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l, index) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group",
                pathname === l.href
                  ? "text-white bg-white/10 shadow-lg"
                  : "text-white/90 hover:text-white hover:bg-white/5"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {l.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent group-hover:w-full group-hover:left-0 transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/events"
            className="btn-secondary hidden md:inline-flex items-center gap-2 hover:scale-105 transition-all duration-300"
          >
            <span>See Events</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/memberships"
            className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Buy Day Pass</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={cn(
                "block w-5 h-0.5 bg-white transition-all duration-300",
                isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              )} />
              <span className={cn(
                "block w-5 h-0.5 bg-white transition-all duration-300",
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              )} />
              <span className={cn(
                "block w-5 h-0.5 bg-white transition-all duration-300",
                isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              )} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
        isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="container-page py-4 border-t border-white/10">
          <div className="flex flex-col gap-2">
            {links.map((l, index) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium transition-all duration-300",
                  pathname === l.href
                    ? "text-white bg-white/10 shadow-lg"
                    : "text-white/90 hover:text-white hover:bg-white/5"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
