import React from 'react';

import { CoinLogo } from '../CoinLogo';

const CoinAndNetworkLogo: React.FC<Props> = ({ coin, network }) => {
  return (
    <div className={`relative`}>
      <CoinLogo {...coin} />
      <div className="absolute -bottom-0.5 -right-0.5">
        <CoinLogo {...network} />
      </div>
    </div>
  );
};

type Props = {
  coin: {
    className?: string;
    height: string;
    name: string;
    padding?: boolean;
    png?: string;
    svg?: string;
    width: string;
  };
  network: {
    className?: string;
    height: string;
    name: string;
    padding?: boolean;
    png?: string;
    svg?: string;
    width: string;
  };
};

export default CoinAndNetworkLogo;
