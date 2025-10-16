import React from 'react';
import Link from 'next/link';

export default function IntroductionPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Introduction to PsicoStacks</h1>
        <p className="text-xl text-slate-600">
          A decentralized platform for creating and verifying psychometric credentials on the blockchain.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What is PsicoStacks?</h2>
          <p className="text-slate-700 mb-4">
            PsicoStacks is a blockchain-based platform that allows candidates to create <strong>verifiable, portable psychometric credentials</strong> as Soulbound Tokens (SBTs) on the Stacks blockchain. These credentials can be shared with employers who can verify their authenticity by paying a small fee, ensuring trust while preserving privacy.
          </p>
          <p className="text-slate-700">
            The platform leverages AI (Mistral) for intelligent data extraction and Stacks blockchain for immutable, Bitcoin-secured credential storage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">🔗 Blockchain-Verified</h3>
              <p className="text-sm text-slate-600">
                Credentials are stored as non-transferable SBTs on Stacks, inheriting Bitcoin&apos;s security.
              </p>
            </div>
            
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">🤖 AI-Powered</h3>
              <p className="text-sm text-slate-600">
                Mistral AI extracts and analyzes psychometric data, generating structured summaries.
              </p>
            </div>
            
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">🔒 Privacy-First</h3>
              <p className="text-sm text-slate-600">
                Full reports are encrypted (AES-256-GCM) and only accessible via time-limited tokens.
              </p>
            </div>
            
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">💰 Pay-to-Verify</h3>
              <p className="text-sm text-slate-600">
                Employers pay 10 STX (~$3) to access full reports, ensuring value for candidates.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How It Works</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Upload Assessment</h3>
                <p className="text-slate-600">Candidates upload their psychometric test results (PDF format).</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">AI Processing</h3>
                <p className="text-slate-600">AI analyzes the document and generates a structured summary with band rating (A/B/C).</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Mint on Blockchain</h3>
                <p className="text-slate-600">Credential is minted as a Soulbound Token on the Stacks blockchain.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Share & Verify</h3>
                <p className="text-slate-600">Generate shareable links that employers can use to verify credentials (pay-per-view model).</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Architecture Overview</h2>
          
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-4">
            <pre className="text-sm text-white-700 overflow-x-auto">
{`┌─────────────┐     ┌─────────────┐
│   Frontend  │────▶│  Backend    │
│  (Next.js)  │     │  (Express)  │
└─────────────┘     └──────┬──────┘
                           │
                ┌──────────┼──────────┐
                │          │          │
                ▼          ▼          ▼
         ┌──────────┐ ┌─────────┐ ┌──────────┐
         │  Stacks  │ │Supabase │ │ Mistral  │
         │Blockchain│ │   DB    │ │   AI     │
         └──────────┘ └─────────┘ └──────────┘`}
            </pre>
          </div>
          
          <p className="text-slate-700">
            The platform consists of three main repositories:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4">
            <li>
              <strong>Frontend:</strong> Next.js 14 app with TypeScript and Tailwind CSS{' '}
              <a href="https://github.com/jazminewrooman/psicostacks-web" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">
                (GitHub)
              </a>
            </li>
            <li>
              <strong>Backend:</strong> Express API with Mistral AI and Supabase{' '}
              <a href="https://github.com/jazminewrooman/psicostacks-backend" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">
                (GitHub)
              </a>
            </li>
            <li>
              <strong>Smart Contracts:</strong> Clarity contracts on Stacks{' '}
              <a href="https://github.com/jazminewrooman/psicostacks-smarts" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">
                (GitHub)
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Use Cases</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-violet-600 pl-4">
              <h3 className="font-semibold text-slate-900 mb-1">For Job Seekers</h3>
              <p className="text-slate-600">
                Stop taking the same psychometric tests for every job application. Create your credential once and share it with unlimited employers.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-slate-900 mb-1">For Recruiters & HR</h3>
              <p className="text-slate-600">
                Instantly verify candidate assessments without contacting test providers. Pay only when you need the full report.
              </p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-semibold text-slate-900 mb-1">For Assessment Providers</h3>
              <p className="text-slate-600">
                Offer blockchain-verified certificates that candidates can share independently, reducing your verification support burden.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Next Steps</h2>
          <div className="space-y-3">
            <Link href="/docs/quick-start" className="block text-violet-600 hover:underline font-medium">
              → Quick Start Guide
            </Link>
            <Link href="/docs/guides/candidates" className="block text-violet-600 hover:underline font-medium">
              → Guide for Candidates
            </Link>
            <Link href="/docs/guides/employers" className="block text-violet-600 hover:underline font-medium">
              → Guide for Employers
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
