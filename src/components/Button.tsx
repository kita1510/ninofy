import React, { ReactElement, ReactNode } from 'react'

interface ButtonProps{
  children: ReactNode;
  classNames: string;
  onClick : () => void;
}

const Button = ({children, classNames,onClick, ...props}: Partial<ButtonProps>) => {
  return (
    <div className={`h-12 w-12 ${classNames}`} onClick = {onClick}>{children}</div>
  )
}

export default Button