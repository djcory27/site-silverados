'use client';

import { useState } from 'react';

interface ParkingSpot {
  id: string;
  type: 'standard' | 'accessible' | 'premium';
  available: boolean;
  location: string;
}

const parkingSpots: ParkingSpot[] = [
  { id: 'A1', type: 'premium', available: true, location: 'Near Main Entrance' },
  { id: 'A2', type: 'premium', available: false, location: 'Near Main Entrance' },
  { id: 'B1', type: 'standard', available: true, location: 'East Side' },
  { id: 'B2', type: 'standard', available: true, location: 'East Side' },
  { id: 'C1', type: 'accessible', available: true, location: 'West Side' },
  { id: 'C2', type: 'accessible', available: false, location: 'West Side' },
  { id: 'D1', type: 'standard', available: true, location: 'North Lot' },
  { id: 'D2', type: 'standard', available: false, location: 'North Lot' },
];

export default function ParkingInfo() {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredSpots = selectedType === 'all'
    ? parkingSpots
    : parkingSpots.filter(spot => spot.type === selectedType);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'premium': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'accessible': return 'bg-gradient-to-r from-blue-500 to-cyan-600';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'premium': return '⭐';
      case 'accessible': return '♿';
      default: return '🚗';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full mb-6">
            <span className="text-slate-800 font-semibold text-sm tracking-wide uppercase">Parking Information</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            PARKING <span className="bg-gradient-to-r from-slate-600 via-gray-600 to-slate-600 bg-clip-text text-transparent">GUIDE</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find the perfect parking spot for your visit. Real-time availability and accessibility options.
          </p>
        </div>

        {/* Parking Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {parkingSpots.filter(s => s.available).length}
            </div>
            <div className="text-gray-600 font-medium">Available Spots</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {parkingSpots.filter(s => s.type === 'accessible').length}
            </div>
            <div className="text-gray-600 font-medium">Accessible Spots</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {parkingSpots.filter(s => s.type === 'premium').length}
            </div>
            <div className="text-gray-600 font-medium">Premium Spots</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { key: 'all', label: 'All Spots', count: parkingSpots.length },
            { key: 'standard', label: 'Standard', count: parkingSpots.filter(s => s.type === 'standard').length },
            { key: 'premium', label: 'Premium', count: parkingSpots.filter(s => s.type === 'premium').length },
            { key: 'accessible', label: 'Accessible', count: parkingSpots.filter(s => s.type === 'accessible').length }
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setSelectedType(key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedType === key
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>

        {/* Parking Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {filteredSpots.map((spot) => (
            <div
              key={spot.id}
              className={`relative bg-white rounded-xl p-4 shadow-md border transition-all duration-300 hover:shadow-lg ${
                spot.available
                  ? 'border-green-200 hover:border-green-300'
                  : 'border-red-200 hover:border-red-300'
              }`}
            >
              {/* Status Indicator */}
              <div className="absolute top-2 right-2">
                <div className={`w-3 h-3 rounded-full ${
                  spot.available ? 'bg-green-500' : 'bg-red-500'
                }`} />
              </div>

              {/* Spot Type Badge */}
              <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium text-white mb-2 ${getTypeColor(spot.type)}`}>
                <span>{getTypeIcon(spot.type)}</span>
                <span className="capitalize">{spot.type}</span>
              </div>

              {/* Spot ID */}
              <div className="font-bold text-lg text-gray-900 mb-1">
                Spot {spot.id}
              </div>

              {/* Location */}
              <div className="text-sm text-gray-600 mb-3">
                {spot.location}
              </div>

              {/* Availability */}
              <div className={`text-sm font-medium ${
                spot.available ? 'text-green-600' : 'text-red-600'
              }`}>
                {spot.available ? 'Available' : 'Occupied'}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">💰</span>
              Parking Rates
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Standard Parking</span>
                <span className="font-bold text-gray-900">Free</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Premium Parking</span>
                <span className="font-bold text-gray-900">$5/day</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Accessible Parking</span>
                <span className="font-bold text-gray-900">Free</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🚗</span>
              Parking Tips
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Arrive early for best spot selection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Premium spots are closest to entrance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>All spots are monitored 24/7</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Electric vehicle charging available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
