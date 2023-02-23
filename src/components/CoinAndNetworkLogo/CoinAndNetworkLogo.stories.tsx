import CoinAndNetworkLogo from './CoinAndNetworkLogo';
export default {
  title: 'Utilities/CoinAndNetworkLogo',
};

export const CoinAndNetworkLogoStory = () => (
  <div className="flex w-full flex-col items-start">
    <CoinAndNetworkLogo
      coin={{
        height: 'h-10',
        name: 'USDC',
        padding: true,
        svg: 'https://raw.githubusercontent.com/map3xyz/polygon-tokenlist/master/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.svg',
        width: 'w-10',
      }}
      network={{
        height: 'h-5',
        name: 'Ethereum',
        png: 'https://raw.githubusercontent.com/map3xyz/assets/master/networks/ethereum/logo.png',
        width: 'w-5',
      }}
    />
  </div>
);
