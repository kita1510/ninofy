import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...props }: ButtonProps) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={classNames(`h-12 w-12 cursor-pointer`, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
