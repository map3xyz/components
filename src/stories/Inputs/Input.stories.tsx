import { ComponentMeta, Story } from "@storybook/react";
import Input, { Props as InputProps } from "../../components/Inputs/Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args) => (
  <div className="max-w-sm">
    <Input {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
};
export const Required = Template.bind({});
Required.args = {
  label: "Required Field",
  required: true,
};

export const All = () => (
  <div className="flex gap-2 items-start flex-col" style={{ width: "500px" }}>
    <div className="flex gap-2 items-start w-full">
      <Input label="Label" />
    </div>
  </div>
);
