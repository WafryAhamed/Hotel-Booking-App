import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../../types';
import { Badge } from '../ui/Badge';
import { Star, MapPin, Share2, Heart } from 'lucide-react';
interface PropertyHeaderProps {
  property: Property;
  isSaved: boolean;
  onToggleSave: () => void;
  onScrollToReviews: () => void;
  onScrollToMap: () => void;
}
export function PropertyHeader({
  property,
  isSaved,
  onToggleSave,
  onScrollToReviews,
  onScrollToMap
}: PropertyHeaderProps) {
  const ratingLabel =
  property.rating >= 9 ?
  'Superb' :
  property.rating >= 8 ?
  'Excellent' :
  property.rating >= 7 ?
  'Very Good' :
  'Good';
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.name,
          text: property.shortDescription,
          url: window.location.href
        });
      } catch {

        // User cancelled
      }}
  };
  return (
    <div className="mb-4">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-3">
        <ol className="flex items-center gap-1.5 text-sm text-brand-gray">
          <li>
            <Link to="/" className="hover:text-brand-blue transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-300">
            /
          </li>
          <li>
            <Link
              to="/search"
              className="hover:text-brand-blue transition-colors">
              
              Search
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-300">
            /
          </li>
          <li>
            <Link
              to={`/search?destination=${encodeURIComponent(property.city)}`}
              className="hover:text-brand-blue transition-colors">
              
              {property.city}
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-300">
            /
          </li>
          <li className="text-brand-black font-medium truncate max-w-[200px]">
            {property.name}
          </li>
        </ol>
      </nav>

      {/* Header content */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="flex-1 min-w-0">
          {/* Property type + star rating */}
          <div className="flex items-center gap-2 mb-1.5">
            <Badge variant="secondary" size="small" className="capitalize">
              {property.propertyType}
            </Badge>
            {property.starRating &&
            <div className="flex items-center gap-0.5">
                {Array.from({
                length: property.starRating
              }).map((_, i) =>
              <Star
                key={i}
                className="w-4 h-4 fill-brand-gold text-brand-gold" />

              )}
              </div>
            }
          </div>

          {/* Property name */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-black mb-2">
            {property.name}
          </h1>

          {/* Location + Rating row */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <button
              onClick={onScrollToMap}
              className="flex items-center gap-1 text-brand-blue hover:text-brand-navy transition-colors">
              
              <MapPin className="w-4 h-4" />
              <span className="underline">
                {property.location}, {property.country}
              </span>
            </button>

            <span className="text-gray-300 hidden sm:inline">|</span>

            <button
              onClick={onScrollToReviews}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              
              <span className="bg-brand-navy text-white text-sm font-bold px-2 py-0.5 rounded">
                {property.rating}
              </span>
              <span className="text-brand-black font-medium">
                {ratingLabel}
              </span>
              <span className="text-brand-gray">
                · {property.reviewCount.toLocaleString()} reviews
              </span>
            </button>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-brand-blue border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            aria-label="Share property">
            
            <Share className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>
          <button
            onClick={onToggleSave}
            className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium border rounded-lg transition-colors ${isSaved ? 'bg-red-50 border-red-200 text-red-600' : 'border-gray-200 text-brand-blue hover:bg-gray-50'}`}
            aria-label={isSaved ? 'Remove from saved' : 'Save property'}>
            
            <Heart
              className={`w-4 h-4 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
            
            <span className="hidden sm:inline">
              {isSaved ? 'Saved' : 'Save'}
            </span>
          </button>
        </div>
      </div>
    </div>);

}

