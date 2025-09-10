'use client';

import { useState } from 'react';

interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
  icon: string;
}

const membershipPlans: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Basic Membership',
    price: '$29',
    period: 'per month',
    description: 'Perfect for occasional visitors who want to save on admission.',
    features: [
      '10% off regular admission',
      'Priority booking for events',
      'Member-only newsletter',
      'Basic grooming discounts',
      'Access to member parking'
    ],
    color: 'from-blue-500 to-cyan-600',
    icon: '🎫'
  },
  {
    id: 'premium',
    name: 'Premium Membership',
    price: '$49',
    period: 'per month',
    description: 'Ideal for regular visitors who want exclusive perks and savings.',
    features: [
      'Unlimited park access',
      '20% off food & beverages',
      'Free event tickets (2 per month)',
      '15% off grooming services',
      'Exclusive member events',
      'Free birthday party booking',
      'Priority customer support'
    ],
    popular: true,
    color: 'from-purple-500 to-pink-600',
    icon: '⭐'
  },
  {
    id: 'family',
    name: 'Family Membership',
    price: '$79',
    period: 'per month',
    description: 'Best value for families with multiple dogs or frequent visitors.',
    features: [
      'Unlimited access for entire family',
      'Up to 3 dogs included',
      '25% off all services',
      'Monthly family events',
      'Free dog training sessions',
      'Emergency vet discount',
      'VIP parking & seating',
      'Exclusive family activities'
    ],
    color: 'from-green-500 to-emerald-600',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    id: 'annual',
    name: 'Annual Membership',
    price: '$399',
    period: 'per year',
    description: 'Save big with our annual plan - pay for 10 months, get 12 months of access!',
    features: [
      'All Premium benefits',
      '2 free months included',
      '30% off annual events',
      'Free merchandise quarterly',
      'Dedicated member coordinator',
      'Early access to new features',
      'Special anniversary perks'
    ],
    color: 'from-orange-500 to-red-600',
    icon: '🎁'
  }
];

export default function MembershipBenefits() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const toggleBilling = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <span className="text-purple-800 font-semibold text-sm tracking-wide uppercase">Membership Benefits</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            JOIN THE <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">SILVERADOS FAMILY</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Unlock exclusive perks, save money, and become part of our vibrant community. Choose the perfect membership plan for you and your furry friends.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={toggleBilling}
            className="relative w-14 h-7 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-1'
            }`} />
          </button>
          <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual
            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
              Save 17%
            </span>
          </span>
        </div>

        {/* Membership Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {membershipPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 overflow-hidden ${
                plan.popular ? 'ring-2 ring-purple-500 ring-offset-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className="relative text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} text-white text-3xl shadow-lg mx-auto`}>
                  {plan.icon}
                </div>
              </div>

              {/* Plan Details */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-black text-gray-900">
                    {billingCycle === 'annual' && plan.id !== 'annual' ? `$${(parseInt(plan.price.replace('$', '')) * 12 * 0.83).toFixed(0)}` : plan.price}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {billingCycle === 'annual' && plan.id !== 'annual' ? '/year' : plan.period}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full py-3 px-6 bg-gradient-to-r ${plan.color} text-white rounded-xl hover:opacity-90 transition-all duration-300 font-bold hover:scale-105 shadow-lg`}
              >
                {plan.id === 'annual' ? 'Get Annual Plan' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
              💰
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Save Money</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Members save an average of $200+ annually on admission, food, and services. Annual plans save 17% more!
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
              🎉
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Exclusive Access</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get priority access to events, member-only activities, and special promotions throughout the year.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
              🤝
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Join a vibrant community of dog lovers. Connect with fellow members and participate in exclusive events.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Membership FAQ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Can I pause my membership?</h4>
              <p className="text-gray-600 text-sm">Yes, you can pause your membership for up to 3 months per year for travel or other reasons.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Are there setup fees?</h4>
              <p className="text-gray-600 text-sm">No setup fees! Your first month's payment covers membership card and welcome package.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Can I bring guests?</h4>
              <p className="text-gray-600 text-sm">Premium and Family members can bring up to 2 guests per visit at member rates.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">What if I move?</h4>
              <p className="text-gray-600 text-sm">Memberships are transferable. Contact us to update your information.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join the Family?</h3>
            <p className="text-lg mb-6 opacity-90">
              Start your membership today and unlock all the benefits of being part of the Silverados community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold hover:scale-105">
                Compare Plans
              </button>
            </div>
          </div>
        </div>

        {/* Modal for Plan Selection */}
        {selectedPlan && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl max-w-md w-full p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  🎉
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Silverados!</h3>
                <p className="text-gray-600">Your membership application has been received.</p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600">Selected Plan</div>
                  <div className="font-bold text-gray-900">
                    {membershipPlans.find(p => p.id === selectedPlan)?.name}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600">Next Steps</div>
                  <ul className="text-sm text-gray-700 space-y-1 mt-2">
                    <li>• Check your email for confirmation</li>
                    <li>• Visit the park office to pick up your membership card</li>
                    <li>• Download our mobile app for exclusive member features</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => setSelectedPlan(null)}
                className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 font-bold"
              >
                Got it!
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
