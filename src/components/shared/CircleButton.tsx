import React, { ReactElement, ReactNode } from "react";
import classNames from "classnames";
import BaseButton, { BaseButtonProps } from "./BaseButton";

interface CircleButtonProps extends BaseButtonProps {}

const CircleButton: React.FC<CircleButtonProps> = ({ ...props }) => {
  const { children, className, ...rest } = props;
  return (
    <BaseButton
      className={classNames(
        `p-2 rounded-full flex justify-center items-center`,
        className
      )}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};

export default React.memo(CircleButton);
