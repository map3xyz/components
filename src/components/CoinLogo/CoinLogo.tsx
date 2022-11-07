import { Asset } from '@map3xyz/assets-helper/dist';
import React from 'react';

const CoinLogo: React.FC<Props> = ({ className, height, logo, width }) => {
  return !logo?.png && !logo?.svg ? null : (
    <div
      className={`flex items-center justify-center rounded-full bg-neutral-200 dark:bg-white ${className} ${height} ${width}`} // <--- this line
    >
      <img
        className={`block rounded-full ${height} ${width}`}
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
