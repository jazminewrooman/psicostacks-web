'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { MobileMenu } from '@/components/ui/mobile-menu';

// Import WalletButton dynamically to avoid SSR hydration issues
const WalletButton = dynamic(
  () => import('@/components/wallet/wallet-button').then(mod => mod.WalletButton),
  { ssr: false }
);

interface HeaderProps {
  showNavLinks?: boolean;
  showCTAButtons?: boolean;
  showWalletButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  showNavLinks = false, 
  showCTAButtons = false,
  showWalletButton = true 
}) => (
  <header className="sticky top-0 z-10 border-b border-slate-100 bg-white/70 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Logo />
      
      {showNavLinks && (
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#how" className="text-slate-600 hover:text-slate-900 transition-colors">How it works</a>
          <a href="#benefits" className="text-slate-600 hover:text-slate-900 transition-colors">Benefits</a>
          <a href="#privacy" className="text-slate-600 hover:text-slate-900 transition-colors">Privacy</a>
          <a href="/docs" className="text-slate-600 hover:text-slate-900 transition-colors">Docs</a>
        </nav>
      )}

      <div className="hidden md:flex items-center gap-3">
        {showCTAButtons && (
          <>
            <Button href="#candidate">I&apos;m a Candidate</Button>
            <Button href="#employer" variant="outline">I&apos;m an Employer</Button>
          </>
        )}
        
        {showWalletButton && <WalletButton />}
      </div>
      
      <MobileMenu />
    </div>
  </header>
);
