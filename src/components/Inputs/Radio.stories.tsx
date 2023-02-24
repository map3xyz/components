import { ComponentMeta } from '@storybook/react';

import Radio from './Radio';

export default {
  component: Radio,
  title: 'Inputs/Radio',
} as ComponentMeta<typeof Radio>;

export const All = () => (
  <div className="map3 flex max-w-sm flex-col gap-2">
    <Radio label="Radio" value="radio" />
  </div>
);
