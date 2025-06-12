/* eslint-disable @typescript-eslint/no-explicit-any */
interface EthereumProvider {
  request: (args: { method: string; params?: any[] }) => Promise<any>;
  on: (event: string, callback: (...args: any[]) => void) => void;
  removeListener: (event: string, callback: (...args: any[]) => void) => void;
  isMetaMask?: boolean;
  isPhantom?: boolean;
  providers?: EthereumProvider[];
}

declare global {
  interface Window {
    ethereum?: EthereumProvider;
    phantom?: {
      ethereum?: EthereumProvider;
    };
    MetaMask?: EthereumProvider; // MetaMask sometimes exposes itself here
  }
}

export {};
