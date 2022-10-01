import { ComponentMeta, Story } from '@storybook/react';

import Select, { SelectProps } from '../../components/Inputs/Select';

export default {
  component: Select,
  title: 'Select',
} as ComponentMeta<typeof Select>;

const Template: Story<SelectProps> = (args) => (
  <div className="max-w-sm">
    <Select {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 'asset',
  label: 'Type',
  name: 'type',
  options: [
    { text: 'Asset', value: 'asset' },
    { text: 'Network', value: 'network' },
  ],
};
