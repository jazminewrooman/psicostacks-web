/**
 * Admin functions for contract management
 * Only the contract owner can call these functions
 */

import { openContractCall } from '@stacks/connect';
import { uintCV } from '@stacks/transactions';
import { STACKS_TESTNET } from '@stacks/network';

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || 'ST2QS1D1ZFCGX436QPHACJNC0R2A6HNB7BNM95J9X';
const CONTRACT_NAME = process.env.NEXT_PUBLIC_CONTRACT_NAME || 'psicostacks-sbt';
const NETWORK = STACKS_TESTNET;

/**
 * Updates the verification fee for the contract
 * Only the contract owner can call this
 * @param feeInMicroStx Fee in micro-STX (1 STX = 1,000,000 micro-STX)
 * @returns Transaction ID
 */
export async function setVerificationFee(feeInMicroStx: number): Promise<string> {
  console.log('Setting verification fee to:', feeInMicroStx, 'micro-STX');
  console.log('That is:', feeInMicroStx / 1_000_000, 'STX');

  return new Promise((resolve, reject) => {
    openContractCall({
      network: NETWORK,
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'set-verify-fee',
      functionArgs: [uintCV(feeInMicroStx)],
      postConditions: [], // No STX transfer, so no post-conditions needed
      appDetails: {
        name: 'PsicoStacks Admin',
        icon: window.location.origin + '/psicostacks-logo.png',
      },
      onFinish: (data) => {
        console.log('Fee update transaction:', data);
        console.log('View in explorer:', `https://explorer.hiro.so/txid/${data.txId}?chain=testnet`);
        resolve(data.txId);
      },
      onCancel: () => {
        reject(new Error('Transaction cancelled by user'));
      },
    });
  });
}

/**
 * Helper to convert STX to micro-STX
 */
export function stxToMicroStx(stx: number): number {
  return stx * 1_000_000;
}

/**
 * Helper to convert micro-STX to STX
 */
export function microStxToStx(microStx: number): number {
  return microStx / 1_000_000;
}
