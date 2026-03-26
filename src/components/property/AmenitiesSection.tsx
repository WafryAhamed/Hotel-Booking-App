import React, { useState } from 'react';
import { Dialog } from '../ui/Dialog';
import { Button } from '../ui/Button';
import { Separator } from '../ui/Separator';
import {
  Wifi,
  Tv,
  Wind,
  Shield,
  BedDouble,
  Bath,
  Utensils,
  Wine,
  Bell,
  Coffee,
  Dumbbell,
  Waves,
  Sparkles,
  HeartPulse,
  Car,
  ParkingCircle,
  Plane,
  Bike,
  Baby,
  Users,
  Briefcase,
  Printer,
  Accessibility,
  Building,
  ChevronDown,
  ChevronUp,
  Check } from
'lucide-react';
import { PROPERTY_AMENITIES_GROUPED } from '../../data/propertyDetailData';
const ICON_MAP: Record<string, React.ReactNode> = {
  'Free Wi-Fi': <Wifi className="w-4 h-4" />,
  'Air Conditioning': <Wind className="w-4 h-4" />,
  'Flat-screen TV': <Tv className="w-4 h-4" />,
  Safe: <Shield className="w-4 h-4" />,
  Desk: <Briefcase className="w-4 h-4" />,
  Wardrobe: <BedDouble className="w-4 h-4" />,
  'Private Bathroom': <Bath className="w-4 h-4" />,
  'Bathrobe': <Sparkles className="w-4 h-4" />,
  Restaurant: <Utensils className="w-4 h-4" />,
  Bar: <Wine className="w-4 h-4" />,
  'Room Service': <Bell className="w-4 h-4" />,
  'Coffee Machine': <Coffee className="w-4 h-4" />,
  'Swimming Pool': <Waves className="w-4 h-4" />,
  'Fitness Center': <Dumbbell className="w-4 h-4" />,
  'Spa & Wellness Center': <HeartPulse className="w-4 h-4" />,
  'Free Parking': <ParkingCircle className="w-4 h-4" />,
  'Airport Shuttle': <Plane className="w-4 h-4" />,
  'Bicycle Rental': <Bike className="w-4 h-4" />,
  'Car Rental Desk': <Car className="w-4 h-4" />,
  'Kids Club': <Baby className="w-4 h-4" />,
  'Family Rooms': <Users className="w-4 h-4" />,
  'Business Center': <Briefcase className="w-4 h-4" />,
  'Meeting Rooms': <Building className="w-4 h-4" />,
  'Printer Access': <Printer className="w-4 h-4" />,
  'Wheelchair Accessible': <Accessibility className="w-4 h-4" />,
  Elevator: <Building className="w-4 h-4" />
};
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Room: <BedDouble className="w-5 h-5" />,
  Bathroom: <Bath className="w-5 h-5" />,
  'Food & Dining': <Utensils className="w-5 h-5" />,
  'Wellness & Recreation': <Dumbbell className="w-5 h-5" />,
  'Transport & Parking': <Car className="w-5 h-5" />,
  Family: <Baby className="w-5 h-5" />,
  Business: <Briefcase className="w-5 h-5" />,
  Accessibility: <Accessibility className="w-5 h-5" />
};
interface AmenitiesSectionProps {
  propertyAmenities: string[];
}
export function AmenitiesSection({ propertyAmenities }: AmenitiesSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(['Room', 'Bathroom'])
  );
  const toggleGroup = (category: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };
  // Show first 3 groups in the main view
  const visibleGroups = PROPERTY_AMENITIES_GROUPED.slice(0, 3);
  return (
    <section aria-labelledby="amenities-heading" className="mb-8">
      <h2
        id="amenities-heading"
        className="text-xl md:text-2xl font-bold text-brand-black mb-4">
        
        Amenities
      </h2>

      {/* Quick amenity chips from property data */}
      <div className="flex flex-wrap gap-2 mb-6">
        {propertyAmenities.map((amenity) =>
        <span
          key={amenity}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 text-sm text-gray-700 rounded-full">
          
            {ICON_MAP[amenity] ||
          <CheckIcon className="w-3.5 h-3.5 text-green-600" />
          }
            {amenity}
          </span>
        )}
      </div>

      {/* Grouped amenities preview */}
      <div className="space-y-3">
        {visibleGroups.map((group) => {
          const isExpanded = expandedGroups.has(group.category);
          return (
            <div
              key={group.category}
              className="border border-gray-200 rounded-lg overflow-hidden">
              
              <button
                onClick={() => toggleGroup(group.category)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                aria-expanded={isExpanded}>
                
                <div className="flex items-center gap-2.5">
                  <span className="text-brand-navy">
                    {CATEGORY_ICONS[group.category] ||
                    <CheckIcon className="w-5 h-5" />
                    }
                  </span>
                  <span className="font-semibold text-brand-black text-sm">
                    {group.category}
                  </span>
                  <span className="text-xs text-brand-gray">
                    ({group.items.length})
                  </span>
                </div>
                {isExpanded ?
                <ChevronUpIcon className="w-4 h-4 text-brand-gray" /> :

                <ChevronDown className="w-4 h-4 text-brand-gray" />
                }
              </button>
              {isExpanded &&
              <div className="px-4 pb-3">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {group.items.map((item) =>
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-700 py-1">
                    
                        {ICON_MAP[item] ||
                    <CheckIcon className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                    }
                        <span>{item}</span>
                      </div>
                  )}
                  </div>
                </div>
              }
            </div>);

        })}
      </div>

      {/* Show all button */}
      <Button
        variant="secondary"
        size="medium"
        onClick={() => setShowAll(true)}
        className="mt-4">
        
        Show all amenities
      </Button>

      {/* Full amenities modal */}
      <Dialog isOpen={showAll} onClose={() => setShowAll(false)} size="lg">
        <div className="p-6">
          <h3 className="text-xl font-bold text-brand-black mb-6">
            All Amenities
          </h3>
          <div className="space-y-6 max-h-[70vh] overflow-y-auto">
            {PROPERTY_AMENITIES_GROUPED.map((group, idx) =>
            <div key={group.category}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-brand-navy">
                    {CATEGORY_ICONS[group.category]}
                  </span>
                  <h4 className="font-semibold text-brand-black">
                    {group.category}
                  </h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {group.items.map((item) =>
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-700 py-1">
                  
                      {ICON_MAP[item] ||
                  <CheckIcon className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                  }
                      <span>{item}</span>
                    </div>
                )}
                </div>
                {idx < PROPERTY_AMENITIES_GROUPED.length - 1 &&
              <Separator className="mt-4" />
              }
              </div>
            )}
          </div>
        </div>
      </Dialog>
    </section>);

}





