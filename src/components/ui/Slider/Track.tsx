import React, { forwardRef } from 'react';
interface TrackProps {
  children: React.ReactNode;
  orientation: 'horizontal' | 'vertical';
  disabled: boolean;
  onClick: (event: React.MouseEvent | React.TouchEvent) => void;
}
export const Track = forwardRef<HTMLDivElement, TrackProps>(
  ({ children, orientation, disabled, onClick }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          relative
          ${orientation === 'vertical' ? 'h-full w-2' : 'w-full h-2'}
          bg-gray-200
          rounded-full
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        onClick={onClick}>
        
        {children}
      </div>);

  }
);
Track.displayName = 'Track';
