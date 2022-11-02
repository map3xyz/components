import React, { PropsWithChildren } from 'react';

const Pill: React.FC<PropsWithChildren<Props>> = (props) => {
  let text = '';
  let bg = '';
  let border = '';
  let dotBg = '';
  switch (props.color) {
    case 'green':
      text = 'text-green-500';
      border = 'border-green-800';
      dotBg = 'bg-green-500';
      bg = 'bg-green-900/50';
      break;
    case 'red':
      text = 'text-red-500';
      border = 'border-red-800';
      dotBg = 'bg-red-500';
      bg = 'bg-red-900/50';
      break;
    case 'yellow':
      text = 'text-yellow-500';
      border = 'border-yellow-800';
      dotBg = 'bg-yellow-500';
      bg = 'bg-yellow-900/50';
      break;
    case 'blue':
      text = 'text-blue-500';
      border = 'border-blue-800';
      dotBg = 'bg-blue-500';
      bg = 'bg-blue-900/50';
      break;
    default:
      text = 'text-gray-400';
      border = 'border-gray-600';
      dotBg = 'bg-gray-400';
      bg = 'bg-gray-600/50';
      break;
  }

  return (
    <div
      {...props}
      className={`flex items-center gap-1 rounded-full border py-1 px-2 text-xs font-semibold ${text} ${border} ${bg} ${props.className}`}
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
