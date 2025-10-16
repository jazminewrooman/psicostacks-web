import React from 'react';

export default function ValidationPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Idea Validation & Pivot Story</h1>
        <p className="text-xl text-slate-600">
          The journey from gamified testing to blockchain-verified credentials.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Origin Story</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
            <p className="text-slate-700 mb-4">
              I came up with the idea for PsicoStacks based on my own experience working at a human resources company.
            </p>
            <p className="text-slate-700">
              I remembered how repetitive and time-consuming psychometric testing was — for both candidates and recruiters. 
              That&apos;s where the idea started: <strong>what if I could make these tests more engaging, maybe even gamified?</strong>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The First Iteration</h2>
          
          <div className="space-y-4">
            <p className="text-slate-700">
              So I began developing the concept and refining it with ChatGPT.
            </p>
            
            <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Initial Concept: Gamified Testing</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Make psychometric tests more engaging</li>
                <li>• Add game mechanics to reduce testing fatigue</li>
                <li>• Improve candidate experience through entertainment</li>
              </ul>
            </div>

            <p className="text-slate-700">
              It felt exciting — a fresh take on psychometric testing — but when I shared it with Claude, 
              it pushed me to look deeper.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Critical Feedback</h2>
          
          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-4">
            <p className="text-slate-700 mb-3">
              Claude pointed out several red flags in the model:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>🚩 <strong>Scalability issues:</strong> Building and maintaining gamified tests at scale</li>
              <li>🚩 <strong>User retention problems:</strong> Novelty wears off quickly</li>
              <li>🚩 <strong>Core problem unsolved:</strong> Gamification didn&apos;t address the underlying inefficiency</li>
            </ul>
          </div>

          <p className="text-slate-700">
            That&apos;s when I decided to pivot.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Pivot</h2>
          
          <div className="space-y-4">
            <p className="text-slate-700">
              I went back to ChatGPT and reframed the idea — shifting the focus from <strong>entertainment</strong> to{' '}
              <strong>data ownership and privacy</strong>.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-3">New Direction: Credential Ownership</h3>
              <p className="text-slate-700 mb-3">
                Instead of building another test platform, I decided to build a <strong>candidate-owned credential wallet</strong> powered 
                by Stacks blockchain — where people can store their encrypted psychometric results once and reuse them securely 
                across job applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="border-l-4 border-red-400 bg-red-50 p-4">
                <h4 className="font-semibold text-red-900 mb-2">❌ Old Approach</h4>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Gamified testing platform</li>
                  <li>• Focus on engagement</li>
                  <li>• Yet another test to take</li>
                  <li>• Company-owned data</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-400 bg-green-50 p-4">
                <h4 className="font-semibold text-green-900 mb-2">✅ New Approach</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Credential verification platform</li>
                  <li>• Focus on data ownership</li>
                  <li>• Test once, share unlimited</li>
                  <li>• User-owned blockchain data</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What PsicoStacks Is Today</h2>
          
          <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
            <p className="text-slate-700 mb-4">
              Now, PsicoStacks isn&apos;t about making tests more fun — it&apos;s about{' '}
              <strong>giving people control over their psychological data</strong> and saving recruiters time and trust in the process.
            </p>
            
            <div className="mt-4 p-4 bg-white rounded border border-violet-300">
              <h3 className="font-semibold text-slate-900 mb-2">The Core Value Proposition</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-violet-700">For Candidates:</p>
                  <p className="text-sm text-slate-700">Own your psychometric data. Test once, share unlimited times. No more repeating the same tests.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-violet-700">For Employers:</p>
                  <p className="text-sm text-slate-700">Instant verification of authentic credentials. Save time and money on testing and verification.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-violet-700">For Everyone:</p>
                  <p className="text-sm text-slate-700">Blockchain-secured, privacy-first, candidate-controlled data ecosystem.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Full Validation Process</h2>
          
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <p className="text-slate-700 mb-4">
              The complete idea validation conversation with Claude — including all the critical questions, concerns, 
              and pivots — is documented and publicly available.
            </p>
            
            <a 
              href="https://claude.ai/share/51e98710-0b3a-4182-bd21-e4a592d47c44" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Read Full Validation Conversation
            </a>

            <p className="text-xs text-slate-600 mt-3">
              This conversation shows the entire thought process, from initial concept to final pivot decision.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Lessons Learned</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-slate-900 mb-1">1. Validate the Problem, Not the Solution</h3>
              <p className="text-sm text-slate-700">
                The real problem wasn&apos;t that tests were boring — it was that candidates had to repeat them for every job, 
                and employers struggled with verification.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-semibold text-slate-900 mb-1">2. Be Willing to Pivot Early</h3>
              <p className="text-sm text-slate-700">
                Better to pivot during ideation than after building the wrong product. AI feedback accelerated this process.
              </p>
            </div>

            <div className="border-l-4 border-violet-600 pl-4">
              <h3 className="font-semibold text-slate-900 mb-1">3. Blockchain Fits When There&apos;s a Trust Gap</h3>
              <p className="text-sm text-slate-700">
                Blockchain makes sense for credentials because trust and verification are core to the problem. 
                It&apos;s not blockchain for blockchain&apos;s sake.
              </p>
            </div>

            <div className="border-l-4 border-amber-600 pl-4">
              <h3 className="font-semibold text-slate-900 mb-1">4. Privacy + Ownership = Differentiation</h3>
              <p className="text-sm text-slate-700">
                In an era of data breaches and privacy concerns, giving users true ownership of their psychometric data 
                is a competitive advantage.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Learn More</h2>
          <div className="space-y-2">
            <a href="/docs" className="block text-violet-600 hover:underline font-medium">
              → Introduction to PsicoStacks
            </a>
            <a href="/docs/concepts/sbt" className="block text-violet-600 hover:underline font-medium">
              → Why Soulbound Tokens?
            </a>
            <a href="/docs/concepts/security" className="block text-violet-600 hover:underline font-medium">
              → Privacy & Security Model
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
