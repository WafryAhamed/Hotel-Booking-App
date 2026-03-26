import React, { useState } from 'react';
import { Dialog } from '../ui/Dialog';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Grid,
  Image } from
'lucide-react';
interface PhotoGalleryProps {
  images: string[];
  propertyName: string;
}
export function PhotoGallery({ images, propertyName }: PhotoGalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const displayImages =
  images.length > 0 ?
  images :
  [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'];

  const handlePrev = () => {
    setActiveIndex((prev) => prev === 0 ? displayImages.length - 1 : prev - 1);
  };
  const handleNext = () => {
    setActiveIndex((prev) => prev === displayImages.length - 1 ? 0 : prev + 1);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setIsModalOpen(false);
  };
  return (
    <>
      {/* Desktop Gallery Grid */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden h-[400px] lg:h-[460px] mb-6">
        {/* Hero image */}
        <button
          onClick={() => {
            setActiveIndex(0);
            setIsModalOpen(true);
          }}
          className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden"
          aria-label={`View photo 1 of ${displayImages.length}`}>
          
          <img
            src={displayImages[0]}
            alt={`${propertyName} - Main photo`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          
        </button>

        {/* Secondary images */}
        {displayImages.slice(1, 5).map((img, idx) =>
        <button
          key={idx}
          onClick={() => {
            setActiveIndex(idx + 1);
            setIsModalOpen(true);
          }}
          className="relative group cursor-pointer overflow-hidden"
          aria-label={`View photo ${idx + 2} of ${displayImages.length}`}>
          
            <img
            src={img}
            alt={`${propertyName} - Photo ${idx + 2}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          
            {/* Show more overlay on last visible image */}
            {idx === 3 && displayImages.length > 5 &&
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity group-hover:bg-black/60">
                <div className="text-white text-center">
                  <Grid className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-lg font-semibold">
                    +{displayImages.length - 5} photos
                  </span>
                </div>
              </div>
          }
          </button>
        )}

        {/* Show all photos button */}
        {displayImages.length > 1 &&
        <button
          onClick={() => {
            setActiveIndex(0);
            setIsModalOpen(true);
          }}
          className="absolute bottom-4 right-4 z-10 bg-white text-brand-black text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center gap-2"
          style={{
            position: 'relative',
            gridColumn: 'auto',
            gridRow: 'auto',
            display: 'none'
          }}>
          
            <Image className="w-4 h-4" />
            Show all photos
          </button>
        }
      </div>

      {/* Show all photos floating button */}
      <div className="hidden md:block relative">
        <button
          onClick={() => {
            setActiveIndex(0);
            setIsModalOpen(true);
          }}
          className="absolute -top-14 right-4 z-10 bg-white text-brand-black text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center gap-2 border border-gray-200">
          
          <Image className="w-4 h-4" />
          Show all {displayImages.length} photos
        </button>
      </div>

      {/* Mobile Gallery - Horizontal scroll */}
      <div className="md:hidden mb-4">
        <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 scrollbar-hide">
          {displayImages.map((img, idx) =>
          <button
            key={idx}
            onClick={() => {
              setActiveIndex(idx);
              setIsModalOpen(true);
            }}
            className="flex-shrink-0 w-[85vw] snap-center rounded-xl overflow-hidden"
            aria-label={`View photo ${idx + 1}`}>
            
              <img
              src={img}
              alt={`${propertyName} - Photo ${idx + 1}`}
              className="w-full h-56 object-cover" />
            
            </button>
          )}
        </div>
        <div className="flex justify-center gap-1.5 mt-2">
          {displayImages.map((_, idx) =>
          <div
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === activeIndex ? 'bg-brand-navy' : 'bg-gray-300'}`} />

          )}
        </div>
      </div>

      {/* Full Gallery Modal */}
      <Dialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="full">
        
        <div
          className="flex flex-col h-full bg-black"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-label="Photo gallery">
          
          {/* Modal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-black/90">
            <span className="text-white text-sm font-medium">
              {activeIndex + 1} / {displayImages.length}
            </span>
            <h2 className="text-white font-semibold text-sm truncate mx-4">
              {propertyName}
            </h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-white hover:text-gray-300 transition-colors p-1"
              aria-label="Close gallery">
              
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image Area */}
          <div className="flex-1 relative flex items-center justify-center px-4 py-4 min-h-0">
            <img
              src={displayImages[activeIndex]}
              alt={`${propertyName} - Photo ${activeIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg" />
            

            {/* Prev/Next Arrows */}
            {displayImages.length > 1 &&
            <>
                <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors backdrop-blur-sm"
                aria-label="Previous photo">
                
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors backdrop-blur-sm"
                aria-label="Next photo">
                
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            }
          </div>

          {/* Thumbnail Strip */}
          <div className="px-4 py-3 bg-black/90">
            <div className="flex gap-2 overflow-x-auto justify-center">
              {displayImages.map((img, idx) =>
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${idx === activeIndex ? 'border-white opacity-100' : 'border-transparent opacity-50 hover:opacity-80'}`}
                aria-label={`Go to photo ${idx + 1}`}>
                
                  <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover" />
                
                </button>
              )}
            </div>
          </div>
        </div>
      </Dialog>
    </>);

}

