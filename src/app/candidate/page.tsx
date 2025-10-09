import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Check } from '@/components/ui/check';

export default function CandidatePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 mb-4">
            Create Your <span className="text-violet-600">Portable Credential</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Upload your existing psychological assessment results or take our quick tests to create a verifiable, portable credential.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Upload Existing Report</h3>
            <p className="text-slate-600 mb-6">
              Have you already taken psychological assessments? Upload your results and we'll create a credential from them.
            </p>
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center">
              <div className="text-slate-400 mb-2">📄</div>
              <p className="text-sm text-slate-500">Drag & drop your PDF or click to browse</p>
            </div>
            <Button href="#" className="w-full mt-4">Upload Report</Button>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Take Quick Tests</h3>
            <p className="text-slate-600 mb-6">
              Don't have existing results? Take our streamlined psychological assessments (15-30 minutes).
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Check stroke="#16a34a" className="shrink-0" />
                <span className="text-sm text-slate-700">Cognitive ability assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <Check stroke="#16a34a" className="shrink-0" />
                <span className="text-sm text-slate-700">Personality profile</span>
              </div>
              <div className="flex items-center gap-3">
                <Check stroke="#16a34a" className="shrink-0" />
                <span className="text-sm text-slate-700">Work style preferences</span>
              </div>
            </div>
            <Button href="#" className="w-full">Start Assessment</Button>
          </div>
        </div>

        <div className="rounded-3xl border border-violet-200 p-8 bg-violet-50">
          <h3 className="text-xl font-bold text-slate-900 mb-4">What happens next?</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">1</div>
              <h4 className="font-semibold text-slate-900 mb-2">AI Analysis</h4>
              <p className="text-sm text-slate-600">Our AI processes your results and creates role-aligned insights</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">2</div>
              <h4 className="font-semibold text-slate-900 mb-2">Credential Creation</h4>
              <p className="text-sm text-slate-600">A hash is stored on Bitcoin, no personal data on-chain</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">3</div>
              <h4 className="font-semibold text-slate-900 mb-2">Share QR Code</h4>
              <p className="text-sm text-slate-600">Get a one-time QR code to share with employers</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
