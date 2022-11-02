import Coin from './Coin';
import { ARETH } from './coins/ARETH';
import { ETH } from './coins/ETH';
import { MATIC } from './coins/MATIC';
import { OETH } from './coins/OETH';
export default {
  title: 'Utils/Coin',
};

export const CoinStory = () => (
  <div className="flex w-full flex-col items-start">
    <Coin
      coin={{
        ...ETH,
        maps: {
          bridged: [
            {
              fromAsset: null,
              fromNetwork: ETH,
              toAsset: null,
              toNetwork: ARETH,
              type: 'bridged',
            },
            {
              fromAsset: null,
              fromNetwork: ETH,
              toAsset: null,
              toNetwork: OETH,
              type: 'bridged',
            },
            {
              fromAsset: null,
              fromNetwork: ETH,
              toAsset: null,
              toNetwork: MATIC,
              type: 'bridged',
            },
          ],
        },
      }}
    />
  </div>
);