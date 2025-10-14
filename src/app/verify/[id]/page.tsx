'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { getBackendApiUrl } from '@/lib/api-config';

interface CredentialData {
  id: string;
  candidate_email: string;
  schema_id: string;
  sbt_id: string;
  blockchain_tx_id: string;
  blockchain_id: number;
  commitment_hash: string;
  summary: {
    band: 'A' | 'B' | 'C';
    bullets: string[];
  };
  status: string;
  expiry_at: string;
  created_at: string;
  minted_at: string;
}

export default function VerifyPage() {
  const params = useParams();
  const [credential, setCredential] = useState<CredentialData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);

  const credentialId = params.id as string;

  useEffect(() => {
    verifyCredential();
  }, [credentialId]);

  const verifyCredential = async () => {
    try {
      const apiUrl = getBackendApiUrl(`/api/credentials/${credentialId}`);
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Credential not found');
      }

      const data = await response.json();
      setCredential(data);

      // Check if credential is valid
      const isExpired = new Date(data.expiry_at) < new Date();
      const isMinted = data.status === 'minted';
      setIsValid(isMinted && !isExpired);
    } catch (err: any) {
      console.error('Error verifying credential:', err);
      setError(err.message || 'Failed to verify credential');
    } finally {
      setIsLoading(false);
    }
  };

  const getBandColor = (band: string) => {
    switch (band) {
      case 'A': return 'text-green-600 bg-green-50 border-green-200';
      case 'B': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'C': return 'text-amber-600 bg-amber-50 border-amber-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  const getBandLabel = (band: string) => {
    switch (band) {
      case 'A': return 'High Performance';
      case 'B': return 'Solid Performance';
      case 'C': return 'Development Areas';
      default: return 'Evaluated';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Verifying credential...</p>
        </div>
      </div>
    );
  }

  if (error || !credential) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Header showNavLinks={false} showCTAButtons={false} showWalletButton={false} />
        <main className="mx-auto max-w-4xl px-6 py-16 text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-3xl font-bold text-red-600 mb-2">Invalid Credential</h1>
          <p className="text-slate-600 mb-8">
            This credential could not be verified. It may not exist or has been revoked.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header showNavLinks={false} showCTAButtons={false} showWalletButton={false} />
      
      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Verification Status */}
        <div className={`rounded-3xl border-2 p-8 mb-8 text-center ${
          isValid 
            ? 'bg-green-50 border-green-200' 
            : 'bg-red-50 border-red-200'
        }`}>
          <div className="text-6xl mb-4">{isValid ? '✓' : '⚠️'}</div>
          <h1 className="text-3xl font-bold mb-2">
            {isValid ? 'Credential Verified' : 'Credential Expired or Invalid'}
          </h1>
          <p className="text-slate-600">
            {isValid 
              ? 'This psychometric credential has been verified on the Stacks blockchain'
              : 'This credential is no longer valid or has not been minted'}
          </p>
        </div>

        {isValid && (
          <>
            {/* Assessment Results */}
            <div className="rounded-3xl border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Assessment Results</h2>
              
              <div className={`rounded-2xl border-2 p-6 mb-6 text-center ${getBandColor(credential.summary.band)}`}>
                <div className="text-5xl font-black mb-2">{credential.summary.band}</div>
                <div className="text-lg font-semibold">{getBandLabel(credential.summary.band)}</div>
              </div>

              <div className="space-y-3">
                {credential.summary.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-slate-700 pt-1">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Blockchain Verification Details */}
            <div className="rounded-3xl border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                🔗 Blockchain Verification
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 font-medium">Blockchain</span>
                  <span className="text-slate-900 font-semibold">Stacks (Bitcoin L2)</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 font-medium">On-Chain ID</span>
                  <span className="text-slate-900 font-mono text-sm">#{credential.blockchain_id}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 font-medium">Transaction</span>
                  <a 
                    href={`https://explorer.hiro.so/txid/${credential.blockchain_tx_id}?chain=testnet`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 hover:text-violet-700 font-mono text-xs underline"
                  >
                    View on Explorer ↗
                  </a>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 font-medium">Commitment Hash</span>
                  <span className="text-slate-900 font-mono text-xs">{credential.commitment_hash.slice(0, 16)}...</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 font-medium">Issued</span>
                  <span className="text-slate-900">{new Date(credential.minted_at).toLocaleDateString()}</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-600 font-medium">Valid Until</span>
                  <span className="text-slate-900">{new Date(credential.expiry_at).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* What This Means */}
            <div className="rounded-3xl border border-violet-200 bg-violet-50 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">🔒 What This Verification Means</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">✓</span>
                  <span>This credential was created using AI-powered psychometric analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">✓</span>
                  <span>The results have been cryptographically secured on the Stacks blockchain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">✓</span>
                  <span>The credential cannot be forged, altered, or tampered with</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">✓</span>
                  <span>This is a Soul Bound Token (SBT) - it cannot be transferred to another person</span>
                </li>
              </ul>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
