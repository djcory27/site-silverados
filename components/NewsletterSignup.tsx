'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'hero' | 'footer' | 'inline';
}

export default function NewsletterSignup({ variant = 'inline' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [frequency, setFrequency] = useState('weekly');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail('');
  };

  const benefits = [
    { icon: '🎵', text: 'Exclusive event announcements' },
    { icon: '🐕', text: 'Dog care tips & tricks' },
    { icon: '🎁', text: 'Special member discounts' },
    { icon: '📸', text: 'Behind-the-scenes photos' }
  ];

  if (variant === 'hero') {
    return (
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              STAY IN THE <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">LOOP</span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Get exclusive access to events, special offers, and be the first to know about new features at Silverados.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-white/90 backdrop-blur-sm rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-2xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Now'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 mb-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to the Pack!</h3>
                <p className="text-gray-700">Check your email for confirmation and your first exclusive update.</p>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-blue-100">
                  <span className="text-2xl">{benefit.icon}</span>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="bg-gray-900 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
        <p className="text-gray-300 mb-6">Get the latest updates and exclusive offers</p>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? '...' : 'Subscribe'}
            </button>
          </form>
        ) : (
          <div className="text-green-400 font-semibold">✓ Subscribed!</div>
        )}
      </div>
    );
  }

  // Default inline variant
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-blue-800 font-semibold text-sm tracking-wide uppercase">Newsletter</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              JOIN THE <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">PACK</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Be part of our amazing community! Get exclusive event invites, dog care tips, special offers, and behind-the-scenes content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl">
                    {benefit.icon}
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Signup Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              {!isSubscribed ? (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">How often would you like to hear from us?</label>
                      <div className="space-y-2">
                        {[
                          { value: 'weekly', label: 'Weekly - Best updates & events' },
                          { value: 'monthly', label: 'Monthly - Major announcements' },
                          { value: 'special', label: 'Special events only' }
                        ].map((option) => (
                          <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              value={option.value}
                              checked={frequency === option.value}
                              onChange={(e) => setFrequency(e.target.value)}
                              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-gray-700">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Joining the Pack...
                        </div>
                      ) : (
                        'Join the Silverados Pack'
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to the Pack!</h3>
                  <p className="text-gray-700 mb-6">You're now part of our amazing community.</p>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 border border-green-100">
                    <p className="text-sm text-gray-700">
                      📧 Check your email for a special welcome gift and your first exclusive update!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
