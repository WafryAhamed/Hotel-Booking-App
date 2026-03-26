import React from 'react';
import { Badge } from '../ui/Badge';
import { List, Map, SlidersHorizontal } from 'lucide-react';
import { SORT_OPTIONS } from '../../data/searchData';
interface SortBarProps {
  resultCount: number;
  sortBy: string;
  onSortChange: (value: string) => void;
  viewMode: 'list' | 'map';
  onViewModeChange: (mode: 'list' | 'map') => void;
  onOpenFilters: () => void;
  activeFilterCount: number;
}
export function SortBar({
  resultCount,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  onOpenFilters,
  activeFilterCount
}: SortBarProps) {
  return (
    <div className="flex items-center justify-between gap-3 py-3">
      {/* Left: Result count + mobile filter button */}
      <div className="flex items-center gap-3">
        <p className="text-sm text-brand-gray whitespace-nowrap">
          <span className="font-semibold text-brand-black">{resultCount}</span>{' '}
          {resultCount === 1 ? 'property' : 'properties'} found
        </p>

        {/* Mobile filter button */}
        <button
          onClick={onOpenFilters}
          className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-medium text-brand-black hover:border-gray-300 transition-colors"
          aria-label="Open filters">
          
            <SlidersHorizontal className="w-4 h-4" />
          Filters
          {activeFilterCount > 0 &&
          <Badge
            variant="primary"
            size="small"
            shape="circle"
            className="ml-0.5">
            
              {activeFilterCount}
            </Badge>
          }
        </button>
      </div>

      {/* Right: Sort + View toggle */}
      <div className="flex items-center gap-3">
        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="sort-select"
            className="text-sm text-brand-gray hidden sm:inline whitespace-nowrap">
            
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-sm font-medium text-brand-black bg-white border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue cursor-pointer">
            
            {SORT_OPTIONS.map((option) =>
            <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )}
          </select>
        </div>

        {/* View Toggle */}
        <div className="hidden sm:flex items-center border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-brand-navy text-white' : 'bg-white text-gray-500 hover:text-brand-black'}`}
            aria-label="List view"
            aria-pressed={viewMode === 'list'}>
            
            <List className="w-5 h-5" />
          </button>
          <button
            onClick={() => onViewModeChange('map')}
            className={`p-2 transition-colors ${viewMode === 'map' ? 'bg-brand-navy text-white' : 'bg-white text-gray-500 hover:text-brand-black'}`}
            aria-label="Map view"
            aria-pressed={viewMode === 'map'}>
            
            <Map className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>);

}
