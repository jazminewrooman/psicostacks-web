'use client';

import React, { useState } from 'react';
import { Button } from './button';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg z-20">
          <div className="px-6 py-4 space-y-4">
            <nav className="space-y-3">
              <a 
                href="#how" 
                className="block text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How it works
              </a>
              <a 
                href="#benefits" 
                className="block text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Benefits
              </a>
              <a 
                href="#privacy" 
                className="block text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Privacy
              </a>
            </nav>
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Button href="#candidate" className="w-full">I'm a Candidate</Button>
              <Button href="#employer" variant="outline" className="w-full">I'm an Employer</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
