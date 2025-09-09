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
      className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100/50 backdrop-blur-sm will-change-transform gpu-accelerated focus-ring-advanced cursor-pointer"
      role="article"
      aria-labelledby={`event-${e.id}-title`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1), 0 4px 25px -5px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6)'
      }}
    >
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm -z-10" />

      {e.artistImage && (
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          <Image
            src={e.artistImage}
            alt={`Artist image for ${e.title}`}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 filter group-hover:saturate-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Premium overlay content */}
          <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 border border-white/10">
              <p className="text-white text-sm font-semibold tracking-wide">Click for details & tickets</p>
            </div>
          </div>

          {/* Price badge overlay */}
          {e.price && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20">
              <span className="text-gray-900 font-bold text-sm">{e.price}</span>
            </div>
          )}
        </div>
      )}

      <div className="p-8 relative z-10">
        <div className="text-sm text-gray-500 font-semibold mb-3 flex items-center gap-2" aria-label={`Event date${e.time ? ` at ${e.time}` : ''}`}>
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="tracking-wide">{e.date}{e.time ? ` · ${e.time}` : ""}</span>
        </div>

        <h3
          id={`event-${e.id}-title`}
          className="text-2xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500 leading-tight"
        >
          {e.title}
        </h3>

        {e.blurb && (
          <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
            {e.blurb}
          </p>
        )}

        <div className="flex items-center justify-between gap-4">
          {e.ticketUrl && (
            <Link
              className="group/btn relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-0.5 overflow-hidden"
              href={e.ticketUrl}
              aria-label={`Get tickets for ${e.title}`}
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />

              <span className="relative z-10 text-sm font-bold tracking-wide">Get Tickets</span>
              <svg
                className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>

              {/* Shine effect */}
              <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            </Link>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-bl-3xl" />
    </article>
  );
}
