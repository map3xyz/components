import React, { TextareaHTMLAttributes } from 'react';

const Textarea: React.FC<TextareaProps> = (props) => {
  const { label } = props;

  return (
    <div className="flex flex-col dark:text-white">
      {label ? (
        <label className="mb-1 text-sm sm:text-xs" htmlFor={props.name}>
          {props.label}
        </label>
      ) : null}
      <textarea
        className="rounded-md border border-neutral-200 bg-neutral-100 px-2 py-1 !outline-none !ring-0 transition-all focus:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:border-neutral-500 sm:text-sm"
        id={props.name}
        {...props}
      />
    </div>
  );
};

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export default Textarea;
