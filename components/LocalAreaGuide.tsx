'use client';

import { useState } from 'react';

interface LocalAttraction {
  id: string;
  name: string;
  type: 'restaurant' | 'hotel' | 'shopping' | 'park' | 'vet' | 'grooming' | 'other';
  description: string;
  address: string;
  distance: string;
  rating: number;
  priceRange: string;
  phone?: string;
  website?: string;
  features: string[];
  image: string;
}

const localAttractions: LocalAttraction[] = [
  {
    id: 'mountain-brewery',
    name: 'Mountain View Brewery',
    type: 'restaurant',
    description: 'Craft beer and pub fare with mountain views. Dog-friendly outdoor seating available.',
    address: '123 Main St, Black Mountain, NC',
    distance: '0.5 miles',
    rating: 4.5,
    priceRange: '$$',
    phone: '(828) 555-0123',
    website: 'mountainbrewery.com',
    features: ['Dog-friendly patio', 'Craft beer selection', 'Mountain views', 'Live music'],
    image: '/media/brewery.jpg'
  },
  {
    id: 'blue-ridge-inn',
    name: 'Blue Ridge Mountain Inn',
    type: 'hotel',
    description: 'Charming boutique hotel with pet-friendly rooms and mountain views.',
    address: '456 Ridge Rd, Black Mountain, NC',
    distance: '1.2 miles',
    rating: 4.3,
    priceRange: '$$$',
    phone: '(828) 555-0456',
    website: 'blueridgeinn.com',
    features: ['Pet-friendly rooms', 'Mountain views', 'Free breakfast', 'Hiking trails nearby'],
    image: '/media/hotel.jpg'
  },
  {
    id: 'mountain-trails-park',
    name: 'Mountain Trails State Park',
    type: 'park',
    description: 'Extensive hiking trails and scenic overlooks perfect for dogs and their owners.',
    address: '789 Trail Way, Black Mountain, NC',
    distance: '2.1 miles',
    rating: 4.7,
    priceRange: 'Free',
    phone: '(828) 555-0789',
    website: 'mountaintrailsnc.com',
    features: ['Hiking trails', 'Scenic overlooks', 'Picnic areas', 'Dog-friendly paths'],
    image: '/media/trails.jpg'
  },
  {
    id: 'paws-grooming',
    name: 'Paws & Play Grooming',
    type: 'grooming',
    description: 'Professional grooming services with a focus on comfort and care for your furry friend.',
    address: '321 Pet St, Black Mountain, NC',
    distance: '0.8 miles',
    rating: 4.6,
    priceRange: '$$',
    phone: '(828) 555-0321',
    website: 'pawsgrooming.com',
    features: ['Professional grooming', 'Nail trimming', 'Bathing services', 'Pet supplies'],
    image: '/media/grooming.jpg'
  },
  {
    id: 'ridge-vet-clinic',
    name: 'Blue Ridge Veterinary Clinic',
    type: 'vet',
    description: 'Full-service veterinary care with emergency services and wellness programs.',
    address: '654 Health Ave, Black Mountain, NC',
    distance: '1.5 miles',
    rating: 4.8,
    priceRange: '$$$',
    phone: '(828) 555-0654',
    website: 'blueridgevet.com',
    features: ['Emergency care', 'Wellness exams', 'Vaccinations', 'Surgery services'],
    image: '/media/vet.jpg'
  },
  {
    id: 'mountain-market',
    name: 'Mountain View Market',
    type: 'shopping',
    description: 'Local market with fresh produce, artisanal goods, and pet supplies.',
    address: '987 Market Pl, Black Mountain, NC',
    distance: '0.3 miles',
    rating: 4.2,
    priceRange: '$',
    phone: '(828) 555-0987',
    website: 'mountainmarket.com',
    features: ['Fresh produce', 'Pet supplies', 'Local crafts', 'Organic options'],
    image: '/media/market.jpg'
  }
];

