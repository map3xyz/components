import { Network } from '@map3xyz/assets-helper/dist';

export const OETH: Network = {
  active: true,
  color: null,
  decimals: 18,
  description: {
    en: 'Optimism is a Layer 2 scaling solution for Ethereum.',
  },
  id: '37cc57ad-f417-4589-95ac-f4ea2e19a14c',
  identifiers: {
    chainId: 10,
  },
  links: {
    explorer: 'https://optimistic.etherscan.io',
    research: 'https://github.com/ethereum-optimism/optimism',
    website: 'https://optimism.io/',
  },
  // @ts-ignore
  logo: {
    png: 'https://raw.githubusercontent.com/map3xyz/assets/master/networks/optimism/logo.png',
  },
  name: 'Optimistic Ethereum',
  networkCode: 'optimism',
  regex: {
    address: '^0x[a-fA-F0-9]{40}$',
  },
  spam: false,
  symbol: 'OETH',
  tags: [],
  type: 'network',
  verifications: [],
  version: '0.0.1',
};
