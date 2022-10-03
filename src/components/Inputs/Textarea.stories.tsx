import { ComponentMeta, Story } from '@storybook/react';

import Textarea, { TextareaProps } from '../../components/Inputs/Textarea';

export default {
  component: Textarea,
  title: 'Inputs/Textarea',
} as ComponentMeta<typeof Textarea>;

const Template: Story<TextareaProps> = (args) => (
  <div className="max-w-sm">
    <Textarea {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Textarea Label',
};
