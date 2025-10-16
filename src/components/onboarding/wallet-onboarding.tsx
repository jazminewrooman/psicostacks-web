'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface WalletOnboardingProps {
  userType: 'candidate' | 'employer';
  onComplete: () => void;
  onSkip?: () => void;
}

export function WalletOnboarding({ userType, onComplete, onSkip }: WalletOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const candidateSteps = [
    {
      icon: <img src="/lrmnHOuN_400x400.jpg" alt="PsicoStacks Logo" className="w-16 h-16 mx-auto" />,
      title: 'Welcome to PsicoStacks',
      subtitle: 'Create Verifiable Psychometric Credentials',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            PsicoStacks allows you to create <strong>verifiable, portable credentials</strong> from your psychometric assessments.
          </p>
          <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
            <h4 className="font-semibold text-violet-900 mb-2">✨ What you can do:</h4>
            <ul className="space-y-2 text-sm text-violet-800">
              <li>• Upload your psychometric test results</li>
              <li>• Mint them as blockchain credentials (SBTs)</li>
              <li>• Share with unlimited employers</li>
              <li>• Revoke access anytime you want</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      icon: <img src="/lrmnHOuN_400x400.jpg" alt="PsicoStacks Logo" className="w-16 h-16 mx-auto" />,
      title: 'What is Stacks?',
      subtitle: 'The blockchain powering your credentials',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            <strong>Stacks</strong> is a Bitcoin Layer-2 blockchain that brings smart contracts to Bitcoin.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-2xl mb-2">🔒</div>
              <h4 className="font-semibold text-blue-900 mb-1">Secure</h4>
              <p className="text-sm text-blue-800">
                Inherits Bitcoin&apos;s security - the most secure blockchain
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold text-green-900 mb-1">Fast</h4>
              <p className="text-sm text-green-800">
                Transactions confirm in ~30 seconds
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="text-2xl mb-2">💰</div>
              <h4 className="font-semibold text-amber-900 mb-1">Low Cost</h4>
              <p className="text-sm text-amber-800">
                Affordable fees compared to other blockchains
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="text-2xl mb-2">🌐</div>
              <h4 className="font-semibold text-purple-900 mb-1">Decentralized</h4>
              <p className="text-sm text-purple-800">
                No central authority - you own your data
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <img src="/leather2.png" alt="Leather Wallet" className="w-16 h-16 mx-auto" />,
      title: 'Install Leather Wallet',
      subtitle: 'Your gateway to the blockchain',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            To use PsicoStacks, you need a <strong>Stacks wallet</strong>. We recommend <strong>Leather</strong>.
          </p>
          
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-4">📥 Installation Steps:</h4>
            <ol className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-violet-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <div>
                  <p className="font-medium">Visit Leather&apos;s website</p>
                  <a 
                    href="https://leather.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-violet-600 hover:underline text-xs"
                  >
                    leather.io →
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-violet-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <div>
                  <p className="font-medium">Add to your browser</p>
                  <p className="text-xs text-slate-600">Available for Chrome, Firefox, and Brave</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-violet-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <div>
                  <p className="font-medium">Create a new wallet</p>
                  <p className="text-xs text-slate-600">Save your Secret Recovery Phrase securely!</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-violet-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <div>
                  <p className="font-medium">Get testnet STX</p>
                  <a 
                    href="https://explorer.hiro.so/sandbox/faucet?chain=testnet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-violet-600 hover:underline text-xs"
                  >
                    Testnet Faucet →
                  </a>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-900">
              <strong>⚠️ Important:</strong> Your Secret Recovery Phrase is the ONLY way to recover your wallet. Never share it with anyone!
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: '🚀',
      title: 'You\'re Ready!',
      subtitle: 'Start creating your credentials',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            Great! You now have everything you need to use PsicoStacks.
          </p>
          
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-4">🎯 Next Steps:</h4>
            <ol className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="text-2xl">📄</span>
                <div>
                  <p className="font-medium">Upload your psychometric test results</p>
                  <p className="text-xs text-slate-600">PDF format supported</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🤖</span>
                <div>
                  <p className="font-medium">AI processes and validates your results</p>
                  <p className="text-xs text-slate-600">Generates a secure credential</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">⛓️</span>
                <div>
                  <p className="font-medium">Mint on blockchain</p>
                  <p className="text-xs text-slate-600">Creates an immutable, verifiable record</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">📤</span>
                <div>
                  <p className="font-medium">Share with employers</p>
                  <p className="text-xs text-slate-600">Generate unlimited verification links</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-slate-600 mb-4">
              Need help? Check out our <a href="#" className="text-violet-600 hover:underline">documentation</a> or{' '}
              <a href="#" className="text-violet-600 hover:underline">contact support</a>.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const employerSteps = [
    {
      icon: <img src="/lrmnHOuN_400x400.jpg" alt="PsicoStacks Logo" className="w-16 h-16 mx-auto" />,
      title: 'Welcome, Employer!',
      subtitle: 'Verify Psychometric Credentials',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            You&apos;ve received a <strong>verifiable credential link</strong> from a candidate. Here&apos;s what you need to know:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">✨ What you&apos;ll get:</h4>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Verified psychometric assessment results</li>
              <li>• Blockchain-verified authenticity</li>
              <li>• Tamper-proof credentials</li>
              <li>• Instant access after payment</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      icon: <img src="/lrmnHOuN_400x400.jpg" alt="PsicoStacks Logo" className="w-16 h-16 mx-auto" />,
      title: 'What is Stacks?',
      subtitle: 'Understanding blockchain verification',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            This credential is stored on the <strong>Stacks blockchain</strong>, which means it&apos;s:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-2xl mb-2">✅</div>
              <h4 className="font-semibold text-green-900 mb-1">Verifiable</h4>
              <p className="text-sm text-green-800">
                Cryptographically proven - impossible to fake
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-2xl mb-2">🔒</div>
              <h4 className="font-semibold text-blue-900 mb-1">Immutable</h4>
              <p className="text-sm text-blue-800">
                Cannot be altered or tampered with
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="text-2xl mb-2">⏱️</div>
              <h4 className="font-semibold text-purple-900 mb-1">Timestamped</h4>
              <p className="text-sm text-purple-800">
                Includes issue date and expiration
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="text-2xl mb-2">👤</div>
              <h4 className="font-semibold text-amber-900 mb-1">Privacy-Preserving</h4>
              <p className="text-sm text-amber-800">
                Only you see the full report after paying
              </p>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="text-sm text-slate-700">
              <strong>💡 Why blockchain?</strong> Traditional PDFs can be edited. Blockchain credentials are cryptographically signed and impossible to forge, giving you confidence in authenticity.
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: <img src="/leather2.png" alt="Leather Wallet" className="w-16 h-16 mx-auto" />,
      title: 'Install Leather Wallet',
      subtitle: 'Required to verify credentials',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            To verify this credential, you need a <strong>Stacks wallet</strong>. This wallet allows you to pay the verification fee securely on the blockchain.
          </p>
          
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-4">📥 Quick Setup:</h4>
            <ol className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <div>
                  <p className="font-medium">Install Leather Wallet</p>
                  <a 
                    href="https://leather.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs"
                  >
                    leather.io →
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <div>
                  <p className="font-medium">Add browser extension</p>
                  <p className="text-xs text-slate-600">Chrome, Firefox, or Brave</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <div>
                  <p className="font-medium">Create your wallet</p>
                  <p className="text-xs text-slate-600">Takes less than 2 minutes</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <div>
                  <p className="font-medium">Get testnet STX (for testing)</p>
                  <a 
                    href="https://explorer.hiro.so/sandbox/faucet?chain=testnet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs"
                  >
                    Free Testnet STX →
                  </a>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
            <p className="text-sm text-violet-900">
              <strong>💰 Verification Fee:</strong> Costs 10 STX (~$3) to access the full credential report. This fee goes to the credential issuer and is processed securely on the blockchain.
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: '✅',
      title: 'Ready to Verify!',
      subtitle: 'Start verifying credentials',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            Perfect! You&apos;re all set to verify blockchain credentials.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-4">🎯 Verification Process:</h4>
            <ol className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="text-2xl">👀</span>
                <div>
                  <p className="font-medium">Preview credential (FREE)</p>
                  <p className="text-xs text-slate-600">See candidate&apos;s assessment band and basic insights</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">💳</span>
                <div>
                  <p className="font-medium">Pay verification fee (10 STX)</p>
                  <p className="text-xs text-slate-600">Secure blockchain transaction</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">⏳</span>
                <div>
                  <p className="font-medium">Wait for confirmation (~30 seconds)</p>
                  <p className="text-xs text-slate-600">Blockchain validates your payment</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-medium">Access full report (60 seconds)</p>
                  <p className="text-xs text-slate-600">Complete psychometric analysis</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-900">
              <strong>🔒 Privacy Note:</strong> Your verification is logged on-chain for audit purposes, but the candidate&apos;s full data remains encrypted and private.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const steps = userType === 'candidate' ? candidateSteps : employerSteps;
  const currentStepData = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Progress bar */}
        <div className="bg-slate-100 h-2">
          <div 
            className="bg-gradient-to-r from-violet-600 to-purple-600 h-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">{currentStepData.icon}</div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {currentStepData.title}
            </h2>
            <p className="text-slate-600">{currentStepData.subtitle}</p>
          </div>

          {/* Content */}
          <div className="mb-8">
            {currentStepData.content}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-6 border-t border-slate-200">
            <div className="flex gap-2">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                >
                  ← Back
                </Button>
              )}
              {onSkip && currentStep === 0 && (
                <Button
                  variant="outline"
                  onClick={onSkip}
                  className="text-slate-600"
                >
                  Skip Tutorial
                </Button>
              )}
            </div>

            <div className="flex items-center gap-4">
              {/* Step indicators */}
              <div className="flex gap-1">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index === currentStep
                        ? 'w-8 bg-violet-600'
                        : index < currentStep
                        ? 'w-2 bg-violet-400'
                        : 'w-2 bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={handleNext}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
              >
                {currentStep < steps.length - 1 ? 'Next →' : 'Get Started 🚀'}
              </Button>
            </div>
          </div>

          {/* Step counter */}
          <div className="text-center mt-4 text-sm text-slate-500">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
      </div>
    </div>
  );
}
