import React from 'react';
import { MapPin } from 'lucide-react';
import { Property } from '../../types';
interface SearchMapProps {
  properties: Property[];
}
const PIN_POSITIONS = [
{
  top: '20%',
  left: '30%'
},
{
  top: '35%',
  left: '55%'
},
{
  top: '50%',
  left: '25%'
},
{
  top: '15%',
  left: '65%'
},
{
  top: '60%',
  left: '45%'
},
{
  top: '40%',
  left: '75%'
},
{
  top: '70%',
  left: '35%'
},
{
  top: '25%',
  left: '45%'
},
{
  top: '55%',
  left: '60%'
},
{
  top: '45%',
  left: '15%'
},
{
  top: '30%',
  left: '80%'
},
{
  top: '65%',
  left: '70%'
}];

export function SearchMap({ properties }: SearchMapProps) {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-0 bg-gray-100 rounded-xl border border-gray-200 relative overflow-hidden">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
          'linear-gradient(rgba(126,128,138,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(126,128,138,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      

      {/* Simulated roads */}
      <div className="absolute top-0 bottom-0 left-[40%] w-[2px] bg-gray-300/60" />
      <div className="absolute left-0 right-0 top-[45%] h-[2px] bg-gray-300/60" />
      <div
        className="absolute top-0 bottom-0 left-[20%] w-[3px] bg-gray-300/40"
        style={{
          transform: 'rotate(15deg)',
          transformOrigin: 'center'
        }} />
      
      <div
        className="absolute left-0 right-0 top-[25%] h-[3px] bg-gray-300/40"
        style={{
          transform: 'rotate(-5deg)',
          transformOrigin: 'center'
        }} />
      

      {/* Property Pins */}
      {properties.slice(0, 12).map((property, index) => {
        const pos = PIN_POSITIONS[index % PIN_POSITIONS.length];
        return (
          <div
            key={property.id}
            className="absolute group cursor-pointer z-10"
            style={{
              top: pos.top,
              left: pos.left
            }}>
            
            {/* Price Pin */}
            <div className="relative">
              <div className="bg-white border-2 border-brand-navy text-brand-navy text-xs font-bold px-2 py-1 rounded-full shadow-md hover:bg-brand-navy hover:text-white transition-colors whitespace-nowrap">
                ${property.pricePerNight}
              </div>
              {/* Pin tail */}
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-brand-navy mx-auto -mt-[1px]" />
            </div>

            {/* Hover tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-20">
              <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-2 w-[200px]">
                <img
                  src={property.images[0]}
                  alt={property.name}
                  className="w-full h-24 object-cover rounded mb-1.5" />
                
                <p className="text-xs font-bold text-brand-black truncate">
                  {property.name}
                </p>
                <p className="text-xs text-brand-gray">{property.location}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs font-bold">
                    ${property.pricePerNight}/night
                  </span>
                  <span className="bg-brand-navy text-white text-xs font-bold px-1 py-0.5 rounded">
                    {property.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>);

      })}

      {/* Map attribution placeholder */}
      <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm rounded px-2 py-1 text-xs text-brand-gray flex items-center gap-1">
        <MapPin className="w-3 h-3" />
        Interactive map · Drag to explore
      </div>

      {/* Zoom controls placeholder */}
      <div className="absolute top-3 right-3 flex flex-col gap-1">
        <button className="w-8 h-8 bg-white rounded-lg shadow border border-gray-200 flex items-center justify-center text-brand-black hover:bg-gray-50 text-lg font-medium">
          +
        </button>
        <button className="w-8 h-8 bg-white rounded-lg shadow border border-gray-200 flex items-center justify-center text-brand-black hover:bg-gray-50 text-lg font-medium">
          −
        </button>
      </div>
    </div>);

}

