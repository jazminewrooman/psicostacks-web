'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { connect, disconnect, isConnected, getLocalStorage } from '@stacks/connect';

interface WalletContextType {
  isConnected: boolean;
  stxAddress: string | null;
  btcAddress: string | null;
  stxBalance: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  isLoading: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [connected, setConnected] = useState(false);
  const [stxAddress, setStxAddress] = useState<string | null>(null);
  const [btcAddress, setBtcAddress] = useState<string | null>(null);
  const [stxBalance, setStxBalance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch STX balance from API
  const fetchBalance = async (address: string) => {
    console.log('Fetching balance for:', address);
    try {
      const response = await fetch(`https://api.testnet.hiro.so/extended/v1/address/${address}/balances`);
      const data = await response.json();
      console.log('Balance data:', data);
      const balance = (parseInt(data.stx.balance) / 1000000).toFixed(2); // Convert from micro-STX
      console.log('Parsed balance:', balance);
      setStxBalance(balance);
    } catch (error) {
      console.error('Failed to fetch balance:', error);
      setStxBalance('0.00');
    }
  };

  // Check connection status on mount
  useEffect(() => {
    const checkConnection = async () => {
      const authenticated = isConnected();
      
      if (authenticated) {
        const userData = getLocalStorage();
        console.log('Initial check - userData:', userData);
        console.log('Addresses type:', typeof userData?.addresses, Array.isArray(userData?.addresses));
        
        if (userData?.addresses) {
          let stx = null;
          let btc = null;
          
          // Check if addresses is an array or object
          if (Array.isArray(userData.addresses)) {
            // addresses is an array of address objects
            const stxAddressObj = userData.addresses.find((addr: any) => addr.type === 'stx' || addr.symbol === 'STX');
            const btcAddressObj = userData.addresses.find((addr: any) => addr.type === 'btc' || addr.symbol === 'BTC');
            
            stx = stxAddressObj?.address;
            btc = btcAddressObj?.address;
          } else {
            // addresses is an object with stx/btc properties (which are arrays)
            const stxAddresses = (userData.addresses as any).stx;
            const btcAddresses = (userData.addresses as any).btc;
            
            stx = Array.isArray(stxAddresses) ? stxAddresses[0]?.address : stxAddresses?.address;
            btc = Array.isArray(btcAddresses) ? btcAddresses[0]?.address : btcAddresses?.address;
          }
          
          console.log('Initial check - extracted:', { stx, btc });
          
          setStxAddress(stx || null);
          setBtcAddress(btc || null);
          setConnected(authenticated);
          
          // Fetch balance
          if (stx) {
            await fetchBalance(stx);
          }
        }
      }
    };

    checkConnection();
  }, []);

  const connectWallet = async () => {
    setIsLoading(true);
    try {
      // Check if already connected
      if (isConnected()) {
        console.log('Already authenticated');
        const userData = getLocalStorage();
        console.log('Local storage data:', userData);
        
        if (userData?.addresses) {
          let stx = null;
          let btc = null;
          
          // Check if addresses is an array or object
          if (Array.isArray(userData.addresses)) {
            const stxAddressObj = userData.addresses.find((addr: any) => addr.type === 'stx' || addr.symbol === 'STX');
            const btcAddressObj = userData.addresses.find((addr: any) => addr.type === 'btc' || addr.symbol === 'BTC');
            
            stx = stxAddressObj?.address;
            btc = btcAddressObj?.address;
          } else {
            const stxAddresses = (userData.addresses as any).stx;
            const btcAddresses = (userData.addresses as any).btc;
            
            stx = Array.isArray(stxAddresses) ? stxAddresses[0]?.address : stxAddresses?.address;
            btc = Array.isArray(btcAddresses) ? btcAddresses[0]?.address : btcAddresses?.address;
          }
          
          console.log('Extracted from storage:', { stx, btc });
          
          // Update states
          setStxAddress(stx || null);
          setBtcAddress(btc || null);
          setConnected(true);
          
          // Fetch balance
          if (stx) {
            await fetchBalance(stx);
          }
        }
        setIsLoading(false);
        return;
      }

      // Connect to wallet
      const response = await connect();
      console.log('Connected - full response:', response);
      console.log('Addresses structure:', response.addresses);
      
      // Get addresses from response - addresses is an array of address objects
      if (response.addresses) {
        // Find STX and BTC addresses from the array
        const stxAddressObj = response.addresses.find((addr: any) => addr.type === 'stx' || addr.symbol === 'STX');
        const btcAddressObj = response.addresses.find((addr: any) => addr.type === 'btc' || addr.symbol === 'BTC');
        
        const stx = stxAddressObj?.address;
        const btc = btcAddressObj?.address;
        
        console.log('Extracted addresses:', { stx, btc });
        
        // Update all states in batch using React's automatic batching
        setStxAddress(stx || null);
        setBtcAddress(btc || null);
        setConnected(true);
        
        console.log('States updated - stxAddress:', stx);
        
        // Fetch balance after setting address
        if (stx) {
          await fetchBalance(stx);
          console.log('Balance fetched successfully');
        }
      } else {
        console.error('No addresses in response');
      }
      
      console.log('Connection complete');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    disconnect(); // Clears storage and wallet selection
    setConnected(false);
    setStxAddress(null);
    setBtcAddress(null);
    setStxBalance(null);
    console.log('User disconnected');
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected: connected,
        stxAddress,
        btcAddress,
        stxBalance,
        connectWallet,
        disconnectWallet,
        isLoading,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}
