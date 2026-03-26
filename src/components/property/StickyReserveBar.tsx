import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../../types';
import { Button } from '../ui/Button';
import { Calendar, Users, Star } from 'lucide-react';
interface StickyReserveBarProps {
  property: Property;
}
export function StickyReserveBar({ property }: StickyReserveBarProps) {
  const lowestPrice =
  property.roomTypes.length > 0 ?
  Math.min(...property.roomTypes.map((r) => r.pricePerNight)) :
  property.pricePerNight;
  const nights = 3; // Default mock nights
  const totalEstimate = lowestPrice * nights;
  return (
    <>
      {/* Desktop Sticky Sidebar Card */}
      <div className="hidden lg:block sticky top-20">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-5">
          {/* Price */}
          <div className="mb-4">
            <div className="flex items-baseline gap-1.5">
              {property.originalPrice &&
              <span className="text-sm text-brand-gray line-through">
                  ${property.originalPrice}
                </span>
              }
              <span className="text-3xl font-bold text-brand-black">
                ${lowestPrice}
              </span>
              <span className="text-sm text-brand-gray">/night</span>
            </div>
            <span className="text-xs text-brand-gray">
              Includes taxes & fees
            </span>
          </div>

          {/* Date & Guest selectors */}
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
            <div className="grid grid-cols-2 divide-x divide-gray-200">
              <button className="p-3 text-left hover:bg-gray-50 transition-colors">
                <span className="text-xs font-semibold text-brand-black uppercase block">
                  Check-in
                </span>
                <span className="text-sm text-brand-gray flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Select date
                </span>
              </button>
              <button className="p-3 text-left hover:bg-gray-50 transition-colors">
                <span className="text-xs font-semibold text-brand-black uppercase block">
                  Check-out
                </span>
                <span className="text-sm text-brand-gray flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Select date
                </span>
              </button>
            </div>
            <button className="w-full p-3 text-left border-t border-gray-200 hover:bg-gray-50 transition-colors">
              <span className="text-xs font-semibold text-brand-black uppercase block">
                Guests
              </span>
              <span className="text-sm text-brand-gray flex items-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5" />2 adults · 1 room
              </span>
            </button>
          </div>

          {/* Price breakdown */}
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">
                ${lowestPrice} × {nights} nights
              </span>
              <span className="text-brand-black font-medium">
                ${totalEstimate}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Taxes & fees</span>
              <span className="text-brand-black font-medium">
                ${Math.round(totalEstimate * 0.12)}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-2 flex justify-between">
              <span className="font-bold text-brand-black">Total</span>
              <span className="font-bold text-brand-black text-lg">
                ${totalEstimate + Math.round(totalEstimate * 0.12)}
              </span>
            </div>
          </div>

          {/* Reserve button */}
          <Link to={`/booking?property=${property.id}`} className="block">
            <Button
              variant="primary"
              size="large"
              className="w-full !bg-brand-navy hover:!bg-navy-700 !text-white !font-bold !text-base">
              
              Reserve Now
            </Button>
          </Link>

          {/* Trust note */}
          <p className="text-xs text-center text-brand-gray mt-3">
            You won't be charged yet
          </p>

          {/* Rating mini */}
          <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-0.5">
              {property.starRating &&
              Array.from({
                length: property.starRating
              }).map((_, i) =>
              <Star
                key={i}
                className="w-3 h-3 fill-brand-gold text-brand-gold" />

              )}
            </div>
            <span className="text-xs text-brand-gray">
              {property.rating}/10 · {property.reviewCount.toLocaleString()}{' '}
              reviews
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
          <div>
            <div className="flex items-baseline gap-1">
              {property.originalPrice &&
              <span className="text-xs text-brand-gray line-through">
                  ${property.originalPrice}
                </span>
              }
              <span className="text-xl font-bold text-brand-black">
                ${lowestPrice}
              </span>
              <span className="text-xs text-brand-gray">/night</span>
            </div>
            <span className="text-xs text-brand-gray">
              Includes taxes & fees
            </span>
          </div>
          <Link to={`/booking?property=${property.id}`}>
            <Button
              variant="primary"
              size="large"
              className="!bg-brand-navy hover:!bg-navy-700 !text-white !font-bold !px-8">
              
              Reserve
            </Button>
          </Link>
        </div>
      </div>
    </>);

}

