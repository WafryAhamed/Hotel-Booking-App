import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  CrownIcon,
  UmbrellaIcon,
  Building,
  Users,
  Briefcase,
  WalletIcon,
  Home,
  Heart,
  ArrowRight } from
'lucide-react';
const ICON_MAP: Record<string, React.ReactNode> = {
  crown: <CrownIcon className="w-6 h-6" />,
  umbrella: <UmbrellaIcon className="w-6 h-6" />,
  building: <Building className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  briefcase: <Briefcase className="w-6 h-6" />,
  wallet: <WalletIcon className="w-6 h-6" />,
  home: <Home className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />
};
export function BrowseCategories() {
  return (
    <section
      className="w-full py-10 md:py-14"
      aria-labelledby="categories-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2
              id="categories-heading"
              className="text-2xl md:text-3xl font-bold text-brand-black">
              
              Browse by Category
            </h2>
            <p className="text-brand-gray mt-1 text-sm md:text-base">
              Find the type of stay that suits you best
            </p>
          </div>
          <Link
            to="/search"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-navy transition-colors">
            
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
          <CategoryCard name="Luxury" icon="crown" count={1245} />
          <CategoryCard name="Beach" icon="umbrella" count={2890} />
          <CategoryCard name="City Center" icon="building" count={5430} />
          <CategoryCard name="Family" icon="users" count={3210} />
          <CategoryCard name="Business" icon="briefcase" count={1870} />
          <CategoryCard name="Budget" icon="wallet" count={7650} />
          <CategoryCard name="Villas" icon="home" count={980} />
          <CategoryCard name="Romantic" icon="heart" count={1560} />
        </div>
      </div>
    </section>);

}
function CategoryCard({
  name,
  icon,
  count




}: {name: string;icon: string;count: number;}) {
  return (
    <Link
      to={`/search?category=${encodeURIComponent(name.toLowerCase())}`}
      className="group flex flex-col items-center gap-2.5 p-4 md:p-5 rounded-xl border border-gray-200 bg-white hover:border-brand-navy hover:shadow-md transition-all duration-200 text-center">
      
      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-200">
        {ICON_MAP[icon]}
      </div>
      <div>
        <span className="text-sm font-semibold text-brand-black block">
          {name}
        </span>
        <span className="text-xs text-brand-gray">
          {count.toLocaleString()} stays
        </span>
      </div>
    </Link>);

}


