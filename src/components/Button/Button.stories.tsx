import { ComponentMeta, Story } from '@storybook/react';

import Button, { Props as Map3ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Inputs/Button',
} as ComponentMeta<typeof Button>;

const Template: Story<Map3ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {};
export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};
export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
export const Dashed = Template.bind({});
Dashed.args = {
  type: 'dashed',
};
export const Text = Template.bind({});
Text.args = {
  type: 'text',
};
export const Link = Template.bind({});
Link.args = {
  type: 'link',
};
export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
export const Success = Template.bind({});
Success.args = {
  success: true,
};
export const Warning = Template.bind({});
Warning.args = {
  additionalTypes: 'warning',
};

export const All = () => (
  <div className="flex flex-col items-start gap-2" style={{ width: '500px' }}>
    <div className="flex w-full items-start gap-2">
      <Button>Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="default">Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
      <Button loading>Loading</Button>
      <Button success>Success</Button>
      <Button additionalTypes="warning">Warning</Button>
    </div>
  </div>
);
