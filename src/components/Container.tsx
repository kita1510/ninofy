/** @format */

import React from "react";
import Loading from "../icons/Loading";
import ListSong from "./ListSong";

const Container = () => {
  return (
    <div className="flex gap-6 justify-center flex-col items-center mt-20">
      {/* <ListSong /> */}
      <ListSong />
      {/* <Loading></Loading> */}
    </div>
  );
};

export default Container;