export default function LocalAreaGuide() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedAttraction, setSelectedAttraction] = useState<LocalAttraction | null>(null);

  const types = [
    { key: 'all', label: 'All Places', count: localAttractions.length },
    { key: 'restaurant', label: 'Restaurants', count: localAttractions.filter(a => a.type === 'restaurant').length },
    { key: 'hotel', label: 'Hotels', count: localAttractions.filter(a => a.type === 'hotel').length },
    { key: 'park', label: 'Parks & Nature', count: localAttractions.filter(a => a.type === 'park').length },
    { key: 'vet', label: 'Veterinary', count: localAttractions.filter(a => a.type === 'vet').length },
    { key: 'grooming', label: 'Pet Services', count: localAttractions.filter(a => a.type === 'grooming').length },
    { key: 'shopping', label: 'Shopping', count: localAttractions.filter(a => a.type === 'shopping').length }
  ];

  const filteredAttractions = selectedType === 'all'
    ? localAttractions
    : localAttractions.filter(attraction => attraction.type === selectedType);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'restaurant': return 'from-orange-500 to-red-600';
      case 'hotel': return 'from-blue-500 to-indigo-600';
      case 'park': return 'from-green-500 to-emerald-600';
      case 'vet': return 'from-purple-500 to-pink-600';
      case 'grooming': return 'from-pink-500 to-rose-600';
      case 'shopping': return 'from-yellow-500 to-orange-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'restaurant': return '🍽️';
      case 'hotel': return '🏨';
      case 'park': return '🏞️';
      case 'vet': return '⚕️';
      case 'grooming': return '✂️';
      case 'shopping': return '🛍️';
      default: return '📍';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full mb-6">
            <span className="text-emerald-800 font-semibold text-sm tracking-wide uppercase">Local Guide</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            EXPLORE <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">BLACK MOUNTAIN</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the best of Black Mountain! From dog-friendly restaurants to pet services, find everything you need for the perfect visit to our mountain community.
          </p>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {types.map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setSelectedType(key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedType === key
                  ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredAttractions.map((attraction, index) => (
            <div
              key={attraction.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedAttraction(attraction)}
            >
              {/* Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${getTypeColor(attraction.type)} flex items-center justify-center text-white text-4xl`}>
                {getTypeIcon(attraction.type)}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {attraction.name}
                  </h3>
                  <span className={`px-2 py-1 rounded-lg text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(attraction.type)} capitalize`}>
                    {attraction.type}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {attraction.description}
                </p>

                {/* Rating and Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {renderStars(attraction.rating)}
                    <span className="text-sm text-gray-600 ml-2">{attraction.rating}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{attraction.priceRange}</span>
                </div>

                {/* Address and Distance */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-lg">📍</span>
                    <span>{attraction.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-lg">📏</span>
                    <span>{attraction.distance} from Silverados</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {attraction.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                  {attraction.features.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{attraction.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button className={`w-full px-4 py-2 bg-gradient-to-r ${getTypeColor(attraction.type)} text-white rounded-lg hover:opacity-90 transition-all duration-300 text-sm font-medium group-hover:scale-105`}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Dog-Friendly Spots', value: localAttractions.filter(a => a.features.some(f => f.toLowerCase().includes('dog'))).length, icon: '🐕' },
            { label: 'Within 1 Mile', value: localAttractions.filter(a => parseFloat(a.distance) <= 1).length, icon: '📍' },
            { label: 'Average Rating', value: '4.5★', icon: '⭐' },
            { label: 'Pet Services', value: localAttractions.filter(a => ['vet', 'grooming'].includes(a.type)).length, icon: '⚕️' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Modal for Attraction Details */}
        {selectedAttraction && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedAttraction.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(selectedAttraction.type)} capitalize`}>
                        {selectedAttraction.type}
                      </span>
                      <span>{selectedAttraction.distance}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedAttraction(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Rating and Price */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    {renderStars(selectedAttraction.rating)}
                    <span className="text-lg font-medium text-gray-900 ml-2">{selectedAttraction.rating}</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{selectedAttraction.priceRange}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedAttraction.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Features & Amenities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedAttraction.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold text-gray-900 mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📍</span>
                      <span className="text-gray-600">{selectedAttraction.address}</span>
                    </div>
                    {selectedAttraction.phone && (
                      <div className="flex items-center gap-2">
                        <span className="text-lg">📞</span>
                        <a href={`tel:${selectedAttraction.phone}`} className="text-indigo-600 hover:text-indigo-800">
                          {selectedAttraction.phone}
                        </a>
                      </div>
                    )}
                    {selectedAttraction.website && (
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🌐</span>
                        <a href={`https://${selectedAttraction.website}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
                          {selectedAttraction.website}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Close Button */}
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setSelectedAttraction(null)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
