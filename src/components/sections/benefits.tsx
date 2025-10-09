import React from 'react';

const benefits = [
  {
    title: "Portable & Reusable",
    desc: "Use one credential across multiple employers. Stop repeating the same tests.",
  },
  {
    title: "Verified in <60s",
    desc: "One-time QR. Small fee. Public proof of issuance, expiry, and revocation.",
  },
  {
    title: "Privacy by design",
    desc: "Only a non-reversible hash is on-chain. Real results live off-chain with short-lived access.",
  }
];

export const Benefits: React.FC = () => (
  <section id="benefits" className="mx-auto max-w-7xl px-6 py-16">
    <div className="grid gap-6 md:grid-cols-3">
      {benefits.map((benefit, i) => (
        <div key={i} className="rounded-3xl border border-slate-200 p-6">
          <div className="text-violet-700 text-sm font-semibold">{benefit.title}</div>
          <p className="mt-2 text-slate-600 text-sm">{benefit.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
