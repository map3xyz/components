import { ComponentMeta, Story } from "@storybook/react";
import { FieldValues, useForm, useWatch } from "react-hook-form";

import RadioButtonGroup, {
  RadioButtonGroupProps,
} from "../../components/RadioButtonGroup/RadioButtonGroup";

export default {
  title: "Radio Button Group",
  component: RadioButtonGroup,
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: Story<RadioButtonGroupProps<FieldValues>> = (args) => {
  const { control } = useForm();
  return <RadioButtonGroup {...args} control={control} />;
};

export const Basic = Template.bind({});
Basic.args = {
  name: "test",
  options: [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
  ],
};

export const DisabledOption = Template.bind({});
DisabledOption.args = {
  name: "test",
  options: [
    { label: "Option 1", value: "opt1", isDisabled: true },
    { label: "Option 2", value: "opt2" },
  ],
};

export const DisabledGroup = Template.bind({});
DisabledGroup.args = {
  name: "test",
  isDisabled: true,
  options: [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
  ],
};

export const InForm = () => {
  const { control, getValues } = useForm({
    mode: "onChange",
    defaultValues: { test: "1" },
  });

  useWatch({ control, name: "test" });

  return (
    <div>
      <div className="flex gap-4">
        <RadioButtonGroup
          control={control}
          name={"test"}
          options={[
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3", isDisabled: true },
          ]}
          isDisabled={false}
        ></RadioButtonGroup>
      </div>
      <pre>
        <code>{JSON.stringify(getValues(), null, 2)}</code>
      </pre>
    </div>
  );
};
