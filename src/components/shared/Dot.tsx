import React, { forwardRef } from "react";

const Dot = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    return (
      <div className="w-[6px] h-[6px] bg-white rounded-full" {...rest}></div>
    );
  }
);

export default Dot;
