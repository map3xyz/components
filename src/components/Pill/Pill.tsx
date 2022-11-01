import React, { PropsWithChildren } from 'react';

const Pill: React.FC<PropsWithChildren<Props>> = (props) => {
  return (
    <div
      className={`flex items-center gap-1 rounded-full border bg-opacity-50 py-1 px-2 text-xs font-semibold ${
        props.color === 'green'
          ? 'border-green-800 bg-green-900 text-green-500'
          : props.color === 'red'
          ? 'border-red-800 bg-red-900 text-red-500'
          : props.color === 'blue'
          ? 'border-blue-800 bg-blue-900 text-blue-500'
          : props.color === 'gray'
          ? 'border-gray-800 bg-gray-900 text-gray-500'
          : ''
      }`}
    >
      {props.children}
    </div>
  );
};

type Props = {
  color: 'green' | 'gray' | 'red' | 'blue';
};

export default Pill;
