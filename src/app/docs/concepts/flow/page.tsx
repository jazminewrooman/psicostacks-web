import React from 'react';

export default function FlowPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Credential Flow</h1>
        <p className="text-xl text-slate-600">
          Understanding the complete lifecycle of a psychometric credential in PsicoStacks.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Complete Flow Diagram</h2>
          
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-white-700">
{`┌──────────────┐
│  Candidate   │
│  Uploads PDF │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Backend    │
│ Extracts Text│
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Mistral AI  │
│   Analyzes   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Frontend   │
│Shows Summary │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    Mint on   │
│   Stacks     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Store in DB  │
│  (Encrypted) │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Credential  │
│    Ready     │
└──────────────┘`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Phase 1: Creation</h2>
          
          <div className="space-y-4">
            <div className="bg-violet-50 border-l-4 border-violet-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">1. Upload & Extract</h3>
              <p className="text-slate-700 text-sm mb-2">
                Candidate uploads a psychometric assessment PDF. Backend extracts text using pdf-parse library.
              </p>
              <code className="text-xs bg-slate-900 text-slate-100 px-2 py-1 rounded">POST /api/ai-interpret</code>
            </div>

            <div className="bg-violet-50 border-l-4 border-violet-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">2. AI Analysis</h3>
              <p className="text-slate-700 text-sm mb-2">
                Mistral AI processes the text and generates a structured analysis with band rating (A/B/C) and key insights.
              </p>
              <ul className="text-xs text-slate-600 list-disc list-inside">
                <li>Extracts scores and percentiles</li>
                <li>Identifies strengths and areas for development</li>
                <li>Assigns overall performance band</li>
              </ul>
            </div>

            <div className="bg-violet-50 border-l-4 border-violet-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">3. Review Summary</h3>
              <p className="text-slate-700 text-sm">
                Frontend displays AI summary to candidate for review. Candidate can approve or try again with a different file.
              </p>
            </div>

            <div className="bg-violet-50 border-l-4 border-violet-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">4. Blockchain Minting</h3>
              <p className="text-slate-700 text-sm mb-2">
                Smart contract creates SBT with metadata:
              </p>
              <code className="text-xs bg-slate-900 text-slate-100 px-2 py-1 rounded block">(mint-credential recipient schema commit ttl)</code>
              <p className="text-xs text-slate-600 mt-2">Gas fee: ~0.5 STX</p>
            </div>

            <div className="bg-violet-50 border-l-4 border-violet-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">5. Encrypted Storage</h3>
              <p className="text-slate-700 text-sm">
                Full report is encrypted (AES-256-GCM) and stored in Supabase. Only commitment hash goes on-chain.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Phase 2: Sharing</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">1. Generate Share Token</h3>
              <p className="text-slate-700 text-sm mb-2">
                Candidate requests a shareable link from their credentials dashboard.
              </p>
              <code className="text-xs bg-slate-900 text-slate-100 px-2 py-1 rounded block">POST /api/credentials/share</code>
              <p className="text-xs text-slate-600 mt-2">Token valid for: 2 hours</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">2. QR Code Generation</h3>
              <p className="text-slate-700 text-sm">
                Frontend generates QR code containing the verification URL. Can be shared via email, messaging, or scanning.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">3. Unlimited Sharing</h3>
              <p className="text-slate-700 text-sm">
                Candidate can generate as many share links as needed. Each employer gets their own unique verification flow.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Phase 3: Verification</h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">1. Preview (Free)</h3>
              <p className="text-slate-700 text-sm mb-2">
                Employer opens link and sees credential preview without payment.
              </p>
              <ul className="text-xs text-slate-600 list-disc list-inside">
                <li>Band rating (A/B/C)</li>
                <li>Key performance indicators</li>
                <li>Blockchain verification status</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">2. Payment</h3>
              <p className="text-slate-700 text-sm mb-2">
                Employer pays 10 STX verification fee via smart contract:
              </p>
              <code className="text-xs bg-slate-900 text-slate-100 px-2 py-1 rounded block">(verify-paid credential-id)</code>
              <p className="text-xs text-slate-600 mt-2">Fee goes to credential owner</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">3. View Token Generation</h3>
              <p className="text-slate-700 text-sm mb-2">
                After payment confirmation, backend generates a one-time view token.
              </p>
              <code className="text-xs bg-slate-900 text-slate-100 px-2 py-1 rounded block">POST /api/verify/pay</code>
              <p className="text-xs text-slate-600 mt-2">Valid for: 60 seconds, one-time use</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">4. Full Report Access</h3>
              <p className="text-slate-700 text-sm mb-2">
                Employer accesses decrypted full report via view token.
              </p>
              <code className="text-xs bg-slate-900 text-slate-100 px-2 py-1 rounded block">GET /api/verify/view?token=view_xxx</code>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">5. Token Expiration</h3>
              <p className="text-slate-700 text-sm">
                After 60 seconds or one use, token expires. Employer redirected to expiry page if they try to access again.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Phase 4: Management</h2>
          
          <div className="space-y-4">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Revocation</h3>
              <p className="text-slate-700 text-sm mb-2">
                Candidate can revoke credential at any time via smart contract:
              </p>
              <code className="text-xs bg-slate-900 text-slate-100 px-2 py-1 rounded block">(revoke credential-id)</code>
              <p className="text-xs text-slate-600 mt-2">All future verification attempts will fail</p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Expiration</h3>
              <p className="text-slate-700 text-sm">
                Credentials automatically expire after the TTL period (~1 year = 52,560 blocks). Smart contract checks block height on verification.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Related Topics</h2>
          <div className="space-y-2">
            <a href="/docs/concepts/sbt" className="block text-violet-600 hover:underline font-medium">
              → Soulbound Tokens
            </a>
            <a href="/docs/concepts/security" className="block text-violet-600 hover:underline font-medium">
              → Security Model
            </a>
            <a href="/docs/guides/candidates" className="block text-violet-600 hover:underline font-medium">
              → Complete Candidate Guide
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
