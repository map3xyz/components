import React, { SelectHTMLAttributes } from "react";

const Select: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col dark:text-white">
      {props.label ? (
        <label className="mb-1 text-xs" htmlFor={props.name}>
          {props.label}
        </label>
      ) : null}
      <select
        {...props}
        className="h-9 cursor-pointer rounded-md border dark:border-neutral-700 dark:bg-neutral-900 bg-neutral-100 border-neutral-200 px-2 py-1 text-sm !outline-none !ring-0 focus:border-neutral-300 dark:focus:border-neutral-200"
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

export type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: { text: string; value: string }[];
};

export default Select;
