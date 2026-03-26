import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import {
  ArrowRight,
  DollarSign,
  TrendingUp,
  Calendar,
  Star,
  ArrowLeft,
  ShieldCheck
} from 'lucide-react';

export function HostLandingPage() {
  const [earningsGuest, setEarningsGuest] = useState(2);
  const [earningsNights, setEarningsNights] = useState(30);
  const [earningsPrice, setEarningsPrice] = useState(150);

  const estimatedMonthlyEarnings = earningsGuest * earningsNights * earningsPrice;

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-navy text-white flex items-center justify-center font-bold">
              CP
            </div>
            <span className="text-xl font-bold text-brand-black">Ceylon Paradise</span>
          </Link>
          <Link to="/">
            <button className="flex items-center gap-2 text-brand-gray hover:text-brand-black">
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">
                Host with Confidence
              </Badge>
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Turn Your Property Into a Profitable Investment
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of successful hosts earning thousands of dollars
                per month. Ceylon Paradise gives you the tools, support, and audience to
                succeed.
              </p>
              <div className="flex gap-4">
                <Link to="/host/add-property">
                  <Button
                    className="bg-white text-brand-navy hover:bg-gray-100 font-bold"
                    rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Start Listing Property
                  </Button>
                </Link>
                <button className="px-6 py-3 rounded-lg border-2 border-white text-white font-bold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative h-96 rounded-2xl overflow-hidden bg-white/10 border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=500&fit=crop"
                alt="Luxury property"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-brand-navy mb-2">50K+</p>
              <p className="text-brand-gray">Active Properties</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-navy mb-2">2M+</p>
              <p className="text-brand-gray">Guest Reviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-navy mb-2">$2.5B</p>
              <p className="text-brand-gray">Earnings Generated</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-navy mb-2">195</p>
              <p className="text-brand-gray">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Host Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-brand-black mb-4 text-center">
            Why Host With Ceylon Paradise?
          </h2>
          <p className="text-center text-brand-gray text-lg mb-12 max-w-2xl mx-auto">
            We give you everything you need to be a successful host
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="font-bold text-brand-black mb-2">Higher Earnings</h3>
              <p className="text-sm text-brand-gray">
                Get premium pricing with our intelligent rate optimization and
                dynamic pricing tools
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-brand-black mb-2">
                Complete Protection
              </h3>
              <p className="text-sm text-brand-gray">
                Host protection insurance and 24/7 support team ensure peace of
                mind
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-brand-black mb-2">Visibility</h3>
              <p className="text-sm text-brand-gray">
                Your property reaches millions of travelers through our global
                platform
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-brand-black mb-2">Easy Management</h3>
              <p className="text-sm text-brand-gray">
                Simple calendar, automated messages, and powerful analytics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-brand-black mb-4 text-center">
            Calculate Your Potential Earnings
          </h2>
          <p className="text-center text-brand-gray text-lg mb-12">
            See how much you could earn by hosting your property
          </p>

          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Guests */}
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Average guests per booking
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={earningsGuest}
                    onChange={(e) => setEarningsGuest(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-brand-navy w-8 text-right">
                    {earningsGuest}
                  </span>
                </div>
              </div>

              {/* Nights */}
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Nights booked per month
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={earningsNights}
                    onChange={(e) => setEarningsNights(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-brand-navy w-10 text-right">
                    {earningsNights}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Average price per night
                </label>
                <input
                  type="number"
                  value={earningsPrice}
                  onChange={(e) => setEarningsPrice(Number(e.target.value))}
                  placeholder="150"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
                />
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-xl p-8 text-white text-center">
              <p className="text-blue-100 mb-2">Estimated Monthly Earnings</p>
              <p className="text-5xl font-bold mb-4">
                ${estimatedMonthlyEarnings.toLocaleString()}
              </p>
              <p className="text-blue-100 mb-6">
                ${(estimatedMonthlyEarnings * 12).toLocaleString()} per year
              </p>
              <Link to="/host/add-property">
                <Button className="bg-white text-brand-navy hover:bg-gray-100 font-bold">
                  Start Listing Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Start */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-brand-black mb-4 text-center">
            Get Started in 4 Simple Steps
          </h2>
          <p className="text-center text-brand-gray text-lg mb-12 max-w-2xl mx-auto">
            Start welcoming guests and earning in less than an hour
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-xl border-2 border-brand-navy p-6 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="font-bold text-brand-black mb-2">
                  Add Your Property
                </h3>
                <p className="text-sm text-brand-gray">
                  Tell us about your space with photos and descriptions
                </p>
              </div>
              {/* Arrow */}
              {/* <div className="hidden md:block absolute -right-3 top-12 text-2xl text-brand-navy">
                →
              </div> */}
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="font-bold text-brand-black mb-2">
                  Set Your Pricing
                </h3>
                <p className="text-sm text-brand-gray">
                  Choose your nightly rate and booking terms
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h3 className="font-bold text-brand-black mb-2">
                  Go Live
                </h3>
                <p className="text-sm text-brand-gray">
                  We verify and list your property
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h3 className="font-bold text-brand-black mb-2">
                Start Earning
              </h3>
              <p className="text-sm text-brand-gray">
                Welcome your first guests and grow your income
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-brand-black mb-4 text-center">
            Success Stories From Our Hosts
          </h2>
          <p className="text-center text-brand-gray text-lg mb-12 max-w-2xl mx-auto">
            Hear from hosts who have transformed their properties into thriving
            businesses
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop"
                  alt="Maria"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-brand-black">Maria Garcia</p>
                  <p className="text-xs text-brand-gray">Barcelona, Spain</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>
              <p className="text-brand-gray text-sm">
                "I started hosting my apartment last year and made €15,000 in the
                first 6 months. The Ceylon Paradise team is incredibly supportive!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop"
                  alt="James"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-brand-black">James Mitchell</p>
                  <p className="text-xs text-brand-gray">London, UK</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>
              <p className="text-brand-gray text-sm">
                "The earnings calculator helped me understand the potential. Now I'm
                running 2 properties and generating £20,000/month!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop"
                  alt="Yuki"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-brand-black">Yuki Tanaka</p>
                  <p className="text-xs text-brand-gray">Tokyo, Japan</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>
              <p className="text-brand-gray text-sm">
                "The platform is so easy to use. I have people helping me manage
                bookings. It's become a passive income stream!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-brand-black mb-4 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 mt-12">
            <details className="bg-gray-50 rounded-lg p-4 cursor-pointer group">
              <summary className="font-bold text-brand-black flex items-center justify-between">
                How much can I earn?
                <span className="group-open:rotate-180">
                  <ArrowRight className="w-5 h-5 text-brand-gray transition-transform" />
                </span>
              </summary>
              <p className="text-brand-gray text-sm mt-3">
                Earnings depend on location, property type, occupancy rate, and
                nightly price. Most hosts earn between $500-$5,000/month.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-4 cursor-pointer group">
              <summary className="font-bold text-brand-black flex items-center justify-between">
                What properties can I list?
                <span className="group-open:rotate-180">
                  <ArrowRight className="w-5 h-5 text-brand-gray transition-transform" />
                </span>
              </summary>
              <p className="text-brand-gray text-sm mt-3">
                You can list apartments, houses, villas, rooms, studios, and any
                unique property. We support short-term and long-term rentals.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-4 cursor-pointer group">
              <summary className="font-bold text-brand-black flex items-center justify-between">
                What are the fees?
                <span className="group-open:rotate-180">
                  <ArrowRight className="w-5 h-5 text-brand-gray transition-transform" />
                </span>
              </summary>
              <p className="text-brand-gray text-sm mt-3">
                Ceylon Paradise takes 15% of each booking. This covers insurance, 24/7
                support, marketing, and platform maintenance.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-4 cursor-pointer group">
              <summary className="font-bold text-brand-black flex items-center justify-between">
                How do I get paid?
                <span className="group-open:rotate-180">
                  <ArrowRight className="w-5 h-5 text-brand-gray transition-transform" />
                </span>
              </summary>
              <p className="text-brand-gray text-sm mt-3">
                Payments are processed weekly to your bank account or PayPal.
                There are no additional fees for receiving payments.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-navy to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready To Start Hosting?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of successful hosts and start earning today. It only takes 10 minutes to list your property.
          </p>
          <Link to="/host/add-property">
            <Button
              className="bg-white text-brand-navy hover:bg-gray-100 font-bold px-8 py-3 text-lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}>
              List Your Property Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Centre</a></li>
                <li><a href="#" className="hover:text-white">Safety</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Policies</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Ceylon Paradise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}


