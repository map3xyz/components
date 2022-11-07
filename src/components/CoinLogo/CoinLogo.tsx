import { Asset } from '@map3xyz/assets-helper/dist';
import React, { useState } from 'react';
import Blockies from 'react-blockies';

const CoinLogo: React.FC<Props> = ({ className, height, logo, width }) => {
  const [error, setError] = useState(false);

  if (error) {
    console.log(Number(height.split('h-')[1]) * 4 + 'px');
    return (
      <Blockies
        className={`block rounded-full ${height} ${width}`}
        seed={logo?.png || logo?.svg}
        size={Number(height.split('h-')[1])}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-neutral-200 dark:bg-white ${className} ${height} ${width}`}
    >
      <img
        className={`block rounded-full ${height} ${width}`}
        onError={() => {
          setError(true);
        }}
        src={logo?.svg || logo?.png}
      />
    </div>
  );
};

type Props = {
  className?: string;
  height: string;
  logo?: Asset['logo'];
  width: string;
};

export default CoinLogo;
