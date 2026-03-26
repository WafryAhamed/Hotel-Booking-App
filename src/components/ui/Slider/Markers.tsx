import React from 'react';
interface MarkersProps {
  min: number;
  max: number;
  step: number;
  orientation: 'horizontal' | 'vertical';
  showLabels: boolean;
}
export const Markers: React.FC<MarkersProps> = ({
  min,
  max,
  step,
  orientation,
  showLabels
}) => {
  const markers = [];
  const totalSteps = (max - min) / step;
  for (let i = 0; i <= totalSteps; i++) {
    const value = min + i * step;
    const percentage = i / totalSteps * 100;
    markers.push(
      <div
        key={i}
        className={`absolute ${orientation === 'vertical' ? 'w-full' : 'h-full'}`}
        style={{
          [orientation === 'vertical' ? 'top' : 'left']: `${percentage}%`
        }}>
        
        <div
          className={`
            absolute
            bg-gray-400
            ${orientation === 'vertical' ? 'w-2 h-px -left-1' : 'h-2 w-px -top-1'}
          `} />
        
        {showLabels && i % Math.ceil(totalSteps / 5) === 0 &&
        <span
          className={`
              absolute
              text-xs
              text-gray-500
              ${orientation === 'vertical' ? '-left-6' : 'top-4 -translate-x-1/2'}
            `}>
          
            {value}
          </span>
        }
      </div>
    );
  }
  return <div className="absolute inset-0">{markers}</div>;
};
