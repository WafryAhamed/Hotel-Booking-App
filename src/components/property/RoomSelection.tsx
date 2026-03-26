import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RoomType } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import {
  BedDouble,
  Users,
  MaximizeIcon,
  Eye,
  MinusIcon,
  Plus,
  AlertTriangle,
  CheckIcon,
  X } from
'lucide-react';
interface RoomSelectionProps {
  rooms: RoomType[];
  propertyId: string;
  propertyName: string;
}
export function RoomSelection({
  rooms,
  propertyId,
  propertyName
}: RoomSelectionProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const updateQuantity = (roomId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[roomId] || 0;
      const next = Math.max(0, Math.min(current + delta, 10));
      return {
        ...prev,
        [roomId]: next
      };
    });
  };
  if (rooms.length === 0) {
    return (
      <section aria-labelledby="rooms-heading" className="mb-8">
        <h2
          id="rooms-heading"
          className="text-xl md:text-2xl font-bold text-brand-black mb-4">
          
          Available Rooms
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-brand-gray">
            Room information is not available for this property.
          </p>
        </div>
      </section>);

  }
  const selectedRoom = Object.entries(quantities).find(([_, qty]) => qty > 0);
  return (
    <section aria-labelledby="rooms-heading" className="mb-8">
      <h2
        id="rooms-heading"
        className="text-xl md:text-2xl font-bold text-brand-black mb-4">
        
        Available Rooms
      </h2>

      <div className="space-y-4">
        {rooms.map((room) => {
          const qty = quantities[room.id] || 0;
          const isFreeCancellation = room.cancellationPolicy.
          toLowerCase().
          includes('free');
          return (
            <article
              key={room.id}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white">
              
              <div className="flex flex-col md:flex-row">
                {/* Room Image */}
                <div className="md:w-48 lg:w-56 flex-shrink-0">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-40 md:h-full object-cover" />
                  
                </div>

                {/* Room Details */}
                <div className="flex-1 p-4 md:p-5">
                  <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                    {/* Left: Room info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-brand-black mb-2">
                        {room.name}
                      </h3>

                      {/* Room specs */}
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <BedDouble className="w-4 h-4 text-brand-gray" />
                          {room.bedConfig}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-brand-gray" />
                          Up to {room.maxOccupancy} guests
                        </span>
                        <span className="flex items-center gap-1">
                          <MaximizeIcon className="w-4 h-4 text-brand-gray" />
                          {room.sizeSqm} m²
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4 text-brand-gray" />
                          {room.viewType}
                        </span>
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {room.amenities.slice(0, 5).map((amenity) =>
                        <span
                          key={amenity}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          
                            {amenity}
                          </span>
                        )}
                        {room.amenities.length > 5 &&
                        <span className="text-xs text-brand-blue font-medium">
                            +{room.amenities.length - 5} more
                          </span>
                        }
                      </div>

                      {/* Policies */}
                      <div className="flex flex-wrap gap-3 text-xs">
                        <span
                          className={`flex items-center gap-1 font-medium ${isFreeCancellation ? 'text-green-700' : 'text-brand-gray'}`}>
                          
                          {isFreeCancellation ?
                          <CheckIcon className="w-3.5 h-3.5" /> :

                          <X className="w-3.5 h-3.5" />
                          }
                          {room.cancellationPolicy}
                        </span>
                        <span
                          className={`flex items-center gap-1 font-medium ${room.mealInclusion.toLowerCase().includes('breakfast') ? 'text-green-700' : 'text-brand-gray'}`}>
                          
                          {room.mealInclusion.
                          toLowerCase().
                          includes('breakfast') ?
                          <CheckIcon className="w-3.5 h-3.5" /> :
                          null}
                          {room.mealInclusion}
                        </span>
                      </div>
                    </div>

                    {/* Right: Price + Actions */}
                    <div className="lg:w-48 flex-shrink-0 flex flex-col items-end justify-between lg:border-l lg:border-gray-100 lg:pl-5">
                      <div className="text-right mb-3">
                        {room.originalPrice &&
                        <span className="text-sm text-brand-gray line-through block">
                            ${room.originalPrice}
                          </span>
                        }
                        <div className="flex items-baseline gap-1 justify-end">
                          <span className="text-2xl font-bold text-brand-black">
                            ${room.pricePerNight}
                          </span>
                          <span className="text-xs text-brand-gray">
                            /night
                          </span>
                        </div>
                        <span className="text-xs text-brand-gray">
                          Includes taxes & fees
                        </span>

                        {/* Urgency */}
                        {room.availableRooms < 4 &&
                        <div className="flex items-center gap-1 justify-end mt-1">
                            <AlertTriangle className="w-3 h-3 text-red-500" />
                            <span className="text-xs font-semibold text-red-600">
                              Only {room.availableRooms} left!
                            </span>
                          </div>
                        }
                      </div>

                      {/* Quantity selector */}
                      <div className="flex items-center gap-3 mb-3">
                        <button
                          onClick={() => updateQuantity(room.id, -1)}
                          disabled={qty === 0}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                          aria-label="Decrease room quantity">
                          
                          <MinusIcon className="w-4 h-4" />
                        </button>
                        <span
                          className="text-lg font-semibold w-6 text-center"
                          aria-live="polite">
                          
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQuantity(room.id, 1)}
                          disabled={qty >= room.availableRooms}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                          aria-label="Increase room quantity">
                          
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Reserve button */}
                      <Link
                        to={`/booking?property=${propertyId}&room=${room.id}&qty=${qty || 1}`}
                        className="w-full">
                        
                        <Button
                          variant="primary"
                          size="medium"
                          className="w-full !bg-brand-navy hover:!bg-navy-700">
                          
                          Reserve
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>);

        })}
      </div>
    </section>);

}


