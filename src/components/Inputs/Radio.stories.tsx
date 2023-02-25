import { ComponentMeta } from '@storybook/react';

import Radio from './Radio';

export default {
  component: Radio,
  title: 'Inputs/Radio',
} as ComponentMeta<typeof Radio>;

export const All = () => (
  <div className="map3 flex max-w-sm flex-col gap-2">
    <Radio label="Radio 1" name="radio-1" value="radio1" />
    <Radio label="Radio 2" name="radio-1" value="radio2" />
    <Radio label="Radio 3" name="radio-1" value="radio3" />
  </div>
);
