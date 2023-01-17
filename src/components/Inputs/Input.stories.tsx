import { ComponentMeta, Story } from '@storybook/react';

import Input, { InputProps } from './Input';

export default {
  component: Input,
  title: 'Inputs/Input',
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args) => (
  <div className="max-w-sm">
    <Input {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
};
export const Required = Template.bind({});
Required.args = {
  label: 'Required Field',
  required: true,
};
export const Icon = Template.bind({});
Icon.args = {
  icon: <i className="fa fa-search"></i>,
  label: 'With Icon',
  required: true,
};
export const IconRounded = Template.bind({});
IconRounded.args = {
  icon: <i className="fa fa-search"></i>,
  label: 'With Icon (rounded)',
  required: true,
  rounded: true,
};

export const All = () => (
  <div className="flex flex-col items-start gap-2" style={{ width: '500px' }}>
    <div className="flex w-full items-start gap-2">
      <Input label="Label" />
    </div>
  </div>
);
