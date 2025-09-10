'use client';

import { useState } from 'react';

interface NameCategory {
  id: string;
  name: string;
  description: string;
  names: string[];
  icon: string;
  color: string;
}

const nameCategories: NameCategory[] = [
  {
    id: 'classic',
    name: 'Classic Names',
    description: 'Timeless favorites that never go out of style',
    names: ['Max', 'Bella', 'Charlie', 'Lucy', 'Buddy', 'Daisy', 'Rocky', 'Sadie', 'Jack', 'Maggie', 'Bailey', 'Molly', 'Toby', 'Sophie', 'Cody', 'Chloe'],
    icon: '👑',
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'nature',
    name: 'Nature Inspired',
    description: 'Beautiful names inspired by the great outdoors',
    names: ['River', 'Willow', 'Storm', 'Sage', 'Blaze', 'Luna', 'Forest', 'Sky', 'Raven', 'Bear', 'Wolf', 'Phoenix', 'Echo', 'Shadow', 'Hunter', 'Spirit'],
    icon: '🌿',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'foodie',
    name: 'Food Inspired',
    description: 'Delicious names for your food-loving pup',
    names: ['Mocha', 'Cookie', 'Pepper', 'Ginger', 'Nacho', 'Oreo', 'Biscuit', 'Pickles', 'Waffles', 'Muffin', 'Cinnamon', 'Peanut', 'Honey', 'Cocoa', 'Latte', 'Bagel'],
    icon: '🍪',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'royal',
    name: 'Royal & Noble',
    description: 'Regal names fit for a canine king or queen',
    names: ['Duke', 'Lady', 'Prince', 'Queen', 'Baron', 'Duchess', 'Earl', 'Countess', 'Sir', 'Majesty', 'Regal', 'Noble', 'Emperor', 'Empress', 'Lord', 'Knight'],
    icon: '👑',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'mythical',
    name: 'Mythical Creatures',
    description: 'Magical names inspired by legends and folklore',
    names: ['Draco', 'Phoenix', 'Griffin', 'Unicorn', 'Dragon', 'Sphinx', 'Pegasus', 'Centaur', 'Mermaid', 'Fairy', 'Elf', 'Wizard', 'Goblin', 'Troll', 'Ogre', 'Giant'],
    icon: '🦄',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'space',
    name: 'Space & Stars',
    description: 'Out-of-this-world names for adventurous pups',
    names: ['Cosmo', 'Nova', 'Star', 'Comet', 'Galaxy', 'Orbit', 'Rocket', 'Meteor', 'Luna', 'Saturn', 'Jupiter', 'Mars', 'Venus', 'Pluto', 'Nebula', 'Astro'],
    icon: '🚀',
    color: 'from-blue-500 to-cyan-600'
  }
];

