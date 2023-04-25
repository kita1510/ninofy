import React, { ReactElement, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const CircleButton = ({ ...props }: ButtonProps) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={classNames(`p-2 rounded-full flex justify-center items-center cursor-pointer`, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default React.memo(CircleButton);
