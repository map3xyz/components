import React, { InputHTMLAttributes } from 'react';

const Input: React.FC<InputProps> = (props) => {
  const { icon, label, required } = props;

  const { rounded, ...rest } = props;

  return (
    <div className="relative flex flex-col dark:text-white">
      {icon ? (
        <div
          className={`absolute inset-y-0 left-0 flex h-9 items-center pl-2 ${
            label ? 'top-5' : 'top-0'
          }`}
        >
          <span className="text-neutral-400 dark:text-neutral-600">{icon}</span>
        </div>
      ) : null}
      {label ? (
        <label
          className="mb-1 flex h-4 items-center gap-0.5 text-sm sm:text-xs"
          htmlFor={props.name}
        >
          {props.label}{' '}
          {required ? <span className="sm:text-sm">*</span> : null}
        </label>
      ) : null}
      <input
        {...rest}
        className={`${
          icon ? 'pl-8' : ''
        } h-9 border border-neutral-200 bg-neutral-100 px-2 py-1 !outline-none !ring-0 transition-all focus:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:border-neutral-500 sm:text-sm ${
          props.className
        } ${props.rounded ? 'rounded-full' : 'rounded-md'}`}
        id={props.name}
      />
    </div>
  );
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  label?: string;
  rounded?: boolean;
};

export default Input;
