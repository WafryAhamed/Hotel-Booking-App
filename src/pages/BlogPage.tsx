import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import {
  ArrowLeft,
  User,
  Search
} from 'lucide-react';

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock blog posts
  const allPosts = [
    {
      id: 1,
      title: '10 Hidden Gems in Barcelona You Must Visit',
      excerpt:
        'Discover the secret spots that locals love but tourists haven\'t found yet. From hidden beaches to cozy cafes, explore the real Barcelona.',
      category: 'destinations',
      author: 'Maria Garcia',
      date: '2024-12-10',
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop',
      readTime: '8 min',
      featured: true,
    },
    {
      id: 2,
      title: 'The Best Time to Visit Popular Destinations',
      excerpt:
        'Learn about the best seasons to visit major destinations around the world. Save money and avoid crowds by traveling smart.',
      category: 'travel-tips',
      author: 'David Chen',
      date: '2024-12-08',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 3,
      title: 'How to Pack for Any Destination in One Bag',
      excerpt:
        'Master the art of light packing. We share expert tips and tricks for traveling with just a carry-on bag to any destination.',
      category: 'packing-guide',
      author: 'Sarah Johnson',
      date: '2024-12-05',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 4,
      title: 'Local Food Guide: What to Eat in Thailand',
      excerpt:
        'Dive into authentic Thai cuisine. From street food to fine dining, discover the flavors that make Thailand a foodie\'s paradise.',
      category: 'food-culture',
      author: 'James Wilson',
      date: '2024-12-02',
      image: 'https://images.unsplash.com/photo-1504674900967-965ba288b461?w=600&h=400&fit=crop',
      readTime: '10 min',
      featured: true,
    },
    {
      id: 5,
      title: 'Budget-Friendly Road Trip Ideas Across the US',
      excerpt:
        'Plan the perfect American road trip on a budget. From national parks to small towns, discover affordable adventures.',
      category: 'destinations',
      author: 'Emma Davis',
      date: '2024-11-28',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop',
      readTime: '9 min',
      featured: false,
    },
    {
      id: 6,
      title: 'Meeting Locals: How to Have Authentic Travel Experiences',
      excerpt:
        'Go beyond typical tourist attractions. Learn how to connect with locals and experience destinations like a true insider.',
      category: 'travel-tips',
      author: 'Alex Martinez',
      date: '2024-11-25',
      image: 'https://images.unsplash.com/photo-1488915049915-1e25acb70ae0?w=600&h=400&fit=crop',
      readTime: '7 min',
      featured: true,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'travel-tips', label: 'Travel Tips' },
    { id: 'food-culture', label: 'Food & Culture' },
    { id: 'packing-guide', label: 'Packing Guide' },
  ];

  // Filter posts
  let filteredPosts = allPosts;
  if (selectedCategory !== 'all') {
    filteredPosts = filteredPosts.filter((post) => post.category === selectedCategory);
  }
  if (searchQuery) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Featured posts
  const featuredPosts = allPosts.filter((post) => post.featured);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <button className="flex items-center gap-2 text-blue-100 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Travel Inspiration & Tips</h1>
          <p className="text-blue-100 text-lg">
            Discover amazing destinations, travel tips, and insider guides from our community
          </p>
        </div>
      </div>

      {/* Featured Posts Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-brand-black mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-brand-navy transition-all h-full cursor-pointer group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-brand-gold text-white">
                    Featured
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-5">
                  <Badge className="bg-blue-100 text-blue-800 mb-3">
                    {categories.find((c) => c.id === post.category)?.label}
                  </Badge>

                  <h3 className="text-xl font-bold text-brand-black mb-2 group-hover:text-brand-navy transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-brand-gray mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-brand-gray border-t border-gray-200 pt-3">
                    <span>{post.readTime} read</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-brand-gray" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-brand-navy text-white'
                      : 'bg-gray-100 text-brand-black hover:bg-gray-200'
                  }`}>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredPosts.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold text-brand-black mb-6">
              {selectedCategory === 'all' ? 'All Articles' : categories.find((c) => c.id === selectedCategory)?.label}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-brand-navy transition-all h-full cursor-pointer group">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden bg-gray-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <Badge className="bg-gray-100 text-brand-black mb-2 text-xs">
                        {categories.find((c) => c.id === post.category)?.label}
                      </Badge>

                      <h3 className="text-lg font-bold text-brand-black mb-2 group-hover:text-brand-navy transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-sm text-brand-gray mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-brand-gray border-t border-gray-200 pt-3">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <Search className="w-12 h-12 text-brand-gray mx-auto mb-4" />
            <h3 className="font-bold text-brand-black mb-2">No articles found</h3>
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

      {/* Newsletter CTA */}
      <div className="bg-brand-navy text-white py-12 mt-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Get Travel Tips in Your Inbox</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter and receive weekly travel inspiration, tips, and exclusive offers.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
            <Button className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-bold whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}


