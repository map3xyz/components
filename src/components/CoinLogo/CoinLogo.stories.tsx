import CoinLogo from './CoinLogo';
export default {
  title: 'Utilities/CoinLogo',
};

export const CoinStory = () => (
  <div className="flex w-full flex-col items-start">
    <CoinLogo
      height="h-10"
      // @ts-ignore
      logo={{
        png: 'https://raw.githubusercontent.com/map3xyz/assets/master/networks/ethereum/logo.png',
        svg: '',
      }}
      width="w-10"
    />
    <CoinLogo
      height="h-10"
      // @ts-ignore
      logo={{
        png: 'https://raw.githubusercontent.com/map3xyz/assets/master/networks/ethereum/logower900wrerwe.png',
      }}
      width="w-10"
    />
  </div>
);
