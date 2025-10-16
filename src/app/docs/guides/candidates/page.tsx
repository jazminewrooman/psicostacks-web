import React from 'react';

export default function CandidatesGuidePage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Guide for Candidates</h1>
        <p className="text-xl text-slate-600">
          Complete guide to creating and sharing your psychometric credentials.
        </p>
      </div>

      <div className="space-y-8">
        <section className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">What You&apos;ll Achieve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>✅ Create a blockchain-verified psychometric credential</li>
            <li>✅ Share it with unlimited employers without retaking tests</li>
            <li>✅ Maintain control and privacy over your data</li>
            <li>✅ Earn income when employers verify your credentials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Prerequisites</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Leather Wallet installed (<a href="https://leather.io" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">leather.io</a>)</li>
              <li>~0.5 STX for gas fees (~$0.15)</li>
              <li>Your psychometric assessment results in PDF format</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Step-by-Step Process</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="text-lg font-semibold text-slate-900">Upload Your Assessment</h3>
              </div>
              <div className="ml-11 space-y-2">
                <p className="text-slate-700">Go to the <a href="https://psicostacks.netlify.app/candidate" className="text-violet-600 hover:underline">Candidate Page</a> and connect your wallet.</p>
                <div className="bg-blue-50 border border-blue-200 rounded p-3 text-sm">
                  <strong>Supported formats:</strong> PDF files from recognized psychometric test providers (e.g., SHL, Thomas, Saville, etc.)
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="text-lg font-semibold text-slate-900">AI Processing</h3>
              </div>
              <div className="ml-11 space-y-2">
                <p className="text-slate-700">Wait ~30 seconds while Mistral AI analyzes your assessment.</p>
                <p className="text-sm text-slate-600">The AI extracts scores, percentiles, and generates insights about your performance.</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <h3 className="text-lg font-semibold text-slate-900">Review Your Summary</h3>
              </div>
              <div className="ml-11 space-y-2">
                <p className="text-slate-700">Check the AI-generated summary including:</p>
                <ul className="text-sm text-slate-600 list-disc list-inside">
                  <li>Band Rating (A, B, or C)</li>
                  <li>Key strengths and insights</li>
                  <li>Performance highlights</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <h3 className="text-lg font-semibold text-slate-900">Mint on Blockchain</h3>
              </div>
              <div className="ml-11 space-y-2">
                <p className="text-slate-700">Click &quot;Mint Credential&quot; and approve the transaction in your wallet.</p>
                <div className="bg-amber-50 border border-amber-200 rounded p-3 text-sm">
                  <strong>Cost:</strong> ~0.5 STX gas fee. Your credential will be permanently stored on the blockchain.
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <h3 className="text-lg font-semibold text-slate-900">Share with Employers</h3>
              </div>
              <div className="ml-11 space-y-2">
                <p className="text-slate-700">From &quot;My Credentials&quot;, click Share to generate a verification link.</p>
                <ul className="text-sm text-slate-600 list-disc list-inside">
                  <li>Each link is valid for 2 hours</li>
                  <li>Generate unlimited links</li>
                  <li>Share via email, QR code, or direct link</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Managing Your Credentials</h2>
          
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">View All Credentials</h3>
              <p className="text-sm text-slate-700">
                Access your credentials dashboard to see all your minted credentials, their status, and blockchain IDs.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Track Verifications</h3>
              <p className="text-sm text-slate-700">
                See who has verified your credentials and when. All verifications are logged on-chain for transparency.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Revoke Access</h3>
              <p className="text-sm text-slate-700 mb-2">
                Revoke a credential at any time. This immediately invalidates all future verification attempts.
              </p>
              <p className="text-xs text-amber-700 bg-amber-50 p-2 rounded">
                ⚠️ Revocation is permanent and cannot be undone.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Earning from Verifications</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="text-slate-700 mb-3">
              When an employer verifies your credential, they pay a 10 STX fee (~$3) that goes directly to your wallet.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• <strong>Automatic payment:</strong> Funds arrive in your wallet immediately</li>
              <li>• <strong>No limits:</strong> Share with as many employers as you want</li>
              <li>• <strong>Transparent:</strong> All transactions visible on blockchain</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <h3 className="font-semibold text-blue-900 mb-2">✅ Do</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Keep your wallet Secret Key secure</li>
                <li>• Only share with trusted employers</li>
                <li>• Check verification logs regularly</li>
                <li>• Update credentials when retaking tests</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-900 mb-2">❌ Don&apos;t</h3>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Share your wallet Secret Key</li>
                <li>• Upload fake or modified PDFs</li>
                <li>• Revoke credentials unnecessarily</li>
                <li>• Share credentials publicly</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Next Steps</h2>
          <div className="space-y-2">
            <a href="/candidate" className="block text-violet-600 hover:underline font-medium">
              → Start Creating Your Credential
            </a>
            <a href="/docs/guides/wallet" className="block text-violet-600 hover:underline font-medium">
              → Wallet Setup Guide
            </a>
            <a href="/docs/concepts/sbt" className="block text-violet-600 hover:underline font-medium">
              → Learn About Soulbound Tokens
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
