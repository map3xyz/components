import { Control, Controller, FieldValues, Path } from "react-hook-form";
import cx from "classnames";

export type RadioButtonProps = {
  label: string;
  name: string;
  isSelected: boolean;
  onChange: () => void;
  value: string;
  isDisabled?: boolean;
};

const RadioButton = ({
  label,
  name,
  isSelected,
  onChange,
  value,
  isDisabled = false,
}: RadioButtonProps) => {
  return (
    <label className={cx("flex items-center", { "opacity-50": isDisabled })}>
      <span className="mr-2.5 text-sm">{label}</span>
      <div
        style={{ width: "0.8em", height: "0.8em" }}
        className="ring ring-indigo-700 rounded-full relative"
      >
        <div
          className={cx("w-full h-full transition-colors rounded-full", {
            "hover:bg-indigo-200": !isSelected && !isDisabled,
            "focus-within:ring-4 focus-within:ring-indigo-400": !isDisabled,
          })}
        >
          {isSelected && (
            <div
              style={{ width: "70%", height: "70%", top: "15%", left: "15%" }}
              className="bg-indigo-700 rounded-full absolute"
            ></div>
          )}
          <input
            disabled={isDisabled}
            type="radio"
            name={name}
            value={value}
            className="opacity-0"
            onChange={onChange}
          />
        </div>
      </div>
    </label>
  );
};

export type RadioButtonGroupOption = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

export type RadioButtonGroupProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  options: RadioButtonGroupOption[];
  isDisabled: boolean;
};

const RadioButtonGroup = <T extends FieldValues>({
  name,
  options,
  control,
  isDisabled,
}: RadioButtonGroupProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <div className={cx("flex gap-4", { "opacity-50": isDisabled })}>
            {options.map((opt) => (
              <RadioButton
                value={opt.value}
                isSelected={field.value === opt.value}
                name={name}
                label={opt.label}
                key={opt.label}
                onChange={field.onChange}
                isDisabled={opt.isDisabled || isDisabled}
              ></RadioButton>
            ))}
          </div>
        );
      }}
    ></Controller>
  );
};

export default RadioButtonGroup;
