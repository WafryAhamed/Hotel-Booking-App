import React from 'react';
import { Property } from '../../types';
import {
  Wifi,
  MapPin,
  Utensils,
  ShieldCheckIcon,
  SparklesIcon,
  Users,
  Briefcase,
  Heart,
  Baby } from
'lucide-react';
interface PropertyOverviewProps {
  property: Property;
}
export function PropertyOverview({ property }: PropertyOverviewProps) {
  const highlights = [];
  if (property.rating >= 8.5) {
    highlights.push({
      icon: <SparklesIcon className="w-5 h-5 text-brand-gold" />,
      label: 'Exceptional',
      value: `Rated ${property.rating}/10`
    });
  }
  if (property.amenities.includes('Free Wi-Fi')) {
    highlights.push({
      icon: <Wifi className="w-5 h-5 text-brand-blue" />,
      label: 'Free Wi-Fi',
      value: 'Available throughout'
    });
  }
  if (property.breakfastIncluded) {
    highlights.push({
      icon: <Utensils className="w-5 h-5 text-green-600" />,
      label: 'Breakfast Included',
      value: 'Daily breakfast buffet'
    });
  }
  if (property.freeCancellation) {
    highlights.push({
      icon: <ShieldCheckIcon className="w-5 h-5 text-green-600" />,
      label: 'Free Cancellation',
      value: 'Up to 48h before check-in'
    });
  }
  const travelerTypes: {
    icon: React.ReactNode;
    label: string;
  }[] = [];
  if (property.propertyType === 'resort' || property.propertyType === 'villa') {
    travelerTypes.push({
      icon: <Heart className="w-3.5 h-3.5" />,
      label: 'Couples'
    });
  }
  if (
  property.amenities.some((a) => a.includes('Kids') || a.includes('Family')))
  {
    travelerTypes.push({
      icon: <Baby className="w-3.5 h-3.5" />,
      label: 'Families'
    });
  }
  travelerTypes.push({
    icon: <Users className="w-3.5 h-3.5" />,
    label: 'Groups'
  });
  travelerTypes.push({
    icon: <Briefcase className="w-3.5 h-3.5" />,
    label: 'Business'
  });
  if (property.propertyType === 'hotel' || property.propertyType === 'resort') {
    travelerTypes.push({
      icon: <Heart className="w-3.5 h-3.5" />,
      label: 'Couples'
    });
  }
  // Deduplicate
  const uniqueTravelers = travelerTypes.filter(
    (t, i, arr) => arr.findIndex((x) => x.label === t.label) === i
  );
  return (
    <section aria-labelledby="overview-heading" className="mb-8">
      <h2
        id="overview-heading"
        className="text-xl md:text-2xl font-bold text-brand-black mb-4">
        
        About this property
      </h2>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
        {property.description}
      </p>

      {/* Highlights */}
      {highlights.length > 0 &&
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {highlights.map((h) =>
        <div
          key={h.label}
          className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
          
              <div className="flex-shrink-0 mt-0.5">{h.icon}</div>
              <div>
                <p className="text-sm font-semibold text-brand-black">
                  {h.label}
                </p>
                <p className="text-xs text-brand-gray">{h.value}</p>
              </div>
            </div>
        )}
        </div>
      }

      {/* Ideal for */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-brand-gray uppercase tracking-wide mb-2">
          Ideal for
        </h3>
        <div className="flex flex-wrap gap-2">
          {uniqueTravelers.map((t) =>
          <span
            key={t.label}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy-50 text-brand-navy text-sm font-medium rounded-full">
            
              {t.icon}
              {t.label}
            </span>
          )}
        </div>
      </div>

      {/* Quick location highlights */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-brand-blue" />
          <span>0.5 km from city center</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-brand-blue" />
          <span>18 km from airport</span>
        </div>
      </div>
    </section>);

}


