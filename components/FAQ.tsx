'use client';

import { useState } from 'react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What are your operating hours?',
    answer: 'We\'re open 7 days a week! Monday-Thursday: 12pm-9pm, Friday: 12pm-11pm, Saturday: 10am-11pm, Sunday: 10am-9pm. Last entry is 30 minutes before closing.',
    category: 'Hours & Access'
  },
  {
    id: '2',
    question: 'Do you offer memberships?',
    answer: 'Yes! We offer annual and seasonal memberships with exclusive benefits including priority event access, discounted merchandise, and member-only perks. Contact us for current pricing.',
    category: 'Membership'
  },
  {
    id: '3',
    question: 'Are dogs allowed off-leash?',
    answer: 'Absolutely! We have designated off-leash areas for different dog sizes. All dogs must be leashed when entering/leaving the park and when moving between areas. Leash laws apply.',
    category: 'Dogs & Safety'
  },
  {
    id: '4',
    question: 'What amenities do you provide?',
    answer: 'We offer filtered mountain water stations, high-speed WiFi, premium audio systems, complimentary supplies (poop bags, lint rollers), comfortable seating, weather protection, sunscreen stations, professional wash stations, premium dog toys, and concierge service.',
    category: 'Amenities'
  },
  {
    id: '5',
    question: 'Can I bring food and drinks?',
    answer: 'Outside food and drinks are welcome! We also have food trucks and a full bar with local beers, cocktails, and non-alcoholic options. Our snack bar offers quick bites and treats.',
    category: 'Food & Drink'
  },
  {
    id: '6',
    question: 'Do you host events?',
    answer: 'Yes! We host live music events, dog-friendly gatherings, seasonal celebrations, and community meetups. Check our events calendar for upcoming activities and get notified about new events.',
    category: 'Events'
  },
  {
    id: '7',
    question: 'What\'s your vaccination policy?',
    answer: 'All dogs must be up-to-date on their vaccinations including rabies, DHPP, and Bordetella. We recommend bringing your vaccination records. Puppies under 16 weeks are not permitted.',
    category: 'Dogs & Safety'
  },
  {
    id: '8',
    question: 'Do you have parking?',
    answer: 'Yes, we offer free parking with plenty of spaces. We also have designated areas for RVs and trailers. Our location at 2898 US Highway 70 in Black Mountain is easily accessible.',
    category: 'Hours & Access'
  },
  {
    id: '9',
    question: 'Are there age restrictions?',
    answer: 'Children under 12 must be accompanied by an adult. We welcome families and have family-friendly amenities including shaded play areas and comfortable seating.',
    category: 'Hours & Access'
  },
  {
    id: '10',
    question: 'What should I bring?',
    answer: 'Bring water, waste bags, and any special toys or treats for your dog. We provide complimentary supplies, but it\'s always good to have extras. Don\'t forget sunscreen and insect repellent!',
    category: 'Amenities'
  }
];

const categories = ['All', 'Hours & Access', 'Membership', 'Dogs & Safety', 'Amenities', 'Food & Drink', 'Events'];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filteredFaqs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-6">
            <span className="text-green-800 font-semibold text-sm tracking-wide uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            FREQUENTLY ASKED <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">QUESTIONS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers! Here are the most common questions about Silverados Dog Park.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                    {faq.category}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openItems.has(faq.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {openItems.has(faq.id) && (
                <div className="px-8 pb-6 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6">
              Can't find what you're looking for? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18281234567"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us: (828) 123-4567
              </a>
              <a
                href="mailto:info@silveradosdogpark.com"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: '500+', label: 'Happy Dogs Daily' },
            { number: '50+', label: 'Events Per Year' },
            { number: '24/7', label: 'Support Available' },
            { number: '5★', label: 'Average Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
