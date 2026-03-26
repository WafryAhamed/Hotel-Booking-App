import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Checkbox } from '../ui/Checkbox';
import { Slider } from '../ui/Slider';
import { Separator } from '../ui/Separator';
import { Badge } from '../ui/Badge';
import { ChevronDown, ChevronUp, X, Star } from 'lucide-react';
import { SearchFilters } from '../../types';
import { AMENITY_OPTIONS, PROPERTY_TYPE_OPTIONS } from '../../data/searchData';
interface FilterSidebarProps {
  filters: SearchFilters;
  onUpdateFilter: <K extends keyof SearchFilters>(
  key: K,
  value: SearchFilters[K])
  => void;
  onResetFilters: () => void;
  activeFilterCount: number;
}
function FilterSection({
  title,
  children,
  defaultOpen = true




}: {title: string;children: React.ReactNode;defaultOpen?: boolean;}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left group"
        aria-expanded={isOpen}>
        
        <h3 className="text-sm font-semibold text-brand-black">{title}</h3>
        {isOpen ?
        <ChevronUpIcon className="w-4 h-4 text-brand-gray group-hover:text-brand-black transition-colors" /> :

        <ChevronDown className="w-4 h-4 text-brand-gray group-hover:text-brand-black transition-colors" />
        }
      </button>
      {isOpen && <div className="mt-3">{children}</div>}
    </div>);

}
export function FilterSidebar({
  filters,
  onUpdateFilter,
  onResetFilters,
  activeFilterCount
}: FilterSidebarProps) {
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
    <aside className="w-[280px] flex-shrink-0" aria-label="Search filters">
      <div className="sticky top-[120px] bg-white border border-gray-200 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-bold text-brand-black">Filters</h2>
            {activeFilterCount > 0 &&
            <Badge variant="primary" size="small" shape="circle">
                {activeFilterCount}
              </Badge>
            }
          </div>
          {activeFilterCount > 0 &&
          <button
            onClick={onResetFilters}
            className="text-xs font-medium text-brand-blue hover:text-brand-navy transition-colors flex items-center gap-1">
            
              <X className="w-4 h-4" />
              Clear all
            </button>
          }
        </div>

        <div className="px-4 max-h-[calc(100vh-180px)] overflow-y-auto">
          {/* Price Range */}
          <FilterSection title="Price per night">
            <div className="px-1">
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
                <span className="font-medium text-brand-black">
                  ${filters.priceRange[0]}
                </span>
                <span className="text-brand-gray">—</span>
                <span className="font-medium text-brand-black">
                  ${filters.priceRange[1]}+
                </span>
              </div>
            </div>
          </FilterSection>

          <Separator />

          {/* Star Rating */}
          <FilterSection title="Star rating">
            <div className="flex flex-wrap gap-2">
              {[5, 4, 3, 2, 1].map((star) =>
              <button
                key={star}
                onClick={() => handleStarToggle(star)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${filters.starRating.includes(star) ? 'border-brand-gold bg-gold-50 text-brand-black' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                aria-pressed={filters.starRating.includes(star)}
                aria-label={`${star} star rating`}>
                
                  <Star
                  className={`w-3.5 h-3.5 ${filters.starRating.includes(star) ? 'fill-brand-gold text-brand-gold' : 'text-gray-400'}`} />
                
                  {star}
                </button>
              )}
            </div>
          </FilterSection>

          <Separator />

          {/* Guest Rating */}
          <FilterSection title="Guest rating">
            <div className="space-y-2">
              {[
              {
                min: 9,
                label: 'Superb',
                sublabel: '9+'
              },
              {
                min: 8,
                label: 'Excellent',
                sublabel: '8+'
              },
              {
                min: 7,
                label: 'Very Good',
                sublabel: '7+'
              },
              {
                min: 6,
                label: 'Good',
                sublabel: '6+'
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
                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg border text-sm transition-all ${filters.guestRating === option.min ? 'border-brand-navy bg-navy-50 text-brand-navy font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                aria-pressed={filters.guestRating === option.min}>
                
                  <span>{option.label}</span>
                  <span
                  className={`text-xs font-bold px-2 py-0.5 rounded ${filters.guestRating === option.min ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-600'}`}>
                  
                    {option.sublabel}
                  </span>
                </button>
              )}
            </div>
          </FilterSection>

          <Separator />

          {/* Property Type */}
          <FilterSection title="Property type">
            <div className="space-y-2">
              {PROPERTY_TYPE_OPTIONS.map((type) =>
              <Checkbox
                key={type.value}
                label={type.label}
                checked={filters.propertyTypes.includes(type.value)}
                onChange={() => handlePropertyTypeToggle(type.value)}
                size="sm" />

              )}
            </div>
          </FilterSection>

          <Separator />

          {/* Amenities */}
          <FilterSection title="Amenities" defaultOpen={false}>
            <div className="space-y-2">
              {AMENITY_OPTIONS.slice(0, 10).map((amenity) =>
              <Checkbox
                key={amenity}
                label={amenity}
                checked={filters.amenities.includes(amenity)}
                onChange={() => handleAmenityToggle(amenity)}
                size="sm" />

              )}
            </div>
          </FilterSection>

          <Separator />

          {/* Meal Options */}
          <FilterSection title="Meals">
            <Checkbox
              label="Breakfast included"
              checked={filters.breakfastIncluded}
              onChange={() =>
              onUpdateFilter('breakfastIncluded', !filters.breakfastIncluded)
              }
              size="sm" />
            
          </FilterSection>

          <Separator />

          {/* Booking Flexibility */}
          <FilterSection title="Booking flexibility">
            <div className="space-y-2">
              <Checkbox
                label="Free cancellation"
                checked={filters.freeCancellation}
                onChange={() =>
                onUpdateFilter('freeCancellation', !filters.freeCancellation)
                }
                size="sm" />
              
            </div>
          </FilterSection>

          <div className="h-4" />
        </div>
      </div>
    </aside>);

}

