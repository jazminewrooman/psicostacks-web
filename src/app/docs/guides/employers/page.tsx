import React from 'react';

export default function EmployersGuidePage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Guide for Employers</h1>
        <p className="text-xl text-slate-600">
          Complete guide to verifying candidate psychometric credentials.
        </p>
      </div>

      <div className="space-y-8">
        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Why Use PsicoStacks?</h2>
          <ul className="space-y-2 text-slate-700">
            <li>✅ Instant verification without contacting test providers</li>
            <li>✅ Blockchain-guaranteed authenticity (impossible to forge)</li>
            <li>✅ Pay only when you need the full report</li>
            <li>✅ Free preview before payment</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Start</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Setup Wallet</h3>
                <p className="text-slate-700 text-sm">Install Leather Wallet and get ~10 STX for verification fees.</p>
                <a href="/docs/guides/wallet" className="text-violet-600 hover:underline text-sm">→ Wallet Setup Guide</a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Receive Link</h3>
                <p className="text-slate-700 text-sm">Ask candidate to share their PsicoStacks credential link or QR code.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Preview (Free)</h3>
                <p className="text-slate-700 text-sm">See band rating and basic insights without payment.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Pay & Verify</h3>
                <p className="text-slate-700 text-sm">Pay 10 STX (~$3) to access full psychometric report for 60 seconds.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Understanding the Preview</h2>
          
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <p className="text-slate-700 mb-4">The free preview includes:</p>
            <ul className="space-y-2 text-slate-700">
              <li><strong>Band Rating:</strong> Overall performance level (A, B, or C)</li>
              <li><strong>Key Insights:</strong> 3-5 bullet points highlighting strengths</li>
              <li><strong>Blockchain Status:</strong> Verification that the credential is authentic and not revoked</li>
            </ul>
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
              <p className="text-sm text-blue-800">
                The preview is often sufficient for initial candidate screening. Pay for full report only if candidate advances.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Verification Process</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Payment (10 STX ≈ $3)</h3>
              <p className="text-slate-700 mb-2">
                When you click &quot;Pay to Verify&quot;, a blockchain transaction is initiated:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 ml-4">
                <li>10 STX is transferred to the credential owner</li>
                <li>Transaction is recorded on-chain for transparency</li>
                <li>Payment confirmation takes ~30 seconds</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Accessing the Full Report</h3>
              <p className="text-slate-700 mb-2">
                After payment confirmation, you receive a 60-second window to view:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 ml-4">
                <li>Complete psychometric assessment results</li>
                <li>Detailed scores across all test dimensions</li>
                <li>Percentile rankings</li>
                <li>AI-generated comprehensive analysis</li>
              </ul>
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded">
                <p className="text-sm text-amber-800">
                  <strong>⏰ Important:</strong> You have 60 seconds to review the report. Make sure to read carefully and take notes if needed.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">After Expiration</h3>
              <p className="text-slate-700 text-sm">
                If you need to access the report again, you&apos;ll need to pay another 10 STX. 
                This protects candidate privacy and prevents unauthorized sharing.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Cost Breakdown</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-green-300">
                  <th className="text-left py-2 text-green-900">Action</th>
                  <th className="text-right py-2 text-green-900">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-green-200">
                  <td className="py-2 text-slate-700">Preview credential</td>
                  <td className="text-right text-slate-700">FREE</td>
                </tr>
                <tr className="border-b border-green-200">
                  <td className="py-2 text-slate-700">Full report access (60s)</td>
                  <td className="text-right text-slate-700">10 STX (~$3)</td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-700">Additional access</td>
                  <td className="text-right text-slate-700">10 STX each time</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-green-800 mt-3">
              Significantly cheaper than traditional verification methods which can cost $15-50 per candidate.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Best Practices</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-slate-900 mb-1">Screen with Preview First</h3>
              <p className="text-sm text-slate-700">
                Use the free preview to shortlist candidates. Only pay for full reports of candidates who advance.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-semibold text-slate-900 mb-1">Prepare Before Verification</h3>
              <p className="text-sm text-slate-700">
                Have evaluation criteria ready. You only have 60 seconds to review the full report.
              </p>
            </div>

            <div className="border-l-4 border-violet-600 pl-4">
              <h3 className="font-semibold text-slate-900 mb-1">Respect Candidate Privacy</h3>
              <p className="text-sm text-slate-700">
                Don&apos;t screenshot or share the reports. The time limit protects candidate data.
              </p>
            </div>

            <div className="border-l-4 border-amber-600 pl-4">
              <h3 className="font-semibold text-slate-900 mb-1">Check Blockchain Status</h3>
              <p className="text-sm text-slate-700">
                Verify the credential is not revoked or expired before paying.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            <details className="border border-slate-200 rounded-lg p-4">
              <summary className="font-semibold text-slate-900 cursor-pointer">
                What if the candidate hasn&apos;t shared their credential yet?
              </summary>
              <p className="mt-2 text-sm text-slate-700">
                Simply ask them to generate a share link from their PsicoStacks dashboard. It takes less than 30 seconds.
              </p>
            </details>

            <details className="border border-slate-200 rounded-lg p-4">
              <summary className="font-semibold text-slate-900 cursor-pointer">
                Can I share the verification link with my team?
              </summary>
              <p className="mt-2 text-sm text-slate-700">
                Yes! The preview is free for everyone. However, each person who wants to see the full report needs to pay separately.
              </p>
            </details>

            <details className="border border-slate-200 rounded-lg p-4">
              <summary className="font-semibold text-slate-900 cursor-pointer">
                What happens if I close the tab during the 60-second window?
              </summary>
              <p className="mt-2 text-sm text-slate-700">
                The token is one-time use and expires after 60 seconds regardless of whether the tab is open. You&apos;ll need to pay again.
              </p>
            </details>

            <details className="border border-slate-200 rounded-lg p-4">
              <summary className="font-semibold text-slate-900 cursor-pointer">
                How do I know the credential is authentic?
              </summary>
              <p className="mt-2 text-sm text-slate-700">
                It&apos;s cryptographically verified on the Stacks blockchain. The credential cannot be forged, and you can verify its authenticity via the blockchain explorer.
              </p>
            </details>
          </div>
        </section>

        <section className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Ready to Start?</h2>
          <div className="space-y-2">
            <a href="/employer" className="block text-violet-600 hover:underline font-medium">
              → Go to Employer Page
            </a>
            <a href="/docs/guides/wallet" className="block text-violet-600 hover:underline font-medium">
              → Setup Your Wallet
            </a>
            <a href="/docs/concepts/security" className="block text-violet-600 hover:underline font-medium">
              → Learn About Security
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
