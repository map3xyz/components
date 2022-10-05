import { Network } from '@map3xyz/assets-helper/dist';

import Coin from './Coin';

export default {
  title: 'Utils/Coin',
};

const ETH: Network = {
  active: true,
  color: '#3c3c3d',
  decimals: 18,
  description: {
    en: 'Open source platform to write and distribute decentralized applications.',
  },
  id: 'da5eb9b1-7e2b-4976-a260-07a3eab89618',
  identifiers: { bip44: 60, chainId: 1 },
  links: {
    explorer: 'https://etherscan.io/',
    github: 'https://github.com/ethereum',
    reddit: 'https://reddit.com/r/ethereum',
    research: 'https://research.binance.com/en/projects/ethereum',
    twitter: 'https://twitter.com/ethereum',
    website: 'https://ethereum.org/',
    whitepaper: 'https://github.com/ethereum/wiki/wiki/White-Paper',
  },
  // @ts-ignore
  logo: {
    png: 'https://raw.githubusercontent.com/map3xyz/assets/master/networks/ethereum/logo.png',
    svg: 'https://raw.githubusercontent.com/map3xyz/assets/master/networks/ethereum/logo.svg',
  },
  name: 'Ethereum',
  networkCode: 'ethereum',
  regex: { address: '^0x[a-fA-F0-9]{40}$' },
  spam: false,
  symbol: 'ETH',
  tags: [],
  type: 'network',
  verifications: [],
};

export const CoinStory = () => (
  <div className="flex w-full flex-col items-start">
    <Coin coin={ETH} />
  </div>
);
