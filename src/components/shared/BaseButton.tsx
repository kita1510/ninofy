import classNames from "classnames";
import React, { forwardRef } from "react";

export interface BaseButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  primary?: boolean;
  outline?: boolean;
  LeftIcon?: React.ComponentType<{ className: string }>;
  RightIcon?: React.ComponentType<{ className: string }>;
  isLoading?: boolean;
  iconClassName?: string;
  onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (props, ref) => {
    const {
      className,
      children,
      primary,
      outline,
      LeftIcon,
      RightIcon,
      iconClassName,
      onClick,
      disabled,
      ...rest
    } = props;
    return (
      <div
        className={classNames(`h-12 w-12 cursor-pointer`, className)}
        onClick={(e) => {
          if (disabled) return null;
          onClick?.(e);
        }}
      >
        {LeftIcon && <LeftIcon className={iconClassName!} />}
        {
          <button ref={ref} type="button" {...rest}>
            {children}
          </button>
        }
        {RightIcon && <RightIcon className={iconClassName!} />}
      </div>
    );
  }
);

BaseButton.displayName = "BaseButton";

export default BaseButton;
