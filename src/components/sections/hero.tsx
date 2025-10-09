import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HeroIllustration } from '@/components/ui/hero-illustration';

export const Hero: React.FC = () => (
  <section className="relative w-full h-screen min-h-[600px] max-h-[800px] overflow-hidden bg-violet-900">
    <div className="absolute inset-0 w-full h-full z-0">
      <div className="relative w-full h-full">
        <Image
          src="/psicostackshero.png"
          alt="PsicoStacks Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/10 to-violet-900/20" />
      </div>
    </div>
    <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-10">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-100">
            Blockchain + AI · No PII on-chain
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-black leading-tight tracking-tight text-white">
            Verify hiring credentials in <strong>seconds</strong>
          </h1>
          <p className="mt-4 text-violet-100 text-lg">
            AI makes results understandable; Bitcoin makes them provable and revocable. Share via one-time QR. Employers pay a small fee to verify.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button href="#candidate">I'm a Candidate</Button>
            <Button href="#employer" variant="outline">I'm an Employer</Button>
          </div>
          <p className="mt-3 text-xs text-violet-200">No retesting. No PDFs. Just portable, verifiable credentials.</p>
        </div>
        <HeroIllustration />
      </div>
    </div>
  </section>
);
