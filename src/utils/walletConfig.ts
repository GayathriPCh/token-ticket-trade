/* eslint-disable @typescript-eslint/no-explicit-any */
export const HYPERION_TESTNET = {
  chainId: '0x20A55', // 133717 in hex (corrected)
  chainName: 'Hyperion Testnet',
  nativeCurrency: {
    name: 'TMETIS',
    symbol: 'TMETIS',
    decimals: 18,
  },
  rpcUrls: ['https://hyperion-testnet.metisdevops.link'],
  blockExplorerUrls: ['https://hyperion-testnet-explorer.metisdevops.link'],
};

export type WalletType = 'metamask' | 'phantom';

// More aggressive provider detection
export const waitForProvider = (timeout = 5000): Promise<void> => {
  return new Promise((resolve) => {
    const checkInterval = 50; // Check every 50ms
    let elapsed = 0;
    
    const check = () => {
      if (window.ethereum || window.phantom) {
        resolve();
        return;
      }
      
      elapsed += checkInterval;
      if (elapsed >= timeout) {
        resolve();
        return;
      }
      
      setTimeout(check, checkInterval);
    };
    
    check();
  });
};

// Enhanced MetaMask detection that handles Phantom override
export const getMetaMaskProvider = () => {
  if (typeof window === 'undefined') return null;
  
  // Method 1: Check if MetaMask is available in providers array (most reliable)
  if (window.ethereum?.providers && Array.isArray(window.ethereum.providers)) {
    const metamaskProvider = window.ethereum.providers.find((p: any) => p.isMetaMask && !p.isPhantom);
    if (metamaskProvider) {
      console.log('Found MetaMask in providers array');
      return metamaskProvider;
    }
  }
  
  // Method 2: Check if main ethereum object is MetaMask (when Phantom isn't overriding)
  if (window.ethereum && window.ethereum.isMetaMask && !window.ethereum.isPhantom) {
    console.log('Found MetaMask as main ethereum provider');
    return window.ethereum;
  }
  
  // Method 3: Direct check for MetaMask in window (fallback)
  if ((window as any).MetaMask) {
    console.log('Found MetaMask via window.MetaMask');
    return (window as any).MetaMask;
  }
  
  console.log('MetaMask not found');
  return null;
};

// Enhanced Phantom detection
export const getPhantomProvider = () => {
  if (typeof window === 'undefined') return null;
  
  // Method 1: Phantom's dedicated namespace (most reliable)
  if (window.phantom?.ethereum && window.phantom.ethereum.isPhantom) {
    console.log('Found Phantom via window.phantom.ethereum');
    return window.phantom.ethereum;
  }
  
  // Method 2: Check providers array
  if (window.ethereum?.providers && Array.isArray(window.ethereum.providers)) {
    const phantomProvider = window.ethereum.providers.find((p: any) => p.isPhantom);
    if (phantomProvider) {
      console.log('Found Phantom in providers array');
      return phantomProvider;
    }
  }
  
  // Method 3: Main ethereum object is Phantom
  if (window.ethereum && window.ethereum.isPhantom) {
    console.log('Found Phantom as main ethereum provider');
    return window.ethereum;
  }
  
  console.log('Phantom not found');
  return null;
};

// Force MetaMask connection by temporarily disabling other providers
export const forceMetaMaskConnection = async () => {
  const provider = getMetaMaskProvider();
  if (!provider) {
    throw new Error('MetaMask not found. Please install MetaMask.');
  }
  
  // Store original ethereum object
  const originalEthereum = window.ethereum;
  
  try {
    // Temporarily override window.ethereum with MetaMask provider
    (window as any).ethereum = provider;
    
    // Request accounts using MetaMask provider directly
    const accounts = await provider.request({ method: 'eth_requestAccounts' });
    
    return { provider, accounts };
  } finally {
    // Restore original ethereum object
    (window as any).ethereum = originalEthereum;
  }
};

// Check which wallets are available
export const getAvailableWallets = async (): Promise<WalletType[]> => {
  await waitForProvider();
  
  const wallets: WalletType[] = [];
  
  if (getMetaMaskProvider()) {
    wallets.push('metamask');
  }
  
  if (getPhantomProvider()) {
    wallets.push('phantom');
  }
  
  console.log('Available wallets:', wallets);
  return wallets;
};

// Add Hyperion network to specific wallet
export const addHyperionNetwork = async (walletType: WalletType) => {
  let provider;
  
  if (walletType === 'metamask') {
    provider = getMetaMaskProvider();
    if (!provider) {
      throw new Error('MetaMask is not installed');
    }
  } else if (walletType === 'phantom') {
    provider = getPhantomProvider();
    if (!provider) {
      throw new Error('Phantom is not installed');
    }
  } else {
    throw new Error('Unsupported wallet type');
  }

  console.log(`Adding Hyperion network to ${walletType}...`);

  try {
    // Try to switch to Hyperion testnet
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: HYPERION_TESTNET.chainId }],
    });
    console.log(`Successfully switched to Hyperion on ${walletType}`);
  } catch (switchError: any) {
    console.log(`Network switch failed, attempting to add network: ${switchError.message}`);
    // If network doesn't exist, add it
    if (switchError.code === 4902) {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [HYPERION_TESTNET],
      });
      console.log(`Successfully added Hyperion network to ${walletType}`);
    } else {
      throw switchError;
    }
  }
};

// Connect to specific wallet with enhanced handling
export const connectToWallet = async (walletType: WalletType) => {
  console.log(`Attempting to connect to ${walletType}...`);
  
  if (walletType === 'metamask') {
    // Use the force connection method for MetaMask
    const { provider, accounts } = await forceMetaMaskConnection();
    
    // Add/switch to Hyperion network using the specific provider
    await addHyperionNetworkDirect(provider);
    
    return { provider, accounts };
  } else if (walletType === 'phantom') {
    const provider = getPhantomProvider();
    if (!provider) {
      throw new Error('Phantom is not installed');
    }
    
    // Request account access
    const accounts = await provider.request({ 
      method: 'eth_requestAccounts' 
    });
    
    // Add/switch to Hyperion network
    await addHyperionNetworkDirect(provider);
    
    return { provider, accounts };
  } else {
    throw new Error(`Unsupported wallet type: ${walletType}`);
  }
};

// Helper function to add network directly to a specific provider
const addHyperionNetworkDirect = async (provider: any) => {
  try {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: HYPERION_TESTNET.chainId }],
    });
  } catch (switchError: any) {
    if (switchError.code === 4902) {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [HYPERION_TESTNET],
      });
    } else {
      throw switchError;
    }
  }
};
