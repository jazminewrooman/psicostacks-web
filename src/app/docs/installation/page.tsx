import React from 'react';

export default function InstallationPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Installation</h1>
        <p className="text-xl text-slate-600">
          Set up PsicoStacks locally for development or self-hosting.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">System Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Node.js 18+ and npm 9+</li>
            <li>Supabase account (for database)</li>
            <li>Mistral AI API key</li>
            <li>Stacks wallet for testing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frontend Setup</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Clone the repository</h3>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <code>{`git clone https://github.com/jazminewrooman/psicostacks.git
cd psicostacks`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Install dependencies</h3>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <code>npm install</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Configure environment variables</h3>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <code>{`# Copy the example file
cp .env.example .env.local

# Edit .env.local with your values:
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_CONTRACT_ADDRESS=ST2QS1D1ZFCGX436QPHACJNC0R2A6HNB7BNM95J9X
NEXT_PUBLIC_CONTRACT_NAME=psicostacks-sbt
NEXT_PUBLIC_NETWORK=testnet`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">4. Start development server</h3>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <code>npm run dev</code>
              </pre>
              <p className="text-slate-600 mt-2">
                Frontend will run on <code className="bg-slate-100 px-2 py-1 rounded">http://localhost:3000</code>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Backend Setup</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Clone the backend repository</h3>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <code>{`git clone https://github.com/jazminewrooman/psicostacks-backend.git
cd psicostacks-backend`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Install dependencies</h3>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <code>npm install</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Set up Supabase</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                <li>Create a new project at <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">supabase.com</a></li>
                <li>Go to SQL Editor and run the schema from <code className="bg-slate-100 px-2 py-1 rounded">DATABASE_SCHEMA.md</code></li>
                <li>Get your project URL and service role key from Settings</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">4. Configure environment variables</h3>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <code>{`# Copy the example file
cp .env.example .env

# Generate encryption key
openssl rand -base64 32

# Edit .env with your values:
PORT=3001
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
MISTRAL_API_KEY=your-mistral-api-key
CREDENTIALS_ENC_KEY=<generated-key>
FRONTEND_URL=http://localhost:3000`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">5. Start backend server</h3>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <code>npm run dev</code>
              </pre>
              <p className="text-slate-600 mt-2">
                Backend will run on <code className="bg-slate-100 px-2 py-1 rounded">http://localhost:3001</code>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Smart Contracts Setup</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Install Clarinet</h3>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <code>{`# macOS
brew install clarinet

# Other platforms
# Visit: https://github.com/hirosystems/clarinet`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Clone the contracts repository</h3>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <code>{`git clone https://github.com/jazminewrooman/psicostacks-smarts.git
cd psicostacks-smarts`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Test the contracts</h3>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <code>{`# Check syntax
clarinet check

# Run tests
clarinet test`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">4. Deploy to testnet</h3>
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                <code>{`# Generate deployment plan
clarinet deployments generate --manifest deployments/default.testnet-plan.yaml

# Deploy
clarinet deployments apply -p deployments/default.testnet-plan.yaml`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-amber-900 mb-2">⚠️ Important Notes</h3>
          <ul className="list-disc list-inside space-y-2 text-amber-800">
            <li>Never commit <code className="bg-amber-100 px-2 py-1 rounded">.env</code> or <code className="bg-amber-100 px-2 py-1 rounded">.env.local</code> files</li>
            <li>Use testnet for development and testing</li>
            <li>Keep your encryption keys and service role keys secure</li>
            <li>Rotate API keys regularly in production</li>
          </ul>
        </section>

        <section className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Next Steps</h2>
          <div className="space-y-2">
            <a href="/docs/quick-start" className="block text-violet-600 hover:underline font-medium">
              → Try the Quick Start Guide
            </a>
            <a href="/docs/api/backend" className="block text-violet-600 hover:underline font-medium">
              → Explore the API
            </a>
            <a href="https://github.com/jazminewrooman/psicostacks/issues" target="_blank" rel="noopener noreferrer" className="block text-violet-600 hover:underline font-medium">
              → Report Issues on GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
