import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Check } from '@/components/ui/check';

export default function EmployerPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 mb-4">
            Verify Candidates in <span className="text-violet-600">Seconds</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Scan a QR code, pay a small verification fee, and get AI-generated insights about candidates in under 60 seconds.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Scan QR Code</h2>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="text-slate-600 mb-6">
                When a candidate shares their PsicoStacks credential, you'll receive a QR code. 
                Scan it to access their verified psychological assessment results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-slate-700">Scan the QR code with your device</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-slate-700">Pay verification fee (typically $5-15)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-slate-700">View AI-generated insights for 60 seconds</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-slate-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">📱</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">What You Get</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check stroke="#16a34a" className="shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">AI-Generated Summary</h4>
                  <p className="text-sm text-slate-600">Clear, role-aligned insights about the candidate's psychological profile</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check stroke="#16a34a" className="shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Verification Proof</h4>
                  <p className="text-sm text-slate-600">Public proof of credential issuance, expiry, and revocation status</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check stroke="#16a34a" className="shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Audit Trail</h4>
                  <p className="text-sm text-slate-600">Record of who accessed the credential and when</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Pricing</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Basic Verification</span>
                <span className="font-bold text-slate-900">$5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Detailed Analysis</span>
                <span className="font-bold text-slate-900">$10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Executive Summary</span>
                <span className="font-bold text-slate-900">$15</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-violet-50 rounded-2xl">
              <p className="text-sm text-violet-700">
                <strong>No subscription required.</strong> Pay only when you verify a candidate.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-violet-200 p-8 bg-violet-50 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Ready to Start?</h3>
          <p className="text-slate-600 mb-6">
            No setup required. Just scan QR codes when candidates share them with you.
          </p>
          <Button href="#" className="bg-violet-600 hover:bg-violet-700">
            Demo Verification
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
