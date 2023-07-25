import clsx from "clsx";
import React, { ChangeEvent } from "react";

export interface RangeInputProps
  extends React.HTMLAttributes<Omit<HTMLInputElement, "onChange">> {
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <input
      className={clsx(className, "cursor-pointer")}
      type="range"
      min={"0"}
      step={`1`}
      max={"100"}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default RangeInput;
