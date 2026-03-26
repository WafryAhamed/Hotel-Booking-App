import React from 'react';
interface ThumbProps {
  position: number;
  onKeyDown: (event: React.KeyboardEvent) => void;
  disabled: boolean;
  orientation: 'horizontal' | 'vertical';
  active: boolean;
  setActive: () => void;
  children: React.ReactNode;
  'aria-label': string;
}
export const Thumb: React.FC<ThumbProps> = ({
  position,
  onKeyDown,
  disabled,
  orientation,
  active,
  setActive,
  children,
  'aria-label': ariaLabel
}) => {
  return (
    <div
      className={`
        absolute
        ${orientation === 'vertical' ? '-translate-y-1/2' : '-translate-x-1/2'}
        ${orientation === 'vertical' ? 'left-1/2' : 'top-1/2'}
        ${disabled ? 'cursor-not-allowed' : 'cursor-grab'}
        ${active ? 'ring-2 ring-gray-400' : ''}
      `}
      style={{
        [orientation === 'vertical' ? 'top' : 'left']: `${position}%`
      }}
      role="slider"
      tabIndex={disabled ? -1 : 0}
      onKeyDown={onKeyDown}
      onFocus={setActive}
      onBlur={() => {}}
      aria-label={ariaLabel}>
      
      <div
        className={`
          w-4 h-4
          bg-white
          border-2 border-gray-300
          rounded-full
          shadow-sm
          transition-transform
          ${active ? 'scale-110' : ''}
          ${disabled ? 'bg-gray-200' : 'hover:border-gray-400'}
        `} />
      
      {children}
    </div>);

};
