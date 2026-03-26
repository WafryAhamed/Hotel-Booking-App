import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import {
  Search,
  MapPin,
  Calendar,
  Users,
  ChevronDown,
  X } from
'lucide-react';
import { SearchFilters } from '../../types';
interface SearchSummaryBarProps {
  filters: SearchFilters;
  onUpdateFilter: <K extends keyof SearchFilters>(
  key: K,
  value: SearchFilters[K])
  => void;
  onSearch: () => void;
  resultCount: number;
}
export function SearchSummaryBar({
  filters,
  onUpdateFilter,
  onSearch,
  resultCount
}: SearchSummaryBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const formatDate = (date: Date | null) => {
    if (!date) return 'Any date';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };
  const totalGuests = filters.adults + filters.children;
  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Summary */}
        <div className="flex items-center justify-between py-3 gap-3">
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0 overflow-x-auto">
            <div className="flex items-center gap-1.5 text-sm font-medium text-brand-black whitespace-nowrap">
              <MapPin className="w-4 h-4 text-brand-navy flex-shrink-0" />
              <span>{filters.destination || 'Anywhere'}</span>
            </div>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-sm text-gray-600 whitespace-nowrap">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span>
                {formatDate(filters.checkIn)} — {formatDate(filters.checkOut)}
              </span>
            </div>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-sm text-gray-600 whitespace-nowrap">
              <Users className="w-4 h-4 flex-shrink-0" />
              <span>
                {totalGuests} guest{totalGuests !== 1 ? 's' : ''},{' '}
                {filters.rooms} room
                {filters.rooms !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
          <Button
            variant="secondary"
            size="small"
            onClick={() => setIsExpanded(!isExpanded)}
            rightIcon={
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />

            }>
            
            <span className="hidden sm:inline">Edit search</span>
            <Search className="w-4 h-4 sm:hidden" />
          </Button>
        </div>

        {/* Expanded Search Form */}
        {isExpanded &&
        <div className="pb-4 border-t border-gray-100 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="lg:col-span-1">
                <Input
                label="Destination"
                placeholder="Where are you going?"
                value={filters.destination}
                onChange={(e) =>
                onUpdateFilter('destination', e.target.value)
                }
                startAdornment={
                <MapPin className="w-4 h-4 text-brand-gray" />
                }
                size="small" />
              
              </div>
              <div>
                <Input
                label="Check-in"
                type="date"
                size="small"
                value={
                filters.checkIn ?
                filters.checkIn.toISOString().split('T')[0] :
                ''
                }
                onChange={(e) =>
                onUpdateFilter(
                  'checkIn',
                  e.target.value ? new Date(e.target.value) : null
                )
                } />
              
              </div>
              <div>
                <Input
                label="Check-out"
                type="date"
                size="small"
                value={
                filters.checkOut ?
                filters.checkOut.toISOString().split('T')[0] :
                ''
                }
                onChange={(e) =>
                onUpdateFilter(
                  'checkOut',
                  e.target.value ? new Date(e.target.value) : null
                )
                } />
              
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Guests & Rooms
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-gray-200 rounded-lg px-3 py-1.5 text-sm gap-2 flex-1">
                    <Users className="w-4 h-4 text-brand-gray" />
                    <span>
                      {filters.adults}A, {filters.children}C, {filters.rooms}R
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-end">
                <Button
                variant="primary"
                size="medium"
                className="w-full !bg-brand-navy hover:!bg-navy-700"
                leftIcon={<Search className="w-4 h-4" />}
                onClick={() => {
                  onSearch();
                  setIsExpanded(false);
                }}>
                
                  Search
                </Button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>);

}

