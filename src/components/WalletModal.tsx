import React from 'react';
import { Button } from "@/components/ui/button";
import { X, Wallet } from "lucide-react";
import { WalletType } from '../utils/walletConfig';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWallet: (walletType: WalletType) => void;
  availableWallets: WalletType[];
  isLoading: boolean;
}

const WalletModal: React.FC<WalletModalProps> = ({
  isOpen,
  onClose,
  onSelectWallet,
  availableWallets,
  isLoading
}) => {
  if (!isOpen) return null;

  const walletInfo = {
    metamask: {
      name: 'MetaMask',
      description: 'Connect using MetaMask wallet',
      icon: '🦊',
      installUrl: 'https://metamask.io/download/'
    },
    phantom: {
      name: 'Phantom',
      description: 'Connect using Phantom wallet',
      icon: '👻',
      installUrl: 'https://phantom.app/'
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-purple-500/20 rounded-xl max-w-md w-full p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Wallet className="w-6 h-6 text-purple-400" />
            Connect Wallet
          </h2>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Wallet Options */}
        <div className="space-y-3">
          {(['metamask', 'phantom'] as WalletType[]).map((wallet) => {
            const info = walletInfo[wallet];
            const isAvailable = availableWallets.includes(wallet);
            
            return (
              <div key={wallet} className="border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold">{info.name}</h3>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                  
                  {isAvailable ? (
                    <Button
                      onClick={() => onSelectWallet(wallet)}
                      disabled={isLoading}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      {isLoading ? 'Connecting...' : 'Connect'}
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => window.open(info.installUrl, '_blank')}
                      className="border-gray-600 text-gray-400 hover:bg-gray-800"
                    >
                      Install
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {availableWallets.length === 0 && (
          <div className="text-center py-6">
            <p className="text-gray-400 mb-4">No wallets detected</p>
            <p className="text-sm text-gray-500">
              Please install MetaMask or Phantom to continue
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletModal;
