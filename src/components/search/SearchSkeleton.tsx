import React from 'react';
function SkeletonPulse({ className }: {className?: string;}) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className || ''}`} />);

}
function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        {/* Image skeleton */}
        <div className="sm:w-[280px] lg:w-[300px] flex-shrink-0">
          <SkeletonPulse className="aspect-[16/10] sm:aspect-auto sm:h-full !rounded-none" />
        </div>

        {/* Content skeleton */}
        <div className="flex-1 flex flex-col sm:flex-row">
          <div className="flex-1 p-4">
            <div className="flex items-start justify-between gap-4 mb-3">
              <SkeletonPulse className="h-5 w-48" />
              <SkeletonPulse className="h-8 w-10 !rounded-lg hidden sm:block" />
            </div>
            <SkeletonPulse className="h-4 w-36 mb-2" />
            <div className="flex gap-1 mb-3">
              <SkeletonPulse className="h-3.5 w-3.5 !rounded-full" />
              <SkeletonPulse className="h-3.5 w-3.5 !rounded-full" />
              <SkeletonPulse className="h-3.5 w-3.5 !rounded-full" />
              <SkeletonPulse className="h-3.5 w-3.5 !rounded-full" />
            </div>
            <SkeletonPulse className="h-4 w-full mb-1.5" />
            <SkeletonPulse className="h-4 w-3/4 mb-3" />
            <div className="flex gap-2">
              <SkeletonPulse className="h-6 w-16 !rounded" />
              <SkeletonPulse className="h-6 w-14 !rounded" />
              <SkeletonPulse className="h-6 w-20 !rounded" />
            </div>
          </div>

          {/* Price skeleton */}
          <div className="sm:w-[180px] lg:w-[200px] p-4 sm:pl-0 flex flex-col items-end justify-between">
            <div className="text-right w-full">
              <SkeletonPulse className="h-5 w-24 ml-auto mb-1" />
              <SkeletonPulse className="h-5 w-20 ml-auto mb-2" />
              <SkeletonPulse className="h-4 w-16 ml-auto mb-1" />
              <SkeletonPulse className="h-8 w-28 ml-auto mb-1" />
              <SkeletonPulse className="h-3 w-20 ml-auto" />
            </div>
            <SkeletonPulse className="h-9 w-full sm:w-28 !rounded-lg mt-3" />
          </div>
        </div>
      </div>
    </div>);

}
function SkeletonFilterSidebar() {
  return (
    <div className="w-[280px] flex-shrink-0 hidden lg:block">
      <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-5">
        <div className="flex items-center justify-between">
          <SkeletonPulse className="h-5 w-16" />
          <SkeletonPulse className="h-5 w-14" />
        </div>
        <SkeletonPulse className="h-px w-full" />
        <div>
          <SkeletonPulse className="h-4 w-24 mb-3" />
          <SkeletonPulse className="h-6 w-full mb-2" />
          <div className="flex justify-between">
            <SkeletonPulse className="h-4 w-10" />
            <SkeletonPulse className="h-4 w-10" />
          </div>
        </div>
        <SkeletonPulse className="h-px w-full" />
        <div>
          <SkeletonPulse className="h-4 w-20 mb-3" />
          <div className="flex gap-2">
            <SkeletonPulse className="h-8 w-14 !rounded-lg" />
            <SkeletonPulse className="h-8 w-14 !rounded-lg" />
            <SkeletonPulse className="h-8 w-14 !rounded-lg" />
            <SkeletonPulse className="h-8 w-14 !rounded-lg" />
          </div>
        </div>
        <SkeletonPulse className="h-px w-full" />
        <div>
          <SkeletonPulse className="h-4 w-24 mb-3" />
          <div className="space-y-2">
            <SkeletonPulse className="h-8 w-full !rounded-lg" />
            <SkeletonPulse className="h-8 w-full !rounded-lg" />
            <SkeletonPulse className="h-8 w-full !rounded-lg" />
          </div>
        </div>
        <SkeletonPulse className="h-px w-full" />
        <div>
          <SkeletonPulse className="h-4 w-28 mb-3" />
          <div className="space-y-2.5">
            <SkeletonPulse className="h-5 w-full" />
            <SkeletonPulse className="h-5 w-full" />
            <SkeletonPulse className="h-5 w-full" />
            <SkeletonPulse className="h-5 w-full" />
          </div>
        </div>
      </div>
    </div>);

}
export function SearchSkeleton() {
  return (
    <div className="flex gap-6">
      <SkeletonFilterSidebar />
      <div className="flex-1 space-y-4">
        {/* Sort bar skeleton */}
        <div className="flex items-center justify-between py-3">
          <SkeletonPulse className="h-5 w-36" />
          <div className="flex items-center gap-3">
            <SkeletonPulse className="h-8 w-40 !rounded-lg" />
            <SkeletonPulse className="h-8 w-20 !rounded-lg hidden sm:block" />
          </div>
        </div>
        {/* Card skeletons */}
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>);

}
