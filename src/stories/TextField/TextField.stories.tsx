import { ComponentMeta, Story } from "@storybook/react";
import { useForm, useWatch } from "react-hook-form";
import TextField, {
  TextFieldProps,
} from "../../components/TextField/TextField";

export default {
  title: "Text Field",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Basic = Template.bind({});
Basic.args = { label: "Name", placeholder: "Enter name" };

export const InForm = () => {
  const {
    register,
    control,
    getValues,

    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { name: "test" },
  });

  useWatch({ control, name: "name" });

  return (
    <div className="w-56">
      <TextField
        id="name"
        register={register("name", {
          required: "This field is required",
          maxLength: { value: 20, message: "Name cannot exceed 20 characters" },
        })}
        placeholder="Enter name"
        error={errors.name?.message}
        label="Name"
        isDisabled={false}
        isRequired={true}
      ></TextField>
      <pre>
        <code>{JSON.stringify(getValues(), null, 2)}</code>
      </pre>
    </div>
  );
};
