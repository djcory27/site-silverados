'use client';

import { useState } from 'react';

interface CareTip {
  id: string;
  category: 'health' | 'training' | 'nutrition' | 'grooming' | 'exercise';
  title: string;
  summary: string;
  content: string[];
  icon: string;
  color: string;
}

const careTips: CareTip[] = [
  {
    id: 'hydration',
    category: 'health',
    title: 'Proper Hydration for Your Dog',
    summary: 'Keep your furry friend hydrated during outdoor activities',
    content: [
      'Always bring fresh water for your dog',
      'Watch for signs of dehydration: dry gums, lethargy, sunken eyes',
      'Small dogs dehydrate faster than large dogs',
      'Offer water breaks every 30-45 minutes during activity',
      'Consider electrolyte supplements for long outdoor sessions'
    ],
    icon: '💧',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'sun-protection',
    category: 'health',
    title: 'Sun Protection & Heat Safety',
    summary: 'Protect your dog from sun damage and heat exhaustion',
    content: [
      'Apply pet-safe sunscreen to nose, ears, and belly',
      'Avoid peak sun hours (10 AM - 4 PM) in summer',
      'Provide shade and cool areas for rest',
      'Watch for heat exhaustion signs: excessive panting, drooling',
      'Never leave your dog in a parked car'
    ],
    icon: '☀️',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'socialization',
    category: 'training',
    title: 'Positive Socialization Techniques',
    summary: 'Help your dog make friends at the park',
    content: [
      'Introduce dogs gradually and respectfully',
      'Allow dogs to approach at their own pace',
      'Supervise all interactions, especially with unfamiliar dogs',
      'Reward calm and friendly behavior',
      'Remove your dog if they show signs of stress or aggression'
    ],
    icon: '🤝',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'waste-management',
    category: 'training',
    title: 'Responsible Waste Management',
    summary: 'Keep the park clean for everyone',
    content: [
      'Always carry waste bags and pick up after your dog',
      'Use designated waste stations throughout the park',
      'Double bag and dispose properly',
      'Report any missed waste to park staff',
      'Set a good example for other visitors'
    ],
    icon: '🗑️',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'nutrition',
    category: 'nutrition',
    title: 'Park-Ready Nutrition Tips',
    summary: 'Fuel your dog for an active day at the park',
    content: [
      'Feed your dog 2-3 hours before park visits',
      'Bring healthy treats for training and rewards',
      'Avoid feeding human food, even if begged',
      'Pack water and consider portable bowls',
      'Monitor for food allergies or sensitivities'
    ],
    icon: '🥗',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 'grooming',
    category: 'grooming',
    title: 'Post-Park Grooming Care',
    summary: 'Keep your dog clean and comfortable after playtime',
    content: [
      'Brush out dirt, leaves, and debris',
      'Check for ticks and other parasites',
      'Clean paws and between toes',
      'Bathe if your dog gets muddy or rolls in something',
      'Trim nails regularly to prevent injury'
    ],
    icon: '✂️',
    color: 'from-pink-500 to-rose-600'
  }
];

export default function DogCareTips() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedTip, setExpandedTip] = useState<string | null>(null);

  const categories = [
    { key: 'all', label: 'All Tips', count: careTips.length },
    { key: 'health', label: 'Health & Safety', count: careTips.filter(t => t.category === 'health').length },
    { key: 'training', label: 'Training', count: careTips.filter(t => t.category === 'training').length },
    { key: 'nutrition', label: 'Nutrition', count: careTips.filter(t => t.category === 'nutrition').length },
    { key: 'grooming', label: 'Grooming', count: careTips.filter(t => t.category === 'grooming').length },
    { key: 'exercise', label: 'Exercise', count: careTips.filter(t => t.category === 'exercise').length }
  ];

  const filteredTips = selectedCategory === 'all'
    ? careTips
    : careTips.filter(tip => tip.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'health': return 'from-blue-500 to-cyan-600';
      case 'training': return 'from-green-500 to-emerald-600';
      case 'nutrition': return 'from-yellow-500 to-orange-600';
      case 'grooming': return 'from-pink-500 to-rose-600';
      case 'exercise': return 'from-purple-500 to-indigo-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-6">
            <span className="text-indigo-800 font-semibold text-sm tracking-wide uppercase">Dog Care Guide</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            EXPERT <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">CARE TIPS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional advice to keep your dog healthy, happy, and safe during park visits. From our experienced staff to help you make the most of your time together.
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
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredTips.map((tip, index) => (
            <div
              key={tip.id}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tip.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className="relative mb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${tip.color} text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {tip.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                {tip.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {tip.summary}
              </p>

              {/* Expandable Details */}
              <div className="space-y-2">
                {expandedTip === tip.id ? (
                  <div className="space-y-2">
                    {tip.content.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                    <button
                      onClick={() => setExpandedTip(null)}
                      className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      Show Less
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setExpandedTip(tip.id)}
                    className={`px-4 py-2 bg-gradient-to-r ${tip.color} text-white rounded-lg hover:opacity-90 transition-all duration-300 text-sm font-medium group-hover:scale-105`}
                  >
                    Learn More
                  </button>
                )}
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 rounded-lg text-xs font-medium text-white bg-gradient-to-r ${tip.color} capitalize`}>
                  {tip.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-3xl">
                🚨
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Emergency Care Resources</h3>
                <p className="text-gray-600">Know where to go if your dog needs immediate care</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left">
                <h4 className="font-bold text-gray-900 mb-3">Emergency Contacts</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">ASPCA Poison Control:</span>
                    <a href="tel:+18884227631" className="text-indigo-600 hover:text-indigo-800 font-medium">
                      (888) 426-4435
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Emergency Vet:</span>
                    <a href="tel:+18281234567" className="text-indigo-600 hover:text-indigo-800 font-medium">
                      (828) 123-4567
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <h4 className="font-bold text-gray-900 mb-3">Local Resources</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Animal Control:</span>
                    <a href="tel:+18281234567" className="text-indigo-600 hover:text-indigo-800 font-medium">
                      (828) 123-4567
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lost & Found:</span>
                    <span className="text-gray-900 font-medium">Park Office</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
