import React from "react";
import { Link, LinkProps } from "react-router-dom";

interface TransLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    LinkProps {}
const TransLink: React.FC<TransLinkProps> = ({
  to,
  children,
  className,
  ...props
}) => {
  return (
    <Link to={to} className={className} {...props}>
      {children}
    </Link>
  );
};

export default TransLink;
