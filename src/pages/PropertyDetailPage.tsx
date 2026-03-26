import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEARCH_PROPERTIES } from '../data/searchData';
import { useSavedProperties } from '../hooks/useSavedProperties';
import { PropertyHeader } from '../components/property/PropertyHeader';
import { PhotoGallery } from '../components/property/PhotoGallery';
import { PropertyOverview } from '../components/property/PropertyOverview';
import { AmenitiesSection } from '../components/property/AmenitiesSection';
import { RoomSelection } from '../components/property/RoomSelection';
import { ReviewsSection } from '../components/property/ReviewsSection';
import { PoliciesSection } from '../components/property/PoliciesSection';
import { NearbyAttractions } from '../components/property/NearbyAttractions';
import { SimilarProperties } from '../components/property/SimilarProperties';
import { StickyReserveBar } from '../components/property/StickyReserveBar';
import { Separator } from '../components/ui/Separator';
import { Button } from '../components/ui/Button';
import { Search } from 'lucide-react';
export function PropertyDetailPage() {
  const { id } = useParams<{
    id: string;
  }>();
  const { savedIds, toggleSave, isSaved } = useSavedProperties();
  const reviewsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const property = SEARCH_PROPERTIES.find((p) => p.id === id);
  // Scroll to top on mount or property change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [id]);
  const scrollToReviews = () => {
    reviewsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  // Similar properties: same city or property type, excluding current
  const similarProperties = SEARCH_PROPERTIES.filter(
    (p) =>
    p.id !== id && (
    p.city === property?.city || p.propertyType === property?.propertyType)
  ).slice(0, 6);
  // 404 state
  if (!property) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-brand-gray" />
          </div>
          <h1 className="text-2xl font-bold text-brand-black mb-2">
            Property not found
          </h1>
          <p className="text-brand-gray mb-6">
            The property you're looking for doesn't exist or has been removed.
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="/search">
              <Button variant="primary" className="!bg-brand-navy">
                Browse properties
              </Button>
            </Link>
            <Link to="/">
              <Button variant="secondary">Go home</Button>
            </Link>
          </div>
        </div>
      </main>);

  }
  return (
    <main className="min-h-screen bg-white pb-20 lg:pb-0">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
        <PropertyHeader
          property={property}
          isSaved={isSaved(property.id)}
          onToggleSave={() => toggleSave(property.id)}
          onScrollToReviews={scrollToReviews}
          onScrollToMap={scrollToMap} />
        
      </div>

      {/* Photo Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PhotoGallery images={property.images} propertyName={property.name} />
      </div>

      {/* Main Content + Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Content */}
          <div className="flex-1 min-w-0">
            <PropertyOverview property={property} />
            <Separator className="my-6" />

            <AmenitiesSection propertyAmenities={property.amenities} />
            <Separator className="my-6" />

            <RoomSelection
              rooms={property.roomTypes}
              propertyId={property.id}
              propertyName={property.name} />
            
            <Separator className="my-6" />

            <div ref={reviewsRef}>
              <ReviewsSection
                rating={property.rating}
                reviewCount={property.reviewCount} />
              
            </div>
            <Separator className="my-6" />

            <PoliciesSection />
            <Separator className="my-6" />

            <div ref={mapRef}>
              <NearbyAttractions />
            </div>
            <Separator className="my-6" />

            <SimilarProperties
              properties={similarProperties}
              savedIds={savedIds}
              onToggleSave={toggleSave} />
            
          </div>

          {/* Right: Sticky Reserve Sidebar (desktop) */}
          <div className="lg:w-[340px] flex-shrink-0">
            <StickyReserveBar property={property} />
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bar is rendered inside StickyReserveBar */}
    </main>);

}

