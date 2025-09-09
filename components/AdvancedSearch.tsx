'use client';

import { useState, useEffect } from 'react';

interface SearchResult {
  id: string;
  title: string;
  type: 'event' | 'page' | 'service';
  url: string;
  description: string;
}

const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: 'Live Music Events',
    type: 'page',
    url: '/events',
    description: 'Upcoming live music performances at Silverados Dog Park'
  },
  {
    id: '2',
    title: 'Ricky Gunter Live',
    type: 'event',
    url: '/events/rg-0927',
    description: 'Ricky Gunter performing live on September 27th'
  },
  {
    id: '3',
    title: 'Craft Beer Menu',
    type: 'page',
    url: '/menu',
    description: 'Full selection of craft beers and beverages'
  },
  {
    id: '4',
    title: 'Park Rules',
    type: 'page',
    url: '/rules',
    description: 'Important park rules and guidelines for visitors'
  },
  {
    id: '5',
    title: 'Membership Options',
    type: 'page',
    url: '/memberships',
    description: 'Annual and seasonal membership packages'
  }
];

export default function AdvancedSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = mockSearchResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev =>
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          window.location.href = results[selectedIndex].url;
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  return (
    <div className="search-advanced">
      <div className="relative">
        <input
          type="text"
          placeholder="Search events, menu, rules..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input"
          aria-label="Search"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          role="combobox"
        />
        <svg
          className="search-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {isOpen && results.length > 0 && (
          <div
            className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto"
            role="listbox"
          >
            {results.map((result, index) => (
              <a
                key={result.id}
                href={result.url}
                className={`block px-4 py-3 hover:bg-brand-primary/10 transition-colors border-b border-gray-100 last:border-b-0 ${
                  index === selectedIndex ? 'bg-brand-primary/10' : ''
                }`}
                role="option"
                aria-selected={index === selectedIndex}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{result.title}</div>
                    <div className="text-sm text-gray-600">{result.description}</div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                    result.type === 'event' ? 'bg-green-100 text-green-800' :
                    result.type === 'page' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {result.type}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
