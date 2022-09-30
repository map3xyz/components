import React, { useEffect, useState } from 'react'

import Button from '../Button'

const ReadOnlyText: React.FC<Props> = ({ copyButton, preview, value }) => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    }
  }, [isCopied])

  return (
    <div className="relative">
      <input
        className={`w-full rounded-md border border-neutral-700 bg-neutral-800 py-2 pl-2 text-xs outline-none ring-0 ${
          copyButton ? 'pr-20' : ''
        }`}
        readOnly
        value={value}
      />
      {copyButton && value ? (
        <div className="absolute top-1/2 right-0.5 -translate-y-1/2 ">
          <Button
            icon={isCopied ? null : <i className="fa fa-copy" />}
            onClick={() => {
              navigator.clipboard.writeText(value.toString())
              setIsCopied(true)
            }}
            size="tiny"
            type="secondary"
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
      ) : preview ? (
        <div className="absolute top-1/2 right-2 -translate-y-1/2 ">{preview}</div>
      ) : null}
    </div>
  )
}

type Props = {
  copyButton?: boolean
  preview?: React.ReactNode
  value?: string | number
}

export default ReadOnlyText
