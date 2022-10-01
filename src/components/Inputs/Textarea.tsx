import React, { TextareaHTMLAttributes } from "react";

const Textarea: React.FC<Props> = (props) => {
  const { label } = props;

  return (
    <div className="flex flex-col dark:text-white">
      {label ? (
        <label className="mb-1 text-xs" htmlFor={props.name}>
          {props.label}
        </label>
      ) : null}
      <textarea
        className="rounded-md border dark:border-neutral-700 dark:bg-neutral-900 bg-neutral-100 border-neutral-200 px-2 py-1 text-sm !outline-none !ring-0 transition-all focus:border-neutral-300 dark:focus:border-neutral-200"
        id={props.name}
        {...props}
      />
    </div>
  );
};

export type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export default Textarea;
