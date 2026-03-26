import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { SEARCH_PROPERTIES } from '../data/searchData';
import { SAVED_PROPERTIES } from '../data/mockData';
import {
  ArrowLeft,
  Heart,
  Trash,
  Search,
  FolderPlus,
  Grid,
  List,
  MapPin,
  Star,
  Share2 as Share
} from 'lucide-react';

export function AccountSavedPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState('');

  const savedPropertiesList = SEARCH_PROPERTIES.filter((prop) =>
    SAVED_PROPERTIES.includes(prop.id)
  );

  const filteredProperties = savedPropertiesList.filter((prop) =>
    prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prop.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleSelect = (propId: string) => {
    setSelectedProperties((prev) =>
      prev.includes(propId) ? prev.filter((id) => id !== propId) : [...prev, propId]
    );
  };

  const handleAddCollection = () => {
    if (newCollectionName.trim()) {
      setNewCollectionName('');
      setShowCollectionModal(false);
    }
  };

  if (filteredProperties.length === 0 && SAVED_PROPERTIES.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/account">
            <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors mb-6">
              <ArrowLeft className="w-5 h-5 text-brand-black" />
            </button>
          </Link>
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-brand-black mb-2">
              No Saved Properties Yet
            </h1>
            <p className="text-brand-gray mb-6 max-w-md mx-auto">
              Start saving your favorite properties to build your personalized
              wishlist for future trips.
            </p>
            <Link to="/search">
              <Button
                variant="primary"
                className="!bg-brand-navy hover:!bg-blue-900">
                Explore Properties
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/account">
            <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-brand-black" />
            </button>
          </Link>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-brand-black">
              Saved Properties
            </h1>
            <p className="text-brand-gray text-sm mt-1">
              {filteredProperties.length} properties in your wishlist
            </p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="flex-1 min-w-0">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-brand-gray" />
                <Input
                  placeholder="Search saved properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* View Toggle & Actions */}
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="flex border border-gray-200 rounded-lg p-1 bg-gray-50">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-white text-brand-navy' : 'text-brand-gray hover:text-brand-black'}`}>
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-white text-brand-navy' : 'text-brand-gray hover:text-brand-black'}`}>
                  <List className="w-4 h-4" />
                </button>
              </div>

              {selectedProperties.length > 0 && (
                <Button
                  variant="primary"
                  className="!bg-brand-navy hover:!bg-blue-900 whitespace-nowrap"
                  leftIcon={<Share className="w-4 h-4" />}>
                  Compare ({selectedProperties.length})
                </Button>
              )}
            </div>
          </div>

          {/* Collection Actions */}
          <div className="flex gap-2 pt-2 border-t border-gray-200">
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<FolderPlus className="w-4 h-4" />}
              onClick={() => setShowCollectionModal(true)}>
              Create Collection
            </Button>
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<Share className="w-4 h-4" />}>
              Share Wishlist
            </Button>
          </div>
        </div>

        {/* Collection Modal */}
        {showCollectionModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <h2 className="text-xl font-bold text-brand-black mb-4">
                Create New Collection
              </h2>
              <Input
                label="Collection Name"
                placeholder="E.g., Summer 2026 trips"
                value={newCollectionName}
                onChange={(e) => setNewCollectionName(e.target.value)}
                autoFocus
              />
              <div className="flex gap-3 mt-6">
                <Button
                  variant="primary"
                  onClick={handleAddCollection}
                  className="flex-1 !bg-brand-navy hover:!bg-blue-900"
                  disabled={!newCollectionName.trim()}>
                  Create
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setShowCollectionModal(false);
                    setNewCollectionName('');
                  }}
                  className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Properties Grid / List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
                {/* Image Container */}
                <div className="relative overflow-hidden h-48 bg-gray-100">
                  <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button
                      onClick={() =>
                        handleToggleSelect(property.id)
                      }
                      className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all">
                      <input
                        type="checkbox"
                        checked={selectedProperties.includes(property.id)}
                        onChange={() => handleToggleSelect(property.id)}
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                  {property.isPremium && (
                    <Badge
                      variant="gold"
                      className="absolute bottom-3 left-3">
                      Premium
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <p className="font-bold text-brand-black line-clamp-2">
                      {property.name}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-brand-gray mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {property.city}, {property.country}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                      <span className="font-bold text-brand-black">
                        {property.rating}
                      </span>
                    </div>
                    <p className="text-xs text-brand-gray">
                      ({property.reviewCount} reviews)
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-baseline gap-2">
                      {property.originalPrice && (
                        <span className="text-sm line-through text-brand-gray">
                          ${property.originalPrice}
                        </span>
                      )}
                      <span className="text-xl font-bold text-brand-black">
                        ${property.pricePerNight}
                      </span>
                      <span className="text-xs text-brand-gray">/night</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-3 border-t border-gray-100">
                    <Link
                      to={`/property/${property.id}`}
                      className="flex-1">
                      <Button
                        variant="primary"
                        className="w-full !bg-brand-navy hover:!bg-blue-900 !h-10">
                        View Details
                      </Button>
                    </Link>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Trash className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-3">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow flex gap-4">
                {/* Image */}
                <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="font-bold text-brand-black">
                        {property.name}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-brand-gray mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {property.city}, {property.country}
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={selectedProperties.includes(property.id)}
                      onChange={() => handleToggleSelect(property.id)}
                      className="w-5 h-5"
                    />
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                      <span className="font-medium text-brand-black">
                        {property.rating}
                      </span>
                      <span className="text-brand-gray">
                        ({property.reviewCount})
                      </span>
                    </div>

                    <div>
                      <span className="font-bold text-brand-black">
                        ${property.pricePerNight}
                      </span>
                      <span className="text-brand-gray">/night</span>
                    </div>

                    {property.freeCancellation && (
                      <Badge variant="default">Free Cancellation</Badge>
                    )}
                  </div>

                  <div className="flex gap-2 mt-3">
                    <Link to={`/property/${property.id}`}>
                      <Button
                        variant="primary"
                        size="sm"
                        className="!bg-brand-navy hover:!bg-blue-900">
                        View Details
                      </Button>
                    </Link>
                    <Button
                      variant="secondary"
                      size="sm"
                      leftIcon={<Share className="w-3.5 h-3.5" />}>
                      Share
                    </Button>
                    <button className="p-1.5 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}


