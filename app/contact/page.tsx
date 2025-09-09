"use client";

import Link from "next/link";
import { Section } from "../../components/Section";

export default function Contact() {
  return (
    <main className="min-h-screen relative">
      {/* Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us - Silverados Dog Park",
            "description": "Get in touch with Silverados Dog Park for reservations, events, and inquiries",
            "url": "https://silveradosdogpark.com/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Silverados Dog Park",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2898 US Highway 70",
                "addressLocality": "Black Mountain",
                "addressRegion": "NC",
                "postalCode": "28711",
                "addressCountry": "US"
              },
              "telephone": "+1-828-555-0123",
              "email": "info@silveradosdogpark.com",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.6177,
                "longitude": -82.3212
              }
            }
          })
        }}
      />

      <Section title="CONTACT US" subtitle="Get in touch with the Silverados team">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-black">Visit Us</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-start gap-3">
                    <span className="text-brand-primary font-bold">📍</span>
                    <span>2898 US Highway 70<br />Black Mountain, NC 28711</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-brand-primary font-bold">📞</span>
                    <span>(828) 555-0123</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-brand-primary font-bold">✉️</span>
                    <span>info@silveradosdogpark.com</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-black">Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Mon–Thu:</strong> 12pm – 9pm</p>
                  <p><strong>Friday:</strong> 12pm – 11pm</p>
                  <p><strong>Saturday:</strong> 10am – 11pm</p>
                  <p><strong>Sunday:</strong> 10am – 9pm</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-black">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors" aria-label="Facebook">
                    <span className="text-2xl">📘</span>
                  </a>
                  <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors" aria-label="Instagram">
                    <span className="text-2xl">📷</span>
                  </a>
                  <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors" aria-label="Twitter">
                    <span className="text-2xl">🐦</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-black">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="events">Event Information</option>
                    <option value="memberships">Membership Questions</option>
                    <option value="reservations">Reservations</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 focus-ring-advanced"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-black text-center">Find Us</h3>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <iframe
                title="Map to Silverados Dog Park"
                className="h-96 w-full rounded-lg"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=2898+US+Highway+70,Black+Mountain,NC&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
