'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';

export default function ExpiredPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header showNavLinks={false} showCTAButtons={false} showWalletButton={false} />
      
      <main className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="text-6xl mb-4">⏰</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          View Time <span className="text-red-600">Expired</span>
        </h1>
        <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
          Your 60-second viewing window has expired. To view the credential again, 
          you'll need to scan the QR code and pay the verification fee again.
        </p>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 mb-8 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Why Only 60 Seconds?</h2>
          <ul className="text-left text-slate-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span>
              <span>Protects candidate privacy by limiting access time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span>
              <span>Prevents unauthorized sharing or screenshots</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span>
              <span>Ensures fair compensation for each verification</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span>
              <span>Creates an audit trail of who accessed the credential</span>
            </li>
          </ul>
        </div>

        <Button onClick={() => router.push('/')}>
          Return to Home
        </Button>
      </main>

      <Footer />
    </div>
  );
}
