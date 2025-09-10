'use client';

import { useState } from 'react';

interface ParkArea {
  id: string;
  name: string;
  description: string;
  features: string[];
  capacity: string;
  bestFor: string;
  icon: string;
  color: string;
  position: { x: number; y: number };
}

const parkAreas: ParkArea[] = [
  {
    id: 'main-stage',
    name: 'Main Stage',
    description: 'Our premier outdoor concert venue featuring live music performances',
    features: ['Sound System', 'Stage Lighting', 'Seating Area', 'Bar Service'],
    capacity: '500+ people',
    bestFor: 'Live Music Events',
    icon: '🎵',
    color: 'from-purple-500 to-pink-600',
    position: { x: 75, y: 25 }
  },
  {
    id: 'dog-park',
    name: 'Dog Park',
    description: 'Spacious fenced area for dogs to run, play, and socialize',
    features: ['Fenced Area', 'Water Stations', 'Agility Equipment', 'Shade Areas'],
    capacity: '100+ dogs',
    bestFor: 'Dog Activities',
    icon: '🐕',
    color: 'from-green-500 to-emerald-600',
    position: { x: 25, y: 40 }
  },
  {
    id: 'beer-garden',
    name: 'Beer Garden',
    description: 'Craft beer tasting area with outdoor seating and food service',
    features: ['Craft Beer Selection', 'Food Service', 'Outdoor Seating', 'Live Music'],
    capacity: '200+ people',
    bestFor: 'Food & Drinks',
    icon: '🍻',
    color: 'from-amber-500 to-orange-600',
    position: { x: 60, y: 60 }
  },
  {
    id: 'playground',
    name: 'Kids Playground',
    description: 'Family-friendly play area with equipment for children',
    features: ['Play Equipment', 'Sand Area', 'Picnic Tables', 'Shade Structures'],
    capacity: '50+ children',
    bestFor: 'Family Activities',
    icon: '🎪',
    color: 'from-blue-500 to-cyan-600',
    position: { x: 40, y: 75 }
  },
  {
    id: 'picnic-area',
    name: 'Picnic Area',
    description: 'Scenic picnic spots with tables, grills, and beautiful mountain views',
    features: ['Picnic Tables', 'BBQ Grills', 'Mountain Views', 'Restrooms'],
    capacity: '150+ people',
    bestFor: 'Group Gatherings',
    icon: '🧺',
    color: 'from-rose-500 to-pink-600',
    position: { x: 15, y: 15 }
  },
  {
    id: 'parking',
    name: 'Parking Area',
    description: 'Convenient parking with accessible spots and EV charging',
    features: ['Standard Parking', 'Accessible Spots', 'EV Charging', 'Security'],
    capacity: '200+ vehicles',
    bestFor: 'Vehicle Parking',
    icon: '🚗',
    color: 'from-gray-500 to-slate-600',
    position: { x: 85, y: 85 }
  }
];

export default function ParkMap() {
  const [selectedArea, setSelectedArea] = useState<ParkArea | null>(null);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6">
            <span className="text-green-800 font-semibold text-sm tracking-wide uppercase">Interactive Map</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            EXPLORE <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">SILVERADOS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover all the amazing areas and features our park has to offer. Click on any location to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-2xl border border-green-200">
              {/* Map Background */}
              <div className="relative w-full h-96 bg-gradient-to-br from-green-200 via-green-100 to-emerald-200 rounded-2xl overflow-hidden">
                {/* Mountain Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    <path d="M0,200 L50,150 L100,180 L150,120 L200,160 L250,100 L300,140 L350,80 L400,120 L400,300 L0,300 Z" fill="currentColor" className="text-green-600"/>
                    <path d="M0,250 L80,200 L160,230 L240,180 L320,210 L400,170 L400,300 L0,300 Z" fill="currentColor" className="text-green-700"/>
                  </svg>
                </div>

                {/* Park Areas */}
                {parkAreas.map((area) => (
                  <button
                    key={area.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 ${
                      hoveredArea === area.id || selectedArea?.id === area.id
                        ? 'scale-125 z-10'
                        : 'scale-100'
                    }`}
                    style={{
                      left: `${area.position.x}%`,
                      top: `${area.position.y}%`,
                    }}
                    onClick={() => setSelectedArea(area)}
                    onMouseEnter={() => setHoveredArea(area.id)}
                    onMouseLeave={() => setHoveredArea(null)}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${area.color} flex items-center justify-center text-white text-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-white`}>
                      {area.icon}
                    </div>
                  </button>
                ))}

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-xs font-medium text-gray-700 mb-2">Click areas to explore</div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                    <span className="text-xs text-gray-600">Interactive Locations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Area Details */}
          <div className="space-y-6">
            {selectedArea ? (
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedArea.color} flex items-center justify-center text-white text-3xl shadow-lg`}>
                    {selectedArea.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedArea.name}</h3>
                    <p className="text-gray-600">{selectedArea.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-lg">📋</span>
                      Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedArea.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-lg">ℹ️</span>
                      Information
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-500">Capacity:</span>
                        <div className="font-medium text-gray-900">{selectedArea.capacity}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Best For:</span>
                        <div className="font-medium text-gray-900">{selectedArea.bestFor}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedArea(null)}
                    className="px-6 py-3 bg-gradient-to-r from-gray-500 to-slate-600 text-white rounded-xl hover:from-gray-600 hover:to-slate-700 transition-all duration-300 font-medium"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">
                  🗺️
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore Our Park</h3>
                <p className="text-gray-600 leading-relaxed">
                  Click on any location marker on the map to discover what makes each area special.
                  From our main stage for live music to our dog park for furry friends, there's something for everyone!
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🎵</span>
                    <span className="text-gray-600">Live Music</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🐕</span>
                    <span className="text-gray-600">Dog Park</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🍻</span>
                    <span className="text-gray-600">Beer Garden</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🎪</span>
                    <span className="text-gray-600">Playground</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Total Areas', value: parkAreas.length, icon: '🏞️' },
                { label: 'Max Capacity', value: '1000+', icon: '👥' },
                { label: 'Features', value: '20+', icon: '✨' },
                { label: 'Activities', value: '15+', icon: '🎯' }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
