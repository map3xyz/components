import React, { TextareaHTMLAttributes } from 'react'

const Textarea: React.FC<Props> = (props) => {
  const { label } = props

  return (
    <div className="flex flex-col">
      {label ? (
        <label className="mb-1 text-xs" htmlFor={props.name}>
          {props.label}
        </label>
      ) : null}
      <textarea
        aria-expanded="false"
        className="rounded-md border border-neutral-700 bg-neutral-900 px-2 py-1 text-sm !outline-none !ring-0 transition-all focus:border-neutral-200"
        id={props.name}
        {...props}
      />
    </div>
  )
}

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
}

export default Textarea
