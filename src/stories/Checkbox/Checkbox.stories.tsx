import { ComponentMeta, Story } from "@storybook/react";
import { FieldValues, useForm, useWatch } from "react-hook-form";
import Checkbox, {
  CheckboxProps,
  CheckboxType,
} from "../../components/Checkbox/Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: Story<CheckboxProps<FieldValues>> = (args) => {
  const form = useForm();
  return <Checkbox {...args} name="test" control={form.control} />;
};

export const Basic = Template.bind({});
Basic.args = { label: "Name" };

export const Disabled = Template.bind({});
Disabled.args = { label: "Name", isDisabled: true };

export const InForm = () => {
  const { control, getValues } = useForm({
    mode: "onChange",
    defaultValues: { cheese: true, onions: true, mayo: false },
  });

  useWatch({ control, name: "cheese" });
  useWatch({ control, name: "onions" });
  useWatch({ control, name: "mayo" });

  return (
    <div className="w-56">
      <div className="flex gap-4">
        <Checkbox
          name="cheese"
          label="Cheese"
          control={control}
          type={CheckboxType.CHECK}
        />
        <Checkbox
          name="onions"
          label="Onions"
          control={control}
          type={CheckboxType.CROSS}
        />
        <Checkbox
          name="mayo"
          label="Mayo"
          control={control}
          type={CheckboxType.CROSS}
        />
      </div>
      <pre>
        <code>{JSON.stringify(getValues(), null, 2)}</code>
      </pre>
    </div>
  );
};
