import clsx from "clsx";
import React from "react";
import Image, { ImageProps } from "./Image";

interface AvatarProps extends ImageProps {
  avatarSrc: string | null;
}


const Avatar: React.FC<AvatarProps> = ({ src,avatarSrc, className, ...props }) => {
  return (
    <Image
      src={src}
      className={clsx("rounded-full", className)}
      {...props}
    />
  );
};

export default Avatar;
