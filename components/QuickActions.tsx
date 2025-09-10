'use client';

import { useState } from 'react';
import Link from 'next/link';

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
  action: string;
}

const quickActions: QuickAction[] = [
  {
    id: 'events',
    title: 'View Events',
    description: 'Check out upcoming live music and special events',
    icon: '🎵',
    color: 'from-purple-500 to-pink-600',
    link: '/events',
    action: 'Browse Events'
  },
  {
    id: 'hours',
    title: 'Check Hours',
    description: 'See our operating hours and plan your visit',
    icon: '🕐',
    color: 'from-blue-500 to-cyan-600',
    link: '#hours',
    action: 'View Hours'
  },
  {
    id: 'menu',
    title: 'View Menu',
    description: 'Explore our craft beer and food options',
    icon: '🍻',
    color: 'from-amber-500 to-orange-600',
    link: '/menu',
    action: 'See Menu'
  },
  {
    id: 'contact',
    title: 'Get Directions',
    description: 'Find us easily in Black Mountain, NC',
    icon: '📍',
    color: 'from-green-500 to-emerald-600',
    link: '#map',
    action: 'Get Directions'
  },
  {
    id: 'weather',
    title: 'Check Weather',
    description: 'See current conditions for your visit',
    icon: '🌤️',
    color: 'from-sky-500 to-blue-600',
    link: '#weather',
    action: 'Weather Info'
  },
  {
    id: 'photos',
    title: 'View Photos',
    description: 'See the beauty of Silverados through photos',
    icon: '📸',
    color: 'from-rose-500 to-pink-600',
    link: '#gallery',
    action: 'Photo Gallery'
  }
];

export default function QuickActions() {
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-6">
            <span className="text-indigo-800 font-semibold text-sm tracking-wide uppercase">Quick Actions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            WHAT CAN WE HELP YOU <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">WITH</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Quick access to everything you need to plan your perfect visit to Silverados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quickActions.map((action, index) => (
            <div
              key={action.id}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredAction(action.id)}
              onMouseLeave={() => setHoveredAction(null)}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className="relative mb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${action.color} text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {action.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                {action.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {action.description}
              </p>

              {/* Action Button */}
              <Link
                href={action.link}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm font-medium group-hover:scale-105`}
              >
                <span>{action.action}</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Hover effect accent */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${action.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-100 max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center text-white">
                🚨
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900">Emergency?</h4>
                <p className="text-sm text-gray-600">Need immediate assistance?</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+18281234567"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                📞 Call (828) 123-4567
              </a>
              <a
                href="sms:+18281234567"
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
              >
                💬 Text Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
