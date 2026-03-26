import React, { lazy, Component } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../../data/mockData';
export function PopularDestinations() {
  return (
    <section
      className="w-full py-10 md:py-14 bg-gray-50"
      aria-labelledby="destinations-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2
              id="destinations-heading"
              className="text-2xl md:text-3xl font-bold text-brand-black">
              
              Popular Destinations
            </h2>
            <p className="text-brand-gray mt-1 text-sm md:text-base">
              Explore our most searched cities and regions
            </p>
          </div>
          <Link
            to="/search"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-navy transition-colors">
            
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Paris */}
          <DestinationCard
            name={DESTINATIONS[0].name}
            country={DESTINATIONS[0].country}
            image={DESTINATIONS[0].image}
            propertyCount={DESTINATIONS[0].propertyCount}
            startingPrice={DESTINATIONS[0].startingPrice} />
          
          {/* Tokyo */}
          <DestinationCard
            name={DESTINATIONS[1].name}
            country={DESTINATIONS[1].country}
            image={DESTINATIONS[1].image}
            propertyCount={DESTINATIONS[1].propertyCount}
            startingPrice={DESTINATIONS[1].startingPrice} />
          
          {/* New York */}
          <DestinationCard
            name={DESTINATIONS[2].name}
            country={DESTINATIONS[2].country}
            image={DESTINATIONS[2].image}
            propertyCount={DESTINATIONS[2].propertyCount}
            startingPrice={DESTINATIONS[2].startingPrice} />
          
          {/* Barcelona */}
          <DestinationCard
            name={DESTINATIONS[3].name}
            country={DESTINATIONS[3].country}
            image={DESTINATIONS[3].image}
            propertyCount={DESTINATIONS[3].propertyCount}
            startingPrice={DESTINATIONS[3].startingPrice} />
          
          {/* Bali */}
          <DestinationCard
            name={DESTINATIONS[4].name}
            country={DESTINATIONS[4].country}
            image={DESTINATIONS[4].image}
            propertyCount={DESTINATIONS[4].propertyCount}
            startingPrice={DESTINATIONS[4].startingPrice} />
          
          {/* London */}
          <DestinationCard
            name={DESTINATIONS[5].name}
            country={DESTINATIONS[5].country}
            image={DESTINATIONS[5].image}
            propertyCount={DESTINATIONS[5].propertyCount}
            startingPrice={DESTINATIONS[5].startingPrice} />
          
        </div>

        <Link
          to="/search"
          className="sm:hidden flex items-center justify-center gap-1 mt-4 text-sm font-semibold text-brand-blue">
          
          View all destinations
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>);

}
function DestinationCard({
  name,
  country,
  image,
  propertyCount,
  startingPrice






}: {name: string;country: string;image: string;propertyCount: number;startingPrice: number;}) {
  return (
    <Link
      to={`/search?dest=${encodeURIComponent(name)}`}
      className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-gray-200">
      
      <img
        src={image}
        alt={`${name}, ${country}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <div className="flex items-center gap-1 text-white/80 text-xs mt-0.5">
          <MapPin className="w-3 h-3" />
          {country}
        </div>
        <div className="flex items-baseline gap-1 mt-2">
          <span className="text-xs text-white/70">From</span>
          <span className="text-sm font-bold text-white">${startingPrice}</span>
          <span className="text-xs text-white/70">/night</span>
        </div>
        <span className="text-xs text-white/60 mt-0.5 block">
          {propertyCount.toLocaleString()} properties
        </span>
      </div>
    </Link>);

}

