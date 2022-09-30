import React, { SelectHTMLAttributes } from 'react'

const Select: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col">
      {props.label ? (
        <label className="mb-1 text-xs" htmlFor={props.name}>
          {props.label}
        </label>
      ) : null}
      <select
        {...props}
        className="h-9 cursor-pointer rounded-md border-neutral-700 bg-neutral-900 px-2 py-1 text-sm !outline-none !ring-0 focus:border-neutral-200"
        id={props.name}
      >
        {props.options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          )
        })}
      </select>
    </div>
  )
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  options: { text: string; value: string }[]
}

export default Select
