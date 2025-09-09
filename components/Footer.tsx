import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-brand-dark via-brand-midnight to-brand-dark text-brand-cream overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,88,12,0.2),transparent_50%)]" />
      </div>

      <div className="relative">
        <div className="section grid gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              Silverados Dog Park
            </h3>
            <p className="text-lg opacity-90 mb-4 leading-relaxed">
              Where dogs, live music, and cold drinks meet in perfect harmony.
            </p>
            <div className="flex flex-col gap-2 text-sm opacity-75">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                2898 US Highway 70, Black Mountain, NC
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Open daily — see hours above
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/rules" className="group flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full group-hover:scale-125 transition-transform duration-300" />
                  Park Rules
                </Link>
              </li>
              <li>
                <Link href="/events" className="group flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full group-hover:scale-125 transition-transform duration-300" />
                  Live Music
                </Link>
              </li>
              <li>
                <Link href="/menu" className="group flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-brand-accent rounded-full group-hover:scale-125 transition-transform duration-300" />
                  Bar Menu
                </Link>
              </li>
              <li>
                <Link href="/memberships" className="group flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-brand-sky rounded-full group-hover:scale-125 transition-transform duration-300" />
                  Memberships
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-sm opacity-75 mb-4">Get the latest events and special offers.</p>
            <form className="space-y-3">
              <input
                aria-label="Email address"
                type="email"
                required
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                placeholder="your@email.com"
              />
              <button
                type="submit"
                className="w-full btn-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="text-sm opacity-70">
                © {new Date().getFullYear()} Silverados Dog Park. All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.609.043 6.298.099c-1.316.056-2.218.27-3.008.576C2.498.981 1.826 1.651.576 2.9.27 3.69.056 4.592.099 5.908.043 7.219 0 8.04 0 12.017s.043 4.798.099 6.109c.056 1.316.27 2.218.576 3.008.325.726.995 1.398 2.244 2.647.79.726 1.692.94 3.008.94 1.316.057 2.103.1 6.109.1s4.793-.043 6.109-.1c1.316-.056 2.218-.27 3.008-.575 1.249-.325 1.921-.995 2.647-2.244.726-.79.94-1.692.94-3.008.057-1.316.1-2.103.1-6.109s-.043-4.798-.1-6.109c-.056-1.316-.27-2.218-.575-3.008C23.019 1.826 22.349.995 21.1.576 20.31.27 19.408.056 18.092.099 16.781.043 15.96 0 12.017 0zm0 2.446c3.918 0 4.388.03 5.936.086 1.464.056 2.265.31 2.796.52.698.22 1.198.482 1.723.995.525.513.787 1.013 1.006 1.71.21.532.464 1.333.52 2.797.056 1.548.086 2.018.086 5.936s-.03 4.388-.086 5.936c-.056 1.464-.31 2.265-.52 2.796-.22.698-.482 1.198-.995 1.723-.513.525-1.013.787-1.71 1.006-.532.21-1.333.464-2.797.52-1.548.056-2.018.086-5.936.086s-4.388-.03-5.936-.086c-1.464-.056-2.265-.31-2.796-.52-.698-.22-1.198-.482-1.723-.995-.525-.513-.787-1.013-1.006-1.71-.21-.532-.464-1.333-.52-2.797C2.478 16.805 2.448 16.335 2.448 12.017s.03-4.388.086-5.936c.056-1.464.31-2.265.52-2.796.22-.698.482-1.198.995-1.723.513-.525 1.013-.787 1.71-1.006.532-.21 1.333-.464 2.797-.52 1.548-.056 2.018-.086 5.936-.086zm0 3.893a6.124 6.124 0 100 12.248 6.124 6.124 0 000-12.248zm0 2.446a3.678 3.678 0 110 7.356 3.678 3.678 0 010-7.356zm7.406 1.154a1.437 1.437 0 11-2.874 0 1.437 1.437 0 012.874 0z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
