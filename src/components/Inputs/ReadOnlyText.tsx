import React, { useEffect, useState } from 'react';

import { Button } from '../Button';

const ReadOnlyText: React.FC<ReadOnlyTextProps> = ({
  copyButton,
  onCopyButtonClicked,
  preview,
  value,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);

  return (
    <div className="relative">
      <input
        className={`w-full rounded-md border border-neutral-200 bg-neutral-100 py-2 pl-2 text-sm outline-none ring-0 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white sm:text-xs ${
          copyButton ? 'pr-20' : ''
        }`}
        readOnly
        value={value}
      />
      {copyButton && value ? (
        <div className="absolute right-0.5 top-1/2 -translate-y-1/2 ">
          <Button
            icon={isCopied ? null : <i className="fa fa-copy" />}
            onClick={() => {
              navigator.clipboard.writeText(value.toString());
              setIsCopied(true);
              onCopyButtonClicked?.();
            }}
            size="tiny"
            type="default"
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
      ) : preview ? (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 ">
          {preview}
        </div>
      ) : null}
    </div>
  );
};

export type ReadOnlyTextProps = {
  copyButton?: boolean;
  onCopyButtonClicked?: () => void;
  preview?: React.ReactNode;
  value?: string | number;
};

export default ReadOnlyText;
