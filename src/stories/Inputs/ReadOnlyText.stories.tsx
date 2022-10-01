import { ComponentMeta, Story } from "@storybook/react";
import ReadOnlyText, {
  Props as ReadOnlyTextProps,
} from "../../components/Inputs/ReadOnlyText";

export default {
  title: "ReadOnlyText",
  component: ReadOnlyText,
} as ComponentMeta<typeof ReadOnlyText>;

const Template: Story<ReadOnlyTextProps> = (args) => (
  <div className="max-w-sm">
    <ReadOnlyText {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  value: "0x1e0049783f008a0085193e00003d00cd54003c71",
};
export const WithCopyButton = Template.bind({});
WithCopyButton.args = {
  copyButton: true,
  value: "0x1e0049783f008a0085193e00003d00cd54003c71",
};
export const WithPreview = Template.bind({});
WithPreview.args = {
  value: "#000000",
  preview: (
    <div
      className="h-4 w-4 rounded-full"
      style={{ backgroundColor: "#000000" }}
    />
  ),
};

export const All = () => (
  <div className="flex flex-col gap-2 max-w-sm">
    <ReadOnlyText value="0x1e0049783f008a0085193e00003d00cd54003c71" />
    <ReadOnlyText
      copyButton
      value="0x1e0049783f008a0085193e00003d00cd54003c71"
    />
    <ReadOnlyText
      preview={
        <div
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: "#000000" }}
        />
      }
      value="#000000"
    />
  </div>
);
