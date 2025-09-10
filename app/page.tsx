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
import PhotoGallery from "../components/PhotoGallery";
import Testimonials from "../components/Testimonials";
import WeatherWidget from "../components/WeatherWidget";
import NewsletterSignup from "../components/NewsletterSignup";
import FAQ from "../components/FAQ";
import SocialMediaFeed from "../components/SocialMediaFeed";
import QuickActions from "../components/QuickActions";
import ParkMap from "../components/ParkMap";
import ParkingInfo from "../components/ParkingInfo";
import AccessibilityFeatures from "../components/AccessibilityFeatures";
import BreedCompatibility from "../components/BreedCompatibility";
import DogCareTips from "../components/DogCareTips";
import LocalAreaGuide from "../components/LocalAreaGuide";
import MembershipBenefits from "../components/MembershipBenefits";
import DogNameGenerator from "../components/DogNameGenerator";
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
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20 mb-4">
                🏔️ Black Mountain, NC
              </span>
            </div>
            <h1
              id="hero-title"
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight drop-shadow-2xl"
            >
              A NEW BREED OF<br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                DOG PARK
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed font-light drop-shadow-lg">
              <span className="text-yellow-300 font-semibold text-xl md:text-2xl lg:text-3xl block mb-4">🎵 Live Music • 🥤 Cold Brews • 🐕 Happy Pups</span>
              Where premium dog-friendly entertainment meets mountain paradise. Experience the perfect blend of live music, craft beverages, and joyful canine companions in the heart of the Blue Ridge Mountains.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a
                href="#attractions"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl focus-ring-advanced shadow-xl"
                aria-label="Explore our premium park attractions"
                onClick={() => {
                  // Add micro-interaction
                  if (window.showNotification) {
                    window.showNotification({
                      type: 'success',
                      title: 'Welcome to Silverados!',
                      message: 'Discover our world-class dog park amenities below.',
                      duration: 4000
                    });
                  }
                }}
              >
                <span>Explore Our Park</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <Link
                href="/events"
                className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white/80 text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl focus-ring-advanced backdrop-blur-sm"
              >
                <span>View Live Events</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">●</span>
                <span>Fully Fenced & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">●</span>
                <span>Professional Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">●</span>
                <span>Premium Amenities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <QuickActions />

      {/* ATTRACTIONS SECTION */}
      <Section
        id="attractions"
        title="EXCEPTIONAL EXPERIENCES"
        subtitle="From our premium grass surfaces and climate-controlled comfort zones to our curated selection of dog-centric amenities, we believe our dogs deserve nothing but the best - so we've created their perfect world."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "PREMIUM FACILITIES",
              desc: "State-of-the-art off-leash zones, separate areas for small and large breeds, professional grooming stations, and premium amenities designed specifically for canine comfort.",
              icon: "�️",
              color: "from-blue-500 to-indigo-600"
            },
            {
              title: "CULINARY EXCELLENCE",
              desc: "Craft beer selection, artisanal cocktails, premium coffee, and dog-friendly gourmet snacks. A full-service bar experience for both humans and their discerning canine companions.",
              icon: "�️",
              color: "from-amber-500 to-orange-600"
            },
            {
              title: "UNCOMPROMISING SAFETY",
              desc: "Certified professional staff, 24/7 security monitoring, emergency medical facilities, and comprehensive safety protocols to ensure every visit is worry-free and enjoyable.",
              icon: "🛡️",
              color: "from-green-500 to-emerald-600"
            },
            {
              title: "LIVE ENTERTAINMENT",
              desc: "Curated live music performances, community events, seasonal celebrations, and special gatherings that create unforgettable experiences for the entire family.",
              icon: "�",
              color: "from-purple-500 to-pink-600"
            }
          ].map((feature, index) => (
            <article
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon with enhanced styling */}
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div className={`absolute -inset-1 bg-gradient-to-br ${feature.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10`} />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.desc}
              </p>

              {/* Subtle accent line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </article>
          ))}
        </div>
      </Section>

      {/* AMENITIES SECTION */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
              <span className="text-blue-800 font-semibold text-sm tracking-wide uppercase">Premium Experience</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              ATTENTION TO DETAIL
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every element of Silverados has been thoughtfully designed to create an exceptional experience for both you and your canine companion.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {[
              { icon: "💧", title: "Filtered Mountain Water", desc: "Complimentary filtered water stations throughout the park" },
              { icon: "📶", title: "High-Speed WiFi", desc: "Complimentary wireless internet coverage across all areas" },
              { icon: "🔊", title: "Premium Audio System", desc: "Surround sound speakers for optimal music experience" },
              { icon: "🗂️", title: "Complimentary Supplies", desc: "Free poop bags, lint rollers, and waste disposal stations" },
              { icon: "🛋️", title: "Comfortable Seating", desc: "Weather-protected seating areas with premium furnishings" },
              { icon: "☂️", title: "Weather Protection", desc: "Umbrellas, sail shades, and heaters for year-round comfort" },
              { icon: "🧴", title: "Sunscreen Stations", desc: "Complimentary sunscreen for both humans and dogs" },
              { icon: "🚿", title: "Professional Wash Stations", desc: "State-of-the-art cleaning facilities for your dog" },
              { icon: "🎾", title: "Premium Dog Toys", desc: "Curated selection of high-quality toys and accessories" },
              { icon: "👋", title: "Personalized Service", desc: "Concierge-level service with dedicated staff assistance" },
              { icon: "🌿", title: "Landscaped Grounds", desc: "Professionally maintained gardens and natural areas" },
              { icon: "🏃", title: "Exercise Equipment", desc: "Agility courses and exercise stations for active dogs" }
            ].map((amenity, index) => (
              <div
                key={amenity.title}
                className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-xl shadow-sm">
                      {amenity.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {amenity.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle accent border */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
              <span className="text-purple-800 font-semibold text-sm tracking-wide uppercase">Community Events</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              UPCOMING <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">EVENTS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join our vibrant community gatherings where music, dogs, and good times come together. From live performances to special celebrations, there's always something exciting happening at Silverados.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
            {upcomingEvents.map((event: Event) => (
              <EventCard key={event.id} e={event} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4">
              <Link
                href="/events"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                aria-label="View full events calendar"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Button content */}
                <span className="relative z-10">View Full Calendar</span>
                <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-2 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>

                {/* Shine effect */}
                <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>

              <p className="text-gray-500 text-sm font-medium">
                Discover all upcoming events and book your tickets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PARK MAP */}
      <ParkMap />

      {/* PARKING INFORMATION */}
      <ParkingInfo />

      {/* ACCESSIBILITY FEATURES */}
      <AccessibilityFeatures />

      {/* BREED COMPATIBILITY CHECKER */}
      <BreedCompatibility />

      {/* DOG CARE TIPS */}
      <DogCareTips />

      {/* PHOTO GALLERY */}
      <PhotoGallery />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FAQ SECTION */}
      <FAQ />

      {/* LOCAL AREA GUIDE */}
      <LocalAreaGuide />

      {/* MEMBERSHIP BENEFITS */}
      <MembershipBenefits />

      {/* SOCIAL MEDIA FEED */}
      <SocialMediaFeed />

      {/* NEWSLETTER SIGNUP */}
      <NewsletterSignup variant="inline" />

      {/* WEATHER WIDGET - Floating */}
      <div className="fixed bottom-6 right-6 z-50">
        <WeatherWidget />
      </div>

      {/* DOG NAME GENERATOR */}
      <DogNameGenerator />

      {/* MAP & HOURS */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-6">
              <span className="text-cyan-800 font-semibold text-sm tracking-wide uppercase">Visit Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              PLAN YOUR <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">VISIT</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Located in the heart of Black Mountain, Silverados offers convenient access and flexible hours to accommodate your schedule. Find us easily and start planning your perfect day.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 max-w-7xl mx-auto">
            {/* Map Section */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Map header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Find Us Here</h3>
                    <p className="text-gray-600">2898 US Highway 70, Black Mountain, NC</p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <iframe
                    title="Map to Silverados Dog Park"
                    className="h-80 w-full rounded-2xl"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=2898+US+Highway+70,Black+Mountain,NC&output=embed"
                  />
                  {/* Map overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Hours Section */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                {/* Hours header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Operating Hours</h3>
                    <p className="text-gray-600">Open 7 days a week</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { days: "Monday – Thursday", hours: "12:00 PM – 9:00 PM", special: false },
                    { days: "Friday", hours: "12:00 PM – 11:00 PM", special: true },
                    { days: "Saturday", hours: "10:00 AM – 11:00 PM", special: true },
                    { days: "Sunday", hours: "10:00 AM – 9:00 PM", special: false }
                  ].map((schedule, index) => (
                    <div
                      key={schedule.days}
                      className="group/item relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Subtle background animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-2xl" />

                      <div className="relative z-10">
                        <span className="font-bold text-lg text-gray-900 group-hover/item:text-cyan-900 transition-colors duration-300">
                          {schedule.days}
                        </span>
                        {schedule.special && (
                          <div className="inline-block ml-3 px-2 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full">
                            <span className="text-xs font-semibold text-cyan-800">Extended Hours</span>
                          </div>
                        )}
                      </div>

                      <span className="relative z-10 text-lg font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover/item:from-cyan-700 group-hover/item:to-blue-700 transition-all duration-300">
                        {schedule.hours}
                      </span>

                      {/* Accent line */}
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left rounded-bl-2xl" />
                    </div>
                  ))}
                </div>

                {/* Additional info */}
                <div className="mt-8 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Last Entry</p>
                      <p className="text-sm text-gray-600">30 minutes before closing time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
