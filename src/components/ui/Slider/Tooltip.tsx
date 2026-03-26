import React from 'react';
interface TooltipProps {
  value: number;
  visible: boolean;
}
export const Tooltip: React.FC<TooltipProps> = ({ value, visible }) => {
  if (!visible) return null;
  return (
    <div
      className={`
        absolute
        -top-8
        left-1/2
        -translate-x-1/2
        px-2
        py-1
        bg-gray-800
        text-white
        text-xs
        rounded
        whitespace-nowrap
      `}>
      
      {value}
    </div>);

};
