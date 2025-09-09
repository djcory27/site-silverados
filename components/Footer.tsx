"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              Silverados Dog Park
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              <span className="text-yellow-400 font-semibold text-lg block mb-2">🎵 Live Music • 🥤 Cold Brews • 🐕 Happy Pups</span>
              Family-friendly dog park with live entertainment in Black Mountain, NC. Where premium dog-friendly entertainment meets mountain paradise.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>2898 US Highway 70, Black Mountain, NC</p>
              <p>Open daily — see hours above</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/rules" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Park Rules
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Live Music
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Bar Menu
                </Link>
              </li>
              <li>
                <Link href="/memberships" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Memberships
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.609.043 6.298.099c-1.316.056-2.218.27-3.008.576C2.498.981 1.826 1.651.576 2.9.27 3.69.056 4.592.099 5.908.043 7.219 0 8.04 0 12.017s.043 4.798.099 6.109c.056 1.316.27 2.218.576 3.008.325.726.995 1.398 2.244 2.647.79.726 1.692.94 3.008.94 1.316.057 2.103.1 6.109.1s4.793-.043 6.109-.1c1.316-.056 2.218-.27 3.008-.575 1.249-.325 1.921-.995 2.647-2.244.726-.79.94-1.692.94-3.008.057-1.316.1-2.103.1-6.109s-.043-4.798-.1-6.109c-.056-1.316-.27-2.218-.575-3.008C23.019 1.826 22.349.995 21.1.576 20.31.27 19.408.056 18.092.099 16.781.043 15.96 0 12.017 0zm0 2.446c3.918 0 4.388.03 5.936.086 1.464.056 2.265.31 2.796.52.698.22 1.198.482 1.723.995.525.513.787 1.013 1.006 1.71.21.532.464 1.333.52 2.797.056 1.548.086 2.018.086 5.936s-.03 4.388-.086 5.936c-.056 1.464-.31 2.265-.52 2.796-.22.698-.482 1.198-.995 1.723-.513.525-1.013.787-1.71 1.006-.532.21-1.333.464-2.797.52-1.548.056-2.018.086-5.936.086s-4.388-.03-5.936-.086c-1.464-.056-2.265-.31-2.796-.52-.698-.22-1.198-.482-1.723-.995-.525-.513-.787-1.013-1.006-1.71-.21-.532-.464-1.333-.52-2.797C2.478 16.805 2.448 16.335 2.448 12.017s.03-4.388.086-5.936c.056-1.464.31-2.265.52-2.796.22-.698.482-1.198.995-1.723.513-.525 1.013-.787 1.71-1.006.532-.21 1.333-.464 2.797-.52 1.548-.056 2.018-.086 5.936-.086zm0 3.893a6.124 6.124 0 100 12.248 6.124 6.124 0 000-12.248zm0 2.446a3.678 3.678 0 110 7.356 3.678 3.678 0 010-7.356zm7.406 1.154a1.437 1.437 0 11-2.874 0 1.437 1.437 0 012.874 0z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Silverados Dog Park. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
