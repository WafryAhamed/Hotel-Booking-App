import React from 'react';
import {
  Clock,
  Info,
  Baby,
  PawPrintIcon,
  CreditCard,
  Shield,
  IdCard } from
'lucide-react';
import { PROPERTY_POLICIES } from '../../data/propertyDetailData';
const POLICY_ICONS: Record<string, React.ReactNode> = {
  clock: <Clock className="w-5 h-5 text-brand-navy" />,
  info: <Info className="w-5 h-5 text-brand-navy" />,
  baby: <Baby className="w-5 h-5 text-brand-navy" />,
  paw: <PawPrintIcon className="w-5 h-5 text-brand-navy" />,
  'credit-card': <CreditCard className="w-5 h-5 text-brand-navy" />,
  shield: <Shield className="w-5 h-5 text-brand-navy" />,
  id: <IdCard className="w-5 h-5 text-brand-navy" />
};
export function PoliciesSection() {
  return (
    <section aria-labelledby="policies-heading" className="mb-8">
      <h2
        id="policies-heading"
        className="text-xl md:text-2xl font-bold text-brand-black mb-4">
        
        Property Policies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROPERTY_POLICIES.map((policy) =>
        <div
          key={policy.label}
          className="flex gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
          
            <div className="flex-shrink-0 mt-0.5">
              {POLICY_ICONS[policy.icon] ||
            <Info className="w-5 h-5 text-brand-navy" />
            }
            </div>
            <div>
              <h3 className="text-sm font-semibold text-brand-black mb-0.5">
                {policy.label}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {policy.value}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>);

}


