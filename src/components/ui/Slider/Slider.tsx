import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Tooltip } from './Tooltip';
import { Track } from './Track';
import { Thumb } from './Thumb';
import { Markers } from './Markers';
export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number | [number, number];
  onChange?: (value: number | [number, number]) => void;
  orientation?: 'horizontal' | 'vertical';
  disabled?: boolean;
  showMarkers?: boolean;
  showLabels?: boolean;
  className?: string;
}
export const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value: propValue,
  onChange,
  orientation = 'horizontal',
  disabled = false,
  showMarkers = true,
  showLabels = true,
  className = ''
}: SliderProps) => {
  const isRange = Array.isArray(propValue);
  const [value, setValue] = useState<number | [number, number]>(
    propValue ?? (isRange ? [min, max] : min)
  );
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [activeThumb, setActiveThumb] = useState<'start' | 'end' | 'single'>(
    'single'
  );
  const getPercentage = useCallback(
    (value: number) => {
      return (value - min) / (max - min) * 100;
    },
    [min, max]
  );
  const handleTrackClick = (event: React.MouseEvent | React.TouchEvent) => {
    if (disabled) return;
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const clientPosition =
    'touches' in event ? event.touches[0].clientX : event.clientX;
    const percentage = (clientPosition - rect.left) / rect.width * 100;
    const newValue = Math.round(percentage * (max - min) / 100 + min);
    if (isRange && Array.isArray(value)) {
      const [start, end] = value;
      const distanceToStart = Math.abs(newValue - start);
      const distanceToEnd = Math.abs(newValue - end);
      if (distanceToStart < distanceToEnd) {
        setValue([newValue, end]);
        onChange?.([newValue, end]);
      } else {
        setValue([start, newValue]);
        onChange?.([start, newValue]);
      }
    } else {
      setValue(newValue);
      onChange?.(newValue);
    }
  };
  const handleKeyDown = (
  event: React.KeyboardEvent,
  thumb: 'start' | 'end' | 'single') =>
  {
    if (disabled) return;
    const increment = event.shiftKey ? step * 10 : step;
    let newValue = Array.isArray(value) ? [...value] : value;
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        if (Array.isArray(newValue)) {
          if (thumb === 'start') {
            newValue[0] = Math.min(newValue[1], newValue[0] + increment);
          } else {
            newValue[1] = Math.min(max, newValue[1] + increment);
          }
        } else {
          newValue = Math.min(max, (newValue as number) + increment);
        }
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        if (Array.isArray(newValue)) {
          if (thumb === 'start') {
            newValue[0] = Math.max(min, newValue[0] - increment);
          } else {
            newValue[1] = Math.max(newValue[0], newValue[1] - increment);
          }
        } else {
          newValue = Math.max(min, (newValue as number) - increment);
        }
        break;
    }
    setValue(newValue);
    onChange?.(newValue);
  };
  return (
    <div
      className={`relative ${orientation === 'vertical' ? 'h-64' : 'h-12'} ${className}`}
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={Array.isArray(value) ? value[0] : value}
      aria-disabled={disabled}
      aria-orientation={orientation}>
      
      <Track
        ref={trackRef}
        orientation={orientation}
        disabled={disabled}
        onClick={handleTrackClick}>
        
        {showMarkers &&
        <Markers
          min={min}
          max={max}
          step={step}
          orientation={orientation}
          showLabels={showLabels} />

        }
        {isRange && Array.isArray(value) ?
        <>
            <Thumb
            position={getPercentage(value[0])}
            onKeyDown={(e) => handleKeyDown(e, 'start')}
            disabled={disabled}
            orientation={orientation}
            active={activeThumb === 'start'}
            setActive={() => setIsDragging(true)}
            aria-label="Lower bound">
            
              <Tooltip
              value={value[0]}
              visible={isDragging || activeThumb === 'start'} />
            
            </Thumb>
            <Thumb
            position={getPercentage(value[1])}
            onKeyDown={(e) => handleKeyDown(e, 'end')}
            disabled={disabled}
            orientation={orientation}
            active={activeThumb === 'end'}
            setActive={() => setIsDragging(true)}
            aria-label="Upper bound">
            
              <Tooltip
              value={value[1]}
              visible={isDragging || activeThumb === 'end'} />
            
            </Thumb>
          </> :

        <Thumb
          position={getPercentage(value as number)}
          onKeyDown={(e) => handleKeyDown(e, 'single')}
          disabled={disabled}
          orientation={orientation}
          active={isDragging}
          setActive={() => setIsDragging(true)}
          aria-label="Slider thumb">
          
            <Tooltip value={value as number} visible={isDragging} />
          </Thumb>
        }
      </Track>
    </div>);

};
