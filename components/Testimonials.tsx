'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar?: string;
  dogName?: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Asheville, NC',
    rating: 5,
    text: 'Silverados is absolutely amazing! My golden retriever Max has made so many friends here. The facilities are top-notch and the staff is incredibly friendly. We come here every weekend!',
    avatar: '/avatars/sarah.jpg',
    dogName: 'Max',
    date: '2 weeks ago'
  },
  {
    id: '2',
    name: 'Mike Chen',
    location: 'Black Mountain, NC',
    rating: 5,
    text: 'The live music events are fantastic! Great atmosphere, amazing food trucks, and the dog park is huge with separate areas for different sizes. Perfect for our whole family including our two labs.',
    avatar: '/avatars/mike.jpg',
    dogName: 'Buddy & Luna',
    date: '1 month ago'
  },
  {
    id: '3',
    name: 'Jennifer Williams',
    location: 'Hendersonville, NC',
    rating: 5,
    text: 'Love the premium amenities! The wash stations are a game-changer, and the comfortable seating areas make it perfect for relaxing while the dogs play. Highly recommend!',
    avatar: '/avatars/jennifer.jpg',
    dogName: 'Bella',
    date: '3 weeks ago'
  },
  {
    id: '4',
    name: 'David Rodriguez',
    location: 'Weaverville, NC',
    rating: 5,
    text: 'Best dog park in the mountains! The landscaping is beautiful, the water features are great, and the community events bring everyone together. Our husky loves it here!',
    avatar: '/avatars/david.jpg',
    dogName: 'Storm',
    date: '1 week ago'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    location: 'Fletcher, NC',
    rating: 5,
    text: 'The attention to detail is incredible. From the premium toys to the professional grooming stations, everything is thoughtfully designed. Worth every penny of membership!',
    avatar: '/avatars/lisa.jpg',
    dogName: 'Coco',
    date: '2 months ago'
  },
  {
    id: '6',
    name: 'Robert Kim',
    location: 'Arden, NC',
    rating: 5,
    text: 'Weekend mornings at Silverados are our favorite tradition. The coffee shop, the play areas, the community - it\'s all perfect. Our pug has never been happier!',
    avatar: '/avatars/robert.jpg',
    dogName: 'Mochi',
    date: '4 weeks ago'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-6">
            <span className="text-green-800 font-semibold text-sm tracking-wide uppercase">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            WHAT OUR <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">COMMUNITY</span> SAYS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our amazing community of dog lovers has to say about their Silverados experience.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-full translate-y-12 -translate-x-12 opacity-50" />

            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg text-gray-900">{currentTestimonial.name}</h4>
                  <p className="text-gray-600">{currentTestimonial.location}</p>
                  {currentTestimonial.dogName && (
                    <p className="text-sm text-blue-600 font-medium">Owner of {currentTestimonial.dogName}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">{currentTestimonial.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              isAutoPlaying
                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Start Auto-play'}
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4">
            <Link
              href="/reviews"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">Read All Reviews</span>
              <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
            <p className="text-gray-500 text-sm font-medium">
              Join hundreds of happy customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
