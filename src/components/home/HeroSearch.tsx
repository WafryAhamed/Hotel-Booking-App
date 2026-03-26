import React, { useEffect, useState, useRef, Children, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { DatePicker } from '../ui/DatePicker';
import {
  Search,
  MapPin,
  Calendar,
  Users,
  MinusIcon,
  Plus,
  Briefcase,
  Clock } from
'lucide-react';
import { DESTINATION_SUGGESTIONS } from '../../data/mockData';
export function HeroSearch() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState<{
    start: Date;
    end: Date;
  } | null>(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [isBusinessTravel, setIsBusinessTravel] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const guestRef = useRef<HTMLDivElement>(null);
  const filteredSuggestions =
  destination.length > 0 ?
  DESTINATION_SUGGESTIONS.filter((s) =>
  s.toLowerCase().includes(destination.toLowerCase())
  ) :
  DESTINATION_SUGGESTIONS.slice(0, 6);
  const recentSearches = ['Paris, France', 'Tokyo, Japan', 'Bali, Indonesia'];
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
      suggestionsRef.current &&
      !suggestionsRef.current.contains(e.target as Node))
      {
        setShowSuggestions(false);
      }
      if (guestRef.current && !guestRef.current.contains(e.target as Node)) {
        setShowGuestPicker(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const handleSearch = () => {
    navigate(
      `/search?dest=${encodeURIComponent(destination)}&adults=${adults}&children=${children}&rooms=${rooms}`
    );
  };
  const formatDateRange = () => {
    if (!dateRange) return 'Add dates';
    const opts: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric'
    };
    return `${dateRange.start.toLocaleDateString('en-US', opts)} — ${dateRange.end.toLocaleDateString('en-US', opts)}`;
  };
  const guestSummary = () => {
    const parts: string[] = [];
    parts.push(`${adults} adult${adults !== 1 ? 's' : ''}`);
    if (children > 0)
    parts.push(`${children} child${children !== 1 ? 'ren' : ''}`);
    parts.push(`${rooms} room${rooms !== 1 ? 's' : ''}`);
    return parts.join(', ');
  };
  return (
    <section className="relative w-full bg-brand-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
            'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-16 md:pb-28">
        {/* Hero Text */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
            Find your perfect stay
          </h1>
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
            Search deals on hotels, apartments, and much more...
          </p>
        </div>

        {/* Search Panel */}
        <div className="bg-white rounded-xl shadow-2xl p-2 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-0 md:gap-0 items-stretch">
            {/* Destination */}
            <div className="relative" ref={suggestionsRef}>
              <div
                className="flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200 cursor-text"
                onClick={() => setShowSuggestions(true)}>
                
                <MapPin className="w-5 h-5 text-brand-gray flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <label className="block text-xs font-semibold text-gray-500 mb-0.5">
                    Destination
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => {
                      setDestination(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder="Where are you going?"
                    className="w-full text-sm font-medium text-brand-black placeholder:text-gray-400 outline-none bg-transparent"
                    aria-label="Search destination"
                    autoComplete="off" />
                  
                </div>
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions &&
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-80 overflow-y-auto">
                  {destination.length === 0 &&
                <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        Recent Searches
                      </p>
                      {recentSearches.map((s) =>
                  <button
                    key={s}
                    className="w-full text-left px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded flex items-center gap-2"
                    onClick={() => {
                      setDestination(s);
                      setShowSuggestions(false);
                    }}>
                    
                          <Clock className="w-4 h-4 text-gray-400" />
                          {s}
                        </button>
                  )}
                    </div>
                }
                  <div className="px-4 py-2">
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                      {destination.length > 0 ?
                    'Suggestions' :
                    'Popular Destinations'}
                    </p>
                    {filteredSuggestions.map((s) =>
                  <button
                    key={s}
                    className="w-full text-left px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded flex items-center gap-2"
                    onClick={() => {
                      setDestination(s);
                      setShowSuggestions(false);
                    }}>
                    
                        <MapPin className="w-4 h-4 text-brand-blue" />
                        {s}
                      </button>
                  )}
                  </div>
                </div>
              }
            </div>

            {/* Dates */}
            <div className="relative">
              <div
                className="flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200 cursor-pointer min-w-[200px]"
                onClick={() => setShowDatePicker(!showDatePicker)}>
                
                <Calendar className="w-5 h-5 text-brand-gray flex-shrink-0" />
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-0.5">
                    Check-in — Check-out
                  </label>
                  <span
                    className={`text-sm font-medium ${dateRange ? 'text-brand-black' : 'text-gray-400'}`}>
                    
                    {formatDateRange()}
                  </span>
                </div>
              </div>
              {showDatePicker &&
              <div className="absolute top-full left-0 mt-1 z-50 bg-white rounded-lg shadow-xl border border-gray-200 p-4">
                  <DatePicker
                  mode="range"
                  value={dateRange}
                  onChange={(val) => {
                    setDateRange(
                      val as {
                        start: Date;
                        end: Date;
                      }
                    );
                    if (
                    val &&
                    (
                    val as {
                      start: Date;
                      end: Date;
                    }).
                    end)
                    {
                      setShowDatePicker(false);
                    }
                  }}
                  minDate={new Date()}
                  inline />
                
                </div>
              }
            </div>

            {/* Guests */}
            <div className="relative" ref={guestRef}>
              <div
                className="flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200 cursor-pointer min-w-[180px]"
                onClick={() => setShowGuestPicker(!showGuestPicker)}>
                
                <Users className="w-5 h-5 text-brand-gray flex-shrink-0" />
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-0.5">
                    Guests & Rooms
                  </label>
                  <span className="text-sm font-medium text-brand-black truncate block max-w-[140px]">
                    {guestSummary()}
                  </span>
                </div>
              </div>

              {/* Guest Picker Dropdown */}
              {showGuestPicker &&
              <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50 p-4 w-72">
                  <GuestCounter
                  label="Adults"
                  value={adults}
                  min={1}
                  max={10}
                  onChange={setAdults} />
                
                  <GuestCounter
                  label="Children"
                  subtitle="Ages 0–17"
                  value={children}
                  min={0}
                  max={6}
                  onChange={setChildren} />
                
                  <GuestCounter
                  label="Rooms"
                  value={rooms}
                  min={1}
                  max={5}
                  onChange={setRooms} />
                
                  <button
                  className="w-full mt-3 py-2 text-sm font-semibold text-brand-navy hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setShowGuestPicker(false)}>
                  
                    Done
                  </button>
                </div>
              }
            </div>

            {/* Search Button */}
            <div className="p-1.5">
              <Button
                variant="primary"
                size="large"
                leftIcon={<Search className="w-5 h-5" />}
                className="!bg-brand-navy hover:!bg-blue-900 w-full md:w-auto h-full min-h-[52px] px-8 !rounded-lg"
                onClick={handleSearch}>
                
                Search
              </Button>
            </div>
          </div>

          {/* Options Row */}
          <div className="flex items-center gap-4 px-4 py-2 border-t border-gray-100">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-brand-black">
              <input
                type="checkbox"
                checked={isBusinessTravel}
                onChange={(e) => setIsBusinessTravel(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-brand-navy focus:ring-brand-navy" />
              
              <Briefcase className="w-4 h-4" />
              I'm traveling for work
            </label>
          </div>
        </div>
      </div>
    </section>);

}
function GuestCounter({
  label,
  subtitle,
  value,
  min,
  max,
  onChange







}: {label: string;subtitle?: string;value: number;min: number;max: number;onChange: (v: number) => void;}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div>
        <span className="text-sm font-medium text-brand-black">{label}</span>
        {subtitle &&
        <span className="block text-xs text-gray-500">{subtitle}</span>
        }
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-brand-navy hover:text-brand-navy disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label={`Decrease ${label}`}>
          
          <MinusIcon className="w-4 h-4" />
        </button>
        <span className="w-6 text-center text-sm font-semibold text-brand-black">
          {value}
        </span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-brand-navy hover:text-brand-navy disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label={`Increase ${label}`}>
          
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>);

}


