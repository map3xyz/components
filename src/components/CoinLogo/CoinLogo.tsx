import React, { useState } from 'react';
import Blockies from 'react-blockies';

const CoinLogo: React.FC<Props> = ({
  className,
  height,
  name,
  padding,
  png,
  svg,
  width,
}) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <Blockies
        className={`block rounded-full ${height} ${width}`}
        seed={name}
        size={Number(height.split('h-')[1])}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-neutral-200 dark:bg-white ${className} ${height} ${width}`}
    >
      <img
        className={`block rounded-full ${
          padding ? 'p-1' : ''
        } ${height} ${width}`}
        onError={() => {
          setError(true);
        }}
        src={svg || png}
      />
    </div>
  );
};

type Props = {
  className?: string;
  height: string;
  name: string;
  padding?: boolean;
  png?: string;
  svg?: string;
  width: string;
};

export default CoinLogo;
