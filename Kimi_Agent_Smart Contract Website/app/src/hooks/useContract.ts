import { useState, useCallback } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { parseUSDT } from '@/utils/formatters';
import { CONSTANTS } from '@/contracts/orcaTrust';

interface TransactionState {
  isLoading: boolean;
  error: string | null;
  hash: string | null;
}

export function useContract() {
  const { contract, usdtContract, account, refreshUserData } = useWeb3();
  const [txState, setTxState] = useState<TransactionState>({
    isLoading: false,
    error: null,
    hash: null,
  });

  const executeTransaction = useCallback(async (
    transaction: () => Promise<any>
  ) => {
    setTxState({ isLoading: true, error: null, hash: null });
    try {
      const tx = await transaction();
      setTxState(prev => ({ ...prev, hash: tx.hash }));
      
      const receipt = await tx.wait();
      if (receipt.status === 1) {
        await refreshUserData();
        setTxState(prev => ({ ...prev, isLoading: false }));
        return { success: true, hash: tx.hash };
      } else {
        throw new Error('Transaction failed');
      }
    } catch (error: any) {
      const errorMessage = error.reason || error.message || 'Transaction failed';
      setTxState({ isLoading: false, error: errorMessage, hash: null });
      return { success: false, error: errorMessage };
    }
  }, [refreshUserData]);

  // Register user
  const register = useCallback(async (username: string, referrerUsername: string) => {
    if (!contract) throw new Error('Contract not initialized');
    return executeTransaction(
      () => contract.register(username, referrerUsername)
    );
  }, [contract, executeTransaction]);

  // Deposit USDT
  const deposit = useCallback(async (amount: string) => {
    if (!contract || !usdtContract) throw new Error('Contracts not initialized');
    
    const amountWei = parseUSDT(amount);
    
    // Check allowance
    const allowance = await usdtContract.allowance(account, contract.target);
    
    // Approve if needed
    if (allowance < amountWei) {
      setTxState({ isLoading: true, error: null, hash: null });
      try {
        const approveTx = await usdtContract.approve(contract.target, amountWei);
        await approveTx.wait();
      } catch (error: any) {
        setTxState({ isLoading: false, error: error.message, hash: null });
        return { success: false, error: error.message };
      }
    }
    
    return executeTransaction(
      () => contract.deposit(amountWei)
    );
  }, [contract, usdtContract, account, executeTransaction]);

  // Withdraw daily reward
  const withdrawDailyReward = useCallback(async (amount: string = '0') => {
    if (!contract) throw new Error('Contract not initialized');
    const amountWei = amount === '0' ? 0 : parseUSDT(amount);
    return executeTransaction(
      () => contract.withdrawDailyReward(amountWei)
    );
  }, [contract, executeTransaction]);

  // Compound daily reward
  const compoundDailyReward = useCallback(async (amount: string = '0') => {
    if (!contract) throw new Error('Contract not initialized');
    const amountWei = amount === '0' ? 0 : parseUSDT(amount);
    return executeTransaction(
      () => contract.compoundDailyReward(amountWei)
    );
  }, [contract, executeTransaction]);

  // Withdraw network reward
  const withdrawNetworkReward = useCallback(async (amount: string = '0') => {
    if (!contract) throw new Error('Contract not initialized');
    const amountWei = amount === '0' ? 0 : parseUSDT(amount);
    return executeTransaction(
      () => contract.withdrawNetworkReward(amountWei)
    );
  }, [contract, executeTransaction]);

  // Compound network reward
  const compoundNetworkReward = useCallback(async (amount: string = '0') => {
    if (!contract) throw new Error('Contract not initialized');
    const amountWei = amount === '0' ? 0 : parseUSDT(amount);
    return executeTransaction(
      () => contract.compoundNetworkReward(amountWei)
    );
  }, [contract, executeTransaction]);

  // Purchase additional username
  const purchaseUsername = useCallback(async (newUsername: string) => {
    if (!contract || !usdtContract) throw new Error('Contracts not initialized');
    
    const amountWei = parseUSDT(CONSTANTS.ADDITIONAL_USERNAME_COST.toString());
    
    // Check allowance
    const allowance = await usdtContract.allowance(account, contract.target);
    
    // Approve if needed
    if (allowance < amountWei) {
      setTxState({ isLoading: true, error: null, hash: null });
      try {
        const approveTx = await usdtContract.approve(contract.target, amountWei);
        await approveTx.wait();
      } catch (error: any) {
        setTxState({ isLoading: false, error: error.message, hash: null });
        return { success: false, error: error.message };
      }
    }
    
    return executeTransaction(
      () => contract.purchaseAdditionalUsername(newUsername)
    );
  }, [contract, usdtContract, account, executeTransaction]);

  // Manual calculate rewards
  const manualCalculateRewards = useCallback(async () => {
    if (!contract) throw new Error('Contract not initialized');
    return executeTransaction(
      () => contract.manualCalculateRewards()
    );
  }, [contract, executeTransaction]);

  // Check if username is valid
  const checkUsername = useCallback(async (username: string): Promise<boolean> => {
    if (!contract) return false;
    try {
      return await contract.isValidUsername(username);
    } catch {
      return false;
    }
  }, [contract]);

  // Check if referrer is valid
  const checkReferrer = useCallback(async (referrerUsername: string): Promise<boolean> => {
    if (!contract || !account) return false;
    try {
      return await contract.isValidUplineUsername(referrerUsername, account);
    } catch {
      return false;
    }
  }, [contract, account]);

  // Get daily rewards
  const getDailyRewards = useCallback(async (): Promise<{ availableReward: bigint, reserve: bigint }> => {
    if (!contract || !account) return { availableReward: BigInt(0), reserve: BigInt(0) };
    try {
      return await contract.getDailyRewards(account);
    } catch {
      return { availableReward: BigInt(0), reserve: BigInt(0) };
    }
  }, [contract, account]);

  // Get network rewards
  const getNetworkRewards = useCallback(async (): Promise<{ availableReward: bigint, reserve: bigint }> => {
    if (!contract || !account) return { availableReward: BigInt(0), reserve: BigInt(0) };
    try {
      return await contract.getNetworkRewards(account);
    } catch {
      return { availableReward: BigInt(0), reserve: BigInt(0) };
    }
  }, [contract, account]);

  // Get positions
  const getPositions = useCallback(async (): Promise<any[]> => {
    if (!contract || !account) return [];
    try {
      const count = await contract.getPositionCount(account);
      const positions = [];
      for (let i = 0; i < Number(count); i++) {
        const pos = await contract.getPosition(account, i);
        const extra = await contract.getPositionExtra(account, i);
        positions.push({ ...pos, nextProfitTime: extra });
      }
      return positions;
    } catch {
      return [];
    }
  }, [contract, account]);

  // Get direct referrals
  const getDirectReferrals = useCallback(async (): Promise<string[]> => {
    if (!contract || !account) return [];
    try {
      return await contract.getDirectReferrals(account);
    } catch {
      return [];
    }
  }, [contract, account]);

  // Get contract info
  const getContractInfo = useCallback(async () => {
    if (!contract) return null;
    try {
      return await contract.getContractInfo();
    } catch {
      return null;
    }
  }, [contract]);

  return {
    txState,
    register,
    deposit,
    withdrawDailyReward,
    compoundDailyReward,
    withdrawNetworkReward,
    compoundNetworkReward,
    purchaseUsername,
    manualCalculateRewards,
    checkUsername,
    checkReferrer,
    getDailyRewards,
    getNetworkRewards,
    getPositions,
    getDirectReferrals,
    getContractInfo,
  };
}
