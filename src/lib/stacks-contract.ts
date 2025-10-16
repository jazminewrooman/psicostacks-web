import { openContractCall } from '@stacks/connect';
import {
  bufferCV,
  stringAsciiCV,
  uintCV,
  standardPrincipalCV,
  cvToJSON,
} from '@stacks/transactions';
import { STACKS_TESTNET } from '@stacks/network';

const STACKS_API_URL = process.env.NEXT_PUBLIC_STACKS_API_URL || 'https://api.testnet.hiro.so';

// Contract details (update these with your deployed contract)
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || 'ST2QS1D1ZFCGX436QPHACJNC0R2A6HNB7BNM95J9X';
const CONTRACT_NAME = process.env.NEXT_PUBLIC_CONTRACT_NAME || 'psicostacks-sbt';
const NETWORK = STACKS_TESTNET;

interface MintCredentialParams {
  recipient: string;
  schema: string;
  commitmentHash: Buffer;
  ttlBlocks: number;
}

interface MintResult {
  txId: string;
  credentialId: number | null;
}

/**
 * Waits for a transaction to be confirmed on the blockchain
 * @param txId Transaction ID
 * @param maxAttempts Maximum number of polling attempts (default 30 = ~2.5 minutes)
 * @returns Transaction data when confirmed
 */
async function waitForTransactionConfirmation(txId: string, maxAttempts = 30): Promise<any> {
  console.log(`Waiting for transaction ${txId} to confirm...`);
  
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const txUrl = `${STACKS_API_URL}/extended/v1/tx/${txId}`;
      const response = await fetch(txUrl);
      const txData = await response.json();
      
      console.log(`Attempt ${i + 1}/${maxAttempts}: Status = ${txData.tx_status}`);
      
      if (txData.tx_status === 'success') {
        console.log('✅ Transaction confirmed!');
        return txData;
      }
      
      if (txData.tx_status === 'abort_by_response' || txData.tx_status === 'abort_by_post_condition') {
        throw new Error(`Transaction failed: ${txData.tx_status}`);
      }
      
      // Wait 5 seconds before next attempt
      await new Promise(resolve => setTimeout(resolve, 5000));
    } catch (error) {
      console.error(`Error checking transaction:`, error);
      // Continue trying
    }
  }
  
  throw new Error('Transaction confirmation timeout after ' + (maxAttempts * 5) + ' seconds');
}

/**
 * Extracts the credential ID from a confirmed transaction result
 * @param txData Transaction data from Stacks API
 * @returns Credential ID
 */
function extractCredentialIdFromTx(txData: any): number {
  // The contract returns (ok uint), we need to parse it
  // Format: "(ok u1)" or similar
  
  if (txData.tx_result?.repr) {
    const match = txData.tx_result.repr.match(/\(ok u(\d+)\)/);
    if (match && match[1]) {
      const id = parseInt(match[1]);
      console.log(`✅ Extracted credential ID: ${id}`);
      return id;
    }
  }
  
  throw new Error('Could not extract credential ID from transaction result');
}

/**
 * Mints a credential SBT on the Stacks blockchain
 * @param params Minting parameters
 * @returns Transaction ID and credential ID
 */
export async function mintCredentialOnChain(
  params: MintCredentialParams
): Promise<MintResult> {
  console.log('mintCredentialOnChain called with:', {
    recipient: params.recipient,
    schema: params.schema,
    commitHashLength: params.commitmentHash.length,
    ttlBlocks: params.ttlBlocks,
  });

  return new Promise((resolve, reject) => {
    // Prepare function arguments for Clarity contract
    const functionArgs = [
      standardPrincipalCV(params.recipient),           // recipient: principal
      stringAsciiCV(params.schema),                    // schema: string-ascii
      bufferCV(params.commitmentHash),                 // commit: buff 32
      uintCV(params.ttlBlocks),                        // ttl-blocks: uint
    ];

    console.log('Opening contract call with:', {
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      network: NETWORK,
    });

    openContractCall({
      network: NETWORK,
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'mint-credential',
      functionArgs,
      appDetails: {
        name: 'PsicoStacks',
        icon: window.location.origin + '/psicostacks-logo.png',
      },
      onFinish: async (data) => {
        console.log('Transaction broadcast:', data.txId);
        console.log('View in explorer:', `https://explorer.hiro.so/txid/${data.txId}?chain=testnet`);
        
        try {
          // Wait for transaction to confirm and extract the credential ID
          console.log('⏳ Waiting for blockchain confirmation...');
          const txData = await waitForTransactionConfirmation(data.txId);
          const credentialId = extractCredentialIdFromTx(txData);
          
          resolve({
            txId: data.txId,
            credentialId: credentialId, // ✅ Real ID from blockchain
          });
        } catch (error: any) {
          console.error('❌ Failed to get credential ID:', error.message);
          // Fallback: return null and let backend handle it
          resolve({
            txId: data.txId,
            credentialId: null,
          });
        }
      },
      onCancel: () => {
        reject(new Error('Transaction was cancelled by user'));
      },
    });
  });
}

/**
 * Checks if a credential is valid (not revoked and not expired)
 * @param credentialId The on-chain credential ID
 * @returns Whether the credential is valid
 */
export async function isCredentialValid(credentialId: number): Promise<boolean> {
  // TODO: Implement with Stacks API once transaction is confirmed
  console.log('Checking credential validity:', credentialId);
  return true;
}

/**
 * Gets credential details from the blockchain
 * @param credentialId The on-chain credential ID
 * @returns Credential data or null if not found
 */
export async function getCredentialDetails(credentialId: number) {
  // TODO: Implement with Stacks API once transaction is confirmed
  console.log('Getting credential details:', credentialId);
  return null;
}

/**
 * Revokes a credential on-chain
 * @param credentialId The on-chain credential ID
 */
export async function revokeCredential(credentialId: number): Promise<string> {
  return new Promise((resolve, reject) => {
    openContractCall({
      network: NETWORK,
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'revoke',
      functionArgs: [uintCV(credentialId)],
      appDetails: {
        name: 'PsicoStacks',
        icon: window.location.origin + '/psicostacks-logo.png',
      },
      onFinish: (data) => {
        console.log('Revoke transaction data:', data);
        console.log('Transaction ID:', data.txId);
        
        // Handle both possible response formats
        const txId = data.txId || (data as any).transaction || (typeof data === 'string' ? data : null);
        
        if (!txId) {
          console.error('No txId found in response:', data);
          reject(new Error('Transaction completed but no transaction ID received'));
          return;
        }
        
        resolve(txId);
      },
      onCancel: () => {
        reject(new Error('Transaction cancelled by user'));
      },
    });
  });
}

/**
 * Pays verification fee and verifies a credential on-chain
 * @param blockchainId The on-chain credential ID (blockchain_id from DB)
 * @returns Transaction ID
 */
export async function payVerificationFee(blockchainId: number): Promise<string> {
  console.log('Paying verification fee for blockchain ID:', blockchainId);

  return new Promise((resolve, reject) => {
    openContractCall({
      network: NETWORK,
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'verify-paid',
      functionArgs: [uintCV(blockchainId)],
      appDetails: {
        name: 'PsicoStacks',
        icon: window.location.origin + '/psicostacks-logo.png',
      },
      onFinish: (data) => {
        console.log('Verification payment transaction:', data);
        resolve(data.txId);
      },
      onCancel: () => {
        reject(new Error('Payment cancelled by user'));
      },
    });
  });
}
