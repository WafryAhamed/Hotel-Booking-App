import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { TRAVEL_INSPIRATION } from '../../data/mockData';
export function TravelInspiration() {
  return (
    <section
      className="w-full py-10 md:py-14"
      aria-labelledby="inspiration-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2
              id="inspiration-heading"
              className="text-2xl md:text-3xl font-bold text-brand-black">
              
              Travel Inspiration
            </h2>
            <p className="text-brand-gray mt-1 text-sm md:text-base">
              Curated guides and ideas for your next trip
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-navy transition-colors">
            
            All articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Article 1 */}
          <InspirationCard
            title={TRAVEL_INSPIRATION[0].title}
            subtitle={TRAVEL_INSPIRATION[0].subtitle}
            image={TRAVEL_INSPIRATION[0].image}
            articleCount={TRAVEL_INSPIRATION[0].articleCount} />
          
          {/* Article 2 */}
          <InspirationCard
            title={TRAVEL_INSPIRATION[1].title}
            subtitle={TRAVEL_INSPIRATION[1].subtitle}
            image={TRAVEL_INSPIRATION[1].image}
            articleCount={TRAVEL_INSPIRATION[1].articleCount} />
          
          {/* Article 3 */}
          <InspirationCard
            title={TRAVEL_INSPIRATION[2].title}
            subtitle={TRAVEL_INSPIRATION[2].subtitle}
            image={TRAVEL_INSPIRATION[2].image}
            articleCount={TRAVEL_INSPIRATION[2].articleCount} />
          
          {/* Article 4 */}
          <InspirationCard
            title={TRAVEL_INSPIRATION[3].title}
            subtitle={TRAVEL_INSPIRATION[3].subtitle}
            image={TRAVEL_INSPIRATION[3].image}
            articleCount={TRAVEL_INSPIRATION[3].articleCount} />
          
        </div>
      </div>
    </section>);

}
function InspirationCard({
  title,
  subtitle,
  image,
  articleCount





}: {title: string;subtitle: string;image: string;articleCount: number;}) {
  return (
    <Link to="/blog" className="group">
      <div className="rounded-xl overflow-hidden aspect-[4/3] mb-3 bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy" />
        
      </div>
      <h3 className="text-base font-bold text-brand-black group-hover:text-brand-navy transition-colors mb-1">
        {title}
      </h3>
      <p className="text-sm text-brand-gray mb-1.5">{subtitle}</p>
      <div className="flex items-center gap-1.5 text-xs text-brand-blue font-medium">
        <BookOpen className="w-3.5 h-3.5" />
        {articleCount} articles
      </div>
    </Link>);

}
