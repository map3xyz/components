import React, { PropsWithChildren } from 'react';

const CryptoAddress: React.FC<PropsWithChildren<Props>> = ({
  children,
  hint = true,
  hintPosition,
}) => {
  if (!children) return null;

  return (
    <span
      aria-label={hint ? children : ''}
      className={
        hint ? (hintPosition ? 'hint--' + hintPosition : 'hint--top') : ''
      }
    >
      {children.slice(0, 4)}...{children.slice(-4)}
    </span>
  );
};

type Props = {
  children: string;
  hint?: boolean;
  hintPosition?: 'top' | 'bottom' | 'left' | 'right';
};

export default CryptoAddress;
