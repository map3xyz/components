import { Network } from '@map3xyz/assets-helper/dist';

export const MATIC: Network = {
  active: true,
  color: '#8247e5',
  decimals: 18,
  description: {
    en: 'Polygon (Matic) strives to solve the scalability and usability issues, while not compromising on decentralization and leveraging the existing developer community and ecosystem',
  },
  id: 'd6bffe69-071d-4fa8-9038-d90fac19bf77',
  identifiers: {
    bip44: 966,
    chainId: 137,
  },
  links: {
    explorer: 'https://polygonscan.com/',
    github: 'https://github.com/maticnetwork/',
    reddit: 'https://reddit.com/r/maticnetwork/',
    research: 'https://docs.matic.network/',
    twitter: 'https://twitter.com/0xPolygon',
    website: 'https://polygon.technology/',
    whitepaper: 'https://github.com/maticnetwork/whitepaper',
  },
  // @ts-ignore
  logo: {
    png: 'https://raw.githubusercontent.com/map3xyz/assets/master/networks/polygon/logo.png',
    svg: 'https://raw.githubusercontent.com/map3xyz/assets/master/networks/polygon/logo.svg',
  },
  name: 'Polygon',
  networkCode: 'polygon',
  regex: {
    address: '^(0x)[0-9A-Fa-f]{40}$',
  },
  spam: false,
  symbol: 'MATIC',
  tags: [],
  type: 'network',
  verifications: [],
};
