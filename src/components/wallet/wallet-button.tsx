'use client';

import React from 'react';
import { useWallet } from '@/contexts/wallet-context';

export function WalletButton() {
  const wallet = useWallet();
  const { isConnected, stxAddress, stxBalance, connectWallet, disconnectWallet, isLoading } = wallet;

  // Show connected state
  if (isConnected && stxAddress) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-700">
              {stxAddress.slice(0, 6)}...{stxAddress.slice(-4)}
            </span>
            <span className="text-xs text-slate-500">
              {stxBalance ? `${stxBalance} STX` : 'Loading...'}
            </span>
          </div>
        </div>
        <button
          onClick={disconnectWallet}
          className="text-sm text-slate-600 hover:text-slate-900 underline"
        >
          Disconnect
        </button>
      </div>
    );
  }

  // Show connect button
  return (
    <button
      onClick={connectWallet}
      disabled={isLoading}
      className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {isLoading ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
}

export function WalletStatus() {
  const { isConnected, stxAddress, stxBalance } = useWallet();

}
