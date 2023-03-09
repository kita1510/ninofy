/** @format */

import { motion } from "framer-motion";
import React from "react";

const Motion = () => {
  return (
    <motion.div className="w-20 h-20 bg-white"
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%",
      }}
    />
  );
};

export default Motion;
