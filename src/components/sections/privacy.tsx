import React from 'react';
import { Check } from '@/components/ui/check';

export const Privacy: React.FC = () => (
  <section id="privacy" className="mx-auto max-w-7xl px-6 pb-16">
    <div className="rounded-3xl border border-slate-200 p-6 md:p-8 bg-gradient-to-br from-white to-violet-50">
      <h3 className="text-xl font-bold text-slate-900">Privacy & Security</h3>
      <ul className="mt-3 text-sm text-slate-700 space-y-1">
        <li className="flex items-start gap-2">
          <Check stroke="#16a34a" /> 
          No personally identifiable information on-chain.
        </li>
        <li className="flex items-start gap-2">
          <Check stroke="#16a34a" /> 
          Revocable credentials with expiry windows.
        </li>
        <li className="flex items-start gap-2">
          <Check stroke="#16a34a" /> 
          Short-lived signed links after payment.
        </li>
        <li className="flex items-start gap-2">
          <Check stroke="#16a34a" /> 
          Audit log: who accessed what and when.
        </li>
      </ul>
    </div>
  </section>
);
