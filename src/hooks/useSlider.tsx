import React, { useState } from "react";

const useSlider = (i: number, arr: any[]) => {
  const [index, setIndex] = useState(i);
  const nextSong = () => {
    if(i <= 0) return setIndex(0)
    return setIndex((prev) => prev + 1);
  };
  const previousSong = () => {
    if(i>=0) return setIndex(0)
    return setIndex((prev) => prev - 1);
  };

  const goToSong = (index: number) => {
    if (index <= 0) {
      return arr[arr.length - 1];
    }
    if (index >= arr.length - 1) {
      return arr[0];
    }
    return arr[index];
  };
  return {index, nextSong, previousSong, goToSong };
};

export default useSlider;
