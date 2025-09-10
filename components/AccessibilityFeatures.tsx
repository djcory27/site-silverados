'use client';

import { useState } from 'react';

interface AccessibilityFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'mobility' | 'sensory' | 'cognitive' | 'general';
  details: string[];
}

const accessibilityFeatures: AccessibilityFeature[] = [
  {
    id: 'wheelchair-access',
    title: 'Wheelchair Accessible',
    description: 'Full wheelchair accessibility throughout the park',
    icon: '♿',
    category: 'mobility',
    details: [
      'Ramped entrances to all buildings',
      'Wide paved pathways (minimum 4ft width)',
      'Accessible restrooms with grab bars',
      'Reserved accessible parking spots',
      'Wheelchair rentals available'
    ]
  },
  {
    id: 'service-animals',
    title: 'Service Animal Friendly',
    description: 'Welcome environment for service animals',
    icon: '🐕‍🦺',
    category: 'general',
    details: [
      'Service animals allowed in all areas',
      'Designated relief areas for animals',
      'Water stations for service animals',
      'Staff trained in service animal protocols',
      'Service animal identification respected'
    ]
  },
  {
    id: 'hearing-access',
    title: 'Hearing Accessibility',
    description: 'Accommodations for hearing-impaired visitors',
    icon: '🦻',
    category: 'sensory',
    details: [
      'Hearing loop system at main stage',
      'Visual alerts for emergency announcements',
      'ASL interpreters available for events',
      'Captioned information displays',
      'Quiet zones available'
    ]
  },
  {
    id: 'visual-access',
    title: 'Visual Accessibility',
    description: 'Features for visually impaired visitors',
    icon: '👁️',
    category: 'sensory',
    details: [
      'Braille signage throughout the park',
      'Tactile paving on pathways',
      'Audio descriptions for key areas',
      'High contrast signage and markings',
      'Guide dog relief areas clearly marked'
    ]
  },
  {
    id: 'cognitive-access',
    title: 'Cognitive Accessibility',
    description: 'Support for visitors with cognitive disabilities',
    icon: '🧠',
    category: 'cognitive',
    details: [
      'Clear, simple signage and directions',
      'Quiet spaces available for breaks',
      'Staff trained in cognitive accessibility',
      'Visual schedules for events',
      'Sensory-friendly event options'
    ]
  },
  {
    id: 'family-access',
    title: 'Family Accessibility',
    description: 'Features designed for families with special needs',
    icon: '👨‍👩‍👧‍👦',
    category: 'general',
    details: [
      'Changing stations in accessible restrooms',
      'Nursing rooms with accessibility features',
      'Sensory play areas for children',
      'Allergen-free zones available',
      'Medical emergency protocols'
    ]
  }
];

export default function AccessibilityFeatures() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const categories = [
    { key: 'all', label: 'All Features', count: accessibilityFeatures.length },
    { key: 'mobility', label: 'Mobility', count: accessibilityFeatures.filter(f => f.category === 'mobility').length },
    { key: 'sensory', label: 'Sensory', count: accessibilityFeatures.filter(f => f.category === 'sensory').length },
    { key: 'cognitive', label: 'Cognitive', count: accessibilityFeatures.filter(f => f.category === 'cognitive').length },
    { key: 'general', label: 'General', count: accessibilityFeatures.filter(f => f.category === 'general').length }
  ];

  const filteredFeatures = selectedCategory === 'all'
    ? accessibilityFeatures
    : accessibilityFeatures.filter(feature => feature.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'mobility': return 'from-blue-500 to-cyan-600';
      case 'sensory': return 'from-purple-500 to-pink-600';
      case 'cognitive': return 'from-green-500 to-emerald-600';
      case 'general': return 'from-orange-500 to-red-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6">
            <span className="text-blue-800 font-semibold text-sm tracking-wide uppercase">Inclusive Access</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            ACCESSIBILITY <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">COMMITMENT</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Silverados is committed to providing an inclusive environment where everyone can enjoy live music, cold brews, and happy pups.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === key
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(feature.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className="relative mb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${getCategoryColor(feature.category)} text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Expandable Details */}
              <div className="space-y-2">
                {expandedFeature === feature.id ? (
                  <div className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                    <button
                      onClick={() => setExpandedFeature(null)}
                      className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      Show Less
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setExpandedFeature(feature.id)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 text-sm font-medium group-hover:scale-105"
                  >
                    Learn More
                  </button>
                )}
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 rounded-lg text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(feature.category)} capitalize`}>
                  {feature.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-3xl">
                📞
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Need Assistance?</h3>
                <p className="text-gray-600">We're here to help make your visit comfortable</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="tel:+18281234567"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-medium"
              >
                📞 Call Accessibility Line
              </a>
              <a
                href="mailto:accessibility@silverados.com"
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-medium"
              >
                ✉️ Email Us
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <p>Advance notice for special accommodations is appreciated.</p>
              <p className="mt-1">Service animals are welcome in all areas of the park.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
