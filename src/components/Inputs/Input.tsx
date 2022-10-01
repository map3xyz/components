import React, { InputHTMLAttributes } from 'react';

const Input: React.FC<Props> = (props) => {
  const { label, required } = props;

  return (
    <div className="flex flex-col dark:text-white">
      {label ? (
        <label
          className="mb-1 flex h-4 items-center gap-0.5 text-xs"
          htmlFor={props.name}
        >
          {props.label} {required ? <span className="text-sm">*</span> : null}
        </label>
      ) : null}
      <input
        {...props}
        className={`h-9 rounded-md border border-neutral-200 bg-neutral-100 px-2 py-1 text-sm !outline-none !ring-0 transition-all focus:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:border-neutral-200 ${props.className}`}
        id={props.name}
      />
    </div>
  );
};

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default Input;
