import clsx from "clsx";
import React from "react";

const TrackSection: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div className={clsx("w-full", className)}>
    <div></div>
  </div>;
};

export default TrackSection;
