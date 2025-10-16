'use client';

import React, { useState, useRef } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Check } from '@/components/ui/check';
import { useWallet } from '@/contexts/wallet-context';
import { validatePDFFile } from '@/lib/pdf-utils';
import { getBackendApiUrl } from '@/lib/api-config';
import { WalletOnboarding } from '@/components/onboarding/wallet-onboarding';
import { useOnboarding } from '@/hooks/use-onboarding';

export default function CandidatePage() {
  const { isConnected, stxAddress } = useWallet();
  const { showOnboarding, isLoading: onboardingLoading, completeOnboarding, skipOnboarding } = useOnboarding('candidate');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    setError(null);
    try {
      validatePDFFile(file);
      setSelectedFile(file);
    } catch (err: any) {
      setError(err.message);
      setSelectedFile(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const processAndSendPDF = async () => {
    if (!selectedFile || !isConnected || !stxAddress) return;

    setIsProcessing(true);
    setError(null);

    try {
      // Create FormData to send file and wallet address
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('walletAddress', stxAddress);

      // Send to backend for AI interpretation and credential creation
      const apiUrl = getBackendApiUrl('/api/ai-interpret');
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to process the report');
      }

      const result = await response.json();
      console.log('AI Interpretation result:', result);
      
      // Navigate to results page with data
      const dataParam = encodeURIComponent(JSON.stringify(result));
      window.location.href = `/candidate/results?data=${dataParam}`;
      
    } catch (err: any) {
      console.error('Error processing PDF:', err);
      setError(err.message || 'An error occurred while processing the PDF');
    } finally {
      setIsProcessing(false);
    }
  };

  // Show onboarding if needed
  if (showOnboarding && !onboardingLoading) {
    return (
      <WalletOnboarding
        userType="candidate"
        onComplete={completeOnboarding}
        onSkip={skipOnboarding}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header showNavLinks={false} showCTAButtons={false} showWalletButton={true} />
      
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 mb-4">
            Create Your <span className="text-violet-600">Portable Credential</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-6">
            Upload your existing psychological assessment results or take our quick tests to create a verifiable, portable credential.
          </p>
          
          {/* My Credentials Button */}
          {isConnected && (
            <div className="flex justify-center gap-3 mb-6">
              <Button href="/candidate/credentials" variant="outline">
                📋 My Credentials
              </Button>
            </div>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Upload Existing Report</h3>
            <p className="text-slate-600 mb-6">
              Have you already taken psychological assessments? Upload your results and we&apos;ll create a credential from them.
            </p>
            
            {/* Wallet Connected Notice */}
            {isConnected && stxAddress && (
              <div className="mb-4 p-3 bg-violet-50 border border-violet-200 rounded-lg">
                <p className="text-sm text-violet-700">
                  ✓ Wallet Connected: {stxAddress.slice(0, 8)}...{stxAddress.slice(-6)}
                </p>
              </div>
            )}
            
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              disabled={!isConnected || isProcessing}
            />
            
            <div 
              className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-colors ${
                isDragging 
                  ? 'border-violet-600 bg-violet-50' 
                  : selectedFile 
                    ? 'border-green-500 bg-green-50'
                    : 'border-slate-300 hover:border-violet-400'
              } ${!isConnected || isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={isConnected && !isProcessing ? handleUploadClick : undefined}
            >
              <div className="text-4xl mb-2">
                {selectedFile ? '✅' : '📄'}
              </div>
              <p className="text-sm text-slate-700 font-medium">
                {selectedFile ? selectedFile.name : 'Drag & drop your PDF or click to browse'}
              </p>
              {selectedFile && (
                <p className="text-xs text-slate-500 mt-1">
                  {(selectedFile.size / 1024).toFixed(2)} KB
                </p>
              )}
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <Button 
              className={`w-full mt-4 ${
                !isConnected || !selectedFile || isProcessing 
                  ? 'opacity-50 cursor-not-allowed' 
                  : ''
              }`}
              onClick={isConnected && selectedFile && !isProcessing ? processAndSendPDF : undefined}
            >
              {isProcessing ? 'Processing...' : selectedFile ? 'Process Report' : 'Select PDF First'}
            </Button>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Take Quick Tests</h3>
            <p className="text-slate-600 mb-6">
              Don&apos;t have existing results? Take our streamlined psychological assessments (15-30 minutes).
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Check stroke="#16a34a" className="shrink-0" />
                <span className="text-sm text-slate-700">Cognitive ability assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <Check stroke="#16a34a" className="shrink-0" />
                <span className="text-sm text-slate-700">Personality profile</span>
              </div>
              <div className="flex items-center gap-3">
                <Check stroke="#16a34a" className="shrink-0" />
                <span className="text-sm text-slate-700">Work style preferences</span>
              </div>
            </div>
            <Button 
              href={isConnected ? "#" : undefined}
              className={`w-full ${!isConnected ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={!isConnected ? (e: any) => e.preventDefault() : undefined}
            >
              Start Assessment
            </Button>
          </div>
        </div>

        <div className="rounded-3xl border border-violet-200 p-8 bg-violet-50">
          <h3 className="text-xl font-bold text-slate-900 mb-4">What happens next?</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">1</div>
              <h4 className="font-semibold text-slate-900 mb-2">AI Analysis</h4>
              <p className="text-sm text-slate-600">Our AI processes your results and creates role-aligned insights</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">2</div>
              <h4 className="font-semibold text-slate-900 mb-2">Credential Creation</h4>
              <p className="text-sm text-slate-600">A hash is stored on Bitcoin, no personal data on-chain</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">3</div>
              <h4 className="font-semibold text-slate-900 mb-2">Share QR Code</h4>
              <p className="text-sm text-slate-600">Get a one-time QR code to share with employers</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
