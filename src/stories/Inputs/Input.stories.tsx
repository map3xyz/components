import { ComponentMeta, Story } from '@storybook/react';

import Input, { Props as InputProps } from '../../components/Inputs/Input';

export default {
  component: Input,
  title: 'Input',
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

export const All = () => (
  <div className="flex flex-col items-start gap-2" style={{ width: '500px' }}>
    <div className="flex w-full items-start gap-2">
      <Input label="Label" />
    </div>
  </div>
);
