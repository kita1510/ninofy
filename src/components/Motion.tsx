/** @format */

import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Motion = () => {
  return (
    <Link to="/">
      <div className="w-30 h-30 p-6 top-80 absolute bg-white">
        <div className="absolute z-20 ">aaaaa</div>
      </div>
    </Link>
  );
};

export default Motion;
