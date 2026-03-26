import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Construction, ArrowLeft } from 'lucide-react';
export function PlaceholderPage() {
  const location = useLocation();
  const pageName =
  location.pathname.
  split('/').
  filter(Boolean).
  map((s) => s.charAt(0).toUpperCase() + s.slice(1)).
  join(' / ') || 'Page';
  return (
    <main className="w-full min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
          <Construction className="w-8 h-8 text-brand-navy" />
        </div>
        <h1 className="text-2xl font-bold text-brand-black mb-2">{pageName}</h1>
        <p className="text-brand-gray mb-6">
          This page is under construction. Check back soon for the full
          experience.
        </p>
        <Link to="/">
          <Button
            variant="primary"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
            className="!bg-brand-navy hover:!bg-blue-900">
            
            Back to Home
          </Button>
        </Link>
      </div>
    </main>);

}

