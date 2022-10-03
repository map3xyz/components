import { Badge } from './';

export default {
  component: Badge,
  title: 'Displays/Badge',
};

export const Default = (args: any) => <Badge {...args}>Hello world</Badge>;

export const withColor = (args: any) => <Badge {...args}>Hello world</Badge>;

export const withDot = (args: any) => <Badge {...args}>Hello world</Badge>;

export const large = (args: any) => <Badge {...args}>Hello world</Badge>;

export const withDotLarge = (args: any) => <Badge {...args}>Hello world</Badge>;

Default.args = {};

withColor.args = {
  color: 'red',
};

withDot.args = {
  dot: true,
};

large.args = {
  size: 'large',
};

withDotLarge.args = {
  dot: true,
  size: 'large',
};
