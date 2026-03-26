import React from 'react';
import {
  ShieldCheckIcon,
  Star,
  BadgeCheckIcon,
  CalendarCheckIcon,
  Headphones } from
'lucide-react';
export function TrustSignals() {
  return (
    <section
      className="w-full py-10 md:py-14 bg-brand-navy"
      aria-labelledby="trust-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="trust-heading"
          className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
          
          Why Book with Ceylon Paradise?
        </h2>
        <p className="text-blue-200 text-center mb-10 text-sm md:text-base">
          Trusted by millions of travelers worldwide
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          <TrustItem
            icon={<Star className="w-7 h-7" />}
            title="Verified Reviews"
            description="Real reviews from real guests — no fakes, no filters" />
          
          <TrustItem
            icon={<ShieldCheckIcon className="w-7 h-7" />}
            title="Secure Booking"
            description="Your personal data and payments are always protected" />
          
          <TrustItem
            icon={<BadgeCheckIcon className="w-7 h-7" />}
            title="Best Price Guarantee"
            description="Found it cheaper? We'll match the price" />
          
          <TrustItem
            icon={<CalendarCheckIcon className="w-7 h-7" />}
            title="Flexible Cancellation"
            description="Plans change — most bookings offer free cancellation" />
          
          <TrustItem
            icon={<Headphones className="w-7 h-7" />}
            title="24/7 Support"
            description="Our team is here around the clock to help you" />
          
        </div>
      </div>
    </section>);

}
function TrustItem({
  icon,
  title,
  description




}: {icon: React.ReactNode;title: string;description: string;}) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-brand-gold">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="text-sm text-blue-200 leading-relaxed">{description}</p>
    </div>);

}

