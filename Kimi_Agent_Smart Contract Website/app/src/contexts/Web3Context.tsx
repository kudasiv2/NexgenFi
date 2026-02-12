import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { CONTRACT_ADDRESS, CONTRACT_ABI, USDT_ADDRESS, USDT_ABI } from '@/contracts/orcaTrust';

interface Web3ContextType {
  account: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  provider: any;
  signer: any;
  contract: any;
  usdtContract: any;
  usdtBalance: string;
  isRegistered: boolean;
  userInfo: any;
  userInfoExtra: any;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  refreshUserData: () => Promise<void>;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export function Web3Provider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [provider, setProvider] = useState<any>(null);
  const [signer, setSigner] = useState<any>(null);
  const [contract, setContract] = useState<any>(null);
  const [usdtContract, setUsdtContract] = useState<any>(null);
  const [usdtBalance, setUsdtBalance] = useState('0');
  const [isRegistered, setIsRegistered] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [userInfoExtra, setUserInfoExtra] = useState<any>(null);

  // Initialize provider
  useEffect(() => {
    const initProvider = async () => {
      if (typeof window !== 'undefined' && (window as any).ethereum) {
        try {
          const ethersProvider = new (window as any).ethers.BrowserProvider((window as any).ethereum);
          setProvider(ethersProvider);
        } catch (error) {
          console.error('Error initializing provider:', error);
        }
      }
    };
    initProvider();
  }, []);

  // Check if already connected
  useEffect(() => {
    const checkConnection = async () => {
      if (provider) {
        try {
          const accounts = await (window as any).ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            await connectWallet();
          }
        } catch (error) {
          console.error('Error checking connection:', error);
        }
      }
    };
    checkConnection();
  }, [provider]);

  // Listen for account changes
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      (window as any).ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnectWallet();
        } else {
          setAccount(accounts[0]);
          refreshUserData();
        }
      });

      (window as any).ethereum.on('chainChanged', () => {
        window.location.reload();
      });
    }

    return () => {
      if (typeof window !== 'undefined' && (window as any).ethereum) {
        (window as any).ethereum.removeAllListeners('accountsChanged');
        (window as any).ethereum.removeAllListeners('chainChanged');
      }
    };
  }, []);

  const connectWallet = useCallback(async () => {
    if (!provider) {
      alert('Please install MetaMask or another Web3 wallet');
      return;
    }

    setIsConnecting(true);
    try {
      const accounts = await (window as any).ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      const newSigner = await provider.getSigner();
      const newContract = new (window as any).ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, newSigner);
      const newUsdtContract = new (window as any).ethers.Contract(USDT_ADDRESS, USDT_ABI, newSigner);

      setAccount(accounts[0]);
      setSigner(newSigner);
      setContract(newContract);
      setUsdtContract(newUsdtContract);
      setIsConnected(true);

      // Fetch user data
      await fetchUserData(accounts[0], newContract, newUsdtContract);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  }, [provider]);

  const disconnectWallet = useCallback(() => {
    setAccount(null);
    setSigner(null);
    setContract(null);
    setUsdtContract(null);
    setIsConnected(false);
    setUsdtBalance('0');
    setIsRegistered(false);
    setUserInfo(null);
    setUserInfoExtra(null);
  }, []);

  const fetchUserData = async (userAddress: string, contractInstance: any, usdtInstance: any) => {
    try {
      // Get USDT balance
      const balance = await usdtInstance.balanceOf(userAddress);
      const decimals = await usdtInstance.decimals();
      const formattedBalance = (Number(balance) / Math.pow(10, decimals)).toFixed(2);
      setUsdtBalance(formattedBalance);

      // Get user info
      const info = await contractInstance.getUserInfo(userAddress);
      setUserInfo(info);
      setIsRegistered(info.registered);

      // Get extra user info
      const extraInfo = await contractInstance.getUserInfoExtra(userAddress);
      setUserInfoExtra(extraInfo);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const refreshUserData = useCallback(async () => {
    if (account && contract && usdtContract) {
      await fetchUserData(account, contract, usdtContract);
    }
  }, [account, contract, usdtContract]);

  return (
    <Web3Context.Provider
      value={{
        account,
        isConnected,
        isConnecting,
        provider,
        signer,
        contract,
        usdtContract,
        usdtBalance,
        isRegistered,
        userInfo,
        userInfoExtra,
        connectWallet,
        disconnectWallet,
        refreshUserData,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
}
