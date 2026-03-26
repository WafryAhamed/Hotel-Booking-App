import React from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ArrowRight } from 'lucide-react';
import { PROMO_OFFERS } from '../../data/mockData';
export function PromoBanners() {
  return (
    <section className="w-full py-10 md:py-14" aria-labelledby="promo-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="promo-heading"
          className="text-2xl md:text-3xl font-bold text-brand-black mb-6">
          
          Special Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Offer 1 */}
          <div className="relative group rounded-xl overflow-hidden h-64 md:h-72">
            <img
              src={PROMO_OFFERS[0].image}
              alt={PROMO_OFFERS[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <Badge
                variant="warning"
                size="small"
                className="!bg-brand-gold !text-brand-navy font-bold">
                
                Save {PROMO_OFFERS[0].discount}
              </Badge>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-xl font-bold text-white mb-1">
                {PROMO_OFFERS[0].title}
              </h3>
              <p className="text-sm text-white/80 mb-3">
                {PROMO_OFFERS[0].subtitle}
              </p>
              <Button
                variant="primary"
                size="small"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="!bg-white !text-brand-navy hover:!bg-gray-100">
                
                {PROMO_OFFERS[0].ctaText}
              </Button>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="relative group rounded-xl overflow-hidden h-64 md:h-72">
            <img
              src={PROMO_OFFERS[1].image}
              alt={PROMO_OFFERS[1].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <Badge
                variant="warning"
                size="small"
                className="!bg-brand-gold !text-brand-navy font-bold">
                
                Save {PROMO_OFFERS[1].discount}
              </Badge>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-xl font-bold text-white mb-1">
                {PROMO_OFFERS[1].title}
              </h3>
              <p className="text-sm text-white/80 mb-3">
                {PROMO_OFFERS[1].subtitle}
              </p>
              <Button
                variant="primary"
                size="small"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="!bg-white !text-brand-navy hover:!bg-gray-100">
                
                {PROMO_OFFERS[1].ctaText}
              </Button>
            </div>
          </div>

          {/* Offer 3 */}
          <div className="relative group rounded-xl overflow-hidden h-64 md:h-72">
            <img
              src={PROMO_OFFERS[2].image}
              alt={PROMO_OFFERS[2].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <Badge
                variant="warning"
                size="small"
                className="!bg-brand-gold !text-brand-navy font-bold">
                
                From {PROMO_OFFERS[2].discount}
              </Badge>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-xl font-bold text-white mb-1">
                {PROMO_OFFERS[2].title}
              </h3>
              <p className="text-sm text-white/80 mb-3">
                {PROMO_OFFERS[2].subtitle}
              </p>
              <Button
                variant="primary"
                size="small"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="!bg-white !text-brand-navy hover:!bg-gray-100">
                
                {PROMO_OFFERS[2].ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
