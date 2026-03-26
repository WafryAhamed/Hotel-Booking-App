import React, { useEffect, useMemo, useState } from 'react';
import { useSearch } from '../hooks/useSearch';
import { useSavedProperties } from '../hooks/useSavedProperties';
import { SearchSummaryBar } from '../components/search/SearchSummaryBar';
import { FilterSidebar } from '../components/search/FilterSidebar';
import { FilterDrawerMobile } from '../components/search/FilterDrawerMobile';
import { SortBar } from '../components/search/SortBar';
import { PropertyResultCard } from '../components/search/PropertyResultCard';
import { SearchMap } from '../components/search/SearchMap';
import { SearchSkeleton } from '../components/search/SearchSkeleton';
import { SearchEmptyState } from '../components/search/SearchEmptyState';
import { SEARCH_PROPERTIES } from '../data/searchData';
import { Property } from '../types';
function filterProperties(
properties: Property[],
filters: ReturnType<typeof useSearch>['filters'])
: Property[] {
  return properties.filter((property) => {
    // Destination filter
    if (filters.destination) {
      const query = filters.destination.toLowerCase();
      const matchesCity = property.city.toLowerCase().includes(query);
      const matchesCountry = property.country.toLowerCase().includes(query);
      const matchesLocation = property.location.toLowerCase().includes(query);
      const matchesName = property.name.toLowerCase().includes(query);
      if (!matchesCity && !matchesCountry && !matchesLocation && !matchesName) {
        return false;
      }
    }
    // Price range filter
    if (
    property.pricePerNight < filters.priceRange[0] ||
    property.pricePerNight > filters.priceRange[1])
    {
      return false;
    }
    // Star rating filter
    if (filters.starRating.length > 0 && property.starRating) {
      if (!filters.starRating.includes(property.starRating)) {
        return false;
      }
    }
    if (filters.starRating.length > 0 && !property.starRating) {
      return false;
    }
    // Guest rating filter
    if (filters.guestRating !== null && property.rating < filters.guestRating) {
      return false;
    }
    // Property type filter
    if (filters.propertyTypes.length > 0) {
      if (!filters.propertyTypes.includes(property.propertyType)) {
        return false;
      }
    }
    // Amenities filter
    if (filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every((amenity) =>
      property.amenities.includes(amenity)
      );
      if (!hasAllAmenities) {
        return false;
      }
    }
    // Free cancellation filter
    if (filters.freeCancellation && !property.freeCancellation) {
      return false;
    }
    // Breakfast included filter
    if (filters.breakfastIncluded && !property.breakfastIncluded) {
      return false;
    }
    return true;
  });
}
function sortProperties(properties: Property[], sortBy: string): Property[] {
  const sorted = [...properties];
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.pricePerNight - b.pricePerNight);
    case 'price-desc':
      return sorted.sort((a, b) => b.pricePerNight - a.pricePerNight);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'reviews':
      return sorted.sort((a, b) => b.reviewCount - a.reviewCount);
    case 'best-value':
      return sorted.sort((a, b) => {
        const valueA = a.rating / (a.pricePerNight / 100);
        const valueB = b.rating / (b.pricePerNight / 100);
        return valueB - valueA;
      });
    case 'recommended':
    default:
      // Recommended: blend of rating, reviews, and premium status
      return sorted.sort((a, b) => {
        const scoreA =
        a.rating * 10 + (a.isPremium ? 5 : 0) + Math.log(a.reviewCount);
        const scoreB =
        b.rating * 10 + (b.isPremium ? 5 : 0) + Math.log(b.reviewCount);
        return scoreB - scoreA;
      });
  }
}
function countActiveFilters(
filters: ReturnType<typeof useSearch>['filters'])
: number {
  let count = 0;
  if (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) count++;
  if (filters.starRating.length > 0) count++;
  if (filters.guestRating !== null) count++;
  if (filters.propertyTypes.length > 0) count++;
  if (filters.amenities.length > 0) count++;
  if (filters.freeCancellation) count++;
  if (filters.breakfastIncluded) count++;
  return count;
}
export function SearchResultsPage() {
  const { filters, updateFilter, resetFilters, performSearch, isSearching } =
  useSearch();
  const { savedIds, toggleSave } = useSavedProperties();
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  // Simulate loading on filter change
  const [filterChangeLoading, setFilterChangeLoading] = useState(false);
  const filtersKey = JSON.stringify(filters);
  useEffect(() => {
    setFilterChangeLoading(true);
    const timer = setTimeout(() => setFilterChangeLoading(false), 400);
    return () => clearTimeout(timer);
  }, [filtersKey]);
  const filteredProperties = useMemo(
    () => filterProperties(SEARCH_PROPERTIES, filters),
    [filtersKey]
  );
  const sortedProperties = useMemo(
    () => sortProperties(filteredProperties, filters.sortBy),
    [filteredProperties, filters.sortBy]
  );
  const activeFilterCount = useMemo(
    () => countActiveFilters(filters),
    [filtersKey]
  );
  const showLoading = isLoading || (filterChangeLoading && !isSearching);
  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Search Summary Bar */}
      <SearchSummaryBar
        filters={filters}
        onUpdateFilter={updateFilter}
        onSearch={performSearch}
        resultCount={sortedProperties.length} />
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {showLoading ?
        <SearchSkeleton /> :

        <div className="flex gap-6">
            {/* Desktop Filter Sidebar */}
            <div className="hidden lg:block">
              <FilterSidebar
              filters={filters}
              onUpdateFilter={updateFilter}
              onResetFilters={resetFilters}
              activeFilterCount={activeFilterCount} />
            
            </div>

            {/* Results Area */}
            <div className="flex-1 min-w-0">
              {/* Sort Bar */}
              <SortBar
              resultCount={sortedProperties.length}
              sortBy={filters.sortBy}
              onSortChange={(value) => updateFilter('sortBy', value)}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onOpenFilters={() => setFilterDrawerOpen(true)}
              activeFilterCount={activeFilterCount} />
            

              {/* Results Content */}
              {sortedProperties.length === 0 ?
            <SearchEmptyState onClearFilters={resetFilters} /> :
            viewMode === 'map' ?
            <div className="flex gap-4 h-[calc(100vh-220px)]">
                  {/* Left: Scrollable cards */}
                  <div className="w-[400px] flex-shrink-0 overflow-y-auto space-y-3 hidden lg:block pr-2">
                    {sortedProperties.map((property) =>
                <PropertyResultCard
                  key={property.id}
                  property={property}
                  isSaved={savedIds.has(property.id)}
                  onToggleSave={() => toggleSave(property.id)} />

                )}
                  </div>
                  {/* Right: Map */}
                  <div className="flex-1">
                    <SearchMap properties={sortedProperties} />
                  </div>
                </div> :

            <div className="space-y-4">
                  {sortedProperties.map((property) =>
              <PropertyResultCard
                key={property.id}
                property={property}
                isSaved={savedIds.has(property.id)}
                onToggleSave={() => toggleSave(property.id)} />

              )}

                  {/* Results footer */}
                  <div className="text-center py-8">
                    <p className="text-sm text-brand-gray">
                      Showing all {sortedProperties.length} properties matching
                      your search
                    </p>
                  </div>
                </div>
            }
            </div>
          </div>
        }
      </div>

      {/* Mobile Filter Drawer */}
      <FilterDrawerMobile
        isOpen={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
        filters={filters}
        onUpdateFilter={updateFilter}
        onResetFilters={resetFilters}
        activeFilterCount={activeFilterCount}
        resultCount={sortedProperties.length} />
      
    </main>);

}
