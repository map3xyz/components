import { Button as SupabaseUIButton } from '@supabase/ui';
import { ButtonProps } from '@supabase/ui/dist/cjs/components/Button/Button';
import React from 'react';

const Button: React.FC<Props> = ({
  additionalTypes,
  children,
  className,
  loading,
  success,
  ...rest
}) => {
  if (loading) {
    rest.icon = <i className="fa fa-spinner animate-spin" />;
  }
  if (success) {
    rest.icon = <i className="fa fa-check" />;
  }
  return (
    <SupabaseUIButton
      {...rest}
      className={`${
        additionalTypes === 'warning'
          ? '!bg-red-600 !text-white hover:!bg-red-700'
          : !rest.type
          ? '!bg-orange-600 !text-white hover:!bg-orange-700'
          : ''
      } ${className} transition-all duration-200`}
    >
      {children}
    </SupabaseUIButton>
  );
};

export type Props = ButtonProps & {
  additionalTypes?: 'warning';
  form?: string;
  loading?: boolean;
  success?: boolean;
};

export default Button;
