import React from "react";
import classNames from "classnames";
import BaseButton, { BaseButtonProps } from "./BaseButton";

interface ButtonProps extends BaseButtonProps {}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  const { children, className, ...rest } = props;
  return (
    <BaseButton
      className={classNames(`h-12 w-12`, className)}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};

export default React.memo(Button);
