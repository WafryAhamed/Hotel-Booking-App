import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../../data/mockData';
interface SearchEmptyStateProps {
  onClearFilters: () => void;
}
export function SearchEmptyState({ onClearFilters }: SearchEmptyStateProps) {
  return (
    <div className="py-16 text-center">
      {/* Icon */}
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
        <Search className="w-10 h-10 text-brand-gray" />
      </div>

      {/* Text */}
      <h2 className="text-2xl font-bold text-brand-black mb-2">
        No properties found
      </h2>
      <p className="text-brand-gray max-w-md mx-auto mb-8">
        We couldn't find any properties matching your current filters. Try
        adjusting your search criteria or explore popular destinations.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
        <Button
          variant="primary"
          className="!bg-brand-navy hover:!bg-navy-700"
          onClick={onClearFilters}>
          
          Clear all filters
        </Button>
        <Link to="/">
          <Button variant="secondary">Browse popular destinations</Button>
        </Link>
      </div>

      {/* Suggested Destinations */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-sm font-semibold text-brand-gray uppercase tracking-wider mb-4">
          Popular destinations
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {DESTINATIONS.slice(0, 6).map((dest) =>
          <Link
            key={dest.id}
            to={`/search?destination=${encodeURIComponent(dest.name)}`}
            className="group flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-brand-blue hover:shadow-sm transition-all">
            
              <img
              src={dest.image}
              alt={dest.name}
              className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
            
              <div className="text-left min-w-0">
                <p className="text-sm font-semibold text-brand-black group-hover:text-brand-navy transition-colors truncate">
                  {dest.name}
                </p>
                <p className="text-xs text-brand-gray">
                  {dest.propertyCount.toLocaleString()} properties
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-gray group-hover:text-brand-blue transition-colors ml-auto flex-shrink-0" />
            </Link>
          )}
        </div>
      </div>
    </div>);

}

