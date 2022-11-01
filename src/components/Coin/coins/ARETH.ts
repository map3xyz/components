import { Network } from '@map3xyz/assets-helper/dist';

export const ARETH: Network = {
  active: true,
  color: null,
  decimals: 18,
  description: {
    en: 'Arbitrum is a Layer 2 cryptocurrency platform that makes smart contracts scalable, fast, and private',
  },
  id: 'b96abbae-90e3-4688-85c4-2013733f712e',
  identifiers: {
    chainId: 42161,
  },
  links: {
    explorer: 'https://arbiscan.io',
    research: 'https://coinmarketcap.com/alexandria/article/what-is-arbitrum',
    website: 'https://offchainlabs.com',
  },
  // @ts-ignore
  logo: {
    png: 'https://raw.githubusercontent.com/map3xyz/assets/master/networks/arbitrum/logo.png',
  },
  name: 'Arbitrum',
  networkCode: 'arbitrum',
  regex: {
    address: '^0x[a-fA-F0-9]{40}$',
  },
  spam: false,
  symbol: 'ARETH',
  tags: [],
  type: 'network',
  verifications: [],
  version: '0.0.1',
};
