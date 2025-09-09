'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SocialPost {
  id: string;
  platform: 'instagram' | 'facebook' | 'twitter';
  username: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
  type: 'photo' | 'video' | 'text';
}

const socialPosts: SocialPost[] = [
  {
    id: '1',
    platform: 'instagram',
    username: '@silveradospack',
    content: '🐕 Sunday vibes at Silverados! Our weekly acoustic session brought the community together. Who\'s ready for next weekend? 🎸 #SilveradosDogPark #DogParkLife',
    image: '/social/acoustic-session.jpg',
    likes: 234,
    comments: 18,
    timestamp: '2h ago',
    type: 'photo'
  },
  {
    id: '2',
    platform: 'facebook',
    username: 'Silverados Dog Park',
    content: '🌟 Big thank you to everyone who joined our annual Bark in the Park charity event! We raised $2,500 for local animal shelters. Your generosity warms our hearts! 🐶❤️',
    image: '/social/charity-event.jpg',
    likes: 456,
    comments: 32,
    timestamp: '1d ago',
    type: 'photo'
  },
  {
    id: '3',
    platform: 'instagram',
    username: '@silveradospack',
    content: 'Perfect weather for playtime! ☀️ Our agility course is getting some serious action today. Tag your furry athletes! 🏃‍♂️ #DogAgility #Silverados',
    image: '/social/agility.jpg',
    likes: 189,
    comments: 12,
    timestamp: '4h ago',
    type: 'photo'
  },
  {
    id: '4',
    platform: 'twitter',
    username: '@SilveradosPark',
    content: '🚨 Weekend Alert! Live music with The Mountain Jams starting at 6PM tonight. Food trucks, craft beer, and of course, lots of tail-wagging fun! 🎶🍻 #LiveMusic #Asheville',
    likes: 67,
    comments: 8,
    timestamp: '6h ago',
    type: 'text'
  },
  {
    id: '5',
    platform: 'facebook',
    username: 'Silverados Dog Park',
    content: 'Meet Bella! 🐕 This sweet rescue pup found her forever home through our adoption event last weekend. Stories like this make every day at Silverados special! 💕',
    image: '/social/adoption-success.jpg',
    likes: 312,
    comments: 24,
    timestamp: '2d ago',
    type: 'photo'
  },
  {
    id: '6',
    platform: 'instagram',
    username: '@silveradospack',
    content: 'Sunset at Silverados is pure magic ✨ Our covered pavilion makes the perfect spot to relax while the dogs play. What\'s your favorite time of day here? 🌅',
    image: '/social/sunset.jpg',
    likes: 278,
    comments: 15,
    timestamp: '1d ago',
    type: 'photo'
  }
];

const platformColors = {
  instagram: 'from-pink-500 to-purple-600',
  facebook: 'from-blue-600 to-blue-700',
  twitter: 'from-blue-400 to-blue-500'
};

const platformIcons = {
  instagram: '📸',
  facebook: '📘',
  twitter: '🐦'
};

export default function SocialMediaFeed() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');

  const filteredPosts = selectedPlatform === 'all'
    ? socialPosts
    : socialPosts.filter(post => post.platform === selectedPlatform);

  const platforms = ['all', ...Array.from(new Set(socialPosts.map(post => post.platform)))];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
            <span className="text-pink-800 font-semibold text-sm tracking-wide uppercase">Social Media</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            JOIN THE <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">CONVERSATION</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow us on social media to stay connected with our amazing community, see the latest photos, and get real-time updates on events and activities.
          </p>
        </div>

        {/* Platform Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedPlatform('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedPlatform === 'all'
                ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm hover:shadow-md'
            }`}
          >
            All Platforms
          </button>
          {platforms.slice(1).map((platform) => (
            <button
              key={platform}
              onClick={() => setSelectedPlatform(platform)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedPlatform === platform
                  ? `bg-gradient-to-r ${platformColors[platform as keyof typeof platformColors]} text-white shadow-lg transform scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm hover:shadow-md'
              }`}
            >
              <span>{platformIcons[platform as keyof typeof platformIcons]}</span>
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </button>
          ))}
        </div>

        {/* Social Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Platform Header */}
              <div className={`px-6 py-4 bg-gradient-to-r ${platformColors[post.platform]} text-white flex items-center gap-3`}>
                <span className="text-xl">{platformIcons[post.platform]}</span>
                <div>
                  <div className="font-bold">{post.username}</div>
                  <div className="text-xs opacity-90">{post.timestamp}</div>
                </div>
              </div>

              {/* Post Content */}
              {post.image && (
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt="Social media post"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">{post.timestamp}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Us Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Our Journey</h3>
            <p className="text-gray-700 mb-6">
              Join thousands of dog lovers following our daily adventures, events, and community stories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://instagram.com/silveradospack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                <span className="text-xl">📸</span>
                Follow on Instagram
              </a>
              <a
                href="https://facebook.com/silveradosdogpark"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105"
              >
                <span className="text-xl">📘</span>
                Like on Facebook
              </a>
              <a
                href="https://twitter.com/SilveradosPark"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105"
              >
                <span className="text-xl">🐦</span>
                Follow on Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: '15K+', label: 'Social Followers', icon: '👥' },
            { number: '500+', label: 'Monthly Posts', icon: '📸' },
            { number: '50+', label: 'Events Shared', icon: '🎉' },
            { number: '98%', label: 'Engagement Rate', icon: '📈' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-1">
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
