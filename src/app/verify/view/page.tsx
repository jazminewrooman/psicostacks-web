'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { getBackendApiUrl } from '@/lib/api-config';

interface ViewData {
  summary: {
    band: 'A' | 'B' | 'C';
    bullets: string[];
  };
  report: any; // Full decrypted report (may be null)
  note?: string; // Optional note if report is unavailable
}

export default function VerifyViewPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [data, setData] = useState<ViewData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);

  const viewToken = searchParams.get('token');

  useEffect(() => {
    if (!viewToken) {
      setError('Missing view token');
      setIsLoading(false);
      return;
    }

    fetchCredentialData();
  }, [viewToken]);

  useEffect(() => {
    if (!data) return;

    // Countdown timer
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          router.push('/verify/expired');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [data, router]);

  const fetchCredentialData = async () => {
    if (!viewToken) return;

    try {
      const viewUrl = getBackendApiUrl(`/api/verify/view?token=${viewToken}`);
      const response = await fetch(viewUrl);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch credential');
      }

      const result = await response.json();
      setData(result);
    } catch (err: any) {
      console.error('Error fetching credential:', err);
      setError(err.message || 'Failed to load credential data');
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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

  if (error || !data) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Header showNavLinks={false} showCTAButtons={false} showWalletButton={false} />
        <main className="mx-auto max-w-4xl px-6 py-16 text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-red-600 mb-2">Access Denied</h1>
          <p className="text-slate-600 mb-8">
            {error || 'This view token has expired or is invalid.'}
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
        {/* Timer Alert */}
        <div className={`rounded-xl border-2 p-4 mb-6 text-center sticky top-20 z-10 bg-white ${
          timeLeft <= 10 ? 'border-red-300 bg-red-50' : 'border-amber-300 bg-amber-50'
        }`}>
          <p className={`font-bold text-lg ${timeLeft <= 10 ? 'text-red-700' : 'text-amber-700'}`}>
            ⏱️ Time Remaining: {formatTime(timeLeft)}
          </p>
          <p className="text-xs text-slate-600 mt-1">
            This credential will expire and you'll need to request access again
          </p>
        </div>

        {/* Assessment Results */}
        <div className="rounded-3xl border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Assessment Results</h2>
          
          <div className={`rounded-2xl border-2 p-6 mb-6 text-center ${getBandColor(data.summary.band)}`}>
            <div className="text-5xl font-black mb-2">{data.summary.band}</div>
            <div className="text-lg font-semibold">{getBandLabel(data.summary.band)}</div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-slate-900 mb-3">Key Insights:</h3>
            {data.summary.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="text-slate-700 pt-1">{bullet}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Report */}
        {data.report ? (
          <div className="rounded-3xl border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">📄 Full Report</h2>
            
            {/* Show extracted text if available */}
            {data.report.extractedText && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Report Content</h3>
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <div className="prose prose-sm max-w-none text-slate-700">
                    <div className="whitespace-pre-wrap font-serif leading-relaxed">
                      {data.report.extractedText}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Show metadata */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Document Metadata</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {data.report.fileName && (
                  <div>
                    <span className="text-slate-500">File:</span>
                    <div className="font-medium text-slate-900">{data.report.fileName}</div>
                  </div>
                )}
                {data.report.numPages && (
                  <div>
                    <span className="text-slate-500">Pages:</span>
                    <div className="font-medium text-slate-900">{data.report.numPages}</div>
                  </div>
                )}
                {data.report.extractedAt && (
                  <div>
                    <span className="text-slate-500">Processed:</span>
                    <div className="font-medium text-slate-900">
                      {new Date(data.report.extractedAt).toLocaleString()}
                    </div>
                  </div>
                )}
                {data.report.metadata?.aiModel && (
                  <div>
                    <span className="text-slate-500">AI Model:</span>
                    <div className="font-medium text-slate-900">{data.report.metadata.aiModel}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : data.note && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 mb-8">
            <p className="text-amber-800 text-sm">
              ℹ️ {data.note}
            </p>
          </div>
        )}

        {/* Verification Note */}
        <div className="rounded-xl border border-violet-200 bg-violet-50 p-6">
          <h3 className="font-semibold text-slate-900 mb-2">✓ Verified Credential</h3>
          <p className="text-sm text-slate-600">
            This credential has been cryptographically verified on the Stacks blockchain. 
            The results shown are authentic and have not been tampered with.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
