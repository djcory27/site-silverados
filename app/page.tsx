"use client";

import Link from "next/link";
import { Section } from "../components/Section";
import events from "../data/events.json";
import EventCard from "../components/EventCard";
import ParticleBackground from "../components/ParticleBackground";
import CursorGlow from "../components/CursorGlow";
import AdvancedSearch from "../components/AdvancedSearch";
import { NotificationManager } from "../components/NotificationSystem";
import AdvancedLoading, { SkeletonCard } from "../components/AdvancedLoading";
import { useState, useEffect, useRef } from "react";

// Extend window interface for notification system
declare global {
  interface Window {
    showNotification?: (notification: {
      type: 'success' | 'error' | 'warning' | 'info';
      title: string;
      message: string;
      duration?: number;
    }) => void;
  }
}

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
    <main className="min-h-screen relative">
      {/* Advanced Background Effects */}
      <ParticleBackground />
      <CursorGlow />
      <NotificationManager />

      {/* Structured Data for Events */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Upcoming Events at Silverados Dog Park",
            "description": "Live music events and community gatherings at Silverados Dog Park",
            "numberOfItems": upcomingEvents.length,
            "itemListElement": upcomingEvents.map((event: Event, index: number) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "MusicEvent",
                "@id": `https://silveradosdogpark.com/events#${event.id}`,
                "name": event.title,
                "description": event.blurb,
                "startDate": `2025-${event.date.split(', ')[1].split(' ')[1].padStart(2, '0')}-${event.date.split(', ')[1].split(' ')[0].padStart(2, '0')}T${event.time ? event.time.replace(' ', '').toLowerCase().replace('pm', ':00').replace('am', ':00') : '19:00:00'}`,
                "endDate": `2025-${event.date.split(', ')[1].split(' ')[1].padStart(2, '0')}-${event.date.split(', ')[1].split(' ')[0].padStart(2, '0')}-${event.date.split(', ')[1].split(' ')[1].padStart(2, '0')}T${event.time ? (parseInt(event.time.split(':')[0]) + 2) + ':00:00' : '21:00:00'}`,
                "location": {
                  "@type": "Place",
                  "name": "Silverados Dog Park",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2898 US Highway 70",
                    "addressLocality": "Black Mountain",
                    "addressRegion": "NC",
                    "postalCode": "28711",
                    "addressCountry": "US"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 35.6177,
                    "longitude": -82.3212
                  }
                },
                "organizer": {
                  "@type": "Organization",
                  "name": "Silverados Dog Park",
                  "url": "https://silveradosdogpark.com"
                },
                "offers": {
                  "@type": "Offer",
                  "price": event.price ? event.price.replace('$', '') : "0",
                  "priceCurrency": "USD",
                  "url": `https://silveradosdogpark.com${event.ticketUrl}`,
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2025-01-01"
                },
                "image": event.artistImage ? `https://silveradosdogpark.com${event.artistImage}` : "https://silveradosdogpark.com/media/dogs-at-play.jpg",
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "eventStatus": "https://schema.org/EventScheduled"
              }
            }))
          })
        }}
      />

      {/* Search Bar - Fixed Position */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-md px-4">
        <AdvancedSearch />
      </div>
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
        >
          <img
            src="/media/dogs-at-play.jpg"
            alt="Happy dogs playing at Silverados Dog Park with mountain views in the background"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

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
              className="text-6xl md:text-8xl font-black text-black mb-8 leading-tight tracking-tight"
            >
              A NEW BREED OF<br />
              <span className="text-brand-primary">DOG PARK</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl leading-relaxed font-light">
              Where dogs, live music, and cold drinks meet in perfect harmony. Family-friendly dog park with live entertainment in Black Mountain, NC.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a
                href="#attractions"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 focus-ring-advanced"
                aria-label="Explore our park attractions"
                onClick={() => {
                  // Add micro-interaction
                  if (window.showNotification) {
                    window.showNotification({
                      type: 'info',
                      title: 'Welcome!',
                      message: 'Discover our amazing dog park attractions below.',
                      duration: 3000
                    });
                  }
                }}
              >
                <span>Explore Our Park</span>
                <svg className="w-5 h-5 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 focus-ring-advanced"
              >
                <span>View Events</span>
                <svg className="w-4 h-4 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        title="WHAT WE DO BEST"
        subtitle="From our canine-engineered grass, cooldown zones, and curated array of dog-centric amenities, we live by the idea that our dogs deserve the world - so we built them one."
      >
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "CLUB",
              desc: "Off-leash play areas, small & large dog zones, wash stations and premium amenities for your canine companion.",
              icon: "🏠"
            },
            {
              title: "F&B",
              desc: "Local beer, cocktails, craft coffee, and dog-friendly snacks. A full bar experience for humans too.",
              icon: "🍻"
            },
            {
              title: "SAFETY",
              desc: "Trained staff on duty at all times to help facilitate safe play between dogs and ensure a positive experience.",
              icon: "🛡️"
            },
            {
              title: "EVENTS",
              desc: "Live music performances, community gatherings, and special events that bring the community together.",
              icon: "🎵"
            }
          ].map((feature, index) => (
            <article
              key={feature.title}
              className="group text-center p-8 hover:bg-gray-50 transition-all duration-300 rounded-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-brand-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* AMENITIES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">IT'S THE LITTLE THINGS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe the best experiences come from paying attention to every detail
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              "Complimentary Filtered Water",
              "Private WiFi Throughout",
              "Surround Sound Speakers",
              "Complimentary Poop Bags",
              "Canine Lint Rollers",
              "Blankets & Towels Available",
              "Routine Cleaning Services",
              "Concierge Greeted Check-in",
              "Umbrellas, Sail Shades, & Heaters",
              "Human & Canine Sunscreen",
              "Complimentary Dog Toys",
              "Covered Seating Areas"
            ].map((amenity, index) => (
              <div
                key={amenity}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <Section title="UPCOMING EVENTS" subtitle="Our events bring the community together, a place where two- and four-legged friends can connect, celebrate, and share the joy of Silverados.">
        <div className="grid gap-8 md:grid-cols-3">
          {upcomingEvents.map((event: Event) => (
            <EventCard key={event.id} e={event} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 focus-ring-advanced"
            aria-label="View full events calendar"
          >
            <span>View Full Calendar</span>
            <svg className="w-4 h-4 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* MAP & HOURS */}
      <Section title="PLAN YOUR VISIT" subtitle="Find us easily and check our operating hours.">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <iframe
              title="Map to Silverados Dog Park"
              className="h-80 w-full rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=2898+US+Highway+70,Black+Mountain,NC&output=embed">
            </iframe>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h4 className="text-3xl font-bold mb-8 text-black">Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-lg">Mon–Thu</span>
                <span className="text-brand-primary font-bold text-lg">12pm – 9pm</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-lg">Friday</span>
                <span className="text-brand-primary font-bold text-lg">12pm – 11pm</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-lg">Saturday</span>
                <span className="text-brand-primary font-bold text-lg">10am – 11pm</span>
              </li>
              <li className="flex justify-between items-center py-3">
                <span className="font-semibold text-lg">Sunday</span>
                <span className="text-brand-primary font-bold text-lg">10am – 9pm</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
