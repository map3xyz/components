import { ComponentMeta, Story } from '@storybook/react';

import ReadOnlyText, {
  ReadOnlyTextProps,
} from '../../components/Inputs/ReadOnlyText';

export default {
  component: ReadOnlyText,
  title: 'Inputs/ReadOnlyText',
} as ComponentMeta<typeof ReadOnlyText>;

const Template: Story<ReadOnlyTextProps> = (args) => (
  <div className="max-w-sm">
    <ReadOnlyText {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  value: '0x1e0049783f008a0085193e00003d00cd54003c71',
};
export const WithCopyButton = Template.bind({});
WithCopyButton.args = {
  copyButton: true,
  value: '0x1e0049783f008a0085193e00003d00cd54003c71',
};
export const WithPreview = Template.bind({});
WithPreview.args = {
  preview: (
    <div
      className="h-4 w-4 rounded-full"
      style={{ backgroundColor: '#000000' }}
    />
  ),
  value: '#000000',
};

export const All = () => (
  <div className="flex max-w-sm flex-col gap-2">
    <ReadOnlyText value="0x1e0049783f008a0085193e00003d00cd54003c71" />
    <ReadOnlyText
      copyButton
      value="0x1e0049783f008a0085193e00003d00cd54003c71"
    />
    <ReadOnlyText
      preview={
        <div
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: '#000000' }}
        />
      }
      value="#000000"
    />
  </div>
);
