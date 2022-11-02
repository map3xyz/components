import React from 'react';

const Toggle: React.FC<Props> = ({
  active,
  activeBg,
  leftIcon,
  onToggle,
  rightIcon,
}) => {
  return (
    <div className="flex items-center">
      {leftIcon ? leftIcon : null}
      <button
        aria-pressed="false"
        className={`
                relative mx-3 inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 
                border-transparent transition-colors duration-200
                 ease-in-out focus:outline-none
                 ${
                   active
                     ? activeBg || '!bg-orange-600'
                     : '!bg-neutral-400 dark:!bg-neutral-700'
                 }
              `}
        onClick={() => onToggle()}
        type="button"
      >
        <span className="sr-only">Toggle Button</span>
        <span
          aria-hidden="true"
          className={`${
            active ? 'translate-x-5 dark:!bg-white' : 'translate-x-0'
          } inline-block h-5 w-5 rounded-full
                  bg-white shadow-lg ring-0 transition duration-200 ease-in-out dark:bg-neutral-400`}
        />
      </button>
      {rightIcon ? rightIcon : null}
    </div>
  );
};

export type Props = {
  active: boolean;
  activeBg?: string;
  leftIcon?: React.ReactNode;
  onToggle: () => void;
  rightIcon?: React.ReactNode;
};

export default Toggle;
