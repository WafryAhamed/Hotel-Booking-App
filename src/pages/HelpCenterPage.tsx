import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Accordion } from '../components/ui/Accordion';
import { FREQUENTLY_ASKED_QUESTIONS } from '../data/mockData';
import {
  ArrowLeft,
  Search,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';

export function HelpCenterPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(
    new Set(FREQUENTLY_ASKED_QUESTIONS.map((faq) => faq.category))
  );

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    return FREQUENTLY_ASKED_QUESTIONS.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = !selectedCategory || faq.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Help Center</h1>
            <p className="text-lg text-blue-100">
              Find answers to common questions about bookings, cancellations,
              payments, and more.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search help articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-white/95"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-6">
              <h2 className="font-bold text-brand-black mb-4">Categories</h2>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${!selectedCategory ? 'bg-brand-navy text-white' : 'text-brand-black hover:bg-gray-100'}`}>
                  All Articles
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === category ? 'bg-brand-navy text-white' : 'text-brand-black hover:bg-gray-100'}`}>
                    {category}
                    <span className="text-xs ml-2 opacity-75">
                      ({FREQUENTLY_ASKED_QUESTIONS.filter((f) => f.category === category).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - FAQs */}
          <div className="lg:col-span-3 space-y-6">
            {filteredFAQs.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-brand-black mb-2">
                  No results found
                </h2>
                <p className="text-brand-gray mb-6">
                  Try searching with different keywords or browse all articles.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                  }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-brand-gray">
                  {filteredFAQs.length} article{filteredFAQs.length !== 1 ? 's' : ''}{' '}
                  found
                </p>
                {filteredFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    <Accordion type="single" collapsible>
                      <Accordion.Item value={faq.id}>
                        <Accordion.Trigger className="w-full px-6 py-4 hover:bg-gray-50 flex items-center justify-between">
                          <div className="text-left">
                            <h3 className="font-bold text-brand-black">
                              {faq.question}
                            </h3>
                            <p className="text-xs text-brand-gray mt-1">
                              {faq.category}
                            </p>
                          </div>
                        </Accordion.Trigger>
                        <Accordion.Content className="px-6 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                          <p className="text-brand-gray leading-relaxed">
                            {faq.answer}
                          </p>
                        </Accordion.Content>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Live Chat</h3>
              <p className="text-blue-100 text-sm mb-4">
                Chat with our support team in real-time
              </p>
              <Button
                variant="secondary"
                className="mx-auto">
                Start Chat
              </Button>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Email Support</h3>
              <p className="text-blue-100 text-sm mb-4">
                Send us a detailed message
              </p>
              <Button
                variant="secondary"
                className="mx-auto">
                Send Email
              </Button>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-blue-100 text-sm mb-4">
                Available 24/7 for urgent matters
              </p>
              <Button
                variant="secondary"
                className="mx-auto">
                See Phone Number
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Help Resources */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-brand-black mb-6">
            Other Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/contact">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer group">
                <h3 className="font-bold text-brand-black mb-2 flex items-center justify-between">
                  Contact Us
                  <ChevronRight className="w-5 h-5 text-brand-gray group-hover:text-brand-navy transition-colors" />
                </h3>
                <p className="text-brand-gray text-sm">
                  Reach out to our support team with any questions
                </p>
              </div>
            </Link>

            <Link to="/terms">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer group">
                <h3 className="font-bold text-brand-black mb-2 flex items-center justify-between">
                  Terms & Conditions
                  <ChevronRight className="w-5 h-5 text-brand-gray group-hover:text-brand-navy transition-colors" />
                </h3>
                <p className="text-brand-gray text-sm">
                  Read our full terms of service and policies
                </p>
              </div>
            </Link>

            <Link to="/privacy">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer group">
                <h3 className="font-bold text-brand-black mb-2 flex items-center justify-between">
                  Privacy Policy
                  <ChevronRight className="w-5 h-5 text-brand-gray group-hover:text-brand-navy transition-colors" />
                </h3>
                <p className="text-brand-gray text-sm">
                  Learn how we protect your personal information
                </p>
              </div>
            </Link>

            <Link to="/about">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer group">
                <h3 className="font-bold text-brand-black mb-2 flex items-center justify-between">
                  About Ceylon Paradise
                  <ChevronRight className="w-5 h-5 text-brand-gray group-hover:text-brand-navy transition-colors" />
                </h3>
                <p className="text-brand-gray text-sm">
                  Discover the story behind Ceylon Paradise
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}


