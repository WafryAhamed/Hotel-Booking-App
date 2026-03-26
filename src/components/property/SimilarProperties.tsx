import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../../types';
import { Heart, Star, MapPin } from 'lucide-react';
interface SimilarPropertiesProps {
  properties: Property[];
  savedIds: Set<string>;
  onToggleSave: (id: string) => void;
}
export function SimilarProperties({
  properties,
  savedIds,
  onToggleSave
}: SimilarPropertiesProps) {
  if (properties.length === 0) return null;
  return (
    <section aria-labelledby="similar-heading" className="mb-8">
      <h2
        id="similar-heading"
        className="text-xl md:text-2xl font-bold text-brand-black mb-4">
        
        Similar properties you might like
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
        {properties.slice(0, 6).map((property) => {
          const isSaved = savedIds.has(property.id);
          const ratingLabel =
          property.rating >= 9 ?
          'Superb' :
          property.rating >= 8 ?
          'Excellent' :
          'Very Good';
          return (
            <article
              key={property.id}
              className="flex-shrink-0 w-64 snap-start bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
              
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Link to={`/property/${property.id}`}>
                  <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" />
                  
                </Link>
                <button
                  onClick={() => onToggleSave(property.id)}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                  aria-label={isSaved ? 'Remove from saved' : 'Save property'}>
                  
                  <Heart
                    className={`w-4 h-4 ${isSaved ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  
                </button>
              </div>

              {/* Content */}
              <div className="p-3">
                <Link to={`/property/${property.id}`}>
                  <h3 className="text-sm font-bold text-brand-black truncate group-hover:text-brand-navy transition-colors">
                    {property.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 text-xs text-brand-gray mt-1 mb-2">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{property.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="bg-brand-navy text-white text-xs font-bold px-1.5 py-0.5 rounded">
                      {property.rating}
                    </span>
                    <span className="text-xs text-brand-gray">
                      {ratingLabel}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-bold text-brand-black">
                      ${property.pricePerNight}
                    </span>
                    <span className="text-xs text-brand-gray">/night</span>
                  </div>
                </div>
              </div>
            </article>);

        })}
      </div>
    </section>);

}

