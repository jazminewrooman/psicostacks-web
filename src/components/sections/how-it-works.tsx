import React from 'react';
import { Button } from '@/components/ui/button';

export const HowItWorks: React.FC = () => (
  <section id="how" className="mx-auto max-w-7xl px-6 pb-16">
    <h2 className="text-2xl font-bold text-slate-900">How it works</h2>
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {/* Candidate path */}
      <div className="rounded-3xl border border-slate-200 p-6">
        <div className="text-sm font-semibold text-violet-700">Candidate</div>
        <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700 space-y-1">
          <li>Upload an existing report or take short tests.</li>
          <li>Create your credential (hash on-chain, no personal data).</li>
          <li>Share a one-time QR with employers.</li>
        </ol>
        <div className="mt-4 flex gap-3">
          <Button href="#candidate">Get started</Button>
          <Button href="#demo" variant="outline">See demo</Button>
        </div>
      </div>
      {/* Employer path */}
      <div className="rounded-3xl border border-slate-200 p-6">
        <div className="text-sm font-semibold text-violet-700">Employer / Recruiter</div>
        <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700 space-y-1">
          <li>Scan the QR to open a secure preview.</li>
          <li>Pay a small verification fee.</li>
          <li>See AI-written insights for 60 seconds + public proof link.</li>
        </ol>
        <div className="mt-4 flex gap-3">
          <Button href="#employer">Verify now</Button>
          <Button href="#security" variant="outline">Why trust us?</Button>
        </div>
      </div>
    </div>
  </section>
);
