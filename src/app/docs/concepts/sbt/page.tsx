import React from 'react';

export default function SBTPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Soulbound Tokens (SBTs)</h1>
        <p className="text-xl text-slate-600">
          Understanding the core technology behind PsicoStacks credentials.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What are Soulbound Tokens?</h2>
          <p className="text-slate-700 mb-4">
            Soulbound Tokens (SBTs) are non-transferable NFTs that are permanently bound to a wallet address. 
            Unlike regular NFTs that can be bought, sold, or transferred, SBTs represent credentials, achievements, 
            or identities that should remain attached to their owner.
          </p>
          <p className="text-slate-700">
            In PsicoStacks, your psychometric credentials are minted as SBTs, ensuring they cannot be sold, 
            transferred, or forged. They are cryptographically tied to your wallet, proving authentic ownership.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Properties</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-violet-600 pl-4 py-2">
              <h3 className="font-semibold text-slate-900 mb-1">Non-Transferable</h3>
              <p className="text-slate-700">
                Once minted, the SBT cannot be transferred to another wallet. This prevents credential theft or fraudulent selling.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-semibold text-slate-900 mb-1">Verifiable</h3>
              <p className="text-slate-700">
                Anyone can verify the authenticity of an SBT by checking the blockchain, but only authorized parties can view the full data.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="font-semibold text-slate-900 mb-1">Revocable</h3>
              <p className="text-slate-700">
                The credential owner can revoke their SBT at any time, immediately invalidating all verification attempts.
              </p>
            </div>

            <div className="border-l-4 border-amber-600 pl-4 py-2">
              <h3 className="font-semibold text-slate-900 mb-1">Time-Bound</h3>
              <p className="text-slate-700">
                SBTs can have an expiration date, after which they are automatically considered invalid.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Smart Contract Implementation</h2>
          
          <p className="text-slate-700 mb-4">
            PsicoStacks SBTs are implemented using Clarity smart contracts on the Stacks blockchain:
          </p>

          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto mb-4">
            <pre><code>{`(define-public (mint-credential 
  (recipient principal)
  (schema (string-ascii 32))
  (commit (buff 32))
  (ttl-blocks uint))
  (response uint uint))

;; Creates a new SBT with:
;; - recipient: wallet address
;; - schema: credential version
;; - commit: SHA-256 hash of encrypted data
;; - ttl-blocks: validity period (~52560 blocks = 1 year)`}</code></pre>
          </div>

          <p className="text-slate-700">
            The contract stores only metadata on-chain. Sensitive psychometric data remains encrypted off-chain.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why SBTs for Credentials?</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">✅ Prevents Fraud</h3>
              <p className="text-sm text-green-800">
                Cannot be sold or transferred, ensuring credentials represent the actual owner&apos;s abilities.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">✅ Portable</h3>
              <p className="text-sm text-blue-800">
                Share with unlimited employers without retaking tests or asking providers for verification.
              </p>
            </div>

            <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
              <h3 className="font-semibold text-violet-900 mb-2">✅ Privacy-Preserving</h3>
              <p className="text-sm text-violet-800">
                Only a commitment hash is on-chain. Full data is encrypted and accessed via time-limited tokens.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-2">✅ Bitcoin-Secured</h3>
              <p className="text-sm text-amber-800">
                Stacks anchors to Bitcoin, inheriting the most secure blockchain&apos;s security guarantees.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">On-Chain vs Off-Chain Data</h2>
          
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Stored On-Chain (Public)</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-700 mb-4">
              <li>Credential ID</li>
              <li>Owner wallet address</li>
              <li>Schema version</li>
              <li>Commitment hash (SHA-256)</li>
              <li>Expiry block height</li>
              <li>Revocation status</li>
            </ul>

            <h3 className="font-semibold text-slate-900 mb-3">Stored Off-Chain (Encrypted)</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Full psychometric report</li>
              <li>Raw test scores</li>
              <li>Percentiles and insights</li>
              <li>AI-generated analysis</li>
              <li>Personal identifiable information</li>
            </ul>
          </div>
        </section>

        <section className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Learn More</h2>
          <div className="space-y-2">
            <a href="/docs/concepts/flow" className="block text-violet-600 hover:underline font-medium">
              → Credential Flow & Lifecycle
            </a>
            <a href="/docs/concepts/security" className="block text-violet-600 hover:underline font-medium">
              → Security Model
            </a>
            <a href="/docs/api/contracts" className="block text-violet-600 hover:underline font-medium">
              → Smart Contract API
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
