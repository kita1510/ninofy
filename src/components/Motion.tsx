/** @format */

import { motion } from "framer-motion";
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";
import chimuonbenem from "../../public/chimuonbenem.mp3"

const Motion = () => {
  return <ReactAudioPlayer src={chimuonbenem} autoPlay controls />;
};

export default Motion;
