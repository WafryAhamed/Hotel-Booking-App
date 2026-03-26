import React from 'react';
import { HeroSearch } from '../components/home/HeroSearch';
import { PromoBanners } from '../components/home/PromoBanners';
import { PopularDestinations } from '../components/home/PopularDestinations';
import { BrowseCategories } from '../components/home/BrowseCategories';
import { FeaturedProperties } from '../components/home/FeaturedProperties';
import { TravelInspiration } from '../components/home/TravelInspiration';
import { TrustSignals } from '../components/home/TrustSignals';
import { Newsletter } from '../components/home/Newsletter';
import { useSavedProperties } from '../hooks/useSavedProperties';
export function HomePage() {
  const { savedIds, toggleSave } = useSavedProperties();
  return (
    <main className="w-full">
      <HeroSearch />
      <PromoBanners />
      <PopularDestinations />
      <BrowseCategories />
      <FeaturedProperties savedIds={savedIds} onToggleSave={toggleSave} />
      <TravelInspiration />
      <TrustSignals />
      <Newsletter />
    </main>);

}
