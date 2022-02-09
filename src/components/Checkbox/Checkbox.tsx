import cx from "classnames";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

export type CheckboxProps<T extends FieldValues> = {
  type?: CheckboxType;
  control: Control<T>;
  name: Path<T>;
  label?: string;
  isDisabled?: boolean;
};

export enum CheckboxType {
  CROSS = "cross",
  CHECK = "check",
}

const getCheckboxType = (type: CheckboxType) => {
  switch (type) {
    case CheckboxType.CROSS:
      return (
        <>
          <div
            className="absolute rounded-md bg-white"
            style={{
              width: "100%",
              height: "25%",
              top: "40%",
              transform: "rotate(45deg)",
            }}
          ></div>
          <div
            className="absolute rounded-md bg-white"
            style={{
              width: "100%",
              height: "25%",
              top: "40%",
              transform: "rotate(135deg)",
            }}
          ></div>
        </>
      );
    case CheckboxType.CHECK:
      return (
        <>
          <div
            className="absolute bg-white rounded-md"
            style={{
              width: "50%",
              height: "25%",
              transform: "rotate(35deg)",
              left: "6%",
              bottom: "15%",
            }}
          ></div>
          <div
            className="absolute bg-white rounded-md"
            style={{
              width: "90%",
              height: "25%",
              transform: "rotate(125deg)",
              left: "18%",
              bottom: "35%",
            }}
          ></div>
        </>
      );
  }
};

const Checkbox = <T extends FieldValues>({
  name,
  label = "",
  control,
  isDisabled = false,
  type = CheckboxType.CHECK,
}: CheckboxProps<T>) => {
  return (
    <Controller
      control={control}
      render={({ field }) => {
        return (
          <label
            className={cx("flex items-center", { "opacity-50": isDisabled })}
          >
            <span className="mr-2.5 text-sm">{label}</span>
            <div
              className="relative ring-indigo-700 ring"
              style={{ width: "0.8em", height: "0.8em" }}
            >
              <div
                className={cx("w-full h-full transition-all", {
                  "hover:bg-indigo-200": !field.value && !isDisabled,
                  "hover:bg-indigo-900": field.value && !isDisabled,
                  "bg-indigo-700": field.value,
                  "focus-within:ring-4 focus-within:ring-indigo-400":
                    !isDisabled,
                })}
              >
                {field.value && getCheckboxType(type)}
                <input
                  ref={field.ref}
                  name={field.name}
                  checked={field.value}
                  onChange={(...args) => {
                    if (isDisabled) return;
                    field.onChange(...args);
                  }}
                  className="opacity-0"
                  type="checkbox"
                />
              </div>
            </div>
          </label>
        );
      }}
      name={name}
    />
  );
};

export default Checkbox;
