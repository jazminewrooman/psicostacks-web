import React from 'react';
import { Button } from '@/components/ui/button';

export const CTA: React.FC = () => (
  <section id="cta" className="mx-auto max-w-7xl px-6 pb-20">
    <div className="grid gap-6 md:grid-cols-2">
      <div id="candidate" className="rounded-3xl border border-violet-200 p-6 bg-violet-50">
        <h4 className="text-lg font-semibold text-slate-900">I&apos;m a Candidate</h4>
        <p className="text-sm text-slate-700 mt-1">Create your portable credential and stop retesting.</p>
        <div className="mt-4 flex gap-3">
          <Button href="/candidate">Open candidate app</Button>
          <Button href="#how" variant="outline">How it works</Button>
        </div>
      </div>
      <div id="employer" className="rounded-3xl border border-violet-200 p-6">
        <h4 className="text-lg font-semibold text-slate-900">I&apos;m an Employer / Recruiter</h4>
        <p className="text-sm text-slate-700 mt-1">Verify in seconds. Pay only when you need the details.</p>
        <div className="mt-4 flex gap-3">
          <Button href="/employer">Open employer app</Button>
          <Button href="#privacy" variant="outline">See trust model</Button>
        </div>
      </div>
    </div>
  </section>
);
