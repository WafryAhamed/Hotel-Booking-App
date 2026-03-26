import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionContextType {
  value: string | string[];
  onValueChange: (value: string | string[]) => void;
  type: 'single' | 'multiple';
  collapsible: boolean;
  itemValue?: string;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);
const ItemContext = createContext<{ value: string } | undefined>(undefined);

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within <Accordion>');
  }
  return context;
}

function useAccordionItem() {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('AccordionTrigger/Content must be used within <Accordion.Item>');
  }
  return context;
}

interface AccordionProps {
  type?: 'single' | 'multiple';
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  collapsible?: boolean;
  children: ReactNode;
  className?: string;
}

export function Accordion({
  type = 'single',
  value: controlledValue,
  onValueChange,
  collapsible = false,
  children,
  className = '',
}: AccordionProps) {
  const [internalValue, setInternalValue] = useState<string | string[]>(
    type === 'single' ? '' : []
  );

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleValueChange = (newValue: string | string[]) => {
    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <AccordionContext.Provider
      value={{
        value,
        onValueChange: handleValueChange,
        type,
        collapsible,
      }}
    >
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

function AccordionItem({ value, children, className = '' }: AccordionItemProps) {
  return (
    <ItemContext.Provider value={{ value }}>
      <div className={`border-b border-gray-200 ${className}`}>
        {children}
      </div>
    </ItemContext.Provider>
  );
}

interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

function AccordionTrigger({ children, className = '' }: AccordionTriggerProps) {
  const { value: accordionValue, onValueChange, type, collapsible } = useAccordion();
  const { value: itemValue } = useAccordionItem();

  const isOpen =
    type === 'single'
      ? accordionValue === itemValue
      : Array.isArray(accordionValue) && accordionValue.includes(itemValue);

  const handleClick = () => {
    if (type === 'single') {
      if (isOpen && collapsible) {
        onValueChange('');
      } else {
        onValueChange(itemValue);
      }
    } else {
      const newValue = Array.isArray(accordionValue) ? [...accordionValue] : [];
      const index = newValue.indexOf(itemValue);
      if (index >= 0) {
        newValue.splice(index, 1);
      } else {
        newValue.push(itemValue);
      }
      onValueChange(newValue);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors ${className}`}
    >
      {children}
      <ChevronDown
        size={20}
        className={`text-gray-600 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
      />
    </button>
  );
}

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

function AccordionContent({ children, className = '' }: AccordionContentProps) {
  const { value: accordionValue, type } = useAccordion();
  const { value: itemValue } = useAccordionItem();

  const isOpen =
    type === 'single'
      ? accordionValue === itemValue
      : Array.isArray(accordionValue) && accordionValue.includes(itemValue);

  if (!isOpen) return null;

  return (
    <div className={`px-4 py-3 bg-gray-50 ${className}`}>
      {children}
    </div>
  );
}

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export { AccordionItem, AccordionTrigger, AccordionContent };

