import React, { useState } from 'react';
import { Review } from '../../types';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ThumbsUp, Star } from 'lucide-react';
import { EXTENDED_REVIEWS } from '../../data/propertyDetailData';
interface ReviewsSectionProps {
  rating: number;
  reviewCount: number;
}
const TRAVELER_FILTERS = [
'All',
'Solo',
'Couple',
'Family',
'Business',
'Friends'] as
const;
const CATEGORY_LABELS = [
{
  key: 'cleanliness',
  label: 'Cleanliness'
},
{
  key: 'comfort',
  label: 'Comfort'
},
{
  key: 'location',
  label: 'Location'
},
{
  key: 'value',
  label: 'Value'
},
{
  key: 'staff',
  label: 'Staff'
}] as
const;
export function ReviewsSection({ rating, reviewCount }: ReviewsSectionProps) {
  const [activeTravelerFilter, setActiveTravelerFilter] =
  useState<string>('All');
  const [showAll, setShowAll] = useState(false);
  const reviews = EXTENDED_REVIEWS;
  const filteredReviews =
  activeTravelerFilter === 'All' ?
  reviews :
  reviews.filter(
    (r) => r.travelerType === activeTravelerFilter.toLowerCase()
  );
  const displayedReviews = showAll ?
  filteredReviews :
  filteredReviews.slice(0, 3);
  // Calculate average category scores
  const avgCategories = CATEGORY_LABELS.map(({ key, label }) => {
    const sum = reviews.reduce(
      (acc, r) => acc + (r.categories[key as keyof typeof r.categories] || 0),
      0
    );
    return {
      label,
      score: Number((sum / reviews.length).toFixed(1))
    };
  });
  const ratingLabel =
  rating >= 9 ?
  'Superb' :
  rating >= 8 ?
  'Excellent' :
  rating >= 7 ?
  'Very Good' :
  'Good';
  return (
    <section aria-labelledby="reviews-heading" className="mb-8">
      <h2
        id="reviews-heading"
        className="text-xl md:text-2xl font-bold text-brand-black mb-6">
        
        Guest Reviews
      </h2>

      {/* Overall Score */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Score badge */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-brand-navy rounded-xl flex items-center justify-center">
            <span className="text-3xl font-bold text-white">{rating}</span>
          </div>
          <div>
            <p className="text-xl font-bold text-brand-black">{ratingLabel}</p>
            <p className="text-sm text-brand-gray">
              {reviewCount.toLocaleString()} reviews
            </p>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {avgCategories.map((cat) =>
          <div key={cat.label} className="flex items-center gap-3">
              <span className="text-sm text-gray-600 w-24 flex-shrink-0">
                {cat.label}
              </span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                className="h-full bg-brand-navy rounded-full transition-all duration-500"
                style={{
                  width: `${cat.score / 10 * 100}%`
                }} />
              
              </div>
              <span className="text-sm font-semibold text-brand-black w-8 text-right">
                {cat.score}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Traveler type filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {TRAVELER_FILTERS.map((filter) =>
        <button
          key={filter}
          onClick={() => setActiveTravelerFilter(filter)}
          className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${activeTravelerFilter === filter ? 'bg-brand-navy text-white border-brand-navy' : 'bg-white text-gray-600 border-gray-200 hover:border-brand-navy hover:text-brand-navy'}`}>
          
            {filter}
          </button>
        )}
      </div>

      {/* Review cards */}
      <div className="space-y-4">
        {displayedReviews.map((review) =>
        <ReviewCard key={review.id} review={review} />
        )}
      </div>

      {/* Empty state */}
      {displayedReviews.length === 0 &&
      <div className="text-center py-8 text-brand-gray">
          <p>
            No reviews from {activeTravelerFilter.toLowerCase()} travelers yet.
          </p>
        </div>
      }

      {/* Show more */}
      {filteredReviews.length > 3 && !showAll &&
      <div className="mt-4">
          <Button variant="secondary" onClick={() => setShowAll(true)}>
            Show all {filteredReviews.length} reviews
          </Button>
        </div>
      }
    </section>);

}
function ReviewCard({ review }: {review: Review;}) {
  const [helpful, setHelpful] = useState(false);
  const travelerLabel =
  review.travelerType.charAt(0).toUpperCase() + review.travelerType.slice(1);
  return (
    <article className="border border-gray-200 rounded-lg p-4 md:p-5">
      <div className="flex items-start gap-3 mb-3">
        <Avatar
          name={review.author}
          alt={review.author}
          src={review.avatar}
          size="md" />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-brand-black text-sm">
              {review.author}
            </span>
            <Badge
              variant="secondary"
              size="small"
              className="capitalize text-xs">
              
              {travelerLabel}
            </Badge>
          </div>
          <span className="text-xs text-brand-gray">
            {new Date(review.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
        <div className="bg-brand-navy text-white text-sm font-bold px-2 py-1 rounded flex-shrink-0">
          {review.rating}
        </div>
      </div>

      <h4 className="font-semibold text-brand-black mb-1.5">{review.title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        {review.content}
      </p>

      <button
        onClick={() => setHelpful(!helpful)}
        className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${helpful ? 'text-brand-navy' : 'text-brand-gray hover:text-brand-navy'}`}>
        
        <ThumbsUpIcon
          className={`w-3.5 h-3.5 ${helpful ? 'fill-brand-navy' : ''}`} />
        
        {helpful ? 'Helpful' : 'Was this helpful?'}
      </button>
    </article>);

}
