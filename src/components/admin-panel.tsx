'use client';

import { useState } from 'react';
import { setVerificationFee, stxToMicroStx } from '@/lib/admin-functions';

/**
 * Admin Panel Component
 * Only accessible to contract owner
 * Used to update contract settings like verification fee
 */
export default function AdminPanel() {
  const [feeInStx, setFeeInStx] = useState<number>(10);
  const [loading, setLoading] = useState(false);
  const [txId, setTxId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpdateFee = async () => {
    setLoading(true);
    setError(null);
    setTxId(null);

    try {
      const feeInMicroStx = stxToMicroStx(feeInStx);
      console.log('Updating fee to:', feeInStx, 'STX =', feeInMicroStx, 'micro-STX');
      
      const transactionId = await setVerificationFee(feeInMicroStx);
      setTxId(transactionId);
    } catch (err: any) {
      console.error('Error updating fee:', err);
      setError(err.message || 'Failed to update fee');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
      <h2 className="text-2xl font-bold mb-4">⚙️ Admin Panel</h2>
      <p className="text-sm text-gray-600 mb-6">
        Update contract settings. Only the contract owner can make these changes.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="fee" className="block text-sm font-medium text-gray-700 mb-2">
            Verification Fee (STX)
          </label>
          <input
            id="fee"
            type="number"
            min="0"
            step="0.01"
            value={feeInStx}
            onChange={(e) => setFeeInStx(parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="10"
          />
          <p className="text-xs text-gray-500 mt-1">
            = {stxToMicroStx(feeInStx).toLocaleString()} micro-STX
          </p>
        </div>

        <button
          onClick={handleUpdateFee}
          disabled={loading}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {loading ? 'Updating...' : 'Update Fee'}
        </button>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">❌ {error}</p>
          </div>
        )}

        {txId && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800 font-semibold mb-2">
              ✅ Fee update submitted!
            </p>
            <a
              href={`https://explorer.hiro.so/txid/${txId}?chain=testnet`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline break-all"
            >
              View transaction: {txId}
            </a>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-xs text-yellow-800">
          <strong>⚠️ Important:</strong> This transaction will only succeed if you are the contract owner.
          Make sure you're connected with the wallet that deployed the contract.
        </p>
      </div>
    </div>
  );
}
