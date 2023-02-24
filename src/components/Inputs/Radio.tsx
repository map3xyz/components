import { Radio as SupabaseRadio } from '@supabase/ui';
import React from 'react';

const Radio: React.FC<RadioProps> = (props) => {
  return <SupabaseRadio {...props} />;
};

export type RadioProps = {
  afterLabel?: string;
  beforeLabel?: string;
  checked?: boolean;
  description?: string;
  disabled?: boolean;
  id?: string;
  label: string;
  name?: string;
  onChange?(x: React.ChangeEvent<HTMLInputElement>): void;
  onFocus?(x: React.FocusEvent<HTMLInputElement>): void;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';
  value: string;
};

export default Radio;
