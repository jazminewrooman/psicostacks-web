import AdminPanel from '@/components/admin-panel';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Contract Administration
          </h1>
          <p className="text-gray-600">
            Manage contract settings and configuration
          </p>
        </div>

        <div className="flex justify-center">
          <AdminPanel />
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">📚 Admin Functions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Set Verification Fee</h3>
              <p className="text-sm text-gray-600">
                Updates the fee that employers must pay to verify a credential. 
                This fee is transferred to the contract owner when someone calls <code className="bg-gray-100 px-1 py-0.5 rounded">verify-paid</code>.
              </p>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold text-gray-900 mb-2">Current Contract Setup</h3>
              <dl className="text-sm space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Contract Address:</dt>
                  <dd className="font-mono text-xs text-gray-900">
                    {process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || 'ST2QS1D1ZFCGX436QPHACJNC0R2A6HNB7BNM95J9X'}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Contract Name:</dt>
                  <dd className="font-mono text-xs text-gray-900">
                    {process.env.NEXT_PUBLIC_CONTRACT_NAME || 'psicostacks-sbt'}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Network:</dt>
                  <dd className="font-mono text-xs text-gray-900">Testnet</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="text-blue-600 hover:underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
