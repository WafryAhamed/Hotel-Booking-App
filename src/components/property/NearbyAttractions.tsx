import React from 'react';
import {
  MapPin,
  TrainFrontIcon,
  Plane,
  WavesIcon,
  ShoppingBagIcon,
  LandmarkIcon,
  TreesIcon,
  Utensils,
  Building } from
'lucide-react';
import { NEARBY_ATTRACTIONS } from '../../data/propertyDetailData';
const ATTRACTION_ICONS: Record<string, React.ReactNode> = {
  building: <Building className="w-4 h-4" />,
  train: <TrainFrontIcon className="w-4 h-4" />,
  plane: <Plane className="w-4 h-4" />,
  waves: <WavesIcon className="w-4 h-4" />,
  'shopping-bag': <ShoppingBagIcon className="w-4 h-4" />,
  landmark: <LandmarkIcon className="w-4 h-4" />,
  trees: <TreesIcon className="w-4 h-4" />,
  utensils: <Utensils className="w-4 h-4" />
};
export function NearbyAttractions() {
  return (
    <section aria-labelledby="nearby-heading" className="mb-8">
      <h2
        id="nearby-heading"
        className="text-xl md:text-2xl font-bold text-brand-black mb-4">
        
        What's Nearby
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Map placeholder */}
        <div className="lg:w-1/2 h-64 lg:h-auto bg-gray-100 rounded-xl border border-gray-200 relative overflow-hidden">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(14,53,140,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(14,53,140,0.15) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          
          {/* Simulated roads */}
          <div className="absolute top-1/3 left-0 right-0 h-[2px] bg-gray-300" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gray-300" />
          {/* Property pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-brand-navy text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-lg relative">
              <MapPin className="w-4 h-4 inline mr-1" />
              Property Location
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-navy rotate-45" />
            </div>
          </div>
          {/* Overlay text */}
          <div className="absolute bottom-3 right-3">
            <span className="bg-white/90 backdrop-blur-sm text-xs text-brand-gray px-2 py-1 rounded">
              Interactive map coming soon
            </span>
          </div>
        </div>

        {/* Attractions list */}
        <div className="lg:w-1/2">
          <div className="space-y-3">
            {NEARBY_ATTRACTIONS.map((attraction) =>
            <div
              key={attraction.name}
              className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
              
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-navy-50 flex items-center justify-center text-brand-navy flex-shrink-0">
                    {ATTRACTION_ICONS[attraction.icon] ||
                  <MapPin className="w-4 h-4" />
                  }
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-black">
                      {attraction.name}
                    </p>
                    <p className="text-xs text-brand-gray capitalize">
                      {attraction.type}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-brand-navy">
                  {attraction.distance}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}


