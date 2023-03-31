import React, { PropsWithChildren } from 'react';

const Pill: React.FC<PropsWithChildren<Props>> = (props) => {
  let text = '';
  let bg = '';
  let border = '';
  let dotBg = '';
  switch (props.color) {
    case 'green':
      text = 'dark:text-green-500 text-green-700';
      border = 'dark:border-green-800 border-green-300';
      dotBg = 'dark:bg-green-500 bg-green-500';
      bg = 'dark:bg-green-900/50 bg-green-300/50';
      break;
    case 'red':
      text = 'dark:text-red-500 text-red-700';
      border = 'dark:border-red-800 border-red-300';
      dotBg = 'dark:bg-red-500 bg-red-500';
      bg = 'dark:bg-red-900/50 bg-red-300/50';
      break;
    case 'yellow':
      text = 'dark:text-yellow-500 text-yellow-700';
      border = 'dark:border-yellow-800 border-yellow-300';
      dotBg = 'dark:bg-yellow-500 bg-yellow-500';
      bg = 'dark:bg-yellow-900/50 bg-yellow-300/50';
      break;
    case 'blue':
      text = 'dark:text-blue-500 text-blue-700';
      border = 'dark:border-blue-800 border-blue-300';
      dotBg = 'dark:bg-blue-500 bg-blue-500';
      bg = 'dark:bg-blue-900/50 bg-blue-300/50';
      break;
    default:
      text = 'dark:text-gray-500 text-gray-700';
      border = 'dark:border-gray-800 border-gray-300';
      dotBg = 'dark:bg-gray-500 bg-gray-500';
      bg = 'dark:bg-gray-900/50 bg-gray-300/50';
      break;
  }

  return (
    <div
      {...props}
      className={`flex items-center gap-1 rounded-full border px-2 py-1 text-sm font-semibold sm:text-xs ${text} ${border} ${bg} ${props.className}`}
    >
      {props.dot ? (
        <span className={`h-2 w-2 rounded-full ${dotBg}`}></span>
      ) : null}
      {props.icon ? (
        <span className={`${text} !bg-transparent`}>{props.icon}</span>
      ) : null}
      {props.children}
    </div>
  );
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  color: 'green' | 'gray' | 'red' | 'blue' | 'yellow';
  dot?: boolean;
  icon?: React.ReactElement;
}

export default Pill;
