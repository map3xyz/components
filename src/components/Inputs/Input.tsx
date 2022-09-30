import React, { InputHTMLAttributes } from "react";

const Input: React.FC<Props> = (props) => {
  const { label, required } = props;

  return (
    <div className="flex flex-col">
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
        className={`h-9 rounded-md border dark:text-white dark:border-neutral-700 dark:bg-neutral-900 bg-neutral-100 border-neutral-200 px-2 py-1 text-sm !outline-none !ring-0 transition-all focus:border-neutral-300 dark:focus:border-neutral-200 ${props.className}`}
        id={props.name}
      />
    </div>
  );
};

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default Input;
