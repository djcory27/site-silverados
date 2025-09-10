'use client';

import { useState } from 'react';

interface DogBreed {
  id: string;
  name: string;
  size: 'small' | 'medium' | 'large' | 'giant';
  energy: 'low' | 'medium' | 'high';
  temperament: string[];
  compatibleWith: string[];
  notCompatibleWith: string[];
  icon: string;
}

const dogBreeds: DogBreed[] = [
  {
    id: 'golden-retriever',
    name: 'Golden Retriever',
    size: 'large',
    energy: 'high',
    temperament: ['Friendly', 'Playful', 'Patient'],
    compatibleWith: ['Labrador', 'Beagle', 'Boxer', 'Poodle'],
    notCompatibleWith: ['Chihuahua', 'Yorkshire Terrier'],
    icon: '🐕'
  },
  {
    id: 'labrador',
    name: 'Labrador Retriever',
    size: 'large',
    energy: 'high',
    temperament: ['Friendly', 'Energetic', 'Intelligent'],
    compatibleWith: ['Golden Retriever', 'Boxer', 'Beagle', 'Bulldog'],
    notCompatibleWith: ['Chihuahua', 'Shih Tzu'],
    icon: '🐕'
  },
  {
    id: 'beagle',
    name: 'Beagle',
    size: 'medium',
    energy: 'high',
    temperament: ['Curious', 'Friendly', 'Stubborn'],
    compatibleWith: ['Golden Retriever', 'Labrador', 'Boxer', 'Bulldog'],
    notCompatibleWith: ['Chihuahua', 'Yorkshire Terrier'],
    icon: '🐕'
  },
  {
    id: 'boxer',
    name: 'Boxer',
    size: 'large',
    energy: 'high',
    temperament: ['Playful', 'Energetic', 'Protective'],
    compatibleWith: ['Golden Retriever', 'Labrador', 'Beagle', 'Bulldog'],
    notCompatibleWith: ['Chihuahua', 'Shih Tzu'],
    icon: '🐕'
  },
  {
    id: 'bulldog',
    name: 'Bulldog',
    size: 'medium',
    energy: 'low',
    temperament: ['Calm', 'Friendly', 'Stubborn'],
    compatibleWith: ['Labrador', 'Beagle', 'Boxer', 'Poodle'],
    notCompatibleWith: ['Chihuahua', 'Yorkshire Terrier'],
    icon: '🐕'
  },
  {
    id: 'poodle',
    name: 'Poodle',
    size: 'medium',
    energy: 'medium',
    temperament: ['Intelligent', 'Active', 'Friendly'],
    compatibleWith: ['Golden Retriever', 'Bulldog', 'Boxer', 'Labrador'],
    notCompatibleWith: ['Chihuahua', 'Yorkshire Terrier'],
    icon: '🐕'
  },
  {
    id: 'chihuahua',
    name: 'Chihuahua',
    size: 'small',
    energy: 'medium',
    temperament: ['Alert', 'Courageous', 'Lively'],
    compatibleWith: ['Yorkshire Terrier', 'Shih Tzu', 'Pug'],
    notCompatibleWith: ['Golden Retriever', 'Labrador', 'Boxer'],
    icon: '🐕'
  },
  {
    id: 'yorkshire-terrier',
    name: 'Yorkshire Terrier',
    size: 'small',
    energy: 'medium',
    temperament: ['Bold', 'Confident', 'Energetic'],
    compatibleWith: ['Chihuahua', 'Shih Tzu', 'Pug'],
    notCompatibleWith: ['Golden Retriever', 'Labrador', 'Boxer'],
    icon: '🐕'
  },
  {
    id: 'shih-tzu',
    name: 'Shih Tzu',
    size: 'small',
    energy: 'low',
    temperament: ['Affectionate', 'Playful', 'Calm'],
    compatibleWith: ['Chihuahua', 'Yorkshire Terrier', 'Pug'],
    notCompatibleWith: ['Golden Retriever', 'Labrador', 'Boxer'],
    icon: '🐕'
  },
  {
    id: 'pug',
    name: 'Pug',
    size: 'small',
    energy: 'low',
    temperament: ['Friendly', 'Playful', 'Charming'],
    compatibleWith: ['Chihuahua', 'Yorkshire Terrier', 'Shih Tzu'],
    notCompatibleWith: ['Golden Retriever', 'Labrador', 'Boxer'],
    icon: '🐕'
  }
];

