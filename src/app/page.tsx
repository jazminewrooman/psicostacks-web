import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Benefits } from '@/components/sections/benefits';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Privacy } from '@/components/sections/privacy';
import { CTA } from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header showNavLinks={true} showCTAButtons={true} showWalletButton={false} />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Privacy />
      <CTA />
      <Footer />
    </div>
  );
}
