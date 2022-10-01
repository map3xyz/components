import { ComponentMeta, Story } from "@storybook/react";
import Select, { Props as SelectProps } from "../../components/Inputs/Select";

export default {
  title: "Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: Story<SelectProps> = (args) => (
  <div className="max-w-sm">
    <Select {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: "asset",
  label: "Type",
  name: "type",
  options: [
    { text: "Asset", value: "asset" },
    { text: "Network", value: "network" },
  ],
};
