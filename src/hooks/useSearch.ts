import { useState, useCallback } from 'react';
import { SearchFilters } from '../types';

const DEFAULT_FILTERS: SearchFilters = {
  destination: '',
  checkIn: null,
  checkOut: null,
  adults: 2,
  children: 0,
  rooms: 1,
  priceRange: [0, 1000],
  starRating: [],
  guestRating: null,
  propertyTypes: [],
  amenities: [],
  freeCancellation: false,
  breakfastIncluded: false,
  sortBy: 'recommended'
};

export function useSearch() {
  const [filters, setFilters] = useState<SearchFilters>(DEFAULT_FILTERS);
  const [isSearching, setIsSearching] = useState(false);

  const updateFilter = useCallback(
    <K extends keyof SearchFilters,>(key: K, value: SearchFilters[K]) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  const performSearch = useCallback(() => {
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => setIsSearching(false), 800);
  }, []);

  const totalGuests = filters.adults + filters.children;

  return {
    filters,
    setFilters,
    updateFilter,
    resetFilters,
    performSearch,
    isSearching,
    totalGuests
  };
}