import Link from "next/link";
import Image from "next/image";

interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  artistImage?: string;
  ticketUrl?: string;
  price?: string;
  blurb?: string;
}

interface EventCardProps {
  e: Event;
}

export default function EventCard({ e }: EventCardProps) {
  return (
    <article
      className="card group relative overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-glass animate-fade-in cursor-pointer card-advanced magnetic-hover will-change-transform gpu-accelerated focus-ring-advanced"
      role="article"
      aria-labelledby={`event-${e.id}-title`}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {e.artistImage && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={e.artistImage}
            alt={`Artist image for ${e.title}`}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Overlay content */}
          <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              <p className="text-white text-sm font-medium">Click for details</p>
            </div>
          </div>
        </div>
      )}

      <div className="p-6 relative z-10">
        <div className="text-sm text-brand-charcoal font-medium mb-2 flex items-center gap-2" aria-label={`Event date${e.time ? ` at ${e.time}` : ''}`}>
          <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {e.date}{e.time ? ` · ${e.time}` : ""}
        </div>

        <h3
          id={`event-${e.id}-title`}
          className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors duration-300 leading-tight group-hover:animate-pulse"
        >
          {e.title}
        </h3>

        {e.blurb && (
          <p className="text-brand-charcoal text-base leading-relaxed mb-4 line-clamp-3 group-hover:text-brand-dark transition-colors duration-300">
            {e.blurb}
          </p>
        )}

        <div className="flex items-center justify-between gap-3">
          {e.price && (
            <span
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 text-brand-primary font-semibold text-sm border border-brand-primary/20 hover:border-brand-primary/40 transition-colors duration-300 hover-glow"
              aria-label={`Price: ${e.price}`}
            >
              {e.price}
            </span>
          )}

          {e.ticketUrl && (
            <Link
              className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group/btn hover-lift focus-ring-advanced liquid-button"
              href={e.ticketUrl}
              aria-label={`Get tickets for ${e.title}`}
            >
              <span>Get Tickets</span>
              <svg
                className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