export default function BreedCompatibility() {
  const [selectedBreed1, setSelectedBreed1] = useState<DogBreed | null>(null);
  const [selectedBreed2, setSelectedBreed2] = useState<DogBreed | null>(null);
  const [compatibilityResult, setCompatibilityResult] = useState<{
    level: 'excellent' | 'good' | 'fair' | 'poor';
    message: string;
    reasons: string[];
  } | null>(null);

  const checkCompatibility = () => {
    if (!selectedBreed1 || !selectedBreed2) return;

    if (selectedBreed1.id === selectedBreed2.id) {
      setCompatibilityResult({
        level: 'excellent',
        message: 'Perfect match! Same breed dogs usually get along great.',
        reasons: ['Same breed and size', 'Similar energy levels', 'Familiar behaviors']
      });
      return;
    }

    const isCompatible = selectedBreed1.compatibleWith.some(breed =>
      breed.toLowerCase().includes(selectedBreed2.name.toLowerCase().split(' ')[0])
    );

    const isIncompatible = selectedBreed1.notCompatibleWith.some(breed =>
      breed.toLowerCase().includes(selectedBreed2.name.toLowerCase().split(' ')[0])
    );

    if (isCompatible) {
      setCompatibilityResult({
        level: 'excellent',
        message: 'Excellent compatibility! These breeds typically get along very well.',
        reasons: [
          'Similar energy levels',
          'Compatible temperaments',
          'Similar size categories',
          'Positive interaction history'
        ]
      });
    } else if (isIncompatible) {
      setCompatibilityResult({
        level: 'poor',
        message: 'Poor compatibility. These breeds may have difficulty getting along.',
        reasons: [
          'Different energy levels',
          'Conflicting temperaments',
          'Size differences',
          'Potential for misunderstandings'
        ]
      });
    } else {
      // Neutral compatibility based on size and energy
      const sizeMatch = selectedBreed1.size === selectedBreed2.size;
      const energyMatch = selectedBreed1.energy === selectedBreed2.energy;

      if (sizeMatch && energyMatch) {
        setCompatibilityResult({
          level: 'good',
          message: 'Good compatibility! Similar size and energy levels suggest positive interactions.',
          reasons: [
            'Matching size categories',
            'Similar energy levels',
            'Balanced temperaments'
          ]
        });
      } else if (sizeMatch || energyMatch) {
        setCompatibilityResult({
          level: 'fair',
          message: 'Fair compatibility. May work with proper introductions and supervision.',
          reasons: [
            sizeMatch ? 'Same size category' : 'Different sizes',
            energyMatch ? 'Similar energy levels' : 'Different energy levels',
            'May need supervision during initial meetings'
          ]
        });
      } else {
        setCompatibilityResult({
          level: 'fair',
          message: 'Fair compatibility. Different sizes and energy levels may require careful introduction.',
          reasons: [
            'Size differences may cause issues',
            'Energy level mismatch',
            'May need separate play areas initially'
          ]
        });
      }
    }
  };

  const getCompatibilityColor = (level: string) => {
    switch (level) {
      case 'excellent': return 'from-green-500 to-emerald-600';
      case 'good': return 'from-blue-500 to-cyan-600';
      case 'fair': return 'from-yellow-500 to-orange-600';
      case 'poor': return 'from-red-500 to-pink-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  const getCompatibilityIcon = (level: string) => {
    switch (level) {
      case 'excellent': return '💚';
      case 'good': return '💙';
      case 'fair': return '💛';
      case 'poor': return '💔';
      default: return '🤔';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <span className="text-purple-800 font-semibold text-sm tracking-wide uppercase">Dog Compatibility</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            BREED <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">COMPATIBILITY</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find out how well different dog breeds might get along at Silverados. Choose two breeds to check their compatibility.
          </p>
        </div>

        {/* Breed Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {/* First Dog */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🐕</span>
              First Dog
            </h3>
            <select
              value={selectedBreed1?.id || ''}
              onChange={(e) => {
                const breed = dogBreeds.find(b => b.id === e.target.value);
                setSelectedBreed1(breed || null);
                setCompatibilityResult(null);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select a breed...</option>
              {dogBreeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
            </select>
            {selectedBreed1 && (
              <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{selectedBreed1.icon}</span>
                  <span className="font-medium text-gray-900">{selectedBreed1.name}</span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Size: <span className="capitalize">{selectedBreed1.size}</span></div>
                  <div>Energy: <span className="capitalize">{selectedBreed1.energy}</span></div>
                  <div>Temperament: {selectedBreed1.temperament.join(', ')}</div>
                </div>
              </div>
            )}
          </div>

          {/* Second Dog */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🐕</span>
              Second Dog
            </h3>
            <select
              value={selectedBreed2?.id || ''}
              onChange={(e) => {
                const breed = dogBreeds.find(b => b.id === e.target.value);
                setSelectedBreed2(breed || null);
                setCompatibilityResult(null);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select a breed...</option>
              {dogBreeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
            </select>
            {selectedBreed2 && (
              <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{selectedBreed2.icon}</span>
                  <span className="font-medium text-gray-900">{selectedBreed2.name}</span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Size: <span className="capitalize">{selectedBreed2.size}</span></div>
                  <div>Energy: <span className="capitalize">{selectedBreed2.energy}</span></div>
                  <div>Temperament: {selectedBreed2.temperament.join(', ')}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Check Compatibility Button */}
        <div className="text-center mb-8">
          <button
            onClick={checkCompatibility}
            disabled={!selectedBreed1 || !selectedBreed2}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              selectedBreed1 && selectedBreed2
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Check Compatibility 🐕‍🦺
          </button>
        </div>

        {/* Compatibility Result */}
        {compatibilityResult && (
          <div className="max-w-2xl mx-auto">
            <div className={`bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 text-center`}>
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${getCompatibilityColor(compatibilityResult.level)} text-white text-3xl mb-6 shadow-lg`}>
                {getCompatibilityIcon(compatibilityResult.level)}
              </div>

              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${getCompatibilityColor(compatibilityResult.level)} bg-clip-text text-transparent`}>
                {compatibilityResult.level.charAt(0).toUpperCase() + compatibilityResult.level.slice(1)} Compatibility
              </h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {compatibilityResult.message}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Key Factors:</h4>
                <ul className="space-y-2">
                  {compatibilityResult.reasons.map((reason, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></span>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Remember:</strong> Individual dog personalities can vary greatly. Always supervise initial introductions and consider professional training if needed.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Popular Breed Combinations */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Popular Compatible Combinations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { breeds: ['Golden Retriever', 'Labrador'], reason: 'High energy playmates' },
              { breeds: ['Beagle', 'Boxer'], reason: 'Adventurous spirits' },
              { breeds: ['Bulldog', 'Poodle'], reason: 'Calm companions' },
              { breeds: ['Chihuahua', 'Yorkshire Terrier'], reason: 'Small but mighty friends' },
              { breeds: ['Shih Tzu', 'Pug'], reason: 'Gentle and affectionate' },
              { breeds: ['Boxer', 'Golden Retriever'], reason: 'Energetic athletes' }
            ].map((combo, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-2xl">🐕</span>
                  <span className="text-2xl">🐕</span>
                </div>
                <div className="font-medium text-gray-900 mb-2">
                  {combo.breeds[0]} + {combo.breeds[1]}
                </div>
                <div className="text-sm text-gray-600">{combo.reason}</div>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    💚 Compatible
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
