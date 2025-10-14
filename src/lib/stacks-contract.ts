import { openContractCall } from '@stacks/connect';
import {
  bufferCV,
  stringAsciiCV,
  uintCV,
  standardPrincipalCV,
  cvToJSON,
} from '@stacks/transactions';
import { STACKS_TESTNET } from '@stacks/network';

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
      onFinish: (data) => {
        console.log('Transaction broadcast:', data.txId);
        console.log('View in explorer:', `https://explorer.hiro.so/txid/${data.txId}?chain=testnet`);
        
        // Note: The actual credential ID will be available after the transaction confirms
        // For now, we return the txId and will need to query it later
        resolve({
          txId: data.txId,
          credentialId: null, // Will be populated after tx confirmation
        });
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
 * Revokes a credential (can only be called by issuer or owner)
 * @param credentialId The on-chain credential ID to revoke
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
        console.log('Revoke transaction:', data.txId);
        resolve(data.txId);
      },
      onCancel: () => {
        reject(new Error('Revoke transaction was cancelled'));
      },
    });
  });
}
