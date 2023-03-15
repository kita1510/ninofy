/** @format */

import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Motion = () => {
  return (
    <>
      {/* <motion.div
        className="w-20 h-20 bg-white"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      /> */}

      <Link to="/">
        <div className="w-30 h-30 p-6 top-80 absolute bg-white">
          <div className="absolute z-20 ">aaaaa</div>
        </div>
      </Link>
    </>
  );
};

export default Motion;