export default function DogNameGenerator() {
  const [selectedCategory, setSelectedCategory] = useState<string>('classic');
  const [generatedName, setGeneratedName] = useState<string>('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  const currentCategory = nameCategories.find(cat => cat.id === selectedCategory);

  const generateName = () => {
    if (!currentCategory) return;

    const randomName = currentCategory.names[Math.floor(Math.random() * currentCategory.names.length)];
    setGeneratedName(randomName);
  };

  const addToFavorites = (name: string) => {
    if (!favorites.includes(name)) {
      setFavorites([...favorites, name]);
    }
  };

  const removeFromFavorites = (name: string) => {
    setFavorites(favorites.filter(fav => fav !== name));
  };

  const getRandomNameFromAll = () => {
    const allNames = nameCategories.flatMap(cat => cat.names);
    const randomName = allNames[Math.floor(Math.random() * allNames.length)];
    setGeneratedName(randomName);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full mb-6">
            <span className="text-pink-800 font-semibold text-sm tracking-wide uppercase">Name Generator</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            FIND THE <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">PERFECT NAME</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Can't decide on a name for your new furry friend? Let our name generator inspire you with creative and fun suggestions!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Generator Section */}
          <div className="space-y-8">
            {/* Category Selection */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose a Theme</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {nameCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category.id
                        ? `border-transparent bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="font-medium text-sm">{category.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Category Description */}
            {currentCategory && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentCategory.color} flex items-center justify-center text-white text-xl`}>
                    {currentCategory.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{currentCategory.name}</h4>
                    <p className="text-sm text-gray-600">{currentCategory.description}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {currentCategory.names.length} names available
                </div>
              </div>
            )}

            {/* Generate Buttons */}
            <div className="space-y-4">
              <button
                onClick={generateName}
                className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl hover:from-pink-600 hover:to-rose-700 transition-all duration-300 font-bold text-lg hover:scale-105 shadow-lg"
              >
                🎲 Generate Name
              </button>

              <button
                onClick={getRandomNameFromAll}
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 font-medium hover:scale-105"
              >
                🎯 Surprise Me (Any Theme)
              </button>
            </div>

            {/* Generated Name Display */}
            {generatedName && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="text-sm text-gray-500 mb-2">Your Generated Name</div>
                <div className="text-4xl font-black text-gray-900 mb-4 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
                  {generatedName}
                </div>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => addToFavorites(generatedName)}
                    disabled={favorites.includes(generatedName)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      favorites.includes(generatedName)
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:scale-105'
                    }`}
                  >
                    {favorites.includes(generatedName) ? '❤️ Added' : '❤️ Add to Favorites'}
                  </button>
                  <button
                    onClick={generateName}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 font-medium hover:scale-105"
                  >
                    🔄 Generate Another
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Favorites & Stats Section */}
          <div className="space-y-8">
            {/* Favorites Toggle */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowFavorites(false)}
                className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                  !showFavorites
                    ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                📊 Statistics
              </button>
              <button
                onClick={() => setShowFavorites(true)}
                className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                  showFavorites
                    ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                ❤️ Favorites ({favorites.length})
              </button>
            </div>

            {/* Content Area */}
            {showFavorites ? (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Favorite Names</h3>
                {favorites.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">🐕</div>
                    <p className="text-gray-600">No favorites yet! Generate some names and add them to your favorites.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {favorites.map((name, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
                        <span className="font-medium text-gray-900">{name}</span>
                        <button
                          onClick={() => removeFromFavorites(name)}
                          className="text-red-500 hover:text-red-700 text-lg"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {/* Statistics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-pink-600 mb-1">
                      {nameCategories.reduce((sum, cat) => sum + cat.names.length, 0)}
                    </div>
                    <div className="text-sm text-gray-600">Total Names</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {nameCategories.length}
                    </div>
                    <div className="text-sm text-gray-600">Categories</div>
                  </div>
                </div>

                {/* Popular Categories */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Categories</h3>
                  <div className="space-y-3">
                    {nameCategories.slice(0, 3).map((category, index) => (
                      <div key={category.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{category.icon}</span>
                          <span className="font-medium text-gray-900">{category.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{category.names.length} names</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">💡 Naming Tips</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Choose a name that's easy to call out</li>
                    <li>• Consider your dog's personality and appearance</li>
                    <li>• Test the name with commands like "sit" and "stay"</li>
                    <li>• Make sure all family members like the name</li>
                    <li>• Some dogs respond better to names ending in vowels</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl mb-3">🐕</div>
            <div className="font-bold text-gray-900 mb-2">Did You Know?</div>
            <p className="text-sm text-gray-600">The most popular dog name in the US is "Bella" for females and "Max" for males.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl mb-3">🎯</div>
            <div className="font-bold text-gray-900 mb-2">Perfect Match</div>
            <p className="text-sm text-gray-600">Dogs often respond better to names that are 1-2 syllables long and end with a vowel sound.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl mb-3">🌟</div>
            <div className="font-bold text-gray-900 mb-2">Unique Names</div>
            <p className="text-sm text-gray-600">Consider your dog's unique markings, personality traits, or rescue story when choosing a name.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
