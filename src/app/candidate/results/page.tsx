'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { useWallet } from '@/contexts/wallet-context';
import { mintCredentialOnChain } from '@/lib/stacks-contract';
import { getBackendApiUrl } from '@/lib/api-config';

interface ResultData {
  band: 'A' | 'B' | 'C';
  bullets: string[];
  credential: {
    id: string;
    commitmentHash: string;
    expiryAt: string;
    status: 'pending' | 'minted';
  };
  metadata: {
    fileName: string;
    numPages: number;
    rawTextLength: number;
  };
}

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { stxAddress, isConnected } = useWallet();
  const [resultData, setResultData] = useState<ResultData | null>(null);
  const [isMinting, setIsMinting] = useState(false);
  const [mintError, setMintError] = useState<string | null>(null);
  const [mintSuccess, setMintSuccess] = useState(false);

  useEffect(() => {
    // Get result data from URL params or session storage
    const dataParam = searchParams.get('data');
    if (dataParam) {
      try {
        const parsed = JSON.parse(decodeURIComponent(dataParam));
        setResultData(parsed);
        // Store in session for refresh
        sessionStorage.setItem('psicostacks_result', JSON.stringify(parsed));
      } catch (e) {
        console.error('Error parsing result data:', e);
      }
    } else {
      // Try to load from session storage
      const stored = sessionStorage.getItem('psicostacks_result');
      if (stored) {
        setResultData(JSON.parse(stored));
      } else {
        // No data, redirect back
        router.push('/candidate');
      }
    }
  }, [searchParams, router]);

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

  const handleMintCredential = async () => {
    if (!resultData || !stxAddress || !isConnected) return;

    setIsMinting(true);
    setMintError(null);

    try {
      // Convert commitment hash to buffer for smart contract
      const commitBuffer = Buffer.from(resultData.credential.commitmentHash, 'hex');
      
      // Calculate TTL in blocks (~180 days, ~144 blocks per day on Stacks)
      const ttlBlocks = 180 * 144; // ~26280 blocks

      console.log('Starting mint with:', { stxAddress, commitmentHash: resultData.credential.commitmentHash });

      // Call smart contract to mint SBT
      const mintResult = await mintCredentialOnChain({
        recipient: stxAddress,
        schema: 'psicostacks:v1',
        commitmentHash: commitBuffer,
        ttlBlocks,
      });

      console.log('Mint result:', mintResult);

      // Update backend with blockchain details
      const updateUrl = getBackendApiUrl(`/api/credentials/${resultData.credential.id}/mint`);
      const response = await fetch(updateUrl, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sbtId: mintResult.txId,
          txId: mintResult.txId,
          blockchainId: mintResult.credentialId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update credential status');
      }

      const updated = await response.json();
      console.log('Updated credential:', updated);

      // Update local state with minted status
      setResultData(prev => prev ? {
        ...prev,
        credential: {
          ...prev.credential,
          status: 'minted' as 'minted'
        }
      } : null);

      setMintSuccess(true);
      
      // Auto-redirect to credential page after 2 seconds
      setTimeout(() => {
        router.push(`/candidate/credential/${resultData.credential.id}`);
      }, 2000);
    } catch (error: any) {
      console.error('Error minting credential:', error);
      setMintError(error.message || 'Failed to mint credential on blockchain');
    } finally {
      setIsMinting(false);
    }
  };

  if (!resultData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header showNavLinks={false} showCTAButtons={false} showWalletButton={true} />
      
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 mb-4">
            Your Assessment <span className="text-violet-600">Results</span>
          </h1>
          <p className="text-slate-600 text-lg">
            AI-powered interpretation of your psychometric profile
          </p>
        </div>

        {/* Band Classification */}
        <div className={`rounded-3xl border-2 p-8 mb-8 text-center ${getBandColor(resultData.band)}`}>
          <div className="text-6xl font-black mb-2">{resultData.band}</div>
          <div className="text-xl font-semibold">{getBandLabel(resultData.band)}</div>
        </div>

        {/* Interpretation Bullets */}
        <div className="rounded-3xl border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Insights</h2>
          <div className="space-y-4">
            {resultData.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                  {idx + 1}
                </div>
                <p className="text-slate-700 pt-1">{bullet}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credential Status */}
        <div className="rounded-3xl border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Verifiable Credential</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center py-3 border-b border-slate-200">
              <span className="text-slate-600 font-medium">Status</span>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                resultData.credential.status === 'minted' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {resultData.credential.status === 'minted' ? '✓ Minted on Blockchain' : '⏳ Pending Mint'}
              </span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-slate-200">
              <span className="text-slate-600 font-medium">Credential ID</span>
              <span className="text-slate-900 font-mono text-sm">{resultData.credential.id.slice(0, 8)}...</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-slate-200">
              <span className="text-slate-600 font-medium">Commitment Hash</span>
              <span className="text-slate-900 font-mono text-xs">{resultData.credential.commitmentHash.slice(0, 16)}...</span>
            </div>
            
            <div className="flex justify-between items-center py-3">
              <span className="text-slate-600 font-medium">Valid Until</span>
              <span className="text-slate-900">{new Date(resultData.credential.expiryAt).toLocaleDateString()}</span>
            </div>
          </div>

          {resultData.credential.status === 'pending' && (
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-slate-900 mb-2">🔗 Create Your Blockchain Credential</h3>
              <p className="text-sm text-slate-600 mb-4">
                Mint your credential as a Soul Bound Token (SBT) on the Stacks blockchain. 
                This creates an immutable, verifiable record that you can share with employers.
              </p>
              {!isConnected && (
                <p className="text-sm text-amber-700 font-medium">
                  ⚠️ Please connect your wallet to mint your credential
                </p>
              )}
            </div>
          )}

          {mintError && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-red-700">{mintError}</p>
            </div>
          )}

          {mintSuccess && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-green-700">✓ Credential successfully minted on blockchain!</p>
            </div>
          )}

          {resultData.credential.status === 'pending' ? (
            <Button 
              onClick={handleMintCredential}
              disabled={!isConnected || isMinting}
              className={`w-full ${!isConnected || isMinting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isMinting ? 'Minting...' : 'Mint Credential on Blockchain'}
            </Button>
          ) : (
            <Button 
              href={`/candidate/credential/${resultData.credential.id}`}
              className="w-full"
            >
              View Credential Details & QR Code
            </Button>
          )}
        </div>

        {/* Metadata */}
        <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
          <h3 className="font-semibold text-slate-900 mb-3">Document Information</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-violet-600">{resultData.metadata.numPages}</div>
              <div className="text-xs text-slate-600">Pages</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-violet-600">{resultData.metadata.rawTextLength.toLocaleString()}</div>
              <div className="text-xs text-slate-600">Characters</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-violet-600">AI</div>
              <div className="text-xs text-slate-600">Interpreted</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
