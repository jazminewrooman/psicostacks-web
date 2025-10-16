import React from 'react';

export default function BackendAPIPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Backend API Reference</h1>
        <p className="text-xl text-slate-600">
          Complete REST API documentation for PsicoStacks backend.
        </p>
      </div>

      <div className="space-y-8">
        <section className="bg-slate-900 text-slate-100 rounded-lg p-4">
          <p className="text-sm text-slate-400 mb-2">Base URL:</p>
          <code className="text-violet-300 text-lg">https://psicostacks-backend.vercel.app</code>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Authentication</h2>
          <p className="text-slate-700 mb-3">
            Most endpoints require a wallet address for identification. No API keys needed for public endpoints.
          </p>
        </section>

        {/* AI Interpret */}
        <section className="border-t-2 border-slate-200 pt-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded">POST</span>
            <code className="text-lg text-slate-900">/api/ai-interpret</code>
          </div>
          
          <p className="text-slate-700 mb-4">
            Upload and process a psychometric assessment PDF with AI analysis.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Request (multipart/form-data)</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`curl -X POST https://psicostacks-backend.vercel.app/api/ai-interpret \\
  -F "file=@assessment.pdf" \\
  -F "walletAddress=SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7"`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Response (200 OK)</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "summary": {
    "band": "A",
    "bullets": [
      "High analytical thinking (92nd percentile)",
      "Strong problem-solving skills",
      "Excellent attention to detail"
    ],
    "note": "Outstanding cognitive abilities"
  },
  "fullReport": {
    "assessmentType": "Cognitive Assessment",
    "scores": { "verbal": 85, "numerical": 90, "abstract": 88 },
    "percentiles": { "verbal": 92, "numerical": 95, "abstract": 90 }
  }
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Create Credential */}
        <section className="border-t-2 border-slate-200 pt-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded">POST</span>
            <code className="text-lg text-slate-900">/api/credentials</code>
          </div>
          
          <p className="text-slate-700 mb-4">
            Save credential data after blockchain minting.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Request Body</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "walletAddress": "SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7",
  "blockchainId": 22,
  "credentialData": {
    "summary": { ... },
    "fullReport": { ... }
  },
  "txId": "0xabc123..."
}`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Response (201 Created)</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "credentialId": "550e8400-e29b-41d4-a716-446655440000",
  "status": "active",
  "createdAt": "2024-10-15T20:00:00Z"
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Get Credentials */}
        <section className="border-t-2 border-slate-200 pt-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded">GET</span>
            <code className="text-lg text-slate-900">/api/credentials</code>
          </div>
          
          <p className="text-slate-700 mb-4">
            Get all credentials for a wallet address.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Query Parameters</h3>
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left p-2 border-b">Parameter</th>
                    <th className="text-left p-2 border-b">Required</th>
                    <th className="text-left p-2 border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b"><code>walletAddress</code></td>
                    <td className="p-2 border-b">Yes</td>
                    <td className="p-2 border-b">Stacks wallet address</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Response (200 OK)</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "credentials": [
    {
      "id": "550e8400-...",
      "blockchain_id": 22,
      "wallet_address": "SP2J6Z...",
      "status": "active",
      "revoked": false,
      "created_at": "2024-10-15T20:00:00Z",
      "summary": { "band": "A", "bullets": [...] }
    }
  ]
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Share Credential */}
        <section className="border-t-2 border-slate-200 pt-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded">POST</span>
            <code className="text-lg text-slate-900">/api/credentials/share</code>
          </div>
          
          <p className="text-slate-700 mb-4">
            Generate a shareable verification link.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Request Body</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "credentialId": "550e8400-..."
}`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Response (200 OK)</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "shareToken": "share_abc123def456",
  "shareUrl": "https://psicostacks.netlify.app/verify?token=share_...",
  "expiresAt": "2024-10-15T22:00:00Z"
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Verify Preview */}
        <section className="border-t-2 border-slate-200 pt-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded">POST</span>
            <code className="text-lg text-slate-900">/api/verify/preview</code>
          </div>
          
          <p className="text-slate-700 mb-4">
            Get credential preview (free, no payment required).
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Response (200 OK)</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "blockchain_id": 22,
  "wallet_address": "SP2J6Z...",
  "summary": {
    "band": "A",
    "bullets": ["High analytical thinking", "..."]
  }
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Verify Pay */}
        <section className="border-t-2 border-slate-200 pt-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded">POST</span>
            <code className="text-lg text-slate-900">/api/verify/pay</code>
          </div>
          
          <p className="text-slate-700 mb-4">
            Generate view token after payment verification.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Request Body</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "shareToken": "share_abc123def456",
  "txId": "0xabc123...",
  "blockchainId": 22,
  "employerWallet": "SP3K8BC..."
}`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Response (200 OK)</h3>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "viewUrl": "https://psicostacks.netlify.app/verify/view?token=view_xyz789",
  "expiresAt": "2024-10-15T20:01:00Z"
}`}</code></pre>
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
                <th className="text-left p-3 border-b">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b font-mono">400</td>
                <td className="p-3 border-b">Bad Request - Invalid parameters</td>
              </tr>
              <tr>
                <td className="p-3 border-b font-mono">401</td>
                <td className="p-3 border-b">Unauthorized - Invalid credentials</td>
              </tr>
              <tr>
                <td className="p-3 border-b font-mono">404</td>
                <td className="p-3 border-b">Not Found - Resource doesn&apos;t exist</td>
              </tr>
              <tr>
                <td className="p-3 border-b font-mono">409</td>
                <td className="p-3 border-b">Conflict - Already revoked/expired</td>
              </tr>
              <tr>
                <td className="p-3 border-b font-mono">500</td>
                <td className="p-3 border-b">Internal Server Error</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Related Resources</h2>
          <div className="space-y-2">
            <a href="https://github.com/jazminewrooman/psicostacks-backend" target="_blank" rel="noopener noreferrer" className="block text-violet-600 hover:underline font-medium">
              → View Backend Repository
            </a>
            <a href="/docs/api/contracts" className="block text-violet-600 hover:underline font-medium">
              → Smart Contract API
            </a>
            <a href="/docs/concepts/flow" className="block text-violet-600 hover:underline font-medium">
              → Understand the Flow
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
