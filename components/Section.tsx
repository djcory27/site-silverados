import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = ""
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section py-16 md:py-24 ${className}`}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className="container-page">
        <div className="text-center mb-12">
          <h2
            id={id ? `${id}-title` : undefined}
            className="h2 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-dark via-brand-primary to-brand-secondary bg-clip-text text-transparent"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-brand-charcoal max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-12">
          {children}
        </div>
      </div>
    </section>
  );
}
