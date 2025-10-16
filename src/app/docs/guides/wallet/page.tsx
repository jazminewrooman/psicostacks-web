import React from 'react';

export default function WalletGuidePage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Wallet Setup</h1>
        <p className="text-xl text-slate-600">
          Install and configure Leather Wallet for PsicoStacks.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Leather Wallet?</h2>
          <p className="text-slate-700 mb-4">
            Leather is the recommended wallet for Stacks blockchain. It&apos;s easy to use, secure, and has excellent integration with dApps like PsicoStacks.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-semibold text-slate-900 mb-1">Secure</h3>
              <p className="text-xs text-slate-600">Your keys stay in your browser</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">✨</div>
              <h3 className="font-semibold text-slate-900 mb-1">Easy to Use</h3>
              <p className="text-xs text-slate-600">Simple interface for beginners</p>
            </div>
            <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold text-slate-900 mb-1">Fast</h3>
              <p className="text-xs text-slate-600">Quick transaction signing</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Installation Steps</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="text-lg font-semibold text-slate-900">Download Extension</h3>
              </div>
              <div className="ml-11 space-y-2">
                <p className="text-slate-700">Visit <a href="https://leather.io" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">leather.io</a> and click &quot;Download&quot;.</p>
                <p className="text-sm text-slate-600">Available for:</p>
                <ul className="text-sm text-slate-600 list-disc list-inside ml-4">
                  <li>Chrome</li>
                  <li>Firefox</li>
                  <li>Brave</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="text-lg font-semibold text-slate-900">Create New Wallet</h3>
              </div>
              <div className="ml-11 space-y-2">
                <p className="text-slate-700">Click &quot;Create New Wallet&quot; in the extension.</p>
                <div className="bg-amber-50 border border-amber-200 rounded p-3">
                  <p className="text-sm text-amber-800">
                    <strong>⚠️ Important:</strong> If you already have a Stacks wallet, you can import it instead using your Secret Key.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <h3 className="text-lg font-semibold text-slate-900">Save Your Secret Key</h3>
              </div>
              <div className="ml-11 space-y-2">
                <p className="text-slate-700 mb-2">You&apos;ll be shown a 24-word Secret Key phrase. Write it down and store it securely.</p>
                <div className="bg-red-50 border border-red-200 rounded p-4">
                  <p className="text-sm text-red-800 font-semibold mb-2">🚨 Critical Security Steps:</p>
                  <ul className="text-sm text-red-800 list-disc list-inside space-y-1">
                    <li>Write down all 24 words in order</li>
                    <li>Store in a safe place (not on your computer)</li>
                    <li>Never share with anyone</li>
                    <li>Don&apos;t take screenshots</li>
                    <li>If lost, you lose access to your wallet forever</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <h3 className="text-lg font-semibold text-slate-900">Verify Your Secret Key</h3>
              </div>
              <div className="ml-11 space-y-2">
                <p className="text-slate-700">Leather will ask you to verify by entering some words from your Secret Key. This ensures you saved it correctly.</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <h3 className="text-lg font-semibold text-slate-900">Set a Password</h3>
              </div>
              <div className="ml-11 space-y-2">
                <p className="text-slate-700">Create a strong password to encrypt your wallet in the browser. This is different from your Secret Key.</p>
                <p className="text-sm text-slate-600">Password tips:</p>
                <ul className="text-sm text-slate-600 list-disc list-inside ml-4">
                  <li>At least 12 characters</li>
                  <li>Mix of letters, numbers, symbols</li>
                  <li>Don&apos;t reuse passwords</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Getting STX Tokens</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">For Testnet (Free)</h3>
              <p className="text-slate-700 text-sm mb-3">
                Get free testnet STX from the faucet for testing PsicoStacks:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
                <li>Copy your wallet address from Leather</li>
                <li>Visit <a href="https://explorer.hiro.so/sandbox/faucet?chain=testnet" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">Testnet Faucet</a></li>
                <li>Paste your address and click &quot;Request STX&quot;</li>
                <li>Wait ~30 seconds for tokens to arrive</li>
              </ol>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">For Mainnet (Real STX)</h3>
              <p className="text-slate-700 text-sm mb-3">
                Purchase STX from exchanges:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                <li>Binance</li>
                <li>Coinbase</li>
                <li>Kraken</li>
                <li>OKX</li>
              </ul>
              <p className="text-xs text-slate-600 mt-3">
                Send to your Leather wallet address. Never share your Secret Key with exchanges.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Connecting to PsicoStacks</h2>
          
          <div className="space-y-4">
            <p className="text-slate-700">
              Once your wallet is set up, connecting to PsicoStacks is easy:
            </p>
            
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              <li>Go to <a href="https://psicostacks.netlify.app" className="text-violet-600 hover:underline">psicostacks.netlify.app</a></li>
              <li>Click &quot;Connect Wallet&quot; in the top-right corner</li>
              <li>Leather will pop up asking for permission</li>
              <li>Click &quot;Approve&quot; to connect</li>
              <li>Your wallet address will appear in the header</li>
            </ol>

            <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> PsicoStacks will never ask for your Secret Key. Only approve transaction requests you initiated.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Security Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">✅ Do</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Keep Secret Key offline</li>
                <li>• Use strong unique password</li>
                <li>• Verify transaction details</li>
                <li>• Keep browser and extension updated</li>
                <li>• Backup Secret Key in multiple safe locations</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">❌ Don&apos;t</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Share Secret Key with anyone</li>
                <li>• Store Secret Key digitally</li>
                <li>• Use public WiFi for transactions</li>
                <li>• Approve suspicious transactions</li>
                <li>• Install unknown browser extensions</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Troubleshooting</h2>
          
          <div className="space-y-3">
            <details className="border border-slate-200 rounded-lg p-4">
              <summary className="font-semibold text-slate-900 cursor-pointer">
                Wallet not connecting to PsicoStacks?
              </summary>
              <p className="mt-2 text-sm text-slate-700">
                Try refreshing the page and clicking &quot;Connect Wallet&quot; again. Make sure Leather extension is unlocked and you&apos;re on the correct network (testnet/mainnet).
              </p>
            </details>

            <details className="border border-slate-200 rounded-lg p-4">
              <summary className="font-semibold text-slate-900 cursor-pointer">
                Transaction stuck or failed?
              </summary>
              <p className="mt-2 text-sm text-slate-700">
                Check that you have enough STX for gas fees. View transaction status on <a href="https://explorer.hiro.so/?chain=testnet" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">Stacks Explorer</a>.
              </p>
            </details>

            <details className="border border-slate-200 rounded-lg p-4">
              <summary className="font-semibold text-slate-900 cursor-pointer">
                Lost my Secret Key, what now?
              </summary>
              <p className="mt-2 text-sm text-slate-700">
                Unfortunately, if you lose your Secret Key, your wallet and funds are permanently inaccessible. There is no recovery mechanism. Always backup your Secret Key securely.
              </p>
            </details>
          </div>
        </section>

        <section className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Next Steps</h2>
          <div className="space-y-2">
            <a href="/docs/quick-start" className="block text-violet-600 hover:underline font-medium">
              → Quick Start Guide
            </a>
            <a href="/docs/guides/candidates" className="block text-violet-600 hover:underline font-medium">
              → Candidate Guide
            </a>
            <a href="/docs/guides/employers" className="block text-violet-600 hover:underline font-medium">
              → Employer Guide
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
