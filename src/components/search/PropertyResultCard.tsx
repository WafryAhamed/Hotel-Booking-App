import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import {
  Heart,
  Star,
  MapPin,
  Wifi,
  Utensils,
  Car,
  WavesIcon,
  Dumbbell,
  Wind,
  AlertTriangle } from
'lucide-react';
import { Property } from '../../types';
interface PropertyResultCardProps {
  property: Property;
  isSaved: boolean;
  onToggleSave: () => void;
}
const amenityIcons: Record<string, React.ReactNode> = {
  'Free Wi-Fi': <Wifi className="w-3 h-3" />,
  Restaurant: <Utensils className="w-3 h-3" />,
  Parking: <Car className="w-3 h-3" />,
  'Free Parking': <Car className="w-3 h-3" />,
  Pool: <WavesIcon className="w-3 h-3" />,
  'Private Pool': <WavesIcon className="w-3 h-3" />,
  'Fitness Center': <Dumbbell className="w-3 h-3" />,
  'Air Conditioning': <Wind className="w-3 h-3" />
};
export function PropertyResultCard({
  property,
  isSaved,
  onToggleSave
}: PropertyResultCardProps) {
  const ratingLabel =
  property.rating >= 9 ?
  'Superb' :
  property.rating >= 8 ?
  'Excellent' :
  property.rating >= 7 ?
  'Very Good' :
  'Good';
  const minRoomAvailability =
  property.roomTypes.length > 0 ?
  Math.min(...property.roomTypes.map((r) => r.availableRooms)) :
  5;
  return (
    <article className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row">
        {/* Image Section */}
        <div className="relative sm:w-[280px] lg:w-[300px] flex-shrink-0">
          <Link to={`/property/${property.id}`} className="block">
            <div className="aspect-[16/10] sm:aspect-auto sm:h-full overflow-hidden">
              <img
                src={property.images[0]}
                alt={property.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy" />
              
            </div>
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
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {property.isPremium &&
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-brand-gold text-brand-navy">
                Premium
              </span>
            }
            {property.badges.
            filter(
              (b) => b !== 'Free Cancellation' && b !== 'Breakfast Included'
            ).
            slice(0, 2).
            map((badge) =>
            <span
              key={badge}
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white/90 backdrop-blur-sm text-brand-black">
              
                  {badge}
                </span>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col sm:flex-row min-w-0">
          {/* Main Info */}
          <div className="flex-1 p-4 min-w-0">
            {/* Header */}
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="min-w-0 flex-1">
                <Link to={`/property/${property.id}`}>
                  <h3 className="text-base font-bold text-brand-black truncate group-hover:text-brand-navy transition-colors">
                    {property.name}
                  </h3>
                </Link>
              </div>
              {/* Rating Badge - Desktop */}
              <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
                <div className="text-right">
                  <span className="text-xs font-medium text-brand-black block">
                    {ratingLabel}
                  </span>
                  <span className="text-xs text-brand-gray">
                    {property.reviewCount.toLocaleString()} reviews
                  </span>
                </div>
                <div className="bg-brand-navy text-white text-sm font-bold px-2 py-1 rounded-lg rounded-bl-none min-w-[36px] text-center">
                  {property.rating}
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1 text-sm text-brand-blue mb-1.5">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate hover:underline cursor-pointer">
                {property.location}
              </span>
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
                  {property.propertyType.charAt(0).toUpperCase() +
                property.propertyType.slice(1)}
                </span>
              </div>
            }

            {/* Description */}
            <p className="text-sm text-gray-600 mb-2.5 line-clamp-2 hidden sm:block">
              {property.shortDescription}
            </p>

            {/* Amenities */}
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {property.amenities.slice(0, 5).map((amenity) =>
              <span
                key={amenity}
                className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded">
                
                  {amenityIcons[amenity] || null}
                  {amenity}
                </span>
              )}
              {property.amenities.length > 5 &&
              <span className="text-xs text-brand-blue font-medium px-1">
                  +{property.amenities.length - 5} more
                </span>
              }
            </div>

            {/* Room availability urgency */}
            {minRoomAvailability <= 3 && minRoomAvailability > 0 &&
            <div className="flex items-center gap-1 text-xs font-medium text-red-600">
                <AlertTriangle className="w-3.5 h-3.5" />
                Only {minRoomAvailability} room
                {minRoomAvailability !== 1 ? 's' : ''} left at this price!
              </div>
            }

            {/* Rating Badge - Mobile */}
            <div className="flex items-center gap-2 mt-2 sm:hidden">
              <div className="bg-brand-navy text-white text-xs font-bold px-1.5 py-0.5 rounded">
                {property.rating}
              </div>
              <span className="text-xs font-medium text-brand-black">
                {ratingLabel}
              </span>
              <span className="text-xs text-brand-gray">
                · {property.reviewCount.toLocaleString()} reviews
              </span>
            </div>
          </div>

          {/* Price Column */}
          <div className="sm:w-[180px] lg:w-[200px] flex-shrink-0 p-4 sm:pl-0 sm:border-l border-t sm:border-t-0 border-gray-100 flex flex-row sm:flex-col items-end sm:items-end justify-between sm:justify-between">
            <div className="text-right">
              {/* Badges */}
              <div className="flex flex-col items-end gap-1 mb-2">
                {property.freeCancellation &&
                <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded">
                    Free cancellation
                  </span>
                }
                {property.breakfastIncluded &&
                <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded">
                    Breakfast included
                  </span>
                }
              </div>

              {/* Price */}
              <div className="mb-1">
                {property.originalPrice &&
                <span className="text-sm text-brand-gray line-through block">
                    ${property.originalPrice}
                  </span>
                }
                <span className="text-2xl font-bold text-brand-black">
                  ${property.pricePerNight}
                </span>
                <span className="text-xs text-brand-gray block">/night</span>
              </div>
              <p className="text-xs text-brand-gray mb-3">
                Includes taxes & fees
              </p>
            </div>

            <Link to={`/property/${property.id}`} className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="small"
                className="w-full sm:w-auto !bg-brand-navy hover:!bg-navy-700 whitespace-nowrap">
                
                See availability
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>);

}



