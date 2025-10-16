import React from 'react';

export default function SecurityPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Security Model</h1>
        <p className="text-xl text-slate-600">
          How PsicoStacks protects your sensitive psychometric data.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Multi-Layer Security</h2>
          
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Layer 1: Encryption (AES-256-GCM)</h3>
              <p className="text-slate-700 mb-3">
                All sensitive credential data is encrypted before storage using AES-256-GCM, a military-grade encryption standard.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                <li>256-bit encryption key</li>
                <li>Galois/Counter Mode for authenticated encryption</li>
                <li>Unique initialization vector (IV) per credential</li>
                <li>Authentication tag prevents tampering</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Layer 2: Blockchain (Stacks)</h3>
              <p className="text-slate-700 mb-3">
                Only metadata and commitment hashes stored on-chain. Benefits from Bitcoin&apos;s security via Stacks.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                <li>Inherits Bitcoin&apos;s Proof-of-Work security</li>
                <li>Immutable audit trail</li>
                <li>No PII stored on-chain</li>
                <li>Cryptographic proof of issuance</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Layer 3: Access Control</h3>
              <p className="text-slate-700 mb-3">
                Time-limited, one-time tokens control access to decrypted data.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                <li>Share tokens: 2-hour expiry</li>
                <li>View tokens: 60-second expiry, one-time use</li>
                <li>Token invalidation on use</li>
                <li>Automatic cleanup of expired tokens</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What&apos;s Stored Where</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">✅ On-Chain (Public)</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Credential ID</li>
                <li>• Owner wallet address</li>
                <li>• Issuer wallet address</li>
                <li>• Schema version</li>
                <li>• Commitment hash (SHA-256)</li>
                <li>• Expiry block height</li>
                <li>• Revocation status</li>
              </ul>
            </div>

            <div className="border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-2">🔒 Off-Chain (Encrypted)</h3>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Full psychometric report</li>
                <li>• Test scores & percentiles</li>
                <li>• AI analysis & insights</li>
                <li>• Personal information</li>
                <li>• Assessment metadata</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Threat Model & Mitigations</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-amber-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Threat: Data Breach</h3>
              <p className="text-sm text-slate-700 mb-2"><strong>Mitigation:</strong></p>
              <ul className="text-sm text-slate-600 list-disc list-inside">
                <li>All data encrypted at rest (AES-256-GCM)</li>
                <li>Encryption keys stored separately from data</li>
                <li>Even with database access, data remains unreadable</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Threat: Credential Forgery</h3>
              <p className="text-sm text-slate-700 mb-2"><strong>Mitigation:</strong></p>
              <ul className="text-sm text-slate-600 list-disc list-inside">
                <li>Blockchain immutability prevents tampering</li>
                <li>Commitment hash cryptographically proves data integrity</li>
                <li>Any modification invalidates the hash</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Threat: Unauthorized Access</h3>
              <p className="text-sm text-slate-700 mb-2"><strong>Mitigation:</strong></p>
              <ul className="text-sm text-slate-600 list-disc list-inside">
                <li>Time-limited tokens (60s for full access)</li>
                <li>One-time use view tokens</li>
                <li>Payment required for full report</li>
                <li>Candidate can revoke anytime</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-600 p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Threat: Credential Selling/Transfer</h3>
              <p className="text-sm text-slate-700 mb-2"><strong>Mitigation:</strong></p>
              <ul className="text-sm text-slate-600 list-disc list-inside">
                <li>Soulbound Tokens (non-transferable)</li>
                <li>Wallet-bound credentials</li>
                <li>Smart contract enforces non-transferability</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Privacy by Design</h2>
          
          <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <div>
                  <strong className="text-slate-900">Minimal On-Chain Data:</strong>
                  <p className="text-sm text-slate-700">Only necessary metadata on blockchain. No PII exposed.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <div>
                  <strong className="text-slate-900">User-Controlled Sharing:</strong>
                  <p className="text-sm text-slate-700">Candidates decide who can access and can revoke anytime.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <div>
                  <strong className="text-slate-900">Time-Limited Access:</strong>
                  <p className="text-sm text-slate-700">60-second windows prevent long-term data retention by verifiers.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <div>
                  <strong className="text-slate-900">Audit Trail:</strong>
                  <p className="text-sm text-slate-700">All verifications logged on-chain for transparency.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Best Practices for Users</h2>
          
          <div className="space-y-3">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-1">For Candidates</h3>
              <ul className="text-sm text-blue-800 list-disc list-inside">
                <li>Keep your wallet Secret Key secure</li>
                <li>Only share credentials with trusted employers</li>
                <li>Revoke credentials when no longer needed</li>
                <li>Review verification logs regularly</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">For Employers</h3>
              <ul className="text-sm text-green-800 list-disc list-inside">
                <li>Only request credentials you need</li>
                <li>Review data within 60-second window</li>
                <li>Don&apos;t share view tokens (they&apos;re one-time use)</li>
                <li>Respect candidate privacy</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Learn More</h2>
          <div className="space-y-2">
            <a href="/docs/concepts/sbt" className="block text-violet-600 hover:underline font-medium">
              → Soulbound Tokens
            </a>
            <a href="/docs/concepts/flow" className="block text-violet-600 hover:underline font-medium">
              → Credential Flow
            </a>
            <a href="/docs/api/contracts" className="block text-violet-600 hover:underline font-medium">
              → Smart Contract Security
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
