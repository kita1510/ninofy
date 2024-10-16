import clsx from "clsx";
import React, { useState } from "react";
import { motion, MotionProps } from "framer-motion";
import { useImage, ImgProps, Img } from "react-image";

// https://prototypr.io/post/using-framer-motion-to-create-smooth-lazy-load-image-effects

export interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ className, src, alt, ...props }) => {
  const { src: srcImg } = useImage({ srcList: src });
  const [imgLoading, setImgLoading] = useState(true);

  const imageLoaded = () => {
    setImgLoading(false);
  };

  return (
    <div {...props} className={"w-full h-full"}>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: imgLoading ? 0 : 1 }}
        src={srcImg}
        onLoad={imageLoaded}
        className={clsx("object-cover", className)}
        alt={alt}
      />
    </div>
  );
};

export default Image;
