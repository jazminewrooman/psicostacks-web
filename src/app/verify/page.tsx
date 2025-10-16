'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { getBackendApiUrl } from '@/lib/api-config';
import { payVerificationFee } from '@/lib/stacks-contract';
import { useWallet } from '@/contexts/wallet-context';
import { WalletOnboarding } from '@/components/onboarding/wallet-onboarding';
import { useOnboarding } from '@/hooks/use-onboarding';

interface CredentialPreview {
  blockchain_id: number;
  wallet_address: string;
  summary: {
    band: 'A' | 'B' | 'C';
  };
  note?: string;
}

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { isConnected, stxAddress } = useWallet();
  const { showOnboarding, isLoading: onboardingLoading, completeOnboarding, skipOnboarding } = useOnboarding('employer');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPaying, setIsPaying] = useState(false);
  const [isWaitingConfirmation, setIsWaitingConfirmation] = useState(false);
  const [credentialPreview, setCredentialPreview] = useState<CredentialPreview | null>(null);

  const verifyToken = searchParams.get('token');

  useEffect(() => {
    if (!verifyToken) {
      setError('Missing verification token. Please scan the QR code again.');
      setIsLoading(false);
      return;
    }
    fetchCredentialPreview();
  }, [verifyToken]);

  const fetchCredentialPreview = async () => {
    if (!verifyToken) return;

    try {
      const previewUrl = getBackendApiUrl('/api/verify/preview');
      const response = await fetch(previewUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: verifyToken }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || errorData.error || 'Failed to fetch credential preview');
      }

      const data = await response.json();
      setCredentialPreview(data);
    } catch (err: any) {
      console.error('Error fetching preview:', err);
      setError(err.message || 'Failed to load credential preview');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePayAndVerify = async () => {
    if (!credentialPreview || !stxAddress) {
      setError('Please connect your wallet first');
      return;
    }
    
    // Validate blockchain_id
    if (!credentialPreview.blockchain_id || credentialPreview.blockchain_id < 1) {
      setError('Invalid credential: blockchain ID not found. The credential may not be properly minted.');
      return;
    }

    setIsPaying(true);
    setError(null);

    try {
      // Step 1: Pay verification fee on blockchain
      console.log('Calling smart contract to pay verification fee...');
      console.log('Blockchain ID:', credentialPreview.blockchain_id);
      setIsWaitingConfirmation(true);
      const txId = await payVerificationFee(credentialPreview.blockchain_id);
      console.log('Payment confirmed on blockchain:', txId);
      setIsWaitingConfirmation(false);

      // Step 2: Call backend to generate view token
      const payUrl = getBackendApiUrl('/api/verify/pay');
      const response = await fetch(payUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: verifyToken,
          employer: stxAddress || 'Anonymous',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate view token');
      }

      const data = await response.json();
      console.log('View token generated:', data);

      // Step 3: Redirect to view page
      const viewToken = new URL(data.viewUrl).searchParams.get('token');
      if (viewToken) {
        router.push(`/verify/view?token=${viewToken}`);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (err: any) {
      console.error('Error during payment:', err);
      setError(err.message || 'Failed to process payment');
      setIsWaitingConfirmation(false);
    } finally {
      setIsPaying(false);
    }
  };

  // Show onboarding if needed (but not if still loading)
  if (showOnboarding && !onboardingLoading && verifyToken) {
    return (
      <WalletOnboarding
        userType="employer"
        onComplete={completeOnboarding}
        onSkip={skipOnboarding}
      />
    );
  }

  if (!verifyToken) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Header showNavLinks={false} showCTAButtons={false} showWalletButton={true} />
        <main className="mx-auto max-w-4xl px-6 py-16 text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-red-600 mb-2">Invalid Link</h1>
          <p className="text-slate-600">
            {error || 'This verification link is invalid. Please scan the QR code again.'}
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header showNavLinks={false} showCTAButtons={false} showWalletButton={true} />
      
      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 mb-4">
            Verify <span className="text-violet-600">Candidate Credential</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A candidate has shared their psychometric assessment credential with you. 
            Pay a small verification fee to access their verified results.
          </p>
        </div>

        {/* How It Works */}
        <div className="rounded-3xl border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">How Verification Works</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Pay Verification Fee</h3>
                <p className="text-slate-600 text-sm">
                  Pay a small fee (MVP: simulated) to access the credential details
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">60-Second Access</h3>
                <p className="text-slate-600 text-sm">
                  You'll get 60 seconds to review the AI-generated summary and full report
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Blockchain Verified</h3>
                <p className="text-slate-600 text-sm">
                  All credentials are cryptographically secured and verifiable on the Stacks blockchain
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 mb-6 text-center">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Credential Preview */}
        {isLoading ? (
          <div className="rounded-3xl border border-slate-200 p-8 text-center mb-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading credential preview...</p>
          </div>
        ) : credentialPreview && (
          <div className="rounded-3xl border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Credential Preview</h2>
            {credentialPreview.note && (
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-700">ℹ️ {credentialPreview.note}</p>
              </div>
            )}
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-200">
                <span className="text-slate-600 font-medium">Candidate Wallet</span>
                <span className="text-slate-900 font-mono text-sm">
                  {credentialPreview.wallet_address.slice(0, 10)}...{credentialPreview.wallet_address.slice(-8)}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-200">
                <span className="text-slate-600 font-medium">Assessment Band</span>
                <span className={`px-3 py-1 rounded-full font-bold ${
                  credentialPreview.summary.band === 'A' ? 'bg-green-100 text-green-700' :
                  credentialPreview.summary.band === 'B' ? 'bg-blue-100 text-blue-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  Band {credentialPreview.summary.band}
                </span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-slate-600 font-medium">On-Chain ID</span>
                <span className="text-slate-900 font-mono">#{credentialPreview.blockchain_id}</span>
              </div>
            </div>
          </div>
        )}

        {/* Wallet Connection Warning */}
        {!isConnected && !isLoading && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 mb-6 text-center">
            <p className="text-amber-800">
              ⚠️ Please connect your Stacks wallet to proceed with payment
            </p>
          </div>
        )}

        {/* Confirmation Message */}
        {isWaitingConfirmation && (
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
              <h3 className="font-semibold text-blue-900">⏳ Waiting for payment confirmation...</h3>
            </div>
            <p className="text-sm text-blue-700 ml-8">
              Your transaction is being confirmed on the blockchain. This may take 30-60 seconds.
            </p>
            <p className="text-xs text-blue-600 ml-8 mt-2">
              Please do not close this window.
            </p>
          </div>
        )}

        {/* Payment Button */}
        <div className="rounded-3xl border-2 border-violet-200 bg-violet-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Verify?</h2>
          <p className="text-slate-600 mb-6">
            Pay the verification fee to access the full credential details for 60 seconds
          </p>
          <p className="text-3xl font-bold text-violet-600 mb-6">
            10 STX <span className="text-sm text-slate-600">(~$3 USD)</span>
          </p>
          <Button 
            onClick={handlePayAndVerify}
            disabled={isPaying || !isConnected || !credentialPreview || isLoading}
            className={`w-full md:w-auto ${(!isConnected || !credentialPreview || isLoading) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isPaying ? (isWaitingConfirmation ? 'Confirming on blockchain...' : 'Processing payment...') : '💰 Pay & Verify Credential'}
          </Button>
          <p className="text-xs text-slate-500 mt-4">
            * Payment is processed on the Stacks blockchain. The fee goes to the credential issuer.
          </p>
        </div>

        {/* Security Note */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="font-semibold text-slate-900 mb-2">🔒 Privacy & Security</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>• The candidate's full report is encrypted and stored securely</li>
            <li>• Your access is logged for audit purposes</li>
            <li>• The verification token expires after one use</li>
            <li>• View tokens are valid for only 60 seconds</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
