'use client';

import { useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export default function AdvancedAccordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className = ''
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(itemId)
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId];
      } else {
        return prev.includes(itemId) ? [] : [itemId];
      }
    });
  };

  return (
    <div className={`accordion-advanced ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);

        return (
          <div key={item.id} className="border-b border-gray-200 last:border-b-0">
            <button
              onClick={() => toggleItem(item.id)}
              className={`accordion-header ${isOpen ? 'active' : ''}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <div className="flex items-center space-x-3">
                {item.icon && (
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                )}
                <span className="text-left">{item.title}</span>
              </div>
              <svg
                className="accordion-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              id={`accordion-content-${item.id}`}
              className={`accordion-content ${isOpen ? 'active' : ''}`}
              role="region"
              aria-labelledby={`accordion-header-${item.id}`}
            >
              <div className="py-4">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Pre-built FAQ Accordion
export function FAQAccordion() {
  const faqItems: AccordionItem[] = [
    {
      id: 'hours',
      title: 'What are your operating hours?',
      content: (
        <div className="space-y-2">
          <p>Summer Hours (May - September):</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Thursday - Sunday: 4:00 PM - 10:00 PM</li>
            <li>Monday - Wednesday: Closed</li>
          </ul>
          <p>Winter Hours (October - April):</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Friday - Sunday: 4:00 PM - 8:00 PM</li>
            <li>Monday - Thursday: Closed</li>
          </ul>
        </div>
      ),
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'pets',
      title: 'What are the pet policies?',
      content: (
        <div className="space-y-2">
          <p>All dogs must be:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>On a leash at all times (6ft max length)</li>
            <li>Up-to-date on vaccinations</li>
            <li>Well-behaved and social</li>
            <li>Accompanied by their owner at all times</li>
          </ul>
          <p className="text-red-600 font-semibold">No aggressive dogs allowed. Owners are responsible for their pet's behavior.</p>
        </div>
      ),
      icon: (
        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'events',
      title: 'How do I book an event or performance?',
      content: (
        <div className="space-y-2">
          <p>To book a private event or inquire about performing:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Email: events@silveradosdogpark.com</li>
            <li>Call: (828) 555-0123</li>
            <li>Visit our Events page for upcoming shows</li>
          </ul>
          <p>We host live music, private parties, and special events throughout the season.</p>
        </div>
      ),
      icon: (
        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    },
    {
      id: 'food',
      title: 'Can I bring my own food and drinks?',
      content: (
        <div className="space-y-2">
          <p>Outside food and drinks are welcome! However:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>No glass containers allowed</li>
            <li>Coolers must be kept in designated areas</li>
            <li>Please clean up after yourself</li>
          </ul>
          <p>We also offer a full menu of craft beers, cocktails, and snacks at our bar.</p>
        </div>
      ),
      icon: (
        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 'parking',
      title: 'What are the parking arrangements?',
      content: (
        <div className="space-y-2">
          <p>Free parking is available on-site:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>100+ parking spaces</li>
            <li>Handicap accessible spaces available</li>
            <li>Additional overflow parking nearby</li>
            <li>Well-lit parking area for evening events</li>
          </ul>
          <p>Parking is first-come, first-served. Please arrive early for popular events.</p>
        </div>
      ),
      icon: (
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <AdvancedAccordion
      items={faqItems}
      allowMultiple={true}
      className="max-w-2xl mx-auto"
    />
  );
}
