import React from 'react';

export default function ContractsAPIPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Smart Contracts API</h1>
        <p className="text-xl text-slate-600">
          Complete Clarity smart contract reference for PsicoStacks SBTs.
        </p>
      </div>

      <div className="space-y-8">
        <section className="bg-slate-900 text-slate-100 rounded-lg p-4">
          <p className="text-sm text-slate-400 mb-2">Contract Name:</p>
          <code className="text-violet-300 text-lg">psicostacks-sbt</code>
          <p className="text-sm text-slate-400 mt-3 mb-2">Testnet Address:</p>
          <code className="text-violet-300 text-sm">ST2QS1D1ZFCGX436QPHACJNC0R2A6HNB7BNM95J9X.psicostacks-sbt</code>
        </section>

        {/* mint-credential */}
        <section className="border-t-2 border-slate-200 pt-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">mint-credential</h2>
            <p className="text-slate-600">Creates a new Soulbound Token credential.</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Function Signature</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`(define-public (mint-credential 
  (recipient principal)
  (schema (string-ascii 32))
  (commit (buff 32))
  (ttl-blocks uint))
  (response uint uint))`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Parameters</h3>
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left p-2 border-b">Parameter</th>
                    <th className="text-left p-2 border-b">Type</th>
                    <th className="text-left p-2 border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b font-mono text-xs">recipient</td>
                    <td className="p-2 border-b text-xs">principal</td>
                    <td className="p-2 border-b text-xs">Wallet address to receive SBT</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-mono text-xs">schema</td>
                    <td className="p-2 border-b text-xs">string-ascii</td>
                    <td className="p-2 border-b text-xs">Schema version (e.g. &quot;psicostacks:v1&quot;)</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-mono text-xs">commit</td>
                    <td className="p-2 border-b text-xs">buff 32</td>
                    <td className="p-2 border-b text-xs">SHA-256 commitment hash</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-mono text-xs">ttl-blocks</td>
                    <td className="p-2 border-b text-xs">uint</td>
                    <td className="p-2 border-b text-xs">Validity in blocks (~52560 = 1 year)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Returns</h3>
              <p className="text-sm text-slate-700 mb-2">
                <code className="bg-slate-100 px-2 py-1 rounded">(ok credential-id)</code> on success, error code on failure.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Example Usage (JS)</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`import { openContractCall } from '@stacks/connect';
import { stringAsciiCV, bufferCV, uintCV, principalCV } from '@stacks/transactions';

const txId = await openContractCall({
  contractAddress: 'ST2QS1D1...',
  contractName: 'psicostacks-sbt',
  functionName: 'mint-credential',
  functionArgs: [
    principalCV('SP2J6ZY48...'),
    stringAsciiCV('psicostacks:v1'),
    bufferCV(commitHash),
    uintCV(52560)
  ]
});`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* verify-paid */}
        <section className="border-t-2 border-slate-200 pt-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">verify-paid</h2>
            <p className="text-slate-600">Verifies a credential by paying the 10 STX fee.</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Function Signature</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`(define-public (verify-paid (id uint))
  (response bool uint))`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Parameters</h3>
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left p-2 border-b">Parameter</th>
                    <th className="text-left p-2 border-b">Type</th>
                    <th className="text-left p-2 border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b font-mono text-xs">id</td>
                    <td className="p-2 border-b text-xs">uint</td>
                    <td className="p-2 border-b text-xs">Credential ID to verify</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Cost</h3>
              <div className="bg-green-50 border border-green-200 rounded p-3">
                <p className="text-sm text-green-800">
                  <strong>Verification Fee:</strong> 10 STX (~$3)
                </p>
                <p className="text-xs text-green-700 mt-1">
                  Fee is transferred from caller to credential owner
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Example Usage (JS)</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`const txId = await openContractCall({
  contractAddress: 'ST2QS1D1...',
  contractName: 'psicostacks-sbt',
  functionName: 'verify-paid',
  functionArgs: [uintCV(22)]
});`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* revoke */}
        <section className="border-t-2 border-slate-200 pt-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">revoke</h2>
            <p className="text-slate-600">Revokes a credential (owner or issuer only).</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Function Signature</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`(define-public (revoke (id uint))
  (response bool uint))`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Authorization</h3>
              <p className="text-sm text-slate-700">
                Only credential owner OR issuer can revoke. Transaction fails if called by anyone else.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Example Usage (JS)</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`const txId = await openContractCall({
  contractAddress: 'ST2QS1D1...',
  contractName: 'psicostacks-sbt',
  functionName: 'revoke',
  functionArgs: [uintCV(22)]
});`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Read-only functions */}
        <section className="border-t-2 border-slate-200 pt-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Read-Only Functions</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">get-credential</h3>
              <p className="text-sm text-slate-700 mb-3">
                Retrieves credential data by ID.
              </p>
              <div className="bg-slate-900 text-slate-100 rounded p-3 overflow-x-auto">
                <pre className="text-xs"><code>{`(define-read-only (get-credential (id uint))
  (optional {
    owner: principal,
    issuer: principal,
    schema: (string-ascii 32),
    commit: (buff 32),
    expiry: uint,
    revoked: bool
  }))`}</code></pre>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">is-valid?</h3>
              <p className="text-sm text-slate-700 mb-3">
                Checks if credential is valid (not revoked or expired).
              </p>
              <div className="bg-slate-900 text-slate-100 rounded p-3 overflow-x-auto">
                <pre className="text-xs"><code>{`(define-read-only (is-valid? (id uint))
  bool)`}</code></pre>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">get-verify-fee</h3>
              <p className="text-sm text-slate-700 mb-3">
                Returns the current verification fee in micro-STX.
              </p>
              <div className="bg-slate-900 text-slate-100 rounded p-3 overflow-x-auto">
                <pre className="text-xs"><code>{`(define-read-only (get-verify-fee)
  (response uint uint))`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Error Codes */}
        <section className="border-t-2 border-slate-200 pt-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Error Codes</h2>
          
          <table className="w-full text-sm border border-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-3 border-b">Code</th>
                <th className="text-left p-3 border-b">Constant</th>
                <th className="text-left p-3 border-b">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b font-mono">u100</td>
                <td className="p-3 border-b font-mono text-xs">ERR-NOT-AUTH</td>
                <td className="p-3 border-b text-xs">Unauthorized action</td>
              </tr>
              <tr>
                <td className="p-3 border-b font-mono">u404</td>
                <td className="p-3 border-b font-mono text-xs">ERR-NOT-FOUND</td>
                <td className="p-3 border-b text-xs">Credential not found</td>
              </tr>
              <tr>
                <td className="p-3 border-b font-mono">u409</td>
                <td className="p-3 border-b font-mono text-xs">ERR-ALREADY-REVOKED</td>
                <td className="p-3 border-b text-xs">Already revoked</td>
              </tr>
              <tr>
                <td className="p-3 border-b font-mono">u410</td>
                <td className="p-3 border-b font-mono text-xs">ERR-EXPIRED</td>
                <td className="p-3 border-b text-xs">Credential expired</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Events */}
        <section className="border-t-2 border-slate-200 pt-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Events</h2>
          <p className="text-slate-700 mb-4">
            Smart contract emits print events for tracking:
          </p>
          
          <div className="space-y-3">
            <div className="bg-blue-50 border border-blue-200 rounded p-3">
              <h3 className="font-semibold text-blue-900 text-sm mb-1">mint</h3>
              <code className="text-xs text-blue-800">{`{ event: "mint", id: u1, commit: 0x..., expiry: u123456 }`}</code>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-3">
              <h3 className="font-semibold text-green-900 text-sm mb-1">verify</h3>
              <code className="text-xs text-green-800">{`{ event: "verify", id: u1, by: 'SP3K8BC..., fee: u10000000 }`}</code>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-3">
              <h3 className="font-semibold text-red-900 text-sm mb-1">revoke</h3>
              <code className="text-xs text-red-800">{`{ event: "revoke", id: u1 }`}</code>
            </div>
          </div>
        </section>

        {/* Testing */}
        <section className="border-t-2 border-slate-200 pt-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Testing with Clarinet</h2>
          
          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm"><code>{`# Clone the repository
git clone https://github.com/jazminewrooman/psicostacks-smarts
cd psicostacks-smarts

# Run tests
clarinet test

# Check syntax
clarinet check`}</code></pre>
          </div>
        </section>

        <section className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Related Resources</h2>
          <div className="space-y-2">
            <a href="https://github.com/jazminewrooman/psicostacks-smarts" target="_blank" rel="noopener noreferrer" className="block text-violet-600 hover:underline font-medium">
              → View Smart Contracts Repository
            </a>
            <a href="/docs/api/backend" className="block text-violet-600 hover:underline font-medium">
              → Backend API Reference
            </a>
            <a href="/docs/concepts/sbt" className="block text-violet-600 hover:underline font-medium">
              → Learn About SBTs
            </a>
            <a href="https://docs.stacks.co/clarity" target="_blank" rel="noopener noreferrer" className="block text-violet-600 hover:underline font-medium">
              → Clarity Language Documentation
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
