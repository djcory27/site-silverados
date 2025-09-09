"use client";

import Link from "next/link";
import { Section } from "../components/Section";
import events from "../data/events.json";
import EventCard from "../components/EventCard";
import { useState, useEffect, useRef } from "react";

interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  artistImage?: string;
  ticketUrl?: string;
  price?: string;
  blurb?: string;
}

interface Attraction {
  title: string;
  desc: string;
  icon: string;
  color: string;
}

const attractions: Attraction[] = [
  {
    title: "Dogs",
    desc: "Off-leash play, small & large areas, wash stations.",
    icon: "🐕",
    color: "from-brand-primary to-brand-sky"
  },
  {
    title: "Live Music",
    desc: "Regional acts every week on the outdoor stage.",
    icon: "🎸",
    color: "from-brand-secondary to-brand-sage"
  },
  {
    title: "Full Bar",
    desc: "Local beer, cocktails, NA options, snacks & trucks.",
    icon: "🍻",
    color: "from-brand-accent to-brand-coral"
  },
];

export default function Home() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading state for smooth animations
    const timer = setTimeout(() => setIsLoaded(true), 100);
    setUpcomingEvents((events as Event[]).slice(0, 3));

    // Parallax effect for hero section
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="hero-video-section relative"
        aria-labelledby="hero-title"
        role="banner"
      >
        <div
          className="hero-video absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/media/dogs-at-play.jpg)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
          role="presentation"
          aria-hidden="true"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />

        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{ animationDelay: '0s', animationDuration: '6s' }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-3 h-3 bg-brand-primary/30 rounded-full animate-float"
            style={{ animationDelay: '2s', animationDuration: '8s' }}
          />
          <div
            className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-brand-accent/40 rounded-full animate-float"
            style={{ animationDelay: '4s', animationDuration: '7s' }}
          />
        </div>

        <div className="hero-content relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1
              id="hero-title"
              className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-sky bg-clip-text text-transparent animate-gradient-x">
                Silverados
              </span>{" "}
              Dog Park
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Where dogs, music, and good times come together in perfect harmony
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="#attractions"
                className="hero-cta inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
                aria-label="Explore our park attractions"
              >
                <span>Explore Our Park</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 rounded-full text-white font-semibold hover:bg-brand-primary/30 transition-all duration-300 hover:scale-105"
              >
                <span>View Events</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ATTRACTIONS SECTION */}
      <Section
        id="attractions"
        title="Three Attractions"
        subtitle="Bring your best friend, enjoy live music on our outdoor stage, and sip from a full bar featuring local drafts and cocktails."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {attractions.map((attraction, index) => (
            <article
              key={attraction.title}
              className={`card group relative overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-glass animate-fade-in cursor-pointer`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => {
                // Add subtle interaction effect
              }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${attraction.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Floating icon */}
              <div className="relative flex justify-center mb-6">
                <div className={`text-7xl mb-6 bg-gradient-to-br ${attraction.color} bg-clip-text text-transparent group-hover:scale-110 transition-all duration-500 relative`}>
                  <span className="filter drop-shadow-lg">{attraction.icon}</span>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 text-7xl bg-gradient-to-br ${attraction.color} bg-clip-text text-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-sm scale-110`}>
                    {attraction.icon}
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-brand-dark group-hover:text-brand-primary transition-colors duration-300 leading-tight">
                  {attraction.title}
                </h3>
                <p className="text-brand-charcoal text-lg leading-relaxed group-hover:text-brand-dark transition-colors duration-300">
                  {attraction.desc}
                </p>

                {/* Subtle bottom accent */}
                <div className={`mt-6 h-1 bg-gradient-to-r ${attraction.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* EVENTS PREVIEW */}
      <Section title="Upcoming Events" subtitle="Don't miss our live music performances and special events.">
        <div className="grid gap-8 md:grid-cols-3">
          {upcomingEvents.map((event: Event) => (
            <EventCard key={event.id} e={event} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="btn-secondary inline-flex items-center gap-2 hover:scale-105 transition-all duration-300"
            aria-label="View full events calendar"
          >
            <span>View Full Calendar</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* MAP & HOURS */}
      <Section title="Plan Your Visit" subtitle="Find us easily and check our operating hours.">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card overflow-hidden">
            <iframe
              title="Map to Silverados Dog Park"
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=2898+US+Highway+70,Black+Mountain,NC&output=embed">
            </iframe>
          </div>
          <div className="card p-8">
            <h4 className="text-2xl font-bold mb-6 text-brand-dark">Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium">Mon–Thu</span>
                <span className="text-brand-primary font-semibold">12pm – 9pm</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium">Friday</span>
                <span className="text-brand-primary font-semibold">12pm – 11pm</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium">Saturday</span>
                <span className="text-brand-primary font-semibold">10am – 11pm</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="font-medium">Sunday</span>
                <span className="text-brand-primary font-semibold">10am – 9pm</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
