'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
}

const photos: Photo[] = [
  {
    id: '1',
    src: '/gallery/dogs-playing.jpg',
    alt: 'Dogs playing in the park',
    title: 'Happy Playtime',
    category: 'Activities'
  },
  {
    id: '2',
    src: '/gallery/live-music.jpg',
    alt: 'Live music performance',
    title: 'Live Music Nights',
    category: 'Events'
  },
  {
    id: '3',
    src: '/gallery/dog-wash.jpg',
    alt: 'Professional dog wash station',
    title: 'Premium Wash Stations',
    category: 'Facilities'
  },
  {
    id: '4',
    src: '/gallery/family-fun.jpg',
    alt: 'Families enjoying the park',
    title: 'Family Friendly',
    category: 'Community'
  },
  {
    id: '5',
    src: '/gallery/food-trucks.jpg',
    alt: 'Food truck area',
    title: 'Food Truck Alley',
    category: 'Dining'
  },
  {
    id: '6',
    src: '/gallery/sunset-view.jpg',
    alt: 'Beautiful sunset at the park',
    title: 'Sunset Views',
    category: 'Scenery'
  }
];

const categories = ['All', 'Activities', 'Events', 'Facilities', 'Community', 'Dining', 'Scenery'];

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <span className="text-blue-800 font-semibold text-sm tracking-wide uppercase">Photo Gallery</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            LIFE AT <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">SILVERADOS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the joy, community, and beauty that makes Silverados the perfect destination for you and your furry friend.
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
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{photo.title}</h3>
                    <p className="text-sm text-gray-600">{photo.category}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-gray-800">{photo.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4">
            <Link
              href="/gallery"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">View Full Gallery</span>
              <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
            <p className="text-gray-500 text-sm font-medium">
              See hundreds more photos from our community
            </p>
          </div>
        </div>
      </div>

      {/* Modal for full-size images */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPhoto(null)}>
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
