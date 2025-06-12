/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { getAvailableWallets, connectToWallet, getMetaMaskProvider, getPhantomProvider, HYPERION_TESTNET, WalletType } from '../utils/walletConfig';

interface WalletState {
  isConnected: boolean;
  account: string | null;
  isCorrectNetwork: boolean;
  isLoading: boolean;
  walletType: WalletType | null;
  availableWallets: WalletType[];
}

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    account: null,
    isCorrectNetwork: false,
    isLoading: false,
    walletType: null,
    availableWallets: [],
  });

  const getCurrentProvider = () => {
    if (walletState.walletType === 'metamask') {
      return getMetaMaskProvider();
    } else if (walletState.walletType === 'phantom') {
      return getPhantomProvider();
    }
    return null;
  };

  const checkConnection = async () => {
    const provider = getCurrentProvider();
    if (!provider) return;

    try {
      const accounts = await provider.request({ method: 'eth_accounts' });
      const chainId = await provider.request({ method: 'eth_chainId' });
      
      setWalletState(prev => ({
        ...prev,
        isConnected: accounts.length > 0,
        account: accounts[0] || null,
        isCorrectNetwork: chainId === HYPERION_TESTNET.chainId,
        isLoading: false,
      }));
    } catch (error) {
      console.error('Error checking wallet connection:', error);
    }
  };

  const connectWallet = async (walletType: WalletType) => {
    setWalletState(prev => ({ ...prev, isLoading: true }));

    try {
      const { accounts } = await connectToWallet(walletType);

      setWalletState(prev => ({
        ...prev,
        isConnected: true,
        account: accounts[0],
        isCorrectNetwork: true,
        isLoading: false,
        walletType,
      }));

      return true;
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setWalletState(prev => ({ ...prev, isLoading: false }));
      return false;
    }
  };

  const disconnectWallet = () => {
    setWalletState({
      isConnected: false,
      account: null,
      isCorrectNetwork: false,
      isLoading: false,
      walletType: null,
      availableWallets: walletState.availableWallets, // Keep available wallets
    });
  };

  // Check available wallets on mount
  useEffect(() => {
    const checkWallets = async () => {
      const available = await getAvailableWallets();
      setWalletState(prev => ({ ...prev, availableWallets: available }));
    };

    checkWallets();
  }, []);

  // Set up event listeners when wallet type changes
  useEffect(() => {
    const provider = getCurrentProvider();
    if (!provider) return;

    checkConnection();

    const handleAccountsChanged = () => checkConnection();
    const handleChainChanged = () => checkConnection();

    provider.on('accountsChanged', handleAccountsChanged);
    provider.on('chainChanged', handleChainChanged);

    return () => {
      provider.removeListener('accountsChanged', handleAccountsChanged);
      provider.removeListener('chainChanged', handleChainChanged);
    };
  }, [walletState.walletType]);

  return {
    ...walletState,
    connectWallet,
    disconnectWallet,
  };
};
