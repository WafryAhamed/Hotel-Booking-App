import React from 'react';
import { Drawer } from '../ui/Drawer';
import { Button } from '../ui/Button';
import { Checkbox } from '../ui/Checkbox';
import { Slider } from '../ui/Slider';
import { Separator } from '../ui/Separator';
import { Badge } from '../ui/Badge';
import { X, Star } from 'lucide-react';
import { SearchFilters } from '../../types';
import { AMENITY_OPTIONS, PROPERTY_TYPE_OPTIONS } from '../../data/searchData';
interface FilterDrawerMobileProps {
  isOpen: boolean;
  onClose: () => void;
  filters: SearchFilters;
  onUpdateFilter: <K extends keyof SearchFilters>(
  key: K,
  value: SearchFilters[K])
  => void;
  onResetFilters: () => void;
  activeFilterCount: number;
  resultCount: number;
}
export function FilterDrawerMobile({
  isOpen,
  onClose,
  filters,
  onUpdateFilter,
  onResetFilters,
  activeFilterCount,
  resultCount
}: FilterDrawerMobileProps) {
  const handleStarToggle = (star: number) => {
    const current = filters.starRating;
    if (current.includes(star)) {
      onUpdateFilter(
        'starRating',
        current.filter((s) => s !== star)
      );
    } else {
      onUpdateFilter('starRating', [...current, star]);
    }
  };
  const handlePropertyTypeToggle = (type: string) => {
    const current = filters.propertyTypes;
    if (current.includes(type)) {
      onUpdateFilter(
        'propertyTypes',
        current.filter((t) => t !== type)
      );
    } else {
      onUpdateFilter('propertyTypes', [...current, type]);
    }
  };
  const handleAmenityToggle = (amenity: string) => {
    const current = filters.amenities;
    if (current.includes(amenity)) {
      onUpdateFilter(
        'amenities',
        current.filter((a) => a !== amenity)
      );
    } else {
      onUpdateFilter('amenities', [...current, amenity]);
    }
  };
  return (
    <Drawer isOpen={isOpen} onClose={onClose} position="left" size="lg">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-brand-black">Filters</h2>
            {activeFilterCount > 0 &&
            <Badge variant="primary" size="small" shape="circle">
                {activeFilterCount}
              </Badge>
            }
          </div>
          <div className="flex items-center gap-3">
            {activeFilterCount > 0 &&
            <button
              onClick={onResetFilters}
              className="text-sm font-medium text-brand-blue hover:text-brand-navy transition-colors">
              
                Clear all
              </button>
            }
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close filters">
              
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {/* Price Range */}
          <div>
            <h3 className="text-sm font-semibold text-brand-black mb-3">
              Price per night
            </h3>
            <Slider
              min={0}
              max={1000}
              step={10}
              value={filters.priceRange}
              onChange={(val) =>
              onUpdateFilter('priceRange', val as [number, number])
              }
              showLabels={false}
              showMarkers={false} />
            
            <div className="flex items-center justify-between mt-2 text-sm">
              <span className="font-medium">${filters.priceRange[0]}</span>
              <span className="text-brand-gray">—</span>
              <span className="font-medium">${filters.priceRange[1]}+</span>
            </div>
          </div>

          <Separator />

          {/* Star Rating */}
          <div>
            <h3 className="text-sm font-semibold text-brand-black mb-3">
              Star rating
            </h3>
            <div className="flex flex-wrap gap-2">
              {[5, 4, 3, 2, 1].map((star) =>
              <button
                key={star}
                onClick={() => handleStarToggle(star)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg border text-sm font-medium transition-all ${filters.starRating.includes(star) ? 'border-brand-gold bg-gold-50 text-brand-black' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                aria-pressed={filters.starRating.includes(star)}>
                
                  <Star
                  className={`w-4 h-4 ${filters.starRating.includes(star) ? 'fill-brand-gold text-brand-gold' : 'text-gray-400'}`} />
                
                  {star}
                </button>
              )}
            </div>
          </div>

          <Separator />

          {/* Guest Rating */}
          <div>
            <h3 className="text-sm font-semibold text-brand-black mb-3">
              Guest rating
            </h3>
            <div className="space-y-2">
              {[
              {
                min: 9,
                label: 'Superb 9+'
              },
              {
                min: 8,
                label: 'Excellent 8+'
              },
              {
                min: 7,
                label: 'Very Good 7+'
              },
              {
                min: 6,
                label: 'Good 6+'
              }].
              map((option) =>
              <button
                key={option.min}
                onClick={() =>
                onUpdateFilter(
                  'guestRating',
                  filters.guestRating === option.min ? null : option.min
                )
                }
                className={`w-full text-left px-3 py-2 rounded-lg border text-sm transition-all ${filters.guestRating === option.min ? 'border-brand-navy bg-navy-50 text-brand-navy font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                aria-pressed={filters.guestRating === option.min}>
                
                  {option.label}
                </button>
              )}
            </div>
          </div>

          <Separator />

          {/* Property Type */}
          <div>
            <h3 className="text-sm font-semibold text-brand-black mb-3">
              Property type
            </h3>
            <div className="space-y-2.5">
              {PROPERTY_TYPE_OPTIONS.map((type) =>
              <Checkbox
                key={type.value}
                label={type.label}
                checked={filters.propertyTypes.includes(type.value)}
                onChange={() => handlePropertyTypeToggle(type.value)} />

              )}
            </div>
          </div>

          <Separator />

          {/* Amenities */}
          <div>
            <h3 className="text-sm font-semibold text-brand-black mb-3">
              Amenities
            </h3>
            <div className="space-y-2.5">
              {AMENITY_OPTIONS.slice(0, 10).map((amenity) =>
              <Checkbox
                key={amenity}
                label={amenity}
                checked={filters.amenities.includes(amenity)}
                onChange={() => handleAmenityToggle(amenity)} />

              )}
            </div>
          </div>

          <Separator />

          {/* Meals & Flexibility */}
          <div>
            <h3 className="text-sm font-semibold text-brand-black mb-3">
              Meals & flexibility
            </h3>
            <div className="space-y-2.5">
              <Checkbox
                label="Breakfast included"
                checked={filters.breakfastIncluded}
                onChange={() =>
                onUpdateFilter(
                  'breakfastIncluded',
                  !filters.breakfastIncluded
                )
                } />
              
              <Checkbox
                label="Free cancellation"
                checked={filters.freeCancellation}
                onChange={() =>
                onUpdateFilter('freeCancellation', !filters.freeCancellation)
                } />
              
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="border-t border-gray-200 px-5 py-4 bg-white">
          <Button
            variant="primary"
            size="large"
            className="w-full !bg-brand-navy hover:!bg-navy-700"
            onClick={onClose}>
            
            Show {resultCount} properties
          </Button>
        </div>
      </div>
    </Drawer>);

}

