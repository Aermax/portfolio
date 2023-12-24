"use client"
import React, { useState } from "react"
import AnimatedText from "./animText"
import { motion } from "framer-motion"
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop
} from "../utils/motion"

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="text-black absolute left-0 z-10 md:text-8xl text-4xl w-full transform -translate-y-32 flex flex-col items-start p-4"
    >
      <motion.p variants={slideInFromLeft(0.5)}>Ideas into</motion.p>{" "}
      <motion.div
        variants={slideInFromLeft(1)}
        className="font-semibold text-orange-500"
      >
        <AnimatedText
          title="Reality"
          className="uppercase font-semibold text-orange-500 text-6xl md:text-8xl"
        />
      </motion.div>
    </motion.div>
  )
}

export default Hero
