import clsx from "clsx";
import React, { ChangeEvent } from "react";

export interface RangeInputProps
  extends React.HTMLAttributes<Omit<HTMLInputElement, "onChange">> {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({
  value,
  onChange,
  className,
  min,
  max,
  step,
  ...props
}) => {
  return (
    <input
      className={clsx(className, "cursor-pointer input-range")}
      type="range"
      min={`${min}`}
      step={`${step}`}
      max={`${max}`}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default RangeInput;
