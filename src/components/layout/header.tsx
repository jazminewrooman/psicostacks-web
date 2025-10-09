import React from 'react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { MobileMenu } from '@/components/ui/mobile-menu';

export const Header: React.FC = () => (
  <header className="sticky top-0 z-10 border-b border-slate-100 bg-white/70 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Logo />
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#how" className="text-slate-600 hover:text-slate-900 transition-colors">How it works</a>
        <a href="#benefits" className="text-slate-600 hover:text-slate-900 transition-colors">Benefits</a>
        <a href="#privacy" className="text-slate-600 hover:text-slate-900 transition-colors">Privacy</a>
      </nav>
      <div className="hidden md:flex items-center gap-3">
        <Button href="#candidate">I'm a Candidate</Button>
        <Button href="#employer" variant="outline">I'm an Employer</Button>
      </div>
      <MobileMenu />
    </div>
  </header>
);
