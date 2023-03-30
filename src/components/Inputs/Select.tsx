import React, { SelectHTMLAttributes } from 'react';

const Select: React.FC<SelectProps> = (props) => {
  return (
    <div className="flex flex-col dark:text-white">
      {props.label ? (
        <label className="mb-1 sm:text-sm sm:text-xs" htmlFor={props.name}>
          {props.label}
        </label>
      ) : null}
      <select
        {...props}
        className="h-9 cursor-pointer rounded-md border border-neutral-200 bg-neutral-100 px-2 py-1 !outline-none !ring-0 focus:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:border-neutral-500 sm:text-sm"
        id={props.name}
      >
        {props.options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: { text: string; value: string }[];
};

export default Select;
