import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../ui/Badge';
import {
  Heart,
  Star,
  MapPin,
  Wifi,
  ArrowRight } from
'lucide-react';
import { FEATURED_PROPERTIES } from '../../data/mockData';
interface FeaturedPropertiesProps {
  savedIds: Set<string>;
  onToggleSave: (id: string) => void;
}
export function FeaturedProperties({
  savedIds,
  onToggleSave
}: FeaturedPropertiesProps) {
  return (
    <section
      className="w-full py-10 md:py-14 bg-gray-50"
      aria-labelledby="featured-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2
              id="featured-heading"
              className="text-2xl md:text-3xl font-bold text-brand-black">
              
              Featured Properties
            </h2>
            <p className="text-brand-gray mt-1 text-sm md:text-base">
              Hand-picked stays loved by our guests
            </p>
          </div>
          <Link
            to="/search"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-navy transition-colors">
            
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Property 1 - Grand Palace Hotel */}
          <PropertyCard
            property={FEATURED_PROPERTIES[0]}
            isSaved={savedIds.has(FEATURED_PROPERTIES[0].id)}
            onToggleSave={() => onToggleSave(FEATURED_PROPERTIES[0].id)} />
          
          {/* Property 2 - Sakura View */}
          <PropertyCard
            property={FEATURED_PROPERTIES[1]}
            isSaved={savedIds.has(FEATURED_PROPERTIES[1].id)}
            onToggleSave={() => onToggleSave(FEATURED_PROPERTIES[1].id)} />
          
          {/* Property 3 - Manhattan Skyline */}
          <PropertyCard
            property={FEATURED_PROPERTIES[2]}
            isSaved={savedIds.has(FEATURED_PROPERTIES[2].id)}
            onToggleSave={() => onToggleSave(FEATURED_PROPERTIES[2].id)} />
          
          {/* Property 4 - Costa Brava */}
          <PropertyCard
            property={FEATURED_PROPERTIES[3]}
            isSaved={savedIds.has(FEATURED_PROPERTIES[3].id)}
            onToggleSave={() => onToggleSave(FEATURED_PROPERTIES[3].id)} />
          
          {/* Property 5 - Ubud Jungle */}
          <PropertyCard
            property={FEATURED_PROPERTIES[4]}
            isSaved={savedIds.has(FEATURED_PROPERTIES[4].id)}
            onToggleSave={() => onToggleSave(FEATURED_PROPERTIES[4].id)} />
          
          {/* Property 6 - Kensington */}
          <PropertyCard
            property={FEATURED_PROPERTIES[5]}
            isSaved={savedIds.has(FEATURED_PROPERTIES[5].id)}
            onToggleSave={() => onToggleSave(FEATURED_PROPERTIES[5].id)} />
          
        </div>
      </div>
    </section>);

}
function PropertyCard({
  property,
  isSaved,
  onToggleSave




}: {property: (typeof FEATURED_PROPERTIES)[0];isSaved: boolean;onToggleSave: () => void;}) {
  const ratingLabel =
  property.rating >= 9 ?
  'Superb' :
  property.rating >= 8 ?
  'Excellent' :
  'Very Good';
  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Link to={`/property/${property.id}`}>
          <img
            src={property.images[0]}
            alt={property.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy" />
          
        </Link>
        {/* Save Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            onToggleSave();
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          aria-label={isSaved ? 'Remove from saved' : 'Save property'}>
          
          <Heart
            className={`w-5 h-5 transition-colors ${isSaved ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          
        </button>
        {/* Badges */}
        {property.badges.length > 0 &&
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {property.isPremium &&
          <Badge
            variant="warning"
            size="small"
            className="!bg-brand-gold !text-brand-navy font-semibold text-xs">
            
                Premium
              </Badge>
          }
            {property.freeCancellation &&
          <Badge
            variant="success"
            size="small"
            className="!bg-green-100 !text-green-800 font-medium text-xs">
            
                Free Cancellation
              </Badge>
          }
          </div>
        }
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <Link to={`/property/${property.id}`} className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-brand-black truncate group-hover:text-brand-navy transition-colors">
              {property.name}
            </h3>
          </Link>
          {/* Rating */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <div className="bg-brand-navy text-white text-xs font-bold px-1.5 py-0.5 rounded">
              {property.rating}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-brand-gray mb-2">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Star Rating */}
        {property.starRating &&
        <div className="flex items-center gap-0.5 mb-2">
            {Array.from({
            length: property.starRating
          }).map((_, i) =>
          <Star
            key={i}
            className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />

          )}
            <span className="text-xs text-brand-gray ml-1">
              {ratingLabel} · {property.reviewCount.toLocaleString()} reviews
            </span>
          </div>
        }

        {/* Amenities Preview */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {property.amenities.slice(0, 3).map((amenity) =>
          <span
            key={amenity}
            className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
            
              {amenity === 'Free Wi-Fi' && <Wifi className="w-3 h-3" />}
              {amenity}
            </span>
          )}
          {property.amenities.length > 3 &&
          <span className="text-xs text-brand-blue font-medium">
              +{property.amenities.length - 3} more
            </span>
          }
        </div>

        {/* Price */}
        <div className="flex items-end justify-between pt-3 border-t border-gray-100">
          <div>
            {property.breakfastIncluded &&
            <span className="text-xs text-green-700 font-medium block mb-0.5">
                Breakfast included
              </span>
            }
            <div className="flex items-baseline gap-1.5">
              {property.originalPrice &&
              <span className="text-sm text-brand-gray line-through">
                  ${property.originalPrice}
                </span>
              }
              <span className="text-xl font-bold text-brand-black">
                ${property.pricePerNight}
              </span>
              <span className="text-xs text-brand-gray">/night</span>
            </div>
            <span className="text-xs text-brand-gray">
              Includes taxes & fees
            </span>
          </div>
          <Link
            to={`/property/${property.id}`}
            className="text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors">
            
            See availability →
          </Link>
        </div>
      </div>
    </article>);

}


