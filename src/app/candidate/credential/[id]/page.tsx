'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { QRCodeSVG } from 'qrcode.react';
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

export default function CredentialPage() {
  const params = useParams();
  const router = useRouter();
  const [credential, setCredential] = useState<CredentialData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const credentialId = params.id as string;
  const verifyUrl = `${window.location.origin}/verify/${credentialId}`;

  useEffect(() => {
    fetchCredential();
  }, [credentialId]);

  const fetchCredential = async () => {
    try {
      const apiUrl = getBackendApiUrl(`/api/credentials/${credentialId}`);
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch credential');
      }

      const data = await response.json();
      setCredential(data);
    } catch (err: any) {
      console.error('Error fetching credential:', err);
      setError(err.message || 'Failed to load credential');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(verifyUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQR = () => {
    const svg = document.getElementById('credential-qr');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');

      const downloadLink = document.createElement('a');
      downloadLink.download = `psicostacks-credential-${credentialId.slice(0, 8)}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
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
          <p className="text-slate-600">Loading credential...</p>
        </div>
      </div>
    );
  }

  if (error || !credential) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Credential Not Found</h1>
          <p className="text-slate-600 mb-6">{error || 'This credential does not exist.'}</p>
          <Button onClick={() => router.push('/candidate')}>Go Back</Button>
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
            Your Verifiable <span className="text-violet-600">Credential</span>
          </h1>
          <p className="text-slate-600 text-lg">
            Share this with employers to prove your psychometric assessment
          </p>
        </div>

        {/* QR Code Section */}
        <div className="rounded-3xl border-2 border-violet-200 bg-violet-50 p-8 mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Scan to Verify</h2>
          <p className="text-slate-600 mb-6">
            Employers can scan this QR code to instantly verify your credential on the blockchain
          </p>
          
          <div className="bg-white p-6 rounded-2xl inline-block mb-6">
            <QRCodeSVG
              id="credential-qr"
              value={verifyUrl}
              size={256}
              level="H"
              includeMargin={true}
            />
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={handleCopyLink} variant="outline">
              {copied ? '✓ Copied!' : '📋 Copy Link'}
            </Button>
            <Button onClick={handleDownloadQR} variant="outline">
              💾 Download QR
            </Button>
          </div>

          <div className="mt-4 p-3 bg-white rounded-lg">
            <p className="text-xs text-slate-500 break-all">{verifyUrl}</p>
          </div>
        </div>

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

        {/* Blockchain Details */}
        <div className="rounded-3xl border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Blockchain Verification</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-slate-200">
              <span className="text-slate-600 font-medium">Status</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                ✓ Minted on Blockchain
              </span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-slate-200">
              <span className="text-slate-600 font-medium">Credential ID</span>
              <span className="text-slate-900 font-mono text-sm">{credential.id.slice(0, 12)}...</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-slate-200">
              <span className="text-slate-600 font-medium">Blockchain ID</span>
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
              <span className="text-slate-600 font-medium">Minted</span>
              <span className="text-slate-900">{new Date(credential.minted_at).toLocaleDateString()}</span>
            </div>
            
            <div className="flex justify-between items-center py-3">
              <span className="text-slate-600 font-medium">Valid Until</span>
              <span className="text-slate-900">{new Date(credential.expiry_at).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          <Button onClick={() => router.push('/candidate')} variant="outline">
            ← Back to Dashboard
          </Button>
          <Button onClick={() => window.print()}>
            🖨️ Print Credential
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
