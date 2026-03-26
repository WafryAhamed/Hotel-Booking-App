import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import {
  ArrowLeft,
  Home,
  Search,
  Map,
  AlertCircle
} from 'lucide-react';

export function NotFoundPage() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-navy to-blue-900 text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Code */}
        <div className="mb-8">
          <div className="text-9xl font-black opacity-20 mb-4">404</div>
          <AlertCircle className="w-20 h-20 mx-auto mb-6 opacity-80" />
        </div>

        {/* Message */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
          Oops! We couldn't find the page you're looking for. 
          It might have been removed or the URL might be incorrect.
        </p>

        {/* Search Box */}
        <div className="mb-12 bg-white rounded-lg p-2 flex gap-2">
          <form onSubmit={handleSearchSubmit} className="flex gap-2 flex-1">
            <input
              type="text"
              placeholder="Search properties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-navy placeholder-brand-gray"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-brand-navy text-white font-bold hover:bg-brand-navy/90 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <p className="text-blue-100 mb-6 text-sm font-medium uppercase">Quick Navigation</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/">
              <button className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/30 hover:bg-white/20 transition-colors font-bold flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                Home
              </button>
            </Link>
            <Link to="/search">
              <button className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/30 hover:bg-white/20 transition-colors font-bold flex items-center justify-center gap-2">
                <Map className="w-5 h-5" />
                Search Properties
              </button>
            </Link>
            <Link to="/help">
              <button className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/30 hover:bg-white/20 transition-colors font-bold flex items-center justify-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Help Centre
              </button>
            </Link>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="mb-12">
          <p className="text-blue-100 mb-6 text-sm font-medium uppercase">Popular Destinations</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { name: 'Miami', slug: 'miami' },
              { name: 'New York', slug: 'new-york' },
              { name: 'Los Angeles', slug: 'los-angeles' },
              { name: 'Las Vegas', slug: 'las-vegas' },
              { name: 'San Francisco', slug: 'san-francisco' },
              { name: 'Barcelona', slug: 'barcelona' },
            ].map((destination) => (
              <Link key={destination.slug} to={`/search?city=${destination.slug}`}>
                <button className="px-4 py-2 rounded-full bg-white/10 border border-white/30 hover:bg-white/20 transition-colors text-sm font-medium">
                  {destination.name}
                </button>
              </Link>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="bg-white/10 border border-white/30 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-3">Still Need Help?</h3>
          <p className="text-blue-100 mb-6">
            Our support team is available 24/7 to assist you with any questions or issues.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-brand-navy hover:bg-gray-100 font-bold px-8">
              Contact Support
            </Button>
          </Link>
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mt-12 flex items-center gap-2 justify-center text-blue-100 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Go Back
        </button>
      </div>
    </main>
  );
}


