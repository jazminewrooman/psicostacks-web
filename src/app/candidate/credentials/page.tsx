'use client';

import { useState, useEffect } from 'react';
import { useWallet } from '@/contexts/wallet-context';
import { revokeCredential } from '@/lib/stacks-contract';
import { getBackendApiUrl } from '@/lib/api-config';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';

interface Credential {
  id: string;
  blockchain_id: number | null;
  sbt_id: string | null;
  status: 'pending' | 'minted' | 'revoked';
  summary: {
    band: string;
    bullets: string[];
  };
  issued_at: string;
  expiry_at: string;
  revoked: boolean;
}

export default function MyCredentialsPage() {
  const { isConnected, stxAddress } = useWallet();
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [loading, setLoading] = useState(true);
  const [revoking, setRevoking] = useState<string | null>(null);

  useEffect(() => {
    if (isConnected && stxAddress) {
      fetchMyCredentials();
    }
  }, [isConnected, stxAddress]);

  const fetchMyCredentials = async () => {
    if (!stxAddress) return;
    
    try {
      const response = await fetch(getBackendApiUrl(`/api/credentials/mine?wallet=${encodeURIComponent(stxAddress)}`));
      
      if (!response.ok) {
        throw new Error('Failed to fetch credentials');
      }
      
      const data = await response.json();
      setCredentials(data.credentials || []);
    } catch (error) {
      console.error('Error fetching credentials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRevoke = async (credentialId: string, blockchainId: number | null) => {
    // Validation: blockchain_id must exist (can be 0, so check for null explicitly)
    if (blockchainId === null || blockchainId === undefined) {
      alert('This credential is not yet minted on the blockchain. Cannot revoke pending credentials.');
      return;
    }

    if (!confirm('Are you sure you want to revoke this credential? This action cannot be undone.')) {
      return;
    }

    setRevoking(credentialId);

    try {
      console.log('Revoking credential:', { credentialId, blockchainId });
      
      // Step 1: Call blockchain to revoke
      const txId = await revokeCredential(blockchainId);
      console.log('Revoke transaction:', txId);

      // Step 2: Update backend status
      const response = await fetch(getBackendApiUrl(`/api/credentials/${credentialId}/revoke`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ txId }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to update credential status');
      }

      alert('Credential revoked successfully!\n\nTransaction: ' + txId + '\n\nIt may take a few minutes to confirm on the blockchain.');
      
      // Refresh list
      await fetchMyCredentials();
    } catch (error: any) {
      console.error('Error revoking credential:', error);
      
      // Better error messages
      let errorMessage = error.message;
      if (errorMessage.includes('cancelled')) {
        errorMessage = 'Transaction was cancelled';
      } else if (errorMessage.includes('ERR-NOT-AUTH')) {
        errorMessage = 'You are not authorized to revoke this credential. Only the owner can revoke.';
      } else if (errorMessage.includes('ERR-ALREADY-REVOKED')) {
        errorMessage = 'This credential has already been revoked';
      } else if (errorMessage.includes('ERR-NOT-FOUND')) {
        errorMessage = 'Credential not found on blockchain. It may not be minted yet.';
      }
      
      alert('Failed to revoke credential:\n\n' + errorMessage);
    } finally {
      setRevoking(null);
    }
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-white">
        <Header showNavLinks={false} showCTAButtons={false} showWalletButton />
        <main className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">My Credentials</h1>
          <p className="text-slate-600 mb-8">Please connect your wallet to view your credentials</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header showNavLinks={false} showCTAButtons={false} showWalletButton />
      
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-6">
          <Button href="/candidate" variant="outline">
            ← Back to Dashboard
          </Button>
        </div>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-2">My Credentials</h1>
        <p className="text-slate-600 mb-8">Manage your psychometric assessment credentials</p>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading your credentials...</p>
          </div>
        ) : credentials.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="text-6xl mb-4">📄</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No Credentials Yet</h3>
            <p className="text-slate-600 mb-6">Upload your first psychometric assessment to get started</p>
            <Button href="/candidate">Upload Assessment</Button>
          </div>
        ) : (
          <div className="space-y-4">
            {credentials.map((cred) => (
              <div
                key={cred.id}
                className="border border-slate-200 rounded-2xl p-6 hover:border-violet-300 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        cred.summary.band === 'A' ? 'bg-green-100 text-green-700' :
                        cred.summary.band === 'B' ? 'bg-blue-100 text-blue-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        Band {cred.summary.band}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        cred.revoked ? 'bg-red-100 text-red-700' :
                        cred.status === 'minted' ? 'bg-green-100 text-green-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {cred.revoked ? '✗ Revoked' : 
                         cred.status === 'minted' ? '✓ Active' : 
                         '⏳ Pending'}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">
                      Issued: {new Date(cred.issued_at).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-slate-500">
                      Expires: {new Date(cred.expiry_at).toLocaleDateString()}
                    </p>
                    {cred.blockchain_id !== null && (
                      <p className="text-sm text-slate-500 font-mono">
                        On-chain ID: #{cred.blockchain_id}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {!cred.revoked && cred.status === 'minted' && cred.blockchain_id !== null && (
                      <>
                        <Button
                          variant="outline"
                          onClick={() => alert('Share functionality coming soon')}
                        >
                          📤 Share
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleRevoke(cred.id, cred.blockchain_id)}
                          disabled={revoking === cred.id}
                          className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                          {revoking === cred.id ? 'Revoking...' : '🗑️ Revoke'}
                        </Button>
                      </>
                    )}
                    {!cred.revoked && cred.status === 'pending' && (
                      <div className="text-sm text-amber-600">
                        ⏳ Waiting for blockchain confirmation
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Key Insights:</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    {cred.summary.bullets.map((bullet, idx) => (
                      <li key={idx}>• {bullet}</li>
                    ))}
                  </ul>
                </div>

                {cred.revoked && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-700">
                      ⚠️ This credential has been revoked and can no longer be verified by employers.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 bg-violet-50 border border-violet-200 rounded-2xl p-6">
          <h3 className="font-semibold text-slate-900 mb-2">🔒 Your Rights</h3>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• You can revoke your credential at any time</li>
            <li>• Revoked credentials cannot be verified by employers</li>
            <li>• Credentials automatically expire after 180 days</li>
            <li>• All data is encrypted and stored securely</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
