import React from 'react';

export default function QuickStartPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Quick Start</h1>
        <p className="text-xl text-slate-600">
          Get up and running with PsicoStacks in minutes.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>A Stacks wallet (we recommend <a href="https://leather.io" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">Leather Wallet</a>)</li>
            <li>Some STX tokens for transaction fees (~0.5 STX to mint, 10 STX to verify)</li>
            <li>Your psychometric assessment results in PDF format (for candidates)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">For Candidates</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Step 1: Install Leather Wallet</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                <li>Visit <a href="https://leather.io" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">leather.io</a></li>
                <li>Download the browser extension (Chrome/Firefox/Brave)</li>
                <li>Create a new wallet or import an existing one</li>
                <li>Save your Secret Key in a secure location</li>
              </ol>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Step 2: Get Testnet STX</h3>
              <p className="text-slate-700 mb-3">
                For testing, you can get free testnet STX from the faucet:
              </p>
              <a 
                href="https://explorer.hiro.so/sandbox/faucet?chain=testnet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
              >
                Get Testnet STX →
              </a>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Step 3: Upload Your Assessment</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                <li>Go to <a href="https://psicostacks.netlify.app/candidate" className="text-violet-600 hover:underline">psicostacks.netlify.app/candidate</a></li>
                <li>Click &quot;Connect Wallet&quot; and approve the connection</li>
                <li>Upload your psychometric assessment PDF</li>
                <li>Wait for AI to process the document (~30 seconds)</li>
              </ol>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Step 4: Review & Mint</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                <li>Review the AI-generated summary and band rating</li>
                <li>Click &quot;Mint Credential&quot;</li>
                <li>Approve the transaction in your wallet</li>
                <li>Wait for blockchain confirmation (~30 seconds)</li>
              </ol>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Step 5: Share Your Credential</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                <li>Go to &quot;My Credentials&quot;</li>
                <li>Click &quot;Share&quot; on the credential you want to share</li>
                <li>Copy the link or share the QR code with employers</li>
                <li>Generate unlimited links - they&apos;re valid for 2 hours each</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">For Employers</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Step 1: Setup Wallet</h3>
              <p className="text-slate-700">
                Follow the same wallet setup process as candidates (Steps 1-2 above).
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Step 2: Receive Verification Link</h3>
              <p className="text-slate-700">
                Ask the candidate to share their PsicoStacks credential link with you. You can receive it via:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 mt-2">
                <li>Email</li>
                <li>QR code scan</li>
                <li>Direct link</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Step 3: Preview (Free)</h3>
              <p className="text-slate-700">
                Open the link to see the credential preview, which includes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 mt-2">
                <li>Band rating (A, B, or C)</li>
                <li>Basic insights</li>
                <li>Blockchain verification status</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Step 4: Pay & Access Full Report</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                <li>Click &quot;Pay to Verify&quot; (10 STX ≈ $3)</li>
                <li>Approve the transaction in your wallet</li>
                <li>Wait for confirmation (~30 seconds)</li>
                <li>Access the full psychometric report</li>
              </ol>
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded">
                <p className="text-sm text-amber-800">
                  <strong>⚠️ Important:</strong> You have 60 seconds to view the full report. Make sure to review it carefully within this time window.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Video Demo</h2>
          <div className="bg-slate-100 border border-slate-300 rounded-lg p-12 text-center text-slate-600">
            <p className="mb-2">📹 Video demo coming soon</p>
            <p className="text-sm">Check back later for a complete walkthrough</p>
          </div>
        </section>

        <section className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">What&apos;s Next?</h2>
          <div className="space-y-2">
            <a href="/docs/concepts/sbt" className="block text-violet-600 hover:underline font-medium">
              → Learn about Soulbound Tokens
            </a>
            <a href="/docs/guides/candidates" className="block text-violet-600 hover:underline font-medium">
              → Complete Candidate Guide
            </a>
            <a href="/docs/guides/employers" className="block text-violet-600 hover:underline font-medium">
              → Complete Employer Guide
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
