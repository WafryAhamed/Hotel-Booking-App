import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import {
  ArrowLeft,
  Search,
  Calendar,
  MapPin,
  Percent,
  TrendingDown,
  Sparkles
} from 'lucide-react';

export function OffersDealsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('discount');

  // Mock deals data
  const allDeals = [
    {
      id: 1,
      title: 'Early Summer 30% Off',
      description: 'Book 5+ nights in June and save 30% on all properties',
      discount: 30,
      category: 'seasonal',
      validFrom: '2025-01-01',
      validUntil: '2025-06-30',
      minNights: 5,
      maxSavings: 450,
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop',
      regions: ['Miami', 'Cancun', 'Caribbean'],
      icon: 'sun',
    },
    {
      id: 2,
      title: 'Last Minute Bookings 25% Off',
      description: 'Book within 7 days for immediate stays and get 25% discount',
      discount: 25,
      category: 'lastminute',
      validFrom: '2024-12-01',
      validUntil: '2025-12-31',
      minNights: 1,
      maxSavings: 300,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
      regions: ['Nationwide'],
      icon: 'flash',
    },
    {
      id: 3,
      title: 'Weekend Gateway Packages 20% Off',
      description: 'Book Friday-Sunday stays with minimum 2 nights and enjoy 20% savings',
      discount: 20,
      category: 'seasonal',
      validFrom: '2025-01-10',
      validUntil: '2025-12-31',
      minNights: 2,
      maxSavings: 350,
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&h=300&fit=crop',
      regions: ['Mountain Regions', 'City Centers'],
      icon: 'sparkle',
    },
    {
      id: 4,
      title: 'Extended Stay Luxury Package 15% Off',
      description: 'Luxury properties - Book 14+ nights and get complimentary breakfast upgrade',
      discount: 15,
      category: 'luxury',
      validFrom: '2025-01-01',
      validUntil: '2025-12-31',
      minNights: 14,
      maxSavings: 800,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      regions: ['Luxury Destinations'],
      icon: 'crown',
    },
    {
      id: 5,
      title: 'Group Booking Discount 18% Off',
      description: 'Traveling with 6+ people? Get exclusive discount on entire group stay',
      discount: 18,
      category: 'extended',
      validFrom: '2025-01-01',
      validUntil: '2025-12-31',
      minNights: 3,
      maxSavings: 600,
      image: 'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=400&h=300&fit=crop',
      regions: ['All Regions'],
      icon: 'users',
    },
    {
      id: 6,
      title: 'Holiday Season 40% Off Select Properties',
      description: 'Holiday specials on handpicked properties. Limited availability.',
      discount: 40,
      category: 'seasonal',
      validFrom: '2024-12-01',
      validUntil: '2025-01-15',
      minNights: 3,
      maxSavings: 600,
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop',
      regions: ['Popular Destinations'],
      icon: 'gift',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Deals', count: null },
    { id: 'seasonal', label: 'Seasonal', count: allDeals.filter((d) => d.category === 'seasonal').length },
    { id: 'lastminute', label: 'Last Minute', count: allDeals.filter((d) => d.category === 'lastminute').length },
    { id: 'extended', label: 'Extended Stay', count: allDeals.filter((d) => d.category === 'extended').length },
    { id: 'luxury', label: 'Luxury', count: allDeals.filter((d) => d.category === 'luxury').length },
  ];

  // Filter deals
  let filteredDeals = allDeals;
  if (selectedCategory !== 'all') {
    filteredDeals = filteredDeals.filter((deal) => deal.category === selectedCategory);
  }
  if (searchQuery) {
    filteredDeals = filteredDeals.filter(
      (deal) =>
        deal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort deals
  if (sortBy === 'discount') {
    filteredDeals.sort((a, b) => b.discount - a.discount);
  } else if (sortBy === 'savings') {
    filteredDeals.sort((a, b) => b.maxSavings - a.maxSavings);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <button className="flex items-center gap-2 text-blue-100 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Exclusive Offers & Deals</h1>
          <p className="text-blue-100 text-lg">
            Save up to 40% on your next vacation with our special promotions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Sort */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-brand-gray" />
              <Input
                placeholder="Search deals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20">
              <option value="discount">Sort by Discount (High to Low)</option>
              <option value="savings">Sort by Max Savings</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-4">
              <h3 className="font-bold text-brand-black mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-bold transition-colors flex items-center justify-between ${
                      selectedCategory === category.id
                        ? 'bg-brand-navy text-white'
                        : 'text-brand-black hover:bg-gray-100'
                    }`}>
                    <span>{category.label}</span>
                    {category.count !== null && (
                      <span className="text-sm opacity-75">({category.count})</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Deals Grid */}
          <div className="lg:col-span-3">
            {filteredDeals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredDeals.map((deal) => (
                  <Link key={deal.id} to={`/offers/${deal.id}`}>
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-brand-navy transition-all h-full cursor-pointer">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-gray-200">
                        <img
                          src={deal.image}
                          alt={deal.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-brand-gold text-white px-3 py-1 rounded-full font-bold flex items-center gap-1">
                          <Percent className="w-4 h-4" />
                          {deal.discount}% OFF
                        </div>
                        <Badge className="absolute bottom-4 left-4 bg-white text-brand-navy">
                          {deal.category === 'seasonal'
                            ? '📅 Seasonal'
                            : deal.category === 'lastminute'
                            ? '⚡ Last Minute'
                            : deal.category === 'luxury'
                            ? '👑 Luxury'
                            : '📦 Extended'}
                        </Badge>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-bold text-brand-black mb-2 text-lg line-clamp-2">
                          {deal.title}
                        </h3>
                        <p className="text-sm text-brand-gray mb-4 line-clamp-2">
                          {deal.description}
                        </p>

                        {/* Details */}
                        <div className="space-y-2 mb-4 text-xs">
                          <div className="flex items-center gap-2 text-brand-gray">
                            <Calendar className="w-4 h-4" />
                            <span>Min {deal.minNights} night{deal.minNights > 1 ? 's' : ''}</span>
                          </div>
                          <div className="flex items-center gap-2 text-brand-gray">
                            <TrendingDown className="w-4 h-4" />
                            <span>Save up to ${deal.maxSavings}</span>
                          </div>
                          <div className="flex items-center gap-2 text-brand-gray">
                            <MapPin className="w-4 h-4" />
                            <span>{deal.regions.join(', ')}</span>
                          </div>
                        </div>

                        {/* Validity */}
                        <div className="bg-blue-50 rounded-lg p-2 mb-4 text-xs text-brand-navy font-medium">
                          Valid until {new Date(deal.validUntil).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </div>

                        {/* CTA */}
                        <Button className="w-full bg-brand-navy text-white hover:bg-brand-navy/90">
                          View & Book
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <Sparkles className="w-12 h-12 text-brand-gray mx-auto mb-4" />
                <h3 className="font-bold text-brand-black mb-2">No deals found</h3>
                <p className="text-brand-gray mb-6">
                  Try adjusting your search or selecting a different category
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-2 rounded-lg bg-brand-navy text-white font-bold hover:bg-brand-navy/90">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-brand-navy to-blue-900 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-3">Get New Deals in Your Inbox</h2>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter and receive exclusive deals and early access to sales
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
            <Button className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-bold">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}


