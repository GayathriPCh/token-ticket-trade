/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from 'react';
import { useWallet } from '../hooks/useWallet';
import { WalletType } from '../utils/walletConfig';

interface WalletContextType {
  isConnected: boolean;
  account: string | null;
  isCorrectNetwork: boolean;
  isLoading: boolean;
  walletType: WalletType | null;
  availableWallets: WalletType[];
  connectWallet: (walletType: WalletType) => Promise<boolean>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const wallet = useWallet();

  return (
    <WalletContext.Provider value={wallet}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWalletContext must be used within a WalletProvider');
  }
  return context;
};
